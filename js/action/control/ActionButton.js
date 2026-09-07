import {
    removeElementClassNameById,
    setElementClassNameById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";


export class ActionButton {

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
}