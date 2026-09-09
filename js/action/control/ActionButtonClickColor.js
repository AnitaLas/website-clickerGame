import {ActionButton} from "./ActionButton.js";

import {
    removeElementById,
    setElementClassNameById, setElementTextById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";


export class ActionButtonClickColor extends ActionButton {

    removeContainersGameFiledButtonsMainStop() {
        removeElementById(variablesGameButtons.containerGameFiledButtonsMainStop);
    }

    setConfigurationButtonMainGameStop() {
        this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    setConfigurationButtonMainGameContinue() {
        this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    removeConfigurationButtonMainGameContinue() {
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    // setConfigurationButtonClickColorGameOver() {
    //     this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    //     setElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    // }

    setConfigurationGameOver() {
        // removeFunctionOnclick(gameFiledButtonPlay);
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
}