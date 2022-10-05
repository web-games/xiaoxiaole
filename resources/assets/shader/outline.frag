precision mediump float;
uniform sampler2D uMainSampler;
varying vec2 outTexCoord;

vec2 thickness = vec2(0.01,0.01);
vec4 outlineColor = vec4(1,1,1,1);
vec4 filterClamp = vec4(0,0,0.9999,0.9999);

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;

void main(void)
{
    vec4 pixel = texture2D(uMainSampler, outTexCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced;
    for (float angle = 0.; angle <= DOUBLE_PI; angle += 0.6283185) {
        displaced.x = outTexCoord.x + thickness.x * cos(angle);
        displaced.y = outTexCoord.y + thickness.y * sin(angle);
        curColor = texture2D(uMainSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, pixel.a);
    gl_FragColor = vec4((pixel.rgb + outlineColor.rgb * (1. - pixel.a)) * resultAlpha, resultAlpha);
}
