import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import LoadingScene from './scenes/load/LoadScene'
import {SceneEvent} from './scenes/Scene';
import SceneCommand from '../command/SceneCommand';

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
            './resources/images/animal1.png',
            './resources/images/animal2.png',
            './resources/images/animal3.png',
            './resources/images/animal4.png',
            './resources/images/animal5.png',
            './resources/images/animal6.png',
            './resources/images/animal7.png',
            './resources/images/animal8.png',
            './resources/images/sp_end_background.jpg',
            './resources/images/sp_main_background.jpg',
            './resources/images/sp_start_background.jpg',
        ]);
        assetLoader.once('complete', () => {
            setTimeout(() => {
                this.sendNotification(SceneCommand.TO_START, {from: this.loadingScene});

                // this.sendNotification(SceneCommand.TO_GAME, {from: this.loadingScene});

                // this.sendNotification(SceneCommand.TO_END, {from: this.loadingScene})
            }, 500)
        });
        assetLoader.on('progress', (e) => {
            console.log('加载百分比' + e.progress + '%');

            this.loadingScene.setProgress(e.progress);
        });
        assetLoader.load();

        var sounds = {
            'worldscenebgm': './resources/music/worldscenebgm.mp3',
            'gamescenebgm': './resources/music/gamescenebgm.mp3',
            'drop': './resources/music/drop.mp3',
            'swap': './resources/music/swap.mp3',
            'click': './resources/music/click.mp3',
        };
        PIXI.sound.add(sounds);
    }

    public get loadingScene() {
        return this.viewComponent as LoadingScene
    }
}