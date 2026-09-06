import * as variableGameConfigurationRound from "../../common/variable/clickerGame/variableGameConfigurationRound.js";

import {
    removeElementClassNameById, setElementClassNameById, valueToString
} from "../../common/function/commonFunctions.js";


export class ControllerGameButtonRound {

    constructor(viewGameConfigurationRound, gameRoundAction) {
        this.viewGameConfigurationRound = viewGameConfigurationRound;
        this.gameRoundAction = gameRoundAction;
    }

    createConfigurationRound() {
        this.viewGameConfigurationRound.createViewGameConfigurationRound();
        this.setButtonsConfigurationRound();
    }

    setButtonsConfigurationRound() {

        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {

            const buttonId = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber);
            const button = document.getElementById(buttonId);

            button.addEventListener("click", (event) => {
                this.setConfigurationClickNumberRoundButtons(event);
            });
        }
    }

    setConfigurationClickNumberRoundButtons(event) {
        const buttonIdPrevious = this.gameRoundAction.getButtonIdCurrent();
        this.gameRoundAction.setConfigurationButtonIdClickedCurrent(event);
        const currentButtonId = this.gameRoundAction.getButtonIdCurrent();

        removeElementClassNameById(buttonIdPrevious, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
        setElementClassNameById(currentButtonId, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
    }

    getMaxClicksNumberSetByUser(){
        return this.gameRoundAction.getMaxClicksNumberSetByUser();
    }
}