import Container = PIXI.Container
import Graphics = PIXI.Graphics
import Sprite = PIXI.Sprite
import Text = PIXI.Text

import Scene, {SceneEvent} from '../Scene';
import Map from '../../../proxy/model/Map';
import Fruit from './Fruit';

export default class GameScene extends Scene {

  public static NAME = 'game_scene';

  public static CLICK_FRUIT = 'click_fruit';

  private fruits = {}

  private timeText: Text = null;
  private scoreText: Text = null;
  private animalContainer: Container = null;

  constructor(game) {
    super(game)
  }

  public init(map?: any) {
    super.init(map);

    this.filters = [new PIXI.filters['GodrayFilter']({alpha: 0.5})];

    let {rows, cols, data} = map;

    this.addChild(Sprite.from('sp_main_background.jpg'))

    var timeText = new Text(``, {
      fill: 0xffffff,
      fontSize: 48,
    });
    this.addChild(timeText);
    timeText.anchor.set(0.5, 0);
    timeText.x = this.stageWidth / 4 * 1;
    timeText.y = 10;
    timeText.filters = [
      new PIXI.filters['GlowFilter']({color: 0x00ff6e, distance: 15, innerStrength: 0.1, outerStrength: 2.5})
    ];
    this.timeText = timeText;
    this.updateTime(60);

    var scoreText = new Text(``, {
      fill: 0xffffff,
      fontSize: 48,
    });
    this.addChild(scoreText);
    scoreText.anchor.set(0.5, 0);
    scoreText.x = this.stageWidth / 4 * 3;
    scoreText.y = 10;
    scoreText.filters = [
      new PIXI.filters['GlowFilter']({color: 0x00ff6e, distance: 15, innerStrength: 0.1, outerStrength: 2.5})
    ];
    this.scoreText = scoreText;
    this.updateScore(0);

    var animalContainer = new Container();
    this.addChild(animalContainer);
    animalContainer.x = (this.stageWidth - cols * Map.GridWidth) / 2
    animalContainer.y = (this.stageHeight - rows * Map.GridHeight) / 2
    this.animalContainer = animalContainer;

    let bg = new Graphics()
    animalContainer.addChild(bg)

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
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

        this.addFruit({
          row: i,
          col: j,
          value: data[i][j],
          animate: {
            from: {x: (cols * Map.GridWidth) / 2, y: 0},
            to: {x: (j * Map.GridWidth + Map.GridWidth / 2), y: (i * Map.GridHeight + Map.GridHeight / 2)}
          }
        })
      }
    }

    setTimeout(() => {
      this.emit(SceneEvent.INIT_COMPLETE)
    }, 1000)
  }

  public addFruit(data) {
    if (!Array.isArray(data)) {
      data = [data]
    }

    data.forEach(({row, col, value, animate}) => {
      var fruit = new Fruit(row, col, value)
      this.animalContainer.addChild(fruit)
      if (animate) {
        let {from, to} = animate
        TweenMax.fromTo([fruit], 0.3, from, to);
      } else {
        fruit.x = (col * Map.GridWidth + Map.GridWidth / 2)
        fruit.y = (row * Map.GridHeight + Map.GridHeight / 2)
      }

      fruit.on('pointerdown', (event) => {
        fruit.filters = [new PIXI.filters['OutlineFilter'](2, 0x99ff99)];
        this.emit(GameScene.CLICK_FRUIT, event.currentTarget)
      })
      this.fruits[`${row}_${col}`] = fruit;
    })
  }

  public swapFruit([node1, node2], type) {
    let {row: row1, col: col1} = node1;
    let {row: row2, col: col2} = node2;
    let fruit1 = this.fruits[`${row1}_${col1}`]
    let fruit2 = this.fruits[`${row2}_${col2}`]

    if (type === 'success') {
      fruit1.setRowCol(row2, col2)
      fruit2.setRowCol(row1, col1)
      this.fruits[`${row1}_${col1}`] = fruit2
      this.fruits[`${row2}_${col2}`] = fruit1
      setTimeout(() => {
        fruit1.filters = []
        fruit2.filters = []
      }, 300)
    } else if (type === 'fail') {
      fruit1.rotation = -0.05;
      fruit2.rotation = -0.05;
      TweenMax.to(fruit1, 0.1, {rotation: 0.1, ease: Linear.easeNone, repeat: 5, yoyo: true});
      TweenMax.to(fruit2, 0.1, {rotation: 0.1, ease: Linear.easeNone, repeat: 5, yoyo: true});
      setTimeout(() => {
        fruit1.filters = []
        fruit2.filters = []
      }, 300)
    }
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
      TweenMax.to(fruit.scale, 1, {x: 0, y: 0, ease: 'power1.inOut'})
      TweenMax.to(fruit, 1, {alpha: 0, ease: 'none'})
      this.fruits[`${row}_${col}`] = null;
    })
  }

  public dropFruit(data) {
    for (var key in data) {
      data[key].forEach(({row, col, drop}) => {
        let fruit = this.fruits[`${row}_${col}`]
        fruit.setRowCol(row + drop, col)

        this.fruits[`${row}_${col}`] = null;
        this.fruits[`${row + drop}_${col}`] = fruit;
      })
    }
  }

  public updateScore(score) {
    // if (score < 1000) {
    //   score = `000${score}`
    // } else if (score < 100) {
    //   score = `00${score}`
    // } else if (score < 10) {
    //   score = `0${score}`
    // }
    this.scoreText.text = `Score: ` + score;
  }

  public updateTime(time) {
    // if (time < 10) {
    //   time = `0${time}`
    // }
    this.timeText.text = `Time: ` + time;
  }
}