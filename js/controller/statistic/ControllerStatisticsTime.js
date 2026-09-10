export class ControllerStatisticsTime {

    constructor(viewStatisticsTime, actionStatisticsTime) {
        this.viewStatisticsTime = viewStatisticsTime;
        this.actionStatisticsTime = actionStatisticsTime;
    }

    createConfigurationGameStatisticsTimeGeneral() {
        this.viewStatisticsTime.createGameFieldStatisticsTime();
    }

    setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest){
        this.actionStatisticsTime.setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest);
    }
}