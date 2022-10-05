import Proxy = puremvc.Proxy;
import IProxy = puremvc.IProxy;
import Map from "./model/Map";

export default class GameProxy extends Proxy implements IProxy {
  public static NAME: string = "game_proxy"

  public static SWAP_FRUIT: string = "swap_fruit";

  public static DELETE_FRUIT: string = "delete_fruit";

  public static DROP_FRUIT: string = "drop_fruit";

  // 地图数据
  public map: Map = null;

  // 记录要交换的水果
  public swapFruitStack: any[] = []

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

      let num1 = Math.abs(node1.row - node2.row)
      let num2 = Math.abs(node1.col - node2.col)
      // console.log(num1, num2)
      if (num1 <= 1 && num2 <= 1) {
        // console.log(`(${node1.row},${node1.col}),(${node2.row},${node2.col})`)
        this.map.swap(node1.row, node1.col, node2.row, node2.col)

        this.sendNotification(GameProxy.SWAP_FRUIT, [node1, node2])
      }

      while (this.swapFruitStack.length) {
        this.swapFruitStack.shift()
      }
    }
  }
}
