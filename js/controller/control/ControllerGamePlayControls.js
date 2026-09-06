

export class ControllerGamePlayControls {

    constructor(controllerGameButtonRound, gameButtonPlayStartController, gameButtonsPlayStopController, gameStatisticsTimeGeneralController, gameStatisticsTimeFraudController) {
        this.controllerGameButtonRound = controllerGameButtonRound;
        this.gameButtonPlayStartController = gameButtonPlayStartController;
        this.gameButtonsPlayStopController = gameButtonsPlayStopController;
        // this.gameStatisticsTimeGeneralController = gameStatisticsTimeGeneralController;
        // this.gameStatisticsTimeFraudController = gameStatisticsTimeFraudController;
    }


    configureStartButton(){
        this.gameButtonPlayStartController.setOnStart(
        () => this.createButtonsStop()
        );
    }

    createButtonsStop(){
        this.gameButtonsPlayStopController.createButtonsStop();
    }

    getMaxClicksNumberSetByUser(){
        return this.controllerGameButtonRound.getMaxClicksNumberSetByUser();
    }



}