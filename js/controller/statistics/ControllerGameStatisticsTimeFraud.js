


export class ControllerGameStatisticsTimeFraud {

    constructor(viewGameStatisticsTimeFraud, gameStatisticsTimeFrauAction) {
        this.viewGameStatisticsTimeFraud = viewGameStatisticsTimeFraud;
        this.gameStatisticsTimeFrauAction = gameStatisticsTimeFrauAction;
    }

    // createConfigurationGameStatisticsTimeFraud() {
    //     this.viewGameStatisticsTimeFraud.createGameFieldStatisticsFraud();
    // }

    createConfigurationGameStatisticsTimeFraud(maxClicksNumber) {
        this.viewGameStatisticsTimeFraud.createGameFieldStatisticsFraud(
            maxClicksNumber
        );
    }
}