import SimpleCommand = puremvc.SimpleCommand;
import INotification = puremvc.INotification;

import Game from "../../../Game"
import StartScene from "../../mediator/view/start/StartScene";
import StartSceneMediator from "../../mediator/StartSceneMediator";
import LoadingScene from "../../mediator/view/loading/LoadingScene";
import LoadingMediator from "../../mediator/LoadingSceneMediator";
import GameScene from "../../mediator/view/game/GameScene";
import GameSceneMediator from "../../mediator/GameSceneMediator";

export default class ViewPrepCommand extends SimpleCommand {
  constructor() {
    super()
  }

  public execute(note: INotification) {
    var game: Game = note.getBody() as Game

    let loadingScene = new LoadingScene(game);
    this.facade.registerMediator(new LoadingMediator(loadingScene))

    let startScene = new StartScene(game);
    this.facade.registerMediator(new StartSceneMediator(startScene))

    let gameScene = new GameScene(game);
    this.facade.registerMediator(new GameSceneMediator(gameScene))
  }
}