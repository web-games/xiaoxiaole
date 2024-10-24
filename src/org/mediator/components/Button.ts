import Container = PIXI.Container
import Text = PIXI.Text
import Graphics = PIXI.Graphics

type Options = {
    fontSize?: number,
    color?: string | number,
    bgColor?: number,
    [key: string]: any,
}

export default class Button extends Container {

    constructor(text = '', options: Options = {fontSize: 32, color: 0xffffff, bgColor: 0x437df3}) {
        super()

        const btn_bg = new Graphics();
        this.addChild(btn_bg);

        let fontSize = options.fontSize || 32;
        let color = options.color || 0xffffff;

        let btn_text = new Text(text, {fill: color, fontSize});
        btn_text.anchor.set(0.5, 0.5);
        this.addChild(btn_text);

        let padding_left_right = 20;
        let padding_top_bottom = 10;
        let bg_width = btn_text.width + (padding_left_right * 2)
        let bg_height = btn_text.height + (padding_top_bottom * 2)
        let bg_color = options.bgColor || 0xff0000;
        btn_bg.beginFill(bg_color);
        btn_bg.drawRoundedRect(-bg_width / 2, -bg_height / 2, bg_width, bg_height, 8);
        btn_bg.endFill();

        this.interactive = true;
        this.on('pointerdown', () => {
            PIXI.sound.play("click")
        });
    }
}