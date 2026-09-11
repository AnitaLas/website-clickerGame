import {
    addEventListenerOnClickButton,
    removeEventListenerOnClickButton
} from "../../common/function/commonFunctions.js";

import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";

export class ControllerButtonStop {

    constructor(viewButtonStop, actionButtonStop) {
        this.viewButtonStop = viewButtonStop;
        this.actionButtonStop = actionButtonStop;
        this.onStop = null;
        this.buttonClickEvent = null;
    }

    createButtonsStop() {
        this.viewButtonStop.createGameFieldPButtonMainStop();
        this.configureButtonStop();
    }

    setOnStop(onStop) {
        this.onStop = onStop;
    }

    setConfigurationStopForPlay() {
        if (this.onStop) {
            this.onStop();
        }
    }

    configureButtonStop() {
        this.buttonClickEvent =
            addEventListenerOnClickButton(
                variablesGameButtons.buttonMainStop,
                this.setConfigurationStopForPlay,
                this
            );
    }

    removeEventListenerOnClickButtonStop() {

        removeEventListenerOnClickButton(
            variablesGameButtons.buttonMainStop,
            this.buttonClickEvent
        );

        this.buttonClickEvent = null;
    }

    setConfigurationAfterClick() {
        this.viewButtonStop.setIconColorAfterClick();
    }

    setConfigurationBeforeClick() {
        this.viewButtonStop.setIconColorBeforeClick();
        this.viewButtonStop.removeConfigurationButtonStop();
    }

    setConfigurationGameOver() {
        this.viewButtonStop.setConfigurationGameOver();
    }
}