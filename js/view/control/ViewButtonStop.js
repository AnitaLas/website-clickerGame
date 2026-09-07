import {ViewButtons} from "./ViewButtons.js";

import {
    isElementsExistById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";


export class ViewButtonStop extends ViewButtons {

    createGameFieldPButtonMainStop() {
        let result = isElementsExistById(variablesGameButtons.containerGameFiledButtonsMainStop);
        if (!result) {
            this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStop, variablesGameButtons.gameFiledButtonMainStop);
            // this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.buttonMainStop, variablesGameButtons.functionNameOnclickPlayGameColorStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay)
            this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.buttonMainStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay)
        }
    }
}