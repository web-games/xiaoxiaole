import SimpleCommand = puremvc.SimpleCommand;
import ICommand = puremvc.ICommand
import SceneCommand from "../SceneCommand"

export default class ControllerPrepCommand extends SimpleCommand implements ICommand {
  constructor() {
    super()
  }

  public execute() {
    this.facade.registerCommand(SceneCommand.TO_LOADING, SceneCommand)
    this.facade.registerCommand(SceneCommand.TO_START, SceneCommand)
    this.facade.registerCommand(SceneCommand.TO_GAME, SceneCommand)
  }
}