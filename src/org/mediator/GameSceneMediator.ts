import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import INotification = puremvc.INotification;
import GameScene from './scenes/game/GameScene';
import GameCommand from '../command/GameCommand';
import GameProxy from '../proxy/GameProxy';
import {SceneEvent} from './scenes/Scene';

export default class GameSceneMediator extends Mediator implements IMediator {
  public static NAME: string = 'game_scene_mediator'

  constructor(viewComponent: any) {
    super(GameSceneMediator.NAME, viewComponent)

    this.gameScene.on(SceneEvent.INIT_COMPLETE, () => {
      this.sendNotification(GameCommand.CHECK)
    })

    this.gameScene.on(GameScene.CLICK_FRUIT, ({row, col, value}) => {
      this.sendNotification(GameCommand.ADD_FRUIT_STACK, {row, col, value})
    })
  }

  public listNotificationInterests(): string[] {
    return [
      GameProxy.ADD_FRUIT,
      GameProxy.DELETE_FRUIT,
      GameProxy.DROP_FRUIT,
      GameProxy.SWAP_FRUIT,

      GameProxy.CHANGE_SCORE,

      GameProxy.CHANGE_TIME,
    ]
  }

  public handleNotification(notification: INotification): void {
    console.log('GameSceneMediator notification:', notification)
    let name = notification.getName()
    let body = notification.getBody()
    let type = notification.getType()

    switch (name) {
      case GameProxy.ADD_FRUIT:
        this.gameScene.addFruit(body)
        break;
      case GameProxy.DELETE_FRUIT:
        this.gameScene.deleteFruit(body)
        break;
      case GameProxy.DROP_FRUIT:
        this.gameScene.dropFruit(body)
        break;
      case GameProxy.SWAP_FRUIT:
        this.gameScene.swapFruit(body, type)
        break;
      case GameProxy.CHANGE_SCORE:
        this.gameScene.updateScore(body)
        break;
      case GameProxy.CHANGE_TIME:
        this.gameScene.updateTime(body)
        break;
    }
  }

  get gameScene(): GameScene {
    return (this.viewComponent as GameScene)
  }
}