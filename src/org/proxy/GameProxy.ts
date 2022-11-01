import Proxy = puremvc.Proxy;
import IProxy = puremvc.IProxy;
import Map from './model/Map';

export default class GameProxy extends Proxy implements IProxy {
  public static NAME: string = 'game_proxy'

  public static CHANGE_SCORE: string = 'change_score'

  public static CHANGE_TIME: string = 'change_time'

  public static ADD_FRUIT: string = 'add_fruit';

  public static DELETE_FRUIT: string = 'delete_fruit';

  public static DROP_FRUIT: string = 'drop_fruit';

  public static SWAP_FRUIT: string = 'swap_fruit';

  // 地图数据
  public map: Map = null;

  // 记录要交换的水果
  public swapFruitStack: any[] = []

  public score: number = 0;

  private _time: number = 0;

  constructor() {
    super(GameProxy.NAME)

    this.map = new Map(this)
  }

  public addSwapFruit(data) {
    this.swapFruitStack.push(data);
    // console.log(this.swapFruitStack)

    if (this.swapFruitStack.length >= 2) {
      let node1 = this.swapFruitStack[this.swapFruitStack.length - 2]
      let node2 = this.swapFruitStack[this.swapFruitStack.length - 1]

      if (this.check4direction(node1.row, node1.col, node2.row, node2.col)) {
        // console.log(`(${node1.row},${node1.col}),(${node2.row},${node2.col})`)
        this.map.swap(node1.row, node1.col, node2.row, node2.col)

        this.sendNotification(GameProxy.SWAP_FRUIT, [node1, node2], 'success')
      } else {
        this.sendNotification(GameProxy.SWAP_FRUIT, [node1, node2], 'fail')
      }

      while (this.swapFruitStack.length) {
        this.swapFruitStack.shift()
      }
    }
  }

  private check4direction(row1, col1, row2, col2) {
    if (Math.abs(col1 - col2) <= 1 && row1 === row2) {
      return true
    } else if (Math.abs(row1 - row2) <= 1 && col1 === col2) {
      return true
    }
    return false;
  }

  public set time(value) {
    this._time = value;

    this.sendNotification(GameProxy.CHANGE_TIME, this._time);
  }

  public get time() {
    return this._time;
  }
}
