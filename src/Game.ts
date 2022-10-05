export default class Game extends PIXI.Application {

  public static NAME = "game"

  constructor(config) {
    super(config)

    document.body.appendChild(this.view)
    this.view.style.width = "100%";
  }
}