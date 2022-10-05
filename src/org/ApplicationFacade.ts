import Facade = puremvc.Facade;
import IFacade = puremvc.IFacade;

import Game from "../Game";
import SceneCommand from "./command/SceneCommand";
import StartupCommand from "./command/startup/StartupCommand";

export default class ApplicationFacade extends Facade implements IFacade {

  public static STARTUP = "startup"

  public static instance = null

  private _game: Game = null

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

  public initializeModel(): void {
    console.log("initializeModel")
    super.initializeModel()
  }

  public initializeView(): void {
    console.log("initializeView")
    super.initializeView();
  }

  public initializeController(): void {
    console.log("initializeController")
    super.initializeController()

    this.registerCommand(ApplicationFacade.STARTUP, StartupCommand)
  }

  public startup() {
    let windowWidth = document.documentElement.clientWidth || document.body.clientWidth
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    let windowRatio = windowWidth / windowHeight

    let stageWidth = 640
    let stageHeight = (windowHeight > windowWidth)
      ? windowHeight / windowWidth * stageWidth
      : windowWidth / windowHeight * stageWidth;

    this.game = new Game({
      width: stageWidth,
      height: stageHeight,
      backgroundColor: 0x1099bb
    })

    this.sendNotification(ApplicationFacade.STARTUP, this.game)
    this.removeCommand(ApplicationFacade.STARTUP)

    this.sendNotification(SceneCommand.TO_LOADING, {from: null})
  }

  public destory() {
    if (this.game) {
      this.game.destroy(true)
      this.game = null
    }

    window.TweenMax.killAll()
  }

  public set game(value) {
    this._game = value;
  }

  public get game() {
    return this._game;
  }
}