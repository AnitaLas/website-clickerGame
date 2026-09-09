export class ControllerStatisticsFraud {

    constructor(viewStatisticsFraud, actionStatisticsFraud) {
        this.viewStatisticsFraud = viewStatisticsFraud;
        this.actionStatisticsFraud = actionStatisticsFraud;
    }

    createConfigurationGameStatisticsTimeFraud(maxClicksNumber) {
        this.viewStatisticsFraud.createGameFieldStatisticsFraud(
            maxClicksNumber
        );
    }

    setGameStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber, fraudCountRoundIndex){
        this.actionStatisticsFraud.setGameStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber, fraudCountRoundIndex);
    }
}