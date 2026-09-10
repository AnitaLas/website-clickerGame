import {ActionButton} from "./ActionButton.js";

import {
    removeElementById,
    removeElementClassNameById,
    setElementClassNameById,
    setElementTextById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";
import * as variablesMain from "../../common/variable/main/variablesMain.js";


export class ActionButtonClickColor extends ActionButton {

    removeContainersGameFiledButtonsMainStop() {
        removeElementById(variablesGameButtons.containerGameFiledButtonsMainStop);
    }

    setConfigurationButtonMainGameStop() {
        this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    setConfigurationGameOver() {
        // removeFunctionOnclick(buttonMainStop);
        setElementTextById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOverTextDisplay);
        setElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOver);
        this.setConfigurationButtonClickColorGameOver();
        // this.removeConfigurationButtonChosenNumber();
    }

    setConfigurationButtonClickColorGameOver() {
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
        setElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    }

    setButtonClickColorRandom(gameRandomColor) {
        variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, gameRandomColor);
    }

    setGameButtonClickColorAtStart(){
        this.setButtonClickColorRandom(variablesMain.gameFiledButtonPlayStartColor);
    }

    removeConfigurationGameOver() {
        setElementTextById(variablesGameButtons.gameFiledButtonPlay, "");
        removeElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOver);
    }
}