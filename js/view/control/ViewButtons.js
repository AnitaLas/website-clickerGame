import {
    createElementButton,
    createElementDivWithTheSameIdAndClassName,
    setElementClassNamedAndText
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";

export class ViewButtons {

    createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, containerGameFiledButtonsMainStartTextDisplay) {
        createElementButton(gameFiledButtonMainStart, buttonMainStart);
        setElementClassNamedAndText(buttonMainStart, variablesGameButtons.gameFiledButtonMain, containerGameFiledButtonsMainStartTextDisplay);
    }

    createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
        createElementDivWithTheSameIdAndClassName(variablesGameButtons.containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStart);
        createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    }
}