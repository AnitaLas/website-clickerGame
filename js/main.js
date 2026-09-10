import {ViewMain} from "./view/ViewMain.js";
import {ViewMenu} from "./menu/ViewMenu.js";
import {GameModule} from "./GameModule.js";
import {ViewFooter} from "./footer/ViewFooter.js";

const viewMain = new ViewMain();
viewMain.setContainerMainSection();

const viewMenu = new ViewMenu();
viewMenu.createMenu();

const gameModule = new GameModule();
gameModule.createGame();

const viewFooter = new ViewFooter();
viewFooter.createFooter();


console.log("Clicker game: version 20260910v50_branch_class_12");