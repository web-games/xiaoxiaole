import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification

import Game from "../../Game";
import Scene from "../mediator/view/Scene";
import ApplicationFacade from "../ApplicationFacade";

import LoadingScene from "../mediator/view/loading/LoadingScene";
import LoadingSceneMediator from "../mediator/LoadingSceneMediator";

import StartScene from "../mediator/view/start/StartScene";
import StartSceneMediator from "../mediator/StartSceneMediator";

export default class SceneCommand extends SimpleCommand implements ICommand {

  public static TO_LOADING = "to_loading"

  public static TO_START = "to_start"

  constructor() {
    super()
  }

  public execute(notification: INotification) {
    console.log("SceneCommand notification:", notification)

    let game: Game = (this.facade as ApplicationFacade).game;
    let name = notification.getName()
    let body = notification.getBody()
    let {from} = body

    if (from) {
      from = from as Scene;
      from.destory();
      if (from.parent) {
        from.parent.removeChild(from)
      }
    }

    switch (name) {
      case SceneCommand.TO_LOADING:
        let loadingScene: LoadingScene = (this.facade.retrieveMediator(LoadingSceneMediator.NAME) as LoadingSceneMediator).loadingScene
        game.stage.addChild(loadingScene)
        loadingScene.init();
        break
      case SceneCommand.TO_START:
        let startScene: StartScene = (this.facade.retrieveMediator(StartSceneMediator.NAME) as StartSceneMediator).startScene;
        game.stage.addChild(startScene)
        startScene.init();
        break
    }
  }
}