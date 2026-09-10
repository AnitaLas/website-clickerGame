import {
    removeElementById,
    setElementTextById
} from "../../common/function/commonFunctions.js";

import * as variablesStatisticsTime from "../../common/variable/statistic/variablesStatisticsTime.js";
import * as variablesStatisticsFraud from "../../common/variable/statistic/variablesStatisticsFraud.js";


export class ActionStatisticsTime {

    removeContainersGameFiledStatistics() {
        removeElementById(variablesStatisticsTime.containerGameFiledStatisticsTimeParts);
        removeElementById(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts);
    }

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
}