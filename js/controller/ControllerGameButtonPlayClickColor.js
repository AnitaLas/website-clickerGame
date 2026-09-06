import {
    getElementById
} from "../common/function/commonFunctions.js";


export class ControllerGameButtonPlayClickColor {

    constructor(viewGameButtonsPlayClickColor, gameButtonPlayClickColorAction, gameRoundAction) {
        this.viewGameButtonsPlayClickColor = viewGameButtonsPlayClickColor;
        // this.gameButtonPlayClickColorAction = gameButtonPlayClickColorAction;
        // this.gameRoundAction = gameRoundAction;
    }

    createGameButtonsView() {
        this.viewGameButtonsPlayClickColor.createViewGameButtonPlay();
        // this.configureStartButton();
    }


    setFunctionOnClickButton(buttonId, functionToCall) {
        const button = getElementById(buttonId);
        button.addEventListener("click", (event) => {
            functionToCall.call(this, event);
        });
    }

    setConfigurationStopForPlay(event) {
        console.log("STOP GAME ");


        // this.createGameFieldPButtonMainStop();

    }
}