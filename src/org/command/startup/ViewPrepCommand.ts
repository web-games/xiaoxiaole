import SimpleCommand = puremvc.SimpleCommand;
import INotification = puremvc.INotification;

import Game from '../../Application'
import StartScene from '../../mediator/scenes/start/StartScene';
import StartSceneMediator from '../../mediator/StartSceneMediator';
import LoadingScene from '../../mediator/scenes/loading/LoadingScene';
import LoadSceneMediator from '../../mediator/LoadingSceneMediator';
import GameScene from '../../mediator/scenes/game/GameScene';
import GameSceneMediator from '../../mediator/GameSceneMediator';
import EndScene from '../../mediator/scenes/end/EndScene'
import EndSceneMediator from '../../mediator/EndSceneMediator'

export default class ViewPrepCommand extends SimpleCommand {
  constructor() {
    super()
  }

  public execute(note: INotification) {
    var game: Game = note.getBody() as Game

    let loadingScene = new LoadingScene(game);
    this.facade.registerMediator(new LoadSceneMediator(loadingScene))

    let startScene = new StartScene(game);
    this.facade.registerMediator(new StartSceneMediator(startScene))

    let gameScene = new GameScene(game);
    this.facade.registerMediator(new GameSceneMediator(gameScene))

    let endScene = new EndScene(game);
    this.facade.registerMediator(new EndSceneMediator(endScene))
  }
}