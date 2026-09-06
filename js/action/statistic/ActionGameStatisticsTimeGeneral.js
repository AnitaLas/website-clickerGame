import {removeElementById, setElementTextById, valueToString} from "../../common/function/commonFunctions.js";
import * as variablesGameStatisticsTimeGeneral
    from "../../common/variable/clickerGame/variablesGameStatisticsTimeGeneral.js";
import * as variablesGameStatisticsTimeFraud from "../../common/variable/clickerGame/variablesGameStatisticsTimeFraud.js";


export class ActionGameStatisticsTimeGeneral {


    removeContainersGameFiledStatistics() {
        removeElementById(variablesGameStatisticsTimeGeneral.containerGameFiledStatisticsTimeParts);
        removeElementById(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudParts);
    }

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