import {ViewMain} from "./ViewMain.js";
import {ViewMenu} from "./menu/ViewMenu.js";
import {ViewGame} from "./viewGame/ViewGame.js";
import {ViewFooter} from "./footer/ViewFooter.js";

const viewMain = new ViewMain();
viewMain.setContainerMainSection();


const viewMenu = new ViewMenu();
viewMenu.createMenu();


const viewGame = new ViewGame();
viewGame.createGameConfigurationRoundView();
viewGame.createGameButtonPlayClickColorView();
viewGame.createGameGameButtonsPlayStartView();
viewGame.createConfigurationGameStatisticsTimeGeneral();
viewGame.createConfigurationGameStatisticsTimeFraud();




const viewFooter = new ViewFooter();
viewFooter.createFooter();



console.log("Clicker game: version 20260906v50_branch_class_7");