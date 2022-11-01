import SimpleCommand = puremvc.SimpleCommand;
import INotification = puremvc.INotification;

import Game from '../../../Game'
import StartScene from '../../mediator/view/scene/start/StartScene';
import StartSceneMediator from '../../mediator/StartSceneMediator';
import LoadingScene from '../../mediator/view/scene/load/LoadScene';
import LoadSceneMediator from '../../mediator/LoadSceneMediator';
import GameScene from '../../mediator/view/scene/game/GameScene';
import GameSceneMediator from '../../mediator/GameSceneMediator';
import EndScene from '../../mediator/view/scene/end/EndScene'
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