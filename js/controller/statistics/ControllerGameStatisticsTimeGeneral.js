

export class ControllerGameStatisticsTimeGeneral {

    constructor(viewGameStatisticsTimeGeneral, gameStatisticsTimeGeneralAction) {
        this.viewGameStatisticsTimeGeneral = viewGameStatisticsTimeGeneral;
        this.gameStatisticsTimeGeneralAction = gameStatisticsTimeGeneralAction;
    }

    createConfigurationGameStatisticsTimeGeneral() {
        this.viewGameStatisticsTimeGeneral.createGameFieldStatisticsTime();
    }
}