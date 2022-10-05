import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import INotification = puremvc.INotification;
import GameScene from "./view/game/GameScene";
import GameCommand from "../command/GameCommand";
import GameProxy from "../proxy/GameProxy";

export default class GameSceneMediator extends Mediator implements IMediator {
  public static NAME: string = "game_scene_mediator"

  constructor(viewComponent: any) {
    super(GameSceneMediator.NAME, viewComponent)
    this.gameScene.on(GameScene.CLICK_FRUIT, ({row, col, value}) => {
      this.sendNotification(GameCommand.ADD_FRUIT_STACK, {row, col, value})
    })
  }

  public listNotificationInterests(): string[] {
    return [
      GameProxy.SWAP_FRUIT,
      GameProxy.DELETE_FRUIT,
      GameProxy.DROP_FRUIT,
    ]
  }

  public handleNotification(notification: INotification): void {
    console.log("GameSceneMediator notification:", notification)
    let name = notification.getName()
    let body = notification.getBody()

    switch (name) {
      case GameProxy.SWAP_FRUIT:
        this.gameScene.swapFruit(body)
        break;
      case GameProxy.DELETE_FRUIT:
        this.gameScene.deleteFruit(body)
        break;
      case GameProxy.DROP_FRUIT:
        this.gameScene.dropFruit(body)
        break;
    }
  }

  get gameScene(): GameScene {
    return (this.viewComponent as GameScene)
  }
}