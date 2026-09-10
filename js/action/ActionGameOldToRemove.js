import {
    createElementDiv,
    getElementAttributeValueById, removeElementById,
    removeElementClassNameById, removeFunctionOnclick, setElementClassNameById,
    setElementStyletAsGrid, setElementTextById, setFunctionOnclick,
    valueToString
} from "../common/function/commonFunctions.js";


import * as variablesGameButtons from "../common/variable/control/variablesGameButtons.js";
// import * as variableGameConfigurationRound from "./common/variable/clickerGame/variableButtonRound.js";
import * as variablesMain from "../common/variable/main/variablesMain.js";
// import * as variablesGameStatisticsTimeFraud from "./common/variable/clickerGame/variablesStatisticsFraud.js";
import * as variablesGameStatisticsTimeGeneral from "../common/variable/statistic/variablesStatisticsTime.js";

// let maxClicksNumber = 5;
// let maxClicksNumberSetByUser = viewGameConfigurationRound.getMaxClicksNumberSetByUser();
// let countedClicksNumber = 0;
//
// let gameRandomColor = "#ac4a71";
// let gameRandomTimeToChangeColor = 1;
// const gameRandomTimeMaxSecond = 10;
// let reactionTime = 0;
// let reactionTimeTimeout = 0;
// let startTime = 0;
// let endTime = 0;
// let gameTimeTimeoutStart;
//
// let gameStatisticTimeMinInMilliseconds = 1300000;
// let gameStatisticTimeAvgInMilliseconds = 0;
// let gameStatisticTimeSumInMilliseconds = 0;
// let gameStatisticTimeMaxInMilliseconds = 0;
// let gameStatisticTimeBestInMilliseconds = gameStatisticTimeMinInMilliseconds;
//
// let currentFunctionOnclickName;
// let fraudCountedNumber = 0;
// let fraudCountedSumNumber = 0;
// let fraudCountRoundIndex = 0;
//
// let timeoutButtonStop;
//
// let clickNumberButton = 1;
//
// const fileWithColors = "#1A1A1D, #3B1C32, #6A1E55, #A64D79, #251B37, #372948, #FFCACA, #FFECEF, " +
//     "#F3F2DA, #4E8D7C, #045762, #EA97AD, #FAD9E6, #E4AEC5, #5F7464, #243D25";
// const colors = fileWithColors.split(", ");
//
// let gameColors = colors;

// let funTimeoutButtonStop = function setTimeoutButtonStop() {
//     this.setGameFieldColor(gameRandomColor);
//     setFunctionOnclick(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.functionNameOnclickPlayGameColor);
//     startTime = performance.now();
// }


export class ActionGameOldToRemove {


    constructor(gameRoundAction) {
        this.gameRoundAction = gameRoundAction;
    }

    // maxClicksNumber = 5;
    // maxClicksNumberSetByUser = this.gameRoundAction.getMaxClicksNumberSetByUser();
    countedClicksNumber = 0;

    gameRandomColor = "#ac4a71";
    gameRandomTimeToChangeColor = 1;
    gameRandomTimeMaxSecond = 10;
    reactionTime = 0;
    reactionTimeTimeout = 0;
    startTime = 0;
    endTime = 0;
    gameTimeTimeoutStart;

    gameStatisticTimeMinInMilliseconds = 1300000;
    gameStatisticTimeAvgInMilliseconds = 0;
    gameStatisticTimeSumInMilliseconds = 0;
    gameStatisticTimeMaxInMilliseconds = 0;
    gameStatisticTimeBestInMilliseconds = this.gameStatisticTimeMinInMilliseconds;

    currentFunctionOnclickName;
    fraudCountedNumber = 0;
    fraudCountedSumNumber = 0;
    fraudCountRoundIndex = 0;

    timeoutButtonStop;

    clickNumberButton = 1;

    fileWithColors = "#1A1A1D, #3B1C32, #6A1E55, #A64D79, #251B37, #372948, #FFCACA, #FFECEF, " +
        "#F3F2DA, #4E8D7C, #045762, #EA97AD, #FAD9E6, #E4AEC5, #5F7464, #243D25";
    colors = this.fileWithColors.split(", ");

    gameColors = this.colors;

    // funTimeoutButtonStop = function setTimeoutButtonStop() {
    //     this.setGameFieldColor(gameRandomColor);
    //     setFunctionOnclick(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.functionNameOnclickPlayGameColor);
    //     this.startTime = performance.now();
    // }

    playGameSetConfigurationStart() {
        // viewGameButton.removeContainersGameFiledButtonsMainStop();
        // viewGameButton.createContainersGameFiledButtonsMainStop();
        // this.removeContainersGameFiledStatistics();
        // this.setGameButtonStartColor();
        // this.setConfigurationGame();
        // this.removeConfigurationGameOver();
        // this.setConfigurationMaxClicksNumber();
        // viewGameButton.setConfigurationMaxClicksNumber();
        // this.maxClicksNumberSetByUser = this.gameRoundAction.getMaxClicksNumberSetByUser();
        // this.setConfigurationButtonMainGameStart();
        // setConfigurationButtonMainGameStart();

        // this.countedClicksNumber = 0;
        // this.fraudCountedNumber = 0;
        // this.fraudCountedSumNumber = 0;
        // this.fraudCountRoundIndex = 0;
        // this.gameStatisticTimeMinInMilliseconds = 1300000;
        // this.gameStatisticTimeAvgInMilliseconds = 0;
        // this.gameStatisticTimeSumInMilliseconds = 0;
        // this.gameStatisticTimeMaxInMilliseconds = 0;
        // this.countedClicksNumber++;
    }

    // playGameColorStop() {
    //     // this.clearTimeoutButtonStop();
    //     // [extension V1] button continue is active -> // setConfigurationGameStop();
    //     // this.setConfigurationGameStop();
    //     // [extension V1] do not even think of removing this function !!!
    //     // setConfigurationGameContinue();
    // }

    setConfigurationGameStop() {
        // removeFunctionOnclick(variablesGameButtons.gameFiledButtonPlay);
        // removeFunctionOnclick(variablesGameButtons.buttonMainStop);
        // // this.removeConfigurationButtonChosenNumber();
        // viewGameConfigurationRound.removeConfigurationButtonChosenNumber();
        // // this.setConfigurationButtonMainGameStop();
        // viewGameButton.setConfigurationButtonMainGameStop();
    }

// [extension V1] do not even think of removing this function !!!
    setConfigurationGameContinue() {
        // let functionName = document.getElementById(variablesGameButtons.gameFiledButtonPlay).getAttribute('onclick');
        //
        // if (functionName !== null)
        //     this.currentFunctionOnclickName = functionName.replace("(this.id)", "");
        //
        // setFunctionOnclick(variablesGameButtons.buttonMainStop, variablesGameButtons.functionNameOnclickPlayGameColorContinue);
        // setElementTextById(variablesGameButtons.buttonMainStop, variablesGameButtons.containerGameFiledButtonsMainContinueTextDisplay);
        // removeFunctionOnclick(variablesGameButtons.gameFiledButtonPlay);
        // this.setEndTime();
        // this.setClickReactionTimeTimeout();
        // // this.removeConfigurationButtonMainGameContinue();
        // viewGameButton.removeConfigurationButtonMainGameContinue();
        //
        // this.startTime = 0;
        // this.endTime = 0;
    }

// [extension V1] do not even think of removing this function !!!
//     playGameColorContinue() {
//         setFunctionOnclick(variablesGameButtons.buttonMainStop, variablesGameButtons.functionNameOnclickPlayGameColorStop);
//         setElementTextById(variablesGameButtons.buttonMainStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay);
//         // this.setConfigurationButtonMainGameContinue();
//         viewGameButton.setConfigurationButtonMainGameContinue();
//
//         if (currentFunctionOnclickName !== undefined)
//             setFunctionOnclick(variablesGameButtons.gameFiledButtonPlay, currentFunctionOnclickName);
//
//         // ???
//         this.gameRandomTimeToChangeColor = gameRandomTimeToChangeColor - gameTimeTimeoutStart;
//         this.runTimeoutButtonStop();
//         this.gameTimeTimeoutStart = 0;
//     }

    // getRandomNumber(maxNumber) {
    //     return Math.floor((Math.random() * maxNumber));
    // }
    //
    // setGameRandomColor() {
    //     let randomNumber = this.getRandomNumber(colors.length);
    //     let tempColor = gameRandomColor;
    //     this.gameRandomColor = colors[randomNumber];
    //     colors[randomNumber] = tempColor;
    // }
    //
    // setGameFieldColor(colorName) {
    //     variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, colorName);
    // }


    /*let funTimeoutButtonStop = function setTimeoutButtonStop() {
        setGameFieldColor(gameRandomColor);
        setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
        startTime = performance.now();
    }*/


    // runTimeoutButtonStop() {
    //     this.timeoutButtonStop = setTimeout(funTimeoutButtonStop, gameRandomTimeToChangeColor);
    // }
    //
    // clearTimeoutButtonStop() {
    //     clearTimeout(timeoutButtonStop);
    // }
    //
    // setFunctionOnclickPlayGameColorClickBeforeNewRound() {
    //     setFunctionOnclick(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.functionNameOnclickPlayGameColorClickBeforeNewRound);
    // }
    //
    // setGameButtonStartColor() {
    //     this.setGameFieldColor(variablesMain.gameFiledButtonPlayStartColor);
    // }
    //
    // setGameRandomTimeInMillisecondsToChangeColor() {
    //     let randomSecond = this.getRandomNumber(gameRandomTimeMaxSecond) + 1;
    //     this.gameRandomTimeToChangeColor = randomSecond * 1000;
    // }
    //
    // getGameStatisticTimeInSeconds(timeInMilliseconds) {
    //     return (timeInMilliseconds / 1000).toFixed(4);
    // }
    //
    // setGameStatisticTimeMinInSeconds() {
    //     let timeInSeconds = this.getGameStatisticTimeInSeconds(this.gameStatisticTimeMinInMilliseconds);
    //     setElementTextById(variablesGameStatisticsTimeGeneral.statisticsTimeMinGamePlay, timeInSeconds);
    // }
    //
    // setGameStatisticTimeAvgInSeconds() {
    //     let timeInSeconds = this.getGameStatisticTimeInSeconds(this.gameStatisticTimeAvgInMilliseconds);
    //     setElementTextById(variablesGameStatisticsTimeGeneral.statisticsTimeAvgGamePlay, timeInSeconds);
    // }
    //
    // setGameStatisticTimeMaxInSeconds() {
    //     let timeInSeconds = this.getGameStatisticTimeInSeconds(this.gameStatisticTimeMaxInMilliseconds);
    //     setElementTextById(variablesGameStatisticsTimeGeneral.statisticsTimeMaxGamePlay, timeInSeconds);
    // }
    //
    // setGameStatisticTimeBestInSeconds() {
    //     let timeInSeconds = this.getGameStatisticTimeInSeconds(this.gameStatisticTimeBestInMilliseconds);
    //     setElementTextById(variablesGameStatisticsTimeGeneral.statisticsTimeBestGamePlay, timeInSeconds);
    // }
    //
    // setGameStatisticTimeInSeconds() {
    //     this.setGameStatisticTimeMinInSeconds();
    //     this.setGameStatisticTimeAvgInSeconds();
    //     this.setGameStatisticTimeMaxInSeconds();
    //     this.setGameStatisticTimeBestInSeconds();
    // }
    //
    // setGameStatisticTimeMinInMilliseconds() {
    //     if (this.gameStatisticTimeMinInMilliseconds > this.reactionTime)
    //         this.gameStatisticTimeMinInMilliseconds = this.reactionTime;
    // }
    //
    // setGameStatisticTimeSumInMilliseconds() {
    //     this.gameStatisticTimeSumInMilliseconds += this.reactionTime;
    // }
    //
    // setGameStatisticTimeAvgInMilliseconds() {
    //     this.gameStatisticTimeAvgInMilliseconds = this.gameStatisticTimeSumInMilliseconds / this.countedClicksNumber;
    // }
    //
    // setGameStatisticTimeMaxInMilliseconds() {
    //     if (this.gameStatisticTimeMaxInMilliseconds < this.reactionTime)
    //         this.gameStatisticTimeMaxInMilliseconds = this.reactionTime;
    // }
    //
    // setGameStatisticTimeBestInMilliseconds() {
    //     if (this.gameStatisticTimeBestInMilliseconds > this.gameStatisticTimeMinInMilliseconds)
    //         this.gameStatisticTimeBestInMilliseconds = this.gameStatisticTimeMinInMilliseconds;
    // }
    //
    // setGameStatisticTimeInMilliseconds() {
    //     this.setGameStatisticTimeMinInMilliseconds();
    //     this.setGameStatisticTimeAvgInMilliseconds();
    //     this.setGameStatisticTimeMaxInMilliseconds();
    //     this.setGameStatisticTimeBestInMilliseconds();
    // }
    //
    // playClickerGame() {
    //
    //     // if (this.countedClicksNumber === 1)
    //     //     createContainersGameFiledStatistics();
    //
    //     // this.setEndTime();
    //     // this.setClickReactionTime();
    //     // this.setGameStatisticTimeSumInMilliseconds();
    //     // this.setGameStatisticTimeInMilliseconds();
    //     // this.setGameStatisticTimeInSeconds();
    //     // this.setGameStatisticFraudData();
    //
    //     // if (this.countedClicksNumber < this.maxClicksNumber) {
    //     //     this.setConfigurationGame();
    //     //     this.countedClicksNumber++;
    //     // } else {
    //     //     console.log("GAME OVER");
    //         // this.setConfigurationGameOver();
    //     // }
    // }
    //
    // setConfigurationGameOver() {
    //     removeFunctionOnclick(variablesGameButtons.gameFiledButtonPlay);
    //     removeFunctionOnclick(variablesGameButtons.buttonMainStop);
    //     setElementTextById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOverTextDisplay);
    //     setElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOver);
    //     // this.setConfigurationButtonMainGameOver();
    //     // this.removeConfigurationButtonChosenNumber();
    //     viewGameConfigurationRound.removeConfigurationButtonChosenNumber();
    // }
    //
    // removeConfigurationGameOver() {
    //     setElementTextById(variablesGameButtons.gameFiledButtonPlay, "");
    //     removeElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlayGameOver);
    // }
    //
    // setClickReactionTime() {
    //     this.reactionTime = this.endTime - this.startTime + this.reactionTimeTimeout;
    // }
    //
    // setClickReactionTimeTimeout() {
    //     this.reactionTimeTimeout = this.endTime - this.startTime;
    // }
    //
    // setEndTime() {
    //     this. endTime = performance.now();
    // }
    //
    // setGameTimeTimeoutStart() {
    //     this. gameTimeTimeoutStart = performance.now();
    // }
    //
    // setConfigurationGame() {
    //     this.gameColors = this.colors;
    //     this.startTime = 0;
    //     this.endTime = 0;
    //     this.reactionTimeTimeout = 0;
    //
    //     this.setGameRandomColor();
    //     this.setGameRandomTimeInMillisecondsToChangeColor();
    //     this.setGameTimeTimeoutStart();
    //     this.setFunctionOnclickPlayGameColorClickBeforeNewRound();
    //     this.runTimeoutButtonStop();
    // }
    //
    //
    // playClickerGameClickBeforeNewRound() {
    //     this.fraudCountedNumber++;
    // }


}