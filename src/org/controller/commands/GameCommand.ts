import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification
import SceneCommand from "./SceneCommand";
import StartSceneMediator from "../../view/StartSceneMediator";
import StartScene from "../../view/scenes/start/StartScene";
import InitLoading from "../../view/scenes/loading/InitLoading";
import LoadingMediator from "../../view/LoadingMediator";

export default class GameCommand extends SimpleCommand implements ICommand {

  public static INIT_GAME = "init_game_scene"

  public constructor() {
    super()
  }

  public execute(notification: INotification): void {
    console.log("GameCommand notification:", notification)
    switch (notification.getName()) {
      case GameCommand.INIT_GAME:

        let initLoadingScene = new InitLoading();
        this.facade["registerMediator"](new LoadingMediator(initLoadingScene))

        let startScene = new StartScene();
        this.facade["registerMediator"](new StartSceneMediator(startScene))

        this.sendNotification(SceneCommand.TO_INIT_LOADING, {from: null})
        break
    }
  }
}