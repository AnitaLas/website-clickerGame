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

    setConfigurationAfterClickStop() {
        this.controllerButtonStop.setConfigurationAfterClick();
        this.controllerButtonStart.setConfigurationBeforeClick();

        this.removeConfigurationForRoundNumber();

        this.removeEventListenerOnClickButtonStop();
        this.removeEventListenerOnClickButtonClickColor();
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

    setConfigurationForRoundNumber() {
        this.controllerButtonsRound.setConfigurationButtonsFinalNumberForPlay();
    }

    removeConfigurationForRoundNumber() {
        this.controllerButtonsRound.removeConfigurationButtonsFinalNumberForPlay();
    }

    configureButtonsAfterGameOver() {
        this.removeConfigurationForRoundNumber();

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