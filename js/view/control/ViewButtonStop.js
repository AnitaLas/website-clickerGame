import {ViewButtons} from "./ViewButtons.js";

import {
    isElementsExistById,
    removeElementClassNameById,
    setElementClassNameById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";


export class ViewButtonStop extends ViewButtons {

    createGameFieldPButtonMainStop() {
        if (!isElementsExistById(variablesGameButtons.containerGameFiledButtonsMainStop)) {
            this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStop, variablesGameButtons.gameFiledButtonMainStop);
            this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.buttonMainStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay);
        }
    }

    setIconColorAfterClick() {
        this.setConfigurationButtonsAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
    }

    setIconColorBeforeClick() {
        if (isElementsExistById(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId))
            this.setConfigurationButtonsBeforeClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
    }

    setConfigurationGameOver() {
        this.setConfigurationButtonsBeforeClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
        setElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    }

    removeConfigurationButtonStop(){
        if (isElementsExistById(variablesGameButtons.gameFiledButtonMainStop))
        removeElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    }
}