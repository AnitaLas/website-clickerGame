import {ViewButtons} from "./ViewButtons.js";

import {
    isElementsExistById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";


export class ViewButtonStop extends ViewButtons {

    createGameFieldPButtonMainStop() {
        if (!isElementsExistById(variablesGameButtons.containerGameFiledButtonsMainStop)) {
            this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStop, variablesGameButtons.gameFiledButtonMainStop);
            this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.buttonMainStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay);
        }
    }

    setConfigurationButtonMainGameStop() {
        this.setConfigurationButtonsAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
        this.setConfigurationButtonsBeforeClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
    }

    setIconColorAfterClick() {
        this.setConfigurationButtonsAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
    }

    setIconColorBeforeClick() {
        if(isElementsExistById(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId))
        this.setConfigurationButtonsBeforeClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
    }
}