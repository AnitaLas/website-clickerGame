import {
    getElementById
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";

export class ControllerButtonStart {

    constructor(viewButtonStart, actionButtonStart, actionButtonsRound) {
        this.viewButtonStart = viewButtonStart;
        this.actionButtonStart = actionButtonStart;
        this.actionButtonsRound = actionButtonsRound;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }


    createGameButtonsView() {
        this.viewButtonStart.createGameFieldPButtonMainStart();
        this.configureStartButton();
    }

    setFunctionOnClickButton(buttonId, functionToCall) {
        const button = getElementById(buttonId);
        button.addEventListener("click", (event) => {
            functionToCall.call(this, event);
        });
    }


    setConfigurationStartForPlay(event) {
        // console.log("START GAME");
        // this.setConfigurationButtonsFinalNumberForPlay();

        if (this.onStart) {
            this.onStart();
        }

    }

    configureStartButton() {
        this.setFunctionOnClickButton(
            variablesGameButtons.buttonMainStart,
            this.setConfigurationStartForPlay
        );
    }

    // setConfigurationButtonsFinalNumberForPlay(){
    //
    //     const roundNumberFinal =  this.gameRoundAction.getButtonIdPMaxClicksNumberSetByUser();
    //     this.gameRoundAction.setButtonIdPMaxClicksNumberSetByUser();
    //     const buttonIdPrevious = this.gameRoundAction.getButtonIdPrevious();
    //     const currentButtonId =  this.gameRoundAction.getButtonIdCurrent();
    //
    //     removeElementClassNameById(buttonIdPrevious, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
    //     removeElementClassNameById(roundNumberFinal, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);
    //     setElementClassNameById(currentButtonId, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);
    // }
}