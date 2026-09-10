import {
    isElementsExistById,
    removeElementById,
    setElementTextById
} from "../../common/function/commonFunctions.js";

import * as variablesStatisticsTime from "../../common/variable/statistic/variablesStatisticsTime.js";


export class ActionStatisticsTime {

    setGameStatisticTimeData(statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax, statisticTimeInSecondsBest){
        this.setStatisticTimeInSecondsMin(statisticTimeInSecondsMin);
        this.setStatisticTimeInSecondsAvg(statisticTimeInSecondsAvg);
        this.setStatisticTimeInSecondsMax(statisticTimeInSecondsMax);
        this.setStatisticTimeInSecondsBest(statisticTimeInSecondsBest);
    }

    setStatisticTimeInSecondsMin(statisticTimeInSecondsMin) {
        setElementTextById(variablesStatisticsTime.statisticsTimeMinGamePlay, statisticTimeInSecondsMin);
    }

    setStatisticTimeInSecondsAvg(statisticTimeInSecondsAvg) {
        setElementTextById(variablesStatisticsTime.statisticsTimeAvgGamePlay, statisticTimeInSecondsAvg);
    }

    setStatisticTimeInSecondsMax(statisticTimeInSecondsMax) {
        setElementTextById(variablesStatisticsTime.statisticsTimeMaxGamePlay, statisticTimeInSecondsMax);
    }

    setStatisticTimeInSecondsBest(statisticTimeInSecondsBest) {
        setElementTextById(variablesStatisticsTime.statisticsTimeBestGamePlay, statisticTimeInSecondsBest);
    }

    removeGameFieldStatisticsTime() {
        if (isElementsExistById(variablesStatisticsTime.containerGameFiledStatisticsTimeParts))
            removeElementById(variablesStatisticsTime.containerGameFiledStatisticsTimeParts);
    }
}