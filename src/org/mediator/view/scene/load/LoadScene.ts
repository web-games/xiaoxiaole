import Scene, {SceneEvent} from "../Scene";
import Text = PIXI.Text;

export default class LoadScene extends Scene {
  public static NAME = "loading_scene"

  constructor(game) {
    super(game)
  }

  public init() {
    let _txt1 = new Text("加载中...", {fill: "#FFFFFF"});
    this.addChild(_txt1);
    _txt1.anchor.set(0.5, 0.5);
    _txt1.x = this.stageWidth / 2;
    _txt1.y = this.stageHeight / 2;

    this.emit(SceneEvent.INIT_COMPLETE)
  }
}