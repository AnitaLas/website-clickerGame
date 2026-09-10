import {
    addEventListenerOnClickButton
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";

export class ControllerButtonStart {

    constructor(viewButtonStart, actionButtonStart) {
        this.viewButtonStart = viewButtonStart;
        this.actionButtonStart = actionButtonStart;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    createGameButtonsView() {
        this.viewButtonStart.createGameFieldPButtonMainStart();
        this.configureStartButton();
    }

    setConfigurationStartForPlay(event) {

        // console.log("button start clicked");

        if (this.onStart) {
            this.onStart();
        }
    }

    configureStartButton() {
        addEventListenerOnClickButton(
            variablesGameButtons.buttonMainStart,
            this.setConfigurationStartForPlay,
            this
        );
    }
}