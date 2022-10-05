import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import Game from "../../Game"

export default class ApplicationMediator extends Mediator implements IMediator {
  public static NAME: string = "application_mediator"

  constructor(viewComponent: any) {
    super(ApplicationMediator.NAME, viewComponent)
  }

  public get game() {
    return this.viewComponent as Game
  }
}