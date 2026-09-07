export class ControllerStatisticsMain {

    constructor(controllerStatisticsTime, controllerStatisticsFraud) {
        this.controllerStatisticsTime = controllerStatisticsTime;
        this.controllerStatisticsFraud = controllerStatisticsFraud;
    }

    createConfigurationStatisticsTime() {
        this.controllerStatisticsTime.createConfigurationGameStatisticsTimeGeneral();
    }

    createConfigurationStatisticsFraud(maxClicksNumber) {
        this.controllerStatisticsFraud.createConfigurationGameStatisticsTimeFraud(maxClicksNumber);
    }

    createConfigurationStatisticsMain(maxClicksNumber) {
        this.createConfigurationStatisticsTime();
        this.createConfigurationStatisticsFraud(maxClicksNumber);
    }
}