import SimpleCommand = puremvc.SimpleCommand;
import GameProxy from "../model/GameProxy"

export default class ModelPrepCommand extends SimpleCommand {
  constructor() {
    super()
  }

  public execute() {
    this.facade["registerProxy"](new GameProxy())
  }
}