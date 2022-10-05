import MacroCommand = puremvc.MacroCommand;
import ICommand = puremvc.ICommand;
import ModelPrepCommand from "./ModelPrepCommand"
import ViewPrepCommand from "./ViewPrepCommand"
import ControllerPrepCommand from "./ControllerPrepCommand"

export default class StartupCommand extends MacroCommand implements ICommand {
  constructor() {
    super()
  }

  public initializeMacroCommand() {
    this.addSubCommand(ModelPrepCommand)
    this.addSubCommand(ViewPrepCommand)
    this.addSubCommand(ControllerPrepCommand)
  }
}