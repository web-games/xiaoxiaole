import Game from "./org/Application"
import ApplicationFacade from "./org/ApplicationFacade";

window.themeColor = 0x75d3fa;

ApplicationFacade.getInstance(Game.NAME).startup();