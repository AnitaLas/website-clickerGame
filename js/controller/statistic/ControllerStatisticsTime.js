export class ControllerStatisticsTime {

    constructor(viewStatisticsTime, actionStatisticsTime) {
        this.viewStatisticsTime = viewStatisticsTime;
        this.actionStatisticsTime = actionStatisticsTime;
    }

    createConfigurationGameStatisticsTimeGeneral() {
        this.viewStatisticsTime.createGameFieldStatisticsTime();
    }
}