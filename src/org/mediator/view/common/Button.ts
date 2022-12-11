import Container = PIXI.Container
import Text = PIXI.Text

export default class Button extends Container {

  constructor(txt = '') {
    super()
    var bg = PIXI.Sprite.from('sp_button_background.png');
    bg.anchor.set(0.5, 0.5);
    this.addChild(bg);

    let text = new Text(txt, {fill: '#FFFFFF'});
    this.addChild(text);
    text.anchor.set(0.5, 0.5);

    this.interactive = true;
    this.on('pointerdown', () => {
      this.emit('click')
    });
  }
}