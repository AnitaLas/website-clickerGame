import {
    createElementButton,
    createElementDivWithTheSameIdAndClassName, isElementsExistById, removeElementClassNameById, setElementClassNameById,
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

    setConfigurationButtonMainAfterClick(elementId) {
        removeElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationBeforeClick);
        setElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationAfterClick);
    }

    removeConfigurationButtonMainAfterClick(elementId) {
        // let buttonPlay = document.getElementById(elementId);
        // if (buttonPlay !== null) {
        if (!isElementsExistById(elementId)) {
            removeElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationAfterClick);
            setElementClassNameById(elementId, variablesGameButtons.gameFiledButtonMainTextDecorationBeforeClick);
        }
    }
}