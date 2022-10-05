import Scene from "../Scene";

export default class StartScene extends Scene {

  public static NAME = "start_scene";

  public static CLICK_START: string = "click_start"

  constructor(game) {
    super(game)
  }

  public init() {
    var _stage2Container;
    var _pic4, _pic5;
    var _btn2;
    var _txt1;

    _stage2Container = new PIXI.Container();
    this.addChild(_stage2Container);

    _txt1 = new PIXI.Text("Text1", {fill: "#FFFFFF"});
    _stage2Container.addChild(_txt1);
    _txt1.x = this.stageWidth / 2;
    _txt1.y = this.stageHeight;
    _txt1.anchor.x = 0.5;
    _txt1.anchor.y = 1;
    _txt1.alpha = 0;
    window.TweenMax.to(_txt1, 1, {alpha: 1, ease: window.Strong.easeOut, delay: 1});
    window.TweenMax.to(_txt1.position, 1, {y: this.stageHeight - 760, ease: window.Elastic.easeOut, delay: 0.8});
    _txt1.name = "txt1";

    _txt1.rotation = -0.05;
    window.TweenMax.to(_txt1, 0.1, {rotation: 0.1, ease: window.Linear.easeNone, repeat: -1, yoyo: true, delay: 1.2});

    _pic4 = PIXI.Sprite.from("pic4.jpg");
    _pic4.position.x = 0;
    _pic4.position.y = 100;
    _stage2Container.addChild(_pic4);
    _pic4.alpha = 0;
    window.TweenMax.to(_pic4, 0.6, {alpha: 1});

    _pic5 = PIXI.Sprite.from("pic5.png");
    _pic5.anchor.x = 0.5;
    _pic5.anchor.y = 0.5;
    _pic5.position.x = this.stageWidth / 2;
    _pic5.position.y = this.stageHeight / 2;
    _stage2Container.addChild(_pic5);
    _pic5.scale.x = _pic5.scale.y = 0;
    window.TweenMax.to(_pic5.scale, 1, {x: 1, y: 1, ease: window.Elastic.easeOut, delay: 0.8});

    _btn2 = PIXI.Sprite.from("btn2.jpg");
    _btn2.anchor.x = 0.5;
    _btn2.anchor.y = 0.5;
    _btn2.position.x = this.stageWidth / 2;
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
        this.emit(StartScene.CLICK_START)
      }
    });
  }
}
