import Scene from '../Scene';
import Button from '../../components/Button';
import Sprite = PIXI.Sprite

export default class EndScene extends Scene {

    public static NAME = 'end_scene';

    public static CLICK_AGAIN: string = 'click_again'

    public static CLICK_RESTART: string = 'click_restart'

    constructor(game) {
        super(game)
    }

    public init() {
        this.addChild(Sprite.from('./resources/images/sp_end_background.jpg'))

        const againButton = new Button('再来一次');
        againButton.x = this.stageWidth / 2;
        againButton.y = this.stageHeight / 2;
        againButton.interactive = true;
        againButton.on('pointerdown', () => this.emit(EndScene.CLICK_AGAIN));
        this.addChild(againButton);

        const restartButton = new Button('重新开始');
        restartButton.x = this.stageWidth / 2;
        restartButton.y = this.stageHeight / 2 + 110;
        restartButton.interactive = true;
        restartButton.on('pointerdown', () => this.emit(EndScene.CLICK_RESTART));
        this.addChild(restartButton);
    }
}
