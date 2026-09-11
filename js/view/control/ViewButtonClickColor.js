import {ViewButtons} from "./ViewButtons.js";

import {
    createElementDiv,
    createElementButton,
    setElementClassNameById,
    setElementTextById,
    removeElementClassNameById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";
import * as variablesMain from "../../common/variable/main/variablesMain.js";


export class ViewButtonClickColor extends ViewButtons {

    createButton() {
        this.createContainerMain();
        this.createContainerParts();
    }

    createContainerMain() {
        createElementDiv(variablesGameButtons.containerGameFiledButtonMain, variablesGameButtons.containerGameFiledButtonsMainParts);
    }

    createContainerParts() {
        createElementButton(variablesGameButtons.containerGameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlay);
        setElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlay);
    }

    setButtonClickColorRandom(gameRandomColor) {
        variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, gameRandomColor);
    }

    setButtonClickColorAtStart() {
        this.setButtonClickColorRandom(variablesMain.gameFiledButtonPlayStartColor);
    }

    setConfigurationGameOver() {
        setElementTextById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOverTextDisplay);
        setElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOver);
        // this.setConfigurationButtonClickColorGameOver();
    }

    // setConfigurationButtonClickColorGameOver() {
    //     this.setConfigurationButtonsBeforeClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    //     setElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    // }

    removeConfigurationGameOver() {
        setElementTextById(variablesGameButtons.gameFiledButtonPlay, "");
        removeElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOver);
    }
}