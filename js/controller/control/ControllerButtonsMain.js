export class ControllerButtonsMain {

    constructor(controllerButtonsRound, controllerButtonStart, controllerButtonStop, controllerButtonClickColor) {
        this.controllerButtonsRound = controllerButtonsRound;
        this.controllerButtonStart = controllerButtonStart;
        this.controllerButtonStop = controllerButtonStop;
        this.controllerButtonClickColor = controllerButtonClickColor;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.controllerButtonStart.setOnStart(onStart);
    }

    setConfigurationForButtons() {
        this.createButtonsStop();
        this.setConfigurationForRoundNumber();
    }

    createButtonsStop() {
        this.controllerButtonStop.createButtonsStop();
    }

    setConfigurationForRoundNumber() {
        this.controllerButtonsRound.setConfigurationButtonsFinalNumberForPlay()
    }

    getMaxClicksNumberSetByUser() {
        return this.controllerButtonsRound.getMaxClicksNumberSetByUser();
    }
}