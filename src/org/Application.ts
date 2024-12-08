export default class Game extends PIXI.Application {

  public static NAME = "application"

  public static NUM = 0

  constructor(config) {
    super(config)
    Game.NAME = "application" + Game.NUM++

    this.view.style.width = "100%";
    document.body.prepend(this.view)
  }

  public get stageWidth() {
    return this.screen.width
  }

  public get stageHeight() {
    return this.screen.height
  }
}