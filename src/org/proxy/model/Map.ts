import GameProxy from "../GameProxy";

export default class Map {
  public static GridWidth = 80
  public static GridHeight = 80

  public rows = 10
  public cols = 5

  public data = [
    [2, 4, 2, 4, 2],
    [4, 5, 4, 5, 4],
    [4, 5, 5, 5, 4],
    [3, 4, 5, 4, 3],
    [1, 1, 4, 1, 1],
    [6, 3, 6, 3, 6],
    [3, 7, 3, 7, 3],
    [3, 7, 7, 7, 3],
    [2, 3, 7, 3, 2],
    [8, 8, 3, 8, 8],
  ]

  private proxy: GameProxy = null;

  constructor(proxy) {
    this.proxy = proxy;

    // for (var i = 0; i < this.rows; i++) {
    //   for (var j = 0; j < this.cols; j++) {
    //     this.data[i][j] = this.getAnimalIndex()
    //   }
    // }
  }

  swap(row1, col1, row2, col2) {
    let temp = this.data[row1][col1];

    this.data[row1][col1] = this.data[row2][col2];
    this.data[row2][col2] = temp;

    // console.log(row1, col1, row2, col2, this.data)

    setTimeout(() => {
      this.check();
    }, 300)
  }

  check() {
    var result = [...this.horizontalCheck(), ...this.verticalCheck()].filter(ele => ele)
    console.log(result)
    if (result.length) {
      result.forEach(([row, col]) => {
        this.data[row][col] = null;
      })

      this.proxy.sendNotification(GameProxy.DELETE_FRUIT, result)

      setTimeout(() => {
        var drop = {}
        for (var j = 0; j < this.cols; j++) {
          drop[j] = []
          for (var i = 0; i < this.rows; i++) {
            if (this.data[i][j] === null) {
              let m = i
              while (m--) {
                if (this.data[m][j] !== null) {
                  var preNode = drop[j].find(node => (node.row === m && node.col === j))
                  if (!preNode) {
                    preNode = {row: m, col: j, drop: 0}
                    drop[j].push(preNode);
                  }

                  preNode.drop++
                }
              }
            }
          }
          drop[j].sort((a, b) => (b.row - a.row))
        }
        // console.log(drop)

        for (var key in drop) {
          drop[key].forEach(({row, col, drop}) => {
            var temp = this.data[row][col]
            this.data[row][col] = null;
            this.data[row + drop][col] = temp;
          })
        }

        console.log(this.data)

        this.proxy.sendNotification(GameProxy.DROP_FRUIT, drop)

        setTimeout(() => {
          this.check()
        }, 300)
      }, 1000)
    } else {
      let arr = []
      for (var j = 0; j < this.cols; j++) {
        for (var i = 0; i < this.rows; i++) {
          if (this.data[i][j] === null) {
            // console.log(`填充：${i}行${j}列`)
            this.data[i][j] = this.getAnimalIndex()

            arr.push({
              row: i,
              col: j,
              value: this.data[i][j],
              animate: {
                from: {x: (this.cols * Map.GridWidth) / 2, y: 0},
                to: {x: (j * Map.GridWidth + Map.GridWidth / 2), y: (i * Map.GridHeight + Map.GridHeight / 2)}
              }
            })
          }
        }
        // console.log("\n")
      }

      if (arr.length) {
        this.proxy.sendNotification(GameProxy.ADD_FRUIT, arr)
        this.check()
      }
    }
  }

  horizontalCheck() {
    var arr = []
    for (var i = 0; i < this.rows; i++) {
      var same = 1
      for (var j = 0; j < this.cols; j++) {
        var curVal = this.data[i][j]
        var nextVal = this.data[i][j + 1]
        // console.log(`i=${i}, j=${j}, curVal=${curVal}, nextVal=${nextVal}`)

        if (curVal == null && nextVal === null)
          continue

        if (curVal === nextVal) {
          same++
        } else {
          if (same >= 3) {
            // console.log(`(${i},${j})`)
            this.proxy.score += same;
            this.proxy.sendNotification(GameProxy.CHANGE_SCORE, this.proxy.score)

            var num = same
            var grid = ``
            while (num) {
              var row = i
              var col = j - (num - 1)
              // console.log(row, col, num)
              arr.push([row, col])

              grid += `(${row},${col})`

              num--
            }
            console.log(`横向：连续${same}个相同${grid},值为${curVal}`)
          }

          same = 1
        }
      }
    }
    return arr
  }

  verticalCheck() {
    var arr = []
    for (var j = 0; j < this.cols; j++) {
      var same = 1
      for (var i = 0; i < this.rows; i++) {
        var curVal = this.data[i][j]
        var nextVal = (this.data[i + 1] && this.data[i + 1][j]) || null
        // console.log(`i=${i}, j=${j}, curVal=${curVal}, nextVal=${nextVal}`)

        if (curVal == null && nextVal === null)
          continue

        if (curVal === nextVal) {
          same++
        } else {
          if (same >= 3) {
            // console.log(`(${i},${j})`)
            this.proxy.score += same;
            this.proxy.sendNotification(GameProxy.CHANGE_SCORE, this.proxy.score)
            var num = same
            var grid = ``
            while (num) {
              var row = i - (num - 1)
              var col = j
              // console.log(row, col, num)
              arr.push([row, col])

              grid += `(${row},${col})`

              num--
            }
            console.log(`纵向：连续${same}个相同${grid},值为${curVal}`)
          }

          same = 1
        }
      }
    }
    return arr
  }

  getAnimalIndex() {
    return (parseInt(String(Math.random() * 8)) + 1)
  }
}