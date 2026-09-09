import {
    removeElementById,
    setElementTextById,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesStatisticsTime from "../../common/variable/statistic/variablesStatisticsTime.js";
import * as variablesStatisticsFraud from "../../common/variable/statistic/variablesStatisticsFraud.js";


export class ActionStatisticsTime {

    removeContainersGameFiledStatistics() {
        removeElementById(variablesStatisticsTime.containerGameFiledStatisticsTimeParts);
        removeElementById(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts);
    }





    setGameStatisticFraudCountedNumber(fraudCountedNumber, fraudCountRoundIndex) {
        let result;
        if (fraudCountedNumber < 10)
            result = valueToString(fraudCountedNumber) + variablesStatisticsFraud.statisticsFraudCountNumberTextDisplayLessThanTen;
        else
            result = fraudCountedNumber;

        let elementId = variablesStatisticsFraud.fraudCountRoundGamePlayUpdateNumberPrefix + fraudCountRoundIndex;
        let text = variablesStatisticsFraud.statisticsFraudCountNumberTextDisplay + result;
        setElementTextById(elementId, text);
    }

    setGameStatisticFraudCountedSumNumber(fraudCountedSumNumber) {
        setElementTextById(variablesStatisticsFraud.statisticsFraudBestGamePlay, fraudCountedSumNumber);
    }


//
//     // setGameRandomTimeInMillisecondsToChangeColor() {
//     //     let randomSecond = getRandomNumber(gameRandomTimeMaxSecond) + 1;
//     //     gameRandomTimeToChangeColor = randomSecond * 1000;
//     // }
//
// // function getGameStatisticTimeInSeconds(timeInMilliseconds) {
// //     return (timeInMilliseconds / 1000).toFixed(4);
// // }
//
//     setGameStatisticTimeMinInSeconds() {
//         let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeMinInMilliseconds);
//         setElementTextById(statisticsTimeMinGamePlay, timeInSeconds);
//     }
//
//     setGameStatisticTimeAvgInSeconds() {
//         let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeAvgInMilliseconds);
//         setElementTextById(statisticsTimeAvgGamePlay, timeInSeconds);
//     }
//
//     setGameStatisticTimeMaxInSeconds() {
//         let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeMaxInMilliseconds);
//         setElementTextById(statisticsTimeMaxGamePlay, timeInSeconds);
//     }
//
//     setGameStatisticTimeBestInSeconds() {
//         let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeBestInMilliseconds);
//         setElementTextById(statisticsTimeBestGamePlay, timeInSeconds);
//     }
//
//     setGameStatisticTimeInSeconds() {
//         setGameStatisticTimeMinInSeconds();
//         setGameStatisticTimeAvgInSeconds();
//         setGameStatisticTimeMaxInSeconds();
//         setGameStatisticTimeBestInSeconds();
//     }
//
//     setGameStatisticTimeMinInMilliseconds() {
//         if (gameStatisticTimeMinInMilliseconds > reactionTime)
//             gameStatisticTimeMinInMilliseconds = reactionTime;
//     }
//
//     setGameStatisticTimeSumInMilliseconds() {
//         gameStatisticTimeSumInMilliseconds += reactionTime;
//     }
//
//     setGameStatisticTimeAvgInMilliseconds() {
//         gameStatisticTimeAvgInMilliseconds = gameStatisticTimeSumInMilliseconds / countedClicksNumber;
//     }
//
//     setGameStatisticTimeMaxInMilliseconds() {
//         if (gameStatisticTimeMaxInMilliseconds < reactionTime)
//             gameStatisticTimeMaxInMilliseconds = reactionTime;
//     }
//
//     setGameStatisticTimeBestInMilliseconds() {
//         if (gameStatisticTimeBestInMilliseconds > gameStatisticTimeMinInMilliseconds)
//             gameStatisticTimeBestInMilliseconds = gameStatisticTimeMinInMilliseconds;
//     }
//
//     setGameStatisticTimeInMilliseconds() {
//         setGameStatisticTimeMinInMilliseconds();
//         setGameStatisticTimeAvgInMilliseconds();
//         setGameStatisticTimeMaxInMilliseconds();
//         setGameStatisticTimeBestInMilliseconds();
//     }

}