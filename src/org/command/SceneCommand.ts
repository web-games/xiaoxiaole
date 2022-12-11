import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification

import Game from '../../Game';
import Scene from '../mediator/view/scene/Scene';
import ApplicationFacade from '../ApplicationFacade';

import LoadingScene from '../mediator/view/scene/load/LoadScene';
import LoadingSceneMediator from '../mediator/LoadSceneMediator';

import StartScene from '../mediator/view/scene/start/StartScene';
import StartSceneMediator from '../mediator/StartSceneMediator';
import GameScene from '../mediator/view/scene/game/GameScene';
import GameSceneMediator from '../mediator/GameSceneMediator';
import GameProxy from '../proxy/GameProxy';
import EndScene from '../mediator/view/scene/end/EndScene'
import EndSceneMediator from '../mediator/EndSceneMediator'
import GameCommand from './GameCommand'

export default class SceneCommand extends SimpleCommand implements ICommand {

  public static TO_LOADING = 'to_loading'

  public static TO_START = 'to_start'

  public static TO_GAME = 'to_game'

  public static TO_END = 'to_end'

  constructor() {
    super()
  }

  public execute(notification: INotification) {
    console.log('SceneCommand notification:', notification)

    let game: Game = (this.facade as ApplicationFacade).game;
    let name = notification.getName()
    let body = notification.getBody()
    let {from} = body

    if (from) {
      from = from as Scene;
      from.destroy();
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
        startScene.sceneIn();
        startScene.init();
        break
      case SceneCommand.TO_GAME:
        let gameScene: GameScene = (this.facade.retrieveMediator(GameSceneMediator.NAME) as GameSceneMediator).gameScene;
        game.stage.addChild(gameScene)
        gameScene.init((this.facade.retrieveProxy(GameProxy.NAME) as GameProxy).map);

        this.sendNotification(GameCommand.GAME_START);
        break
      case SceneCommand.TO_END:
        let endScene: EndScene = (this.facade.retrieveMediator(EndSceneMediator.NAME) as EndSceneMediator).endScene;
        game.stage.addChild(endScene)
        endScene.init();
        break
    }
  }
}