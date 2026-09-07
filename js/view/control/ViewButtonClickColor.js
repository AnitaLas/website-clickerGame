import {
    createElementDiv,
    createElementButton,
    setElementClassNameById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";


export class ViewButtonClickColor {

    createViewGameButtonPlay() {
        this.createGameFieldPButtonMain();
        this.createGameFieldPButtonPlay();
    }

    createGameFieldPButtonMain() {
        createElementDiv(variablesGameButtons.containerGameFiledButtonMain, variablesGameButtons.containerGameFiledButtonsMainParts);
    }

    createGameFieldPButtonPlay() {
        createElementButton(variablesGameButtons.containerGameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlay);
        setElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlay);
    }
}