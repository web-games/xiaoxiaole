import Text = PIXI.Text

import Scene from "../Scene";
import Map from "../../../proxy/model/Map";
import Fruit from "./Fruit";

export default class GameScene extends Scene {

  public static NAME = "game_scene";

  public static CLICK_FRUIT = "click_fruit";

  private fruits = {}

  constructor(game) {
    super(game)
  }

  public init(map?: any) {
    super.init(map);
    console.log(map);

    let {rows, cols, data} = map;

    let bg = new PIXI.Graphics()
    this.addChild(bg)

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        this.addFruit(i, j, data[i][j])

        let startX = j * Map.GridWidth
        let startY = i * Map.GridHeight

        bg.beginFill(
          0x000000,
          i % 2 === 0
            ? j % 2 === 0 ? 0.6 : 0.4
            : j % 2 !== 0 ? 0.6 : 0.4
        )
        bg.moveTo(startX, startY)
        bg.lineTo(startX + Map.GridWidth, startY)
        bg.lineTo(startX + Map.GridWidth, startY + Map.GridHeight)
        bg.lineTo(startX, startY + Map.GridHeight)
        bg.closePath()
        bg.endFill()
      }
    }
  }

  private addFruit(row, col, value, init_x = 0, init_y = 0) {
    var fruit = new Fruit(row, col, value)
    this.addChild(fruit)
    fruit.x = init_x || (col * Map.GridWidth + Map.GridWidth / 2)
    fruit.y = init_y || (row * Map.GridHeight + Map.GridHeight / 2)
    fruit.on("pointerdown", (event) => {
      this.emit(GameScene.CLICK_FRUIT, event.currentTarget)
    })
    this.fruits[`${row}_${col}`] = fruit;
  }

  public swapFruit([node1, node2]) {
    let {row: row1, col: col1} = node1;
    let {row: row2, col: col2} = node2;

    let fruit1 = this.fruits[`${row1}_${col1}`]
    fruit1.setRowCol(row2, col2)

    let fruit2 = this.fruits[`${row2}_${col2}`]
    fruit2.setRowCol(row1, col1)
  }

  public deleteFruit(data) {
    var arr = [];

    data.forEach((item1) => {
      var result = arr.find(item2 => (item1[0] === item2[0] && item1[1] === item2[1]))
      if (!result) {
        arr.push(item1)
      }
    })

    arr.forEach(([row, col]) => {
      let fruit = this.fruits[`${row}_${col}`]
      window.TweenMax.to(fruit.scale, 1, {x: 0, y: 0, ease: "power1.inOut"})
      window.TweenMax.to(fruit, 1, {alpha: 0, ease: "none"})
      this.fruits[`${row}_${col}`] = null;
    })
  }

  public dropFruit(data) {
    for (var key in data) {
      data[key].forEach(({row, col, drop}) => {
        let fruit = this.fruits[`${row}_${col}`]
        fruit.setRowCol(row + drop, col)
      })
    }
  }
}