import {getElementById, removeElementClassNameById, setElementClassNameById} from "../../common/function/commonFunctions.js";
import * as variablesGameButtons from "../../common/variable/clickerGame/variablesGameButtons.js";
import * as variableGameConfigurationRound from "../../common/variable/clickerGame/variableGameConfigurationRound.js";

export class ControllerGameButtonPlayStart {

    constructor(viewGameButtonsPlayStart, gameButtonsPlayStartAction, gameRoundAction) {
        this.viewGameButtonsPlayStart = viewGameButtonsPlayStart;
        this.gameButtonsPlayStartAction = gameButtonsPlayStartAction;
        this.gameRoundAction = gameRoundAction;
        this.onStart = null;
    }

    createGameButtonsView() {
        this.viewGameButtonsPlayStart.createGameFieldPButtonMainStart();
        this.configureStartButton();
    }

    setFunctionOnClickButton(buttonId, functionToCall) {
        const button = getElementById(buttonId);
        button.addEventListener("click", (event) => {
            functionToCall.call(this, event);
        });
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    setConfigurationStartForPlay(event) {
        // console.log("START GAME");
        this.setConfigurationButtonsFinalNumberForPlay();

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

    setConfigurationButtonsFinalNumberForPlay(){

        const max =  this.gameRoundAction.getButtonIdPMaxClicksNumberSetByUser();
        this.gameRoundAction.setButtonIdPMaxClicksNumberSetByUser();
        const buttonIdPrevious = this.gameRoundAction.getButtonIdPrevious();
        const currentButtonId =  this.gameRoundAction.getButtonIdCurrent();

        removeElementClassNameById(buttonIdPrevious, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
        removeElementClassNameById(max, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);
        setElementClassNameById(currentButtonId, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);
    }
}