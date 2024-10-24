import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import INotification = puremvc.INotification;

import EndScene from './scenes/end/EndScene'
import SceneCommand from '../command/SceneCommand'

export default class EndSceneMediator extends Mediator implements IMediator {
    public static NAME: string = 'end_scene_mediator'

    constructor(viewComponent: any) {
        super(EndSceneMediator.NAME, viewComponent)

        this.endScene.on(EndScene.CLICK_AGAIN, () => {
            this.sendNotification(SceneCommand.TO_GAME, {from: this.endScene})
        })

        this.endScene.on(EndScene.CLICK_RESTART, () => {
            this.sendNotification(SceneCommand.TO_START, {from: this.endScene})
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

    get endScene(): EndScene {
        return (this.viewComponent as EndScene)
    }
}