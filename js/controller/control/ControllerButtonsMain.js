export class ControllerButtonsMain {

    constructor(controllerButtonsRound, controllerButtonStart, controllerButtonStop, controllerButtonClickColor) {
        this.controllerButtonsRound = controllerButtonsRound;
        this.controllerButtonStart = controllerButtonStart;
        this.controllerButtonStop = controllerButtonStop;
        this.controllerButtonClickColor = controllerButtonClickColor;
    }

    setOnStart(onStart) {
        this.controllerButtonStart.setOnStart(onStart);
    }

    setOnClickColor(onClickColor) {
        this.controllerButtonClickColor.setOnClickColor(onClickColor);
    }

    setConfigurationForButtons() {
        this.createButtonsStop();
        this.setConfigurationForRoundNumber();
        // this.setConfigurationForButtonClickColor();
    }

    createButtonsStop() {
        this.controllerButtonStop.createButtonsStop();
    }

    setConfigurationForRoundNumber() {
        this.controllerButtonsRound.setConfigurationButtonsFinalNumberForPlay();
    }

    configureClickColor() {
        this.controllerButtonClickColor.configureButtonClickColor();
    }

    getMaxClicksNumberSetByUser() {
        return this.controllerButtonsRound.getMaxClicksNumberSetByUser();
    }

    configureButtonsAfterGameOver(){
        this.removeEventListenerOnClickButtonClickColor();
        this.configureClickColorGameOver();
        this.setIconsColorAfterGameOver();
    }

    removeEventListenerOnClickButtonClickColor() {
        this.controllerButtonClickColor.removeEventListenerOnClickButtonClickColor();
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
    }

    setConfigurationButtonsAfterClickPlay(){
        this.controllerButtonStart.setConfigurationAfterClick();
    }

    // setConfigurationButtonsAfterClickStop(){
    //     this.controllerButtonStart.setConfigurationBeforeClick();
    //     this.controllerButtonStop.setConfigurationAfterClick();
    // }


}

