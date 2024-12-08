precision mediump float;

uniform vec2      u_resolution;
uniform vec2      speed;
uniform float     time;
uniform float     alpha;
uniform float     shift;

float rand(vec2 n) {
    //This is just a compounded expression to simulate a random number based on a seed given as n
    return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 n) {
    //Uses the rand function to generate noise
    const vec2 d = vec2(0.0, 1.0);
    vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
    return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
}

float fbm(vec2 n) {
    //fbm stands for "Fractal Brownian Motion" https://en.wikipedia.org/wiki/Fractional_Brownian_motion
    float total = 0.0, amplitude = 1.0;
    for (int i = 0; i < 4; i++) {
        total += noise(n) * amplitude;
        n += n;
        amplitude *= 0.5;
    }
    return total;
}

void main() {
    //This is where our shader comes together
    const vec3 c1 = vec3(126.0/255.0, 0.0/255.0, 97.0/255.0);
    const vec3 c2 = vec3(173.0/255.0, 0.0/255.0, 161.4/255.0);
    const vec3 c3 = vec3(0.2, 0.0, 0.0);
    // 烟雾颜色
    const vec3 c4 = vec3(117.0/255.0, 211.0/255.0, 250.0/255.0);
    const vec3 c5 = vec3(0.1);
    const vec3 c6 = vec3(0.9);

    //This is how "packed" the smoke is in our area. Try changing 8.0 to 1.0, or something else
    //我们这一带的烟就是这么“包装”的。尝试将8.0更改为1.0或其他版本
    vec2 p = gl_FragCoord.xy * 8.0 / u_resolution.x;
    //The fbm function takes p as its seed (so each pixel looks different) and time (so it shifts over time)
    // fbm函数以p作为种子(因此每个像素看起来不同)和时间(因此它随时间变化)
    float q = fbm(p - time * 0.1);
    vec2 r = vec2(fbm(p + q + time * speed.x - p.x - p.y), fbm(p + q - time * speed.y));
    vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);
    float grad = gl_FragCoord.y / u_resolution.y;
    gl_FragColor = vec4(c * cos(shift * gl_FragCoord.y / u_resolution.y), 1.0);
    gl_FragColor.xyz *= 1.0-grad;
}