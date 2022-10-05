import SimpleCommand = puremvc.SimpleCommand;
import ICommand = puremvc.ICommand
import GameCommand from "./commands/GameCommand"
import SceneCommand from "./commands/SceneCommand"

export default class ControllerPrepCommand extends SimpleCommand implements ICommand {
  constructor() {
    super()
  }

  public execute() {
    this.facade["registerCommand"](GameCommand.INIT_GAME, GameCommand)

    this.facade["registerCommand"](SceneCommand.TO_INIT_LOADING, SceneCommand)
    this.facade["registerCommand"](SceneCommand.TO_START, SceneCommand)
  }
}