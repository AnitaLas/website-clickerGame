export class ControllerStatisticsTime {

    constructor(viewStatisticsTime, actionStatisticsTime) {
        this.viewStatisticsTime = viewStatisticsTime;
        this.actionStatisticsTime = actionStatisticsTime;
    }

    createGameFieldStatisticsTime() {
        this.viewStatisticsTime.createGameFieldStatisticsTime();
    }

    removeGameFieldStatisticsTime() {
        this.actionStatisticsTime.removeGameFieldStatisticsTime();
    }

    setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest) {
        this.actionStatisticsTime.setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest);
    }
}