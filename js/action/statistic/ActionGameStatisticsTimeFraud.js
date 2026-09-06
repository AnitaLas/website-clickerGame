import {setElementTextById, valueToString} from "../../common/function/commonFunctions";
import * as variablesGameStatisticsTimeFraud from "../../common/variable/clickerGame/variablesGameStatisticsTimeFraud";


export  class ActionGameStatisticsTimeFraud{

    setGameStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber) {
        this.getGameStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber);
        this.setGameStatisticFraudCountedNumber();
        this.setGameStatisticFraudCountedSumNumber();
        this.setGameSConfigurationStatisticFraud();
    }

    getGameStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber) {
        return fraudCountedSumNumber += fraudCountedNumber;
    }

    setGameSConfigurationStatisticFraud(fraudCountRoundIndex, fraudCountedNumber) {
        fraudCountRoundIndex++;
        fraudCountedNumber = 0;
    }

    setGameStatisticFraudCountedNumber(fraudCountedNumber, fraudCountRoundIndex) {
        let result;
        if (fraudCountedNumber < 10)
            result = valueToString(fraudCountedNumber) + variablesGameStatisticsTimeFraud.statisticsFraudCountNumberTextDisplayLessThanTen;
        else
            result = fraudCountedNumber;

        let elementId = variablesGameStatisticsTimeFraud.fraudCountRoundGamePlayUpdateNumberPrefix + fraudCountRoundIndex;
        let text = variablesGameStatisticsTimeFraud.statisticsFraudCountNumberTextDisplay + result;
        setElementTextById(elementId, text);
    }

    setGameStatisticFraudCountedSumNumber(fraudCountedSumNumber) {
        setElementTextById(variablesGameStatisticsTimeFraud.statisticsFraudBestGamePlay, fraudCountedSumNumber);
    }







}