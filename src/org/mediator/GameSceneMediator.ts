import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import INotification = puremvc.INotification;
import GameScene from "./view/game/GameScene";

export default class GameSceneMediator extends Mediator implements IMediator {
  public static NAME: string = "game_scene_mediator"

  constructor(viewComponent: any) {
    super(GameSceneMediator.NAME, viewComponent)
  }

  private initComplete() {

  }

  private createdComplete() {

  }

  public listNotificationInterests(): string[] {
    return []
  }

  public handleNotification(notification: INotification): void {
    switch (notification.getName()) {
      default:
        break
    }
  }

  get gameScene(): GameScene {
    return (this.viewComponent as GameScene)
  }
}