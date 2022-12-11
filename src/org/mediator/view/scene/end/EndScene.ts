import Scene from '../Scene';
import Button from '../../common/Button'
import Sprite = PIXI.Sprite

export default class EndScene extends Scene {

  public static NAME = 'start_scene';

  public static CLICK_AGAIN: string = 'click_again'

  constructor(game) {
    super(game)
  }

  public init() {
    this.addChild(Sprite.from('sp_end_background.jpg'))

    var btn = new Button('再来一次');
    btn.x = this.stageWidth / 2;
    btn.y = this.stageHeight / 2;
    btn.interactive = true;
    btn.on('click', () => {
      this.emit(EndScene.CLICK_AGAIN)
    });
    this.addChild(btn);
  }
}
