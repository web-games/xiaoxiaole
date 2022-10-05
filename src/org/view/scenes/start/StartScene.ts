import Scene from "../Scene";
import {stageWidth, stageHeight} from "../../../../main";

var _stage1Container, _stage2Container;
var _pic1, _pic2, _pic4, _pic5, _pic6;
var _btn1, _btn2;
var _txt1;
var _t1;

export default class StartScene extends Scene {

  public static NAME = "start_scene";

  constructor() {
    super()
  }

  public init() {
    _stage1Container = new PIXI.Container();
    _stage1Container.position.x = stageWidth / 2;
    _stage1Container.position.y = stageHeight;
    this.addChild(_stage1Container);
    _stage1Container.name = "container1";

    _t1 = PIXI.Sprite.from("t1.png");
    _t1.anchor.x = 0.5;
    _stage1Container.addChild(_t1);
    _t1.position.y = -stageHeight;
    _t1.alpha = 0;
    window.TweenMax.to(_t1, 1, {alpha: 1, ease: window.window.Strong.easeOut, delay: 0.6});
    _t1.name = "t1.png";

    _txt1 = new PIXI.Text("Text1", {fill: "#FFFFFF"});
    _stage1Container.addChild(_txt1);
    _txt1.anchor.x = 0.5;
    _txt1.anchor.y = 1;
    _txt1.alpha = 0;
    window.TweenMax.to(_txt1, 1, {alpha: 1, ease: window.Strong.easeOut, delay: 1});
    window.TweenMax.to(_txt1.position, 1, {y: -460, ease: window.Elastic.easeOut, delay: 0.8});
    _txt1.name = "txt1";

    _txt1.rotation = -0.05;
    window.TweenMax.to(_txt1, 0.1, {rotation: 0.1, ease: window.Linear.easeNone, repeat: -1, yoyo: true, delay: 2});

    var _mask = new PIXI.Graphics();
    _mask.lineStyle(0);
    _mask.beginFill(0xff0000, 1);
    _mask.drawCircle(0, 0, 50);
    _stage1Container.addChild(_mask);
    _mask.position.y = -460;
    _txt1.mask = _mask;
    _mask.name = "_mask";

    _pic1 = PIXI.Sprite.from("pic1.jpg");
    _pic1.anchor.x = 0.5;
    _pic1.anchor.y = 1;
    _stage1Container.addChild(_pic1);
    _pic1.alpha = 0;
    _pic1.name = "pic1"
    window.TweenMax.to(_pic1, 1, {alpha: 1, ease: window.Strong.easeOut, delay: 1});
    window.TweenMax.to(_pic1.position, 1, {y: Math.floor(-350), ease: window.Elastic.easeOut, delay: 1});

    _pic2 = PIXI.Sprite.from("pic2.jpg");
    _pic2.anchor.x = 0.5;
    _pic2.anchor.y = 1;
    _stage1Container.addChild(_pic2);
    _pic2.alpha = 0;
    _pic2.name = "pic2"
    window.TweenMax.to(_pic2, 1, {alpha: 1, ease: window.Strong.easeOut, delay: 1.2});
    window.TweenMax.to(_pic2.position, 1, {y: Math.floor(-210), ease: window.Elastic.easeOut, delay: 1.2});

    _btn1 = PIXI.Sprite.from("btn1.png");
    _btn1.anchor.x = 0.5;
    _btn1.anchor.y = 1;
    _stage1Container.addChild(_btn1);
    _btn1.alpha = 0;
    _btn1.name = "btn1";
    window.TweenMax.to(_btn1, 1, {alpha: 1, ease: window.Strong.easeOut, delay: 1.4});
    window.TweenMax.to(_btn1.position, 1, {y: -20, ease: window.Elastic.easeOut, delay: 1.4});

    _btn1.interactive = true;
    _btn1.mousedown = _btn1.touchstart = () => {
      this.removeStage1();
      this.initStage2();
    }
  }

  public removeStage1() {
    window.TweenMax.to(_stage1Container, 0.4, {
      alpha: 0,
      onComplete: () => {
        this.removeAllChildren(_stage1Container, true)
        _stage1Container = null;
      }
    });
  }

  public initStage2() {
    // PIXI.sound.play("s2");
    _stage2Container = new PIXI.Container();
    this.addChild(_stage2Container);

    _pic4 = PIXI.Sprite.from("pic4.jpg");
    _pic4.position.x = 0;
    _pic4.position.y = 100;
    _stage2Container.addChild(_pic4);
    _pic4.alpha = 0;
    window.TweenMax.to(_pic4, 0.6, {alpha: 1});

    _pic5 = PIXI.Sprite.from("pic5.png");
    _pic5.anchor.x = 0.5;
    _pic5.anchor.y = 0.5;
    _pic5.position.x = stageWidth / 2;
    _pic5.position.y = stageHeight / 2;
    _stage2Container.addChild(_pic5);
    _pic5.scale.x = _pic5.scale.y = 0;
    window.TweenMax.to(_pic5.scale, 1, {x: 1, y: 1, ease: window.Elastic.easeOut, delay: 0.8});

    _btn2 = PIXI.Sprite.from("btn2.jpg");
    _btn2.anchor.x = 0.5;
    _btn2.anchor.y = 0.5;
    _btn2.position.x = stageWidth / 2;
    _btn2.position.y = _pic5.position.y + 240;
    _stage2Container.addChild(_btn2);
    _btn2.scale.x = _btn2.scale.y = 0;
    window.TweenMax.to(_btn2.scale, 1, {x: 1, y: 1, ease: window.Elastic.easeOut, delay: 0.9});

    _btn2.interactive = true;
    _btn2.mousedown = _btn2.touchstart = () => {
      this.sceneOut()
    }
  }

  public sceneOut() {
    window.TweenMax.to(this, 0.4, {
      alpha: 0,
      onComplete: () => {

      }
    });
  }
}
