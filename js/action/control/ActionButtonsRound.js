import {
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variableButtonRound from "../../common/variable/control/variableButtonRound.js";

export class ActionButtonsRound {

    buttonIdPrevious = variableButtonRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(5)
    buttonIdCurrent = variableButtonRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(5);
    buttonIdMaxClicksNumberSetByUser = this.buttonIdCurrent;

    setConfigurationButtonIdClickedCurrent(event) {
        this.buttonIdPrevious = this.buttonIdCurrent;
        this.buttonIdCurrent = event.currentTarget.id;
    }

    getButtonIdCurrent() {
        return this.buttonIdCurrent;
    }

    getButtonIdPrevious() {
        return this.buttonIdPrevious;
    }

    setButtonIdChosenFinaRoundNumberForGame() {
        this.buttonIdPrevious = this.buttonIdCurrent;
    }

    setButtonIdPMaxClicksNumberSetByUser() {
        this.buttonIdMaxClicksNumberSetByUser = this.buttonIdCurrent;
    }

    getButtonIdPMaxClicksNumberSetByUser() {
        return this.buttonIdMaxClicksNumberSetByUser;
    }
}