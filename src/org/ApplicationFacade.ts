import Facade = puremvc.Facade;
import IFacade = puremvc.IFacade;

import Application from "./Application";
import SceneCommand from "./command/SceneCommand";
import StartupCommand from "./command/startup/StartupCommand";

export default class ApplicationFacade extends Facade implements IFacade {

    public static STARTUP = "startup"

    public static instance = null

    private _application: Application = null

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
        super.initializeModel()
    }

    public initializeView(): void {
        super.initializeView();
    }

    public initializeController(): void {
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

        globalThis.__PIXI_APP__ = this.application = new Application({
            width: stageWidth,
            height: stageHeight,
            backgroundColor: window.themeColor
        })

        this.sendNotification(ApplicationFacade.STARTUP, this.application)
        this.removeCommand(ApplicationFacade.STARTUP)

        this.sendNotification(SceneCommand.TO_LOADING, {from: null})
    }

    public destroy() {
        if (this.application) {
            this.application.destroy(true)
            this.application = null
        }

        TweenMax.killAll()
    }

    public set application(value) {
        this._application = value;
    }

    public get application() {
        return this._application;
    }
}