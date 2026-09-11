export class ControllerButtonsMain {

    constructor(controllerButtonsRound, controllerButtonStart, controllerButtonStop, controllerButtonClickColor) {
        this.controllerButtonsRound = controllerButtonsRound;
        this.controllerButtonStart = controllerButtonStart;
        this.controllerButtonStop = controllerButtonStop;
        this.controllerButtonClickColor = controllerButtonClickColor;
    }

    setOnClickColor(onClickColor) {
        this.controllerButtonClickColor.setOnClickColor(onClickColor);
    }

    setOnStart(onStart) {
        this.controllerButtonStart.setOnStart(onStart);
    }

    setOnStop(onStop) {
        this.controllerButtonStop.setOnStop(onStop);

    }

    configureButtonStop() {
        // this.controllerButtonStop.setOnStop(() =>
        //     this.setConfigurationAfterClickStop());
    }

    setConfigurationAfterClickStop() {
        this.controllerButtonStop.setConfigurationAfterClick();
        this.controllerButtonStart.setConfigurationBeforeClick();

        this.removeEventListenerOnClickButtonStop();
        this.removeEventListenerOnClickButtonClickColor();
    }

    setConfigurationForButtonStop() {
        // this.createButtonsStop();
        // this.configureButtonStop();
    }

    createButtonsStop() {
        this.controllerButtonStop.createButtonsStop();
    }

    configureClickColor() {
        this.controllerButtonClickColor.configureButtonClickColor();
    }

    getMaxClicksNumberSetByUser() {
        return this.controllerButtonsRound.getMaxClicksNumberSetByUser();
    }

    configureButtonsAfterGameOver() {
        this.removeEventListenerOnClickButtonClickColor();
        this.configureClickColorGameOver();
        this.setIconsColorAfterGameOver();
    }

    removeEventListenerOnClickButtonClickColor() {
        this.controllerButtonClickColor.removeEventListenerOnClickButtonClickColor();
    }

    removeEventListenerOnClickButtonStop() {
        this.controllerButtonStop.removeEventListenerOnClickButtonStop();
    }

    configureClickColorGameOver() {
        this.controllerButtonClickColor.configureClickColorGameOver();
    }

    setIconsColorAfterGameOver() {
        this.controllerButtonStart.setConfigurationBeforeClick();
        this.controllerButtonStop.setConfigurationBeforeClick();
    }

    setButtonClickColorAtStart() {
        this.controllerButtonClickColor.setButtonClickColorAtStart();
    }

    setButtonClickColorRandom(gameRandomColor) {
        this.controllerButtonClickColor.setButtonClickColorRandom(gameRandomColor);
    }

    setConfigurationButtonsAtStart() {
        this.controllerButtonClickColor.removeConfigurationGameOver();
        this.controllerButtonStart.setConfigurationAfterClick();
        this.controllerButtonStop.setConfigurationBeforeClick();
    }
}