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

    createGameButtonsView() {
        this.viewButtonStart.createGameFieldPButtonMainStart();
        this.configureStartButton();
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    setConfigurationStartForPlay(event) {
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

    setConfigurationAfterClick() {
        this.viewButtonStart.setIconColorAfterClick();
    }

    setConfigurationBeforeClick() {
        this.viewButtonStart.setIconColorBeforeClick();
    }
}