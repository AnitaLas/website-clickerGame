import {
    setElementTextById,
    valueToString
} from "../../common/function/commonFunctions";

import * as variablesStatisticsFraud from "../../common/variable/statistic/variablesStatisticsFraud";


export class ActionStatisticsFraud {

    setGameStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber) {
        this.getGameStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber);
        this.setGameStatisticFraudCountedNumber();
        this.setGameStatisticFraudCountedSumNumber();
        // this.setGameSConfigurationStatisticFraud();
    }

    getGameStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber) {
        return fraudCountedSumNumber += fraudCountedNumber;
    }

    // setGameSConfigurationStatisticFraud(fraudCountRoundIndex, fraudCountedNumber) {
    //     // fraudCountRoundIndex++;
    //     // fraudCountedNumber = 0;
    // }

    setGameStatisticFraudCountedNumber(fraudCountedNumber, fraudCountRoundIndex) {
        let result;
        if (fraudCountedNumber < 10) result = valueToString(fraudCountedNumber) + variablesStatisticsFraud.statisticsFraudCountNumberTextDisplayLessThanTen; else result = fraudCountedNumber;

        let elementId = variablesStatisticsFraud.fraudCountRoundGamePlayUpdateNumberPrefix + fraudCountRoundIndex;
        let text = variablesStatisticsFraud.statisticsFraudCountNumberTextDisplay + result;
        setElementTextById(elementId, text);
    }

    setGameStatisticFraudCountedSumNumber(fraudCountedSumNumber) {
        setElementTextById(variablesStatisticsFraud.statisticsFraudBestGamePlay, fraudCountedSumNumber);
    }
}