import Proxy = puremvc.Proxy;
import IProxy = puremvc.IProxy;
import GameData from "./model/GameData"

export default class GameProxy extends Proxy implements IProxy {
  public static NAME: string = "game_proxy"

  // 游戏数据
  public gameData: GameData = null

  constructor() {
    super(GameProxy.NAME)
    this.gameData = new GameData()
  }
}
