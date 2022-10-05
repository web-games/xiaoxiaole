import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification

import Scene from "../../view/scenes/Scene";
import InitLoading from "../../view/scenes/loading/InitLoading";
import LoadingMediator from "../../view/LoadingMediator";
import StartScene from "../../view/scenes/start/StartScene";
import StartSceneMediator from "../../view/StartSceneMediator";
import ApplicationMediator from "../../view/ApplicationMediator";

export default class SceneCommand extends SimpleCommand implements ICommand {

  public static TO_INIT_LOADING = "to_init_loading"

  public static TO_START = "to_start"

  constructor() {
    super()
  }

  public execute(notification: INotification) {
    console.log("SceneCommand notification:", notification)
    let name = notification.getName()
    let body = notification.getBody()
    let {from} = body
    // console.log("from:", from);
    if (from) {
      from = from as Scene;
      from.destory();
      if (from.parent) {
        from.parent.removeChild(from)
      }
    }

    let game = this.facade["retrieveMediator"](ApplicationMediator.NAME).game;

    switch (name) {
      case SceneCommand.TO_INIT_LOADING:
        let initLoadingView: InitLoading = this.facade["retrieveMediator"](LoadingMediator.NAME).initLoading
        if (initLoadingView) {
          game.stage.addChild(initLoadingView)
          initLoadingView.init();
        }
        break
      case SceneCommand.TO_START:
        let startScene: StartScene = this.facade["retrieveMediator"](StartSceneMediator.NAME).startScene;
        if (startScene) {
          game.stage.addChild(startScene)
          startScene.init();
        }
        break
    }
  }
}