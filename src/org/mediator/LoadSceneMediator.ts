import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import LoadingScene from './view/scene/load/LoadScene'
import {SceneEvent} from './view/scene/Scene';
import SceneCommand from '../command/SceneCommand';
import GameCommand from '../command/GameCommand'

export default class LoadSceneMediator extends Mediator implements IMediator {
  public static NAME: string = 'load_scene_mediator'

  constructor(viewComponent: any) {
    super(LoadSceneMediator.NAME, viewComponent)
    this.loadingScene.on(SceneEvent.INIT_COMPLETE, this.initComplete, this);
  }

  private initComplete() {
    var assetLoader = new PIXI['Loader']();
    assetLoader.add([
      './resources/images/assets.json',
      './resources/images/main_background.jpg',
      './resources/images/loginButton.png',
      './resources/images/animal1.png',
      './resources/images/animal2.png',
      './resources/images/animal3.png',
      './resources/images/animal4.png',
      './resources/images/animal5.png',
      './resources/images/animal6.png',
      './resources/images/animal7.png',
      './resources/images/animal8.png',
    ]);
    assetLoader.once('complete', () => {
      setTimeout(() => {
        // this.sendNotification(SceneCommand.TO_START, {from: this.loadingScene});

        this.sendNotification(SceneCommand.TO_GAME, {from: this.loadingScene});

        // this.sendNotification(SceneCommand.TO_END, {from: this.loadingScene})
      }, 500)
    });
    assetLoader.on('progress', (e) => {
      console.log('加载百分比' + e.progress + '%');
    });
    assetLoader.load();
  }

  public get loadingScene() {
    return this.viewComponent as LoadingScene
  }
}