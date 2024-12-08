import Container = PIXI.Container
import Game from "../../Application";

export const enum SceneEvent {
  INIT_COMPLETE = "init_complete",
  CREATE_COMPLETE = "create_complete",
}

export default class Scene extends Container {
  public game: Game = null;
  public stageWidth: number = 0;
  public stageHeight: number = 0;

  constructor(game: Game) {
    super()
    this.game = game;
    this.stageWidth = game.stageWidth
    this.stageHeight = game.stageHeight
  }

  protected init(data?: any) {
  }

  public destroy() {
  }

  public removeAllChildren(obj: any = this, bo = true, depth = 0) {
    if (!obj)
      return;

    // console.log({obj, name: obj?.name, depth})

    const {children} = obj
    while (children && children.length) {
      let child = children.shift();
      this.removeAllChildren(child, true, depth + 1);
    }

    bo && obj.parent && obj.parent.removeChild(obj);
  }
}