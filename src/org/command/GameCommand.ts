import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification
import GameProxy from "../proxy/GameProxy";

export default class GameCommand extends SimpleCommand implements ICommand {

  public static ADD_FRUIT_STACK = "add_fruit_stack"

  public static CHECK = "check"

  constructor() {
    super()
  }

  public execute(notification: INotification) {
    console.log("SceneCommand notification:", notification)

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
    }
  }
}