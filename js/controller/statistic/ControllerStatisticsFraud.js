export class ControllerStatisticsFraud {

    constructor(viewStatisticsFraud, actionStatisticsTime) {
        this.viewStatisticsFraud = viewStatisticsFraud;
        this.actionStatisticsTime = actionStatisticsTime;
    }

    createConfigurationGameStatisticsTimeFraud(maxClicksNumber) {
        this.viewStatisticsFraud.createGameFieldStatisticsFraud(
            maxClicksNumber
        );
    }
}