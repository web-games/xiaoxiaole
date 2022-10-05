import Scene, {SceneEvent} from "../Scene";
import Text = PIXI.Text;
import {stageHeight, stageWidth} from "../../../../main";

export default class InitLoading extends Scene {
  public static NAME = "init_loading"

  constructor() {
    super()
  }

  public init(data?: any) {
    let _txt1 = new Text("加载中...", {fill: "#FFFFFF"});
    this.addChild(_txt1);
    _txt1.anchor.set(0.5, 0.5);
    _txt1.x = stageWidth / 2;
    _txt1.y = stageHeight / 2;

    this.emit(SceneEvent.INIT_COMPLETE)
  }
}