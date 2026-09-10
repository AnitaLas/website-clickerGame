import {ViewButtons} from "./ViewButtons.js";

import {
    removeElementClassNameById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";


export class ViewButtonStart extends ViewButtons {

    createGameFieldPButtonMainStart() {
        this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStart, variablesGameButtons.gameFiledButtonMainStart);
        this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStart, variablesGameButtons.buttonMainStart, variablesGameButtons.containerGameFiledButtonsMainStartTextDisplay)
    }

    setConfigurationButtonMainGameStart() {
        this.setConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStartTextDisplayId);
        this.removeConfigurationButtonMainAfterClick(variablesGameButtons.containerGameFiledButtonsMainStopTextDisplayId);
        removeElementClassNameById(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.gameFiledButtonMainInactive);
    }
}