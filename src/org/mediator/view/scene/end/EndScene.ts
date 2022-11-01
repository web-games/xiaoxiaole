import Scene from '../Scene';
import Button from '../../common/Button'

export default class EndScene extends Scene {

  public static NAME = 'start_scene';

  public static CLICK_AGAIN: string = 'click_again'

  constructor(game) {
    super(game)
  }

  public init() {
    var btn = new Button('again');
    btn.x = this.stageWidth / 2;
    btn.y = this.stageHeight / 2;
    btn.interactive = true;
    btn.on('click', () => {
      this.emit(EndScene.CLICK_AGAIN)
    });
    this.addChild(btn);
  }

  public sceneOut() {

  }
}
