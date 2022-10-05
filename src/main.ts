import Game from "./Game"
import ApplicationFacade from "./org/ApplicationFacade";

let windowWidth = document.documentElement.clientWidth || document.body.clientWidth
let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
let windowRatio = windowWidth / windowHeight

let stageWidth = 640
let stageHeight = (windowHeight > windowWidth)
  ? windowHeight / windowWidth * stageWidth
  : windowWidth / windowHeight * stageWidth;

let game = new Game({
  width: stageWidth,
  height: stageHeight,
  backgroundColor: 0x1099bb
})

let app: ApplicationFacade = ApplicationFacade.getInstance(Game.NAME) as ApplicationFacade
app.startup(game)

export {stageWidth, stageHeight, game}