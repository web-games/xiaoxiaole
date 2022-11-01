import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification
import GameProxy from '../proxy/GameProxy';
import SceneCommand from './SceneCommand'
import GameSceneMediator from '../mediator/GameSceneMediator'
import GameScene from '../mediator/view/scene/game/GameScene'

export default class GameCommand extends SimpleCommand implements ICommand {

  public static ADD_FRUIT_STACK = 'add_fruit_stack'

  public static CHECK = 'check'

  public static GAME_START = 'game_start';

  public static GAME_OVER = 'game_over';

  constructor() {
    super()
  }

  public execute(notification: INotification) {
    console.log('SceneCommand notification:', notification)

    let name = notification.getName()
    let body = notification.getBody()

    let gameProxy: GameProxy = this.facade.retrieveProxy(GameProxy.NAME) as GameProxy

    switch (name) {
      case GameCommand.ADD_FRUIT_STACK:
        gameProxy.addSwapFruit(body)
        break
      case GameCommand.CHECK:
        gameProxy.map.check();
        break;
      case GameCommand.GAME_START:
        gameProxy.time = 10;

        var num = setInterval(() => {
          gameProxy.time--;

          if (gameProxy.time <= 0) {
            num && clearInterval(num);
            this.sendNotification(GameCommand.GAME_OVER)
          }
        }, 1000);
        break;
      case GameCommand.GAME_OVER:
        let gameScene: GameScene = (this.facade.retrieveMediator(GameSceneMediator.NAME) as GameSceneMediator).gameScene;
        this.sendNotification(SceneCommand.TO_END, {from: gameScene});
        break;
    }
  }
}