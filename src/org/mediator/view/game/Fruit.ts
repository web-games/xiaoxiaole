import Map from "../../../proxy/model/Map";

export default class Fruit extends PIXI.Container {

  public text: any = null;
  public row: any = null;
  public col: any = null;
  public value: any = null;

  constructor(row, col, value) {
    super()
    this.row = row
    this.col = col
    this.value = value
    var sprite = PIXI.Sprite.from(`./resources/images/animal${value}.png`)
    this.addChild(sprite)
    sprite.anchor.set(0.5)

    let text = new PIXI.Text(``, {fontSize: 10, fill: 0xffffff,})
    this.addChild(text)
    text.anchor.set(0.5, 0.5)
    this.text = text

    this.buttonMode = true
    this.interactive = true

    this.update();
  }

  setRowCol(row, col, move = true) {
    this.row = row;
    this.col = col;
    this.update();

    let x = col * Map.GridWidth + Map.GridWidth / 2
    let y = row * Map.GridHeight + Map.GridHeight / 2

    if (move) {
      window.TweenMax.to(this, 0.3, {x, y, ease: "none"})
    } else {
      this.x = x;
      this.y = y;
    }
  }

  update() {
    // this.text.text = `(${this.row},${this.col}) ${this.value}`
  }
}