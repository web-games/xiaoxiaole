import Text = PIXI.Text
import Scene from "../Scene";

export default class GameScene extends Scene {

  public static NAME = "game_scene";

  constructor(game) {
    super(game)
  }

  public init(data?: any) {
    super.init(data);

    console.log(data);

    let _txt1 = new Text("gamescene...", {fill: 0xff0000});
    this.addChild(_txt1);
    _txt1.anchor.set(0.5, 0.5);
    _txt1.x = this.stageWidth / 2;
    _txt1.y = this.stageHeight / 2;
  }
}