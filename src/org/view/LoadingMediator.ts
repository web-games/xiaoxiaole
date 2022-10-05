import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import InitLoading from "./scenes/loading/InitLoading"
import Scene, {SceneEvent} from "./scenes/Scene";
import SceneCommand from "../controller/commands/SceneCommand";

export default class LoadingMediator extends Mediator implements IMediator {
  public static NAME: string = "loading_mediator"

  constructor(viewComponent: any) {
    super(LoadingMediator.NAME, viewComponent)
    this.initLoading.on(SceneEvent.INIT_COMPLETE, this.initComplete, this);
  }

  private initComplete() {
    var assetLoader = new PIXI["Loader"]();
    assetLoader.add(["./resources/assets/assets.json"]);
    assetLoader.once("complete", () => {
      setTimeout(() => {
        this.sendNotification(SceneCommand.TO_START, {from: this.initLoading});
      }, 500)
    });
    assetLoader.on("progress", (e) => {
      console.log("加载百分比" + e.progress + "%");
    });
    assetLoader.load();
  }

  public get initLoading() {
    return this.viewComponent as InitLoading
  }
}