precision mediump float;
uniform sampler2D uMainSampler;
varying vec2 outTexCoord;

void main(void)
{
    mat4 hueRotation = mat4(0.299, 0.587, 0.114, 0.0, 0.299, 0.587, 0.114, 0.0, 0.299, 0.587, 0.114, 0.0, 0.0, 0.0, 0.0, 1.0) ;
    vec4 pixel = texture2D(uMainSampler, outTexCoord);
    gl_FragColor = pixel * hueRotation;
}