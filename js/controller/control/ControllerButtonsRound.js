import {
    getElementById,
    removeElementClassNameById,
    setElementClassNameById,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variableButtonRound from "../../common/variable/control/variableButtonRound.js";


export class ControllerButtonsRound {

    constructor(viewButtonsRound, actionButtonsRound) {
        this.viewButtonsRound = viewButtonsRound;
        this.actionButtonsRound = actionButtonsRound;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    createConfigurationRound() {
        this.viewButtonsRound.createViewGameConfigurationRound();
        this.setButtonsConfigurationRound();
    }

    setButtonsConfigurationRound() {

        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {

            const buttonId = variableButtonRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber);
            const button = getElementById(buttonId);

            button.addEventListener("click", (event) => {
                this.setConfigurationClickNumberRoundButtons(event);
            });
        }
    }

    setConfigurationClickNumberRoundButtons(event) {
        const buttonIdPrevious = this.actionButtonsRound.getButtonIdCurrent();
        this.actionButtonsRound.setConfigurationButtonIdClickedCurrent(event);
        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();

        removeElementClassNameById(buttonIdPrevious, variableButtonRound.menuGameConfigurationButtonCurrentNumber);
        setElementClassNameById(currentButtonId, variableButtonRound.menuGameConfigurationButtonCurrentNumber);
    }

    getMaxClicksNumberSetByUser() {
        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();
        return this.viewButtonsRound.getMaxClicksNumberSetByUser(currentButtonId);
    }

    setConfigurationButtonsFinalNumberForPlay() {

        const roundNumberFinal = this.actionButtonsRound.getButtonIdPMaxClicksNumberSetByUser();
        this.actionButtonsRound.setButtonIdPMaxClicksNumberSetByUser();
        const buttonIdPrevious = this.actionButtonsRound.getButtonIdPrevious();
        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();

        removeElementClassNameById(buttonIdPrevious, variableButtonRound.menuGameConfigurationButtonCurrentNumber);
        removeElementClassNameById(roundNumberFinal, variableButtonRound.menuGameConfigurationButtonChosenNumber);
        setElementClassNameById(currentButtonId, variableButtonRound.menuGameConfigurationButtonChosenNumber);
    }

    // setFunctionOnClickButton(buttonId, functionToCall) {
    //     const button = getElementById(buttonId);
    //     button.addEventListener("click", (event) => {
    //         functionToCall.call(this, event);
    //     });
    // }

    // setConfigurationRoundNumberForGame(event) {
    //     // console.log("START GAME");
    //     this.setConfigurationButtonsFinalNumberForPlay();
    //
    //     if (this.onStart) {
    //         this.onStart();
    //     }
    // }

    // configureStartButton() {
    //     this.setFunctionOnClickButton(
    //         variablesGameButtons.buttonMainStart,
    //         this.setConfigurationRoundNumberForGame
    //     );
    // }
}