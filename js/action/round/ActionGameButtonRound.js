import {
    getElementAttributeValueById,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variableGameConfigurationRound from "../../common/variable/clickerGame/variableGameConfigurationRound.js";

export class ActionGameButtonRound {

    buttonIdPrevious = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(5)
    buttonIdCurrent = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(5);
    buttonIdMaxClicksNumberSetByUser = this.buttonIdCurrent;

    setConfigurationButtonIdClickedCurrent(event) {
        this.buttonIdPrevious = this.buttonIdCurrent;
        this.buttonIdCurrent = event.currentTarget.id;
    }

    getButtonIdCurrent(){
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

    getMaxClicksNumberSetByUser() {
        return getElementAttributeValueById(this.buttonIdPrevious);
    }
}