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

    configureClickColorGameOver(){
        this.controllerButtonClickColor.configureClickColorGameOver();
    }

    getMaxClicksNumberSetByUser() {
        return this.controllerButtonsRound.getMaxClicksNumberSetByUser();
    }

}