import Facade = puremvc.Facade;
import IFacade = puremvc.IFacade;

import StartupCommand from "./controller/StartupCommand"
import GameCommand from "./controller/commands/GameCommand"
import Game from "../Game";

export default class ApplicationFacade extends Facade implements IFacade {
  public static STARTUP = "startup"

  public static instance = null

  private game: Game = null

  constructor(key) {
    super(key)
  }

  public static getInstance(key): ApplicationFacade {
    if (null == key) return null

    if (Facade.instanceMap[key] == null) {
      Facade.instanceMap[key] = new ApplicationFacade(key)
    }

    return Facade.instanceMap[key]
  }

  public initializeController(): void {
    super.initializeController()
    this.registerCommand(ApplicationFacade.STARTUP, StartupCommand)
  }

  public initializeModel(): void {
    super.initializeModel()
  }

  public startup(game) {
    this.game = game

    this.sendNotification(ApplicationFacade.STARTUP, game)
    this.removeCommand(ApplicationFacade.STARTUP)

    this.sendNotification(GameCommand.INIT_GAME)
  }

  public destory() {
    if (this.game) {
      this.game.destroy(true)
      this.game = null
    }

    window.TweenMax.killAll()
  }
}