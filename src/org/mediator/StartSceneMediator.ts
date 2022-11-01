import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import INotification = puremvc.INotification;
import StartScene from "./view/scene/start/StartScene"
import SceneCommand from "../command/SceneCommand";

export default class StartSceneMediator extends Mediator implements IMediator {
  public static NAME: string = "start_scene_mediator"

  constructor(viewComponent: any) {
    super(StartSceneMediator.NAME, viewComponent)

    this.startScene.on(StartScene.CLICK_START, () => {
      this.sendNotification(SceneCommand.TO_GAME, {from: this.startScene});
    })
  }

  public listNotificationInterests(): string[] {
    return []
  }

  public handleNotification(notification: INotification): void {
    switch (notification.getName()) {
      default:
        break
    }
  }

  get startScene(): StartScene {
    return (this.viewComponent as StartScene)
  }
}