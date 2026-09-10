import {
    isElementsExistById, removeElementById,
    setElementTextById,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesStatisticsFraud from "../../common/variable/statistic/variablesStatisticsFraud.js";


export class ActionStatisticsFraud {

    setGameStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex) {
        this.setGameStatisticFraudCountedNumber(fraudCountedRoundNumber, fraudRoundIndex);
        this.setGameStatisticFraudCountedSumNumber(fraudCountedSumNumber);
    }


    setGameStatisticFraudCountedNumber(fraudCountedRoundNumber, fraudRoundIndex) {
        let result;
        if (fraudCountedRoundNumber < 10)
            result = valueToString(fraudCountedRoundNumber) + variablesStatisticsFraud.statisticsFraudCountNumberTextDisplayLessThanTen;
        else
            result = fraudCountedRoundNumber;

        let elementId = variablesStatisticsFraud.fraudCountRoundGamePlayUpdateNumberPrefix + fraudRoundIndex;
        let text = variablesStatisticsFraud.statisticsFraudCountNumberTextDisplay + result;
        setElementTextById(elementId, text);
    }

    setGameStatisticFraudCountedSumNumber(fraudCountedSumNumber) {
        setElementTextById(variablesStatisticsFraud.statisticsFraudBestGamePlay, fraudCountedSumNumber);
    }

    removeGameFieldStatisticsFraud() {
        if (isElementsExistById(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts))
            removeElementById(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts);
    }
}