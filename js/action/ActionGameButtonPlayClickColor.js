import {
    removeElementById,
    removeElementClassNameById,
    setElementClassNameById
} from "../common/function/commonFunctions.js";
import * as variablesGameButtons from "../common/variable/clickerGame/variablesGameButtons.js";

export class ActionGameButtonPlayClickColor {

    removeContainersGameFiledButtonsMainStop() {
        removeElementById(variablesGameButtons.containerGameFiledButtonsMainStop);
    }

    setConfigurationButtonMainAfterClick(elementId) {
        removeElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationBeforeClick);
        setElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationAfterClick);
    }

    removeConfigurationButtonMainAfterClick(elementId) {
        let buttonPlay = document.getElementById(elementId);
        if (buttonPlay !== null) {
            removeElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationAfterClick);
            setElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationBeforeClick);
        }
    }

    setConfigurationButtonMainGameOver() {
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
        setElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
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
}