import Scene, {SceneEvent} from '../Scene';
import Text = PIXI.Text;
import Sprite = PIXI.Sprite
import Container = PIXI.Container
import Graphics = PIXI.Graphics

export default class LoadScene extends Scene {
  public static NAME = 'loading_scene'

  private _text = null;

  private _loading = null;

  constructor(game) {
    super(game)
  }

  public init() {
    this.addChild(Sprite.from('./resources/images/original/sp_start_background.jpg'))

    let container = new Container();
    this.addChild(container);
    container.x = (this.stageWidth - 300) / 2;
    container.y = (this.stageHeight - 300);

    let loading_bg = Sprite.from('./resources/images/loading_bg.png')
    container.addChild(loading_bg)

    let loading_mask = new Graphics();
    loading_mask.beginFill(0xff0000, 1);
    loading_mask.drawRoundedRect(0, 0, 300, 53, 30);
    loading_mask.endFill();
    container.addChild(loading_mask)

    let loading = Sprite.from('./resources/images/loading.png')
    container.addChild(loading)
    loading.anchor.set(1, 0)
    // loading.x = 100;
    loading.y = 0;
    loading.mask = loading_mask;
    this._loading = loading;

    let text = new Text('加载中...', {fill: '#FFFFFF'});
    this.addChild(text);
    text.anchor.set(0.5, 0.5);
    text.x = this.stageWidth / 2;
    text.y = this.stageHeight - 300 - 30;
    this._text = text;

    this.emit(SceneEvent.INIT_COMPLETE)
  }

  public setProgress(num) {
    window.TweenMax.to(this._loading, 0.3, {x: num / 100 * 300})

    this._text.text = `${parseInt(num)}%`;
  }
}