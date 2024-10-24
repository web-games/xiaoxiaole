// 声明TweenMax的全局属性
interface Window {
    TweenMax: any;
    Power0: any;
    Power1: any;
    Power2: any;
    Power3: any;
    Power4: any;
    Sine: any;
    Linear: any;
    Elastic: any;
    Strong: any;
}

// 声明jQuery
declare const $: any;

// 声明PIXI.sound插件
declare namespace PIXI {
    const sound: any;
}