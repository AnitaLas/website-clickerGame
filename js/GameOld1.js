import {rootVariables} from "./common/variable/main/variablesMain.js";

export class GameOld {

    constructor(roundNumberSetupByUser,) {
        this.roundNumberSetupByUser = roundNumberSetupByUser;
        this.gameStart();
    }

    maxClicksNumber = 5;
    roundNumber = this.roundNumberSetupByUser;
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

    fileWithColors = "#1A1A1D, #3B1C32, #6A1E55, #A64D79, #251B37, #372948, #FFCACA, #FFECEF, " +
        "#F3F2DA, #4E8D7C, #045762, #EA97AD, #FAD9E6, #E4AEC5, #5F7464, #243D25";
    colors = this.fileWithColors.split(", ");

    gameColors = this.colors;


    // playGameColorStart() {
    gameStart() {
        // view
        this.removeContainersGameFiledButtonsMainStop();
        this.createContainersGameFiledButtonsMainStop();
        this.removeContainersGameFiledStatistics();

        // view
        this.setGameButtonStartColor();

        this.setConfigurationGameRound();


        // this.removeConfigurationGameOver();


        // this.setConfigurationMaxClicksNumber();
        // this.setConfigurationButtonMainGameStart();

        // this.countedClicksNumber = 0;

        // this.fraudCountedNumber = 0;
        // this.fraudCountedSumNumber = 0;
        // this.fraudCountRoundIndex = 0;
        //
        // this.gameStatisticTimeMinInMilliseconds = 1300000;
        // this.gameStatisticTimeAvgInMilliseconds = 0;
        // this.gameStatisticTimeSumInMilliseconds = 0;
        // this.gameStatisticTimeMaxInMilliseconds = 0;

        this.countedClicksNumber++;
    }

    // funTimeoutButtonStop = function setTimeoutButtonStop() {
    //     this.setGameFieldColor(gameRandomColor);
    //     setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
    //     this.startTime = performance.now();
    // }


    playGameColorStop() {
        this.clearTimeoutButtonStop();
        // [extension V1] button continue is active -> // setConfigurationGameStop();
        this.setConfigurationGameStop();
        // [extension V1] do not even think of removing this function !!!
        // setConfigurationGameContinue();
    }

    setConfigurationGameStop() {
        // removeFunctionOnclick(gameFiledButtonPlay);
        // removeFunctionOnclick(buttonMainStop);
        //
        //
        // this.removeConfigurationButtonChosenNumber();
        // this.setConfigurationButtonMainGameStop();

    }

    getRandomNumber(maxNumber) {
        return Math.floor((Math.random() * maxNumber));
    }

    setGameRandomColor() {
        let randomNumber = this.getRandomNumber(this.colors.length);
        let tempColor = this.gameRandomColor;
        this.gameRandomColor = this.colors[randomNumber];
        this.colors[randomNumber] = tempColor;
    }

    setGameFieldColor(colorName) {
        rootVariables.style.setProperty(cssGameFiledButtonPlayColor, colorName);
    }


    runTimeoutButtonStop() {
        this.timeoutButtonStop = setTimeout(funTimeoutButtonStop, this.gameRandomTimeToChangeColor);
    }

    clearTimeoutButtonStop() {
        clearTimeout(this.timeoutButtonStop);
    }

    setFunctionOnclickPlayGameColorClickBeforeNewRound() {
        // setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColorClickBeforeNewRound);
    }

    setGameButtonStartColor() {
        this.setGameFieldColor(gameFiledButtonPlayStartColor);
    }

    setGameRandomTimeInMillisecondsToChangeColor() {
        let randomSecond = this.getRandomNumber(this.gameRandomTimeMaxSecond) + 1;
        this.gameRandomTimeToChangeColor = randomSecond * 1000;
    }

    getGameStatisticTimeInSeconds(timeInMilliseconds) {
        return (timeInMilliseconds / 1000).toFixed(4);
    }

    setGameStatisticTimeMinInSeconds() {
        // let timeInSeconds = this.getGameStatisticTimeInSeconds(gameStatisticTimeMinInMilliseconds);
        // setElementTextById(statisticsTimeMinGamePlay, timeInSeconds);
    }

    setGameStatisticTimeAvgInSeconds() {
        // let timeInSeconds = this.getGameStatisticTimeInSeconds(gameStatisticTimeAvgInMilliseconds);
        // setElementTextById(statisticsTimeAvgGamePlay, timeInSeconds);
    }

    setGameStatisticTimeMaxInSeconds() {
        // let timeInSeconds = this.getGameStatisticTimeInSeconds(gameStatisticTimeMaxInMilliseconds);
        // setElementTextById(statisticsTimeMaxGamePlay, timeInSeconds);
    }

    setGameStatisticTimeBestInSeconds() {
        // let timeInSeconds = this.getGameStatisticTimeInSeconds(gameStatisticTimeBestInMilliseconds);
        // setElementTextById(statisticsTimeBestGamePlay, timeInSeconds);
    }

    setGameStatisticTimeInSeconds() {
        this.setGameStatisticTimeMinInSeconds();
        this.setGameStatisticTimeAvgInSeconds();
        this.setGameStatisticTimeMaxInSeconds();
        this.setGameStatisticTimeBestInSeconds();
    }

    setGameStatisticTimeMinInMilliseconds() {
        if (this.gameStatisticTimeMinInMilliseconds > this.reactionTime)
            this.gameStatisticTimeMinInMilliseconds = this.reactionTime;
    }

    setGameStatisticTimeSumInMilliseconds() {
        this.gameStatisticTimeSumInMilliseconds += this.reactionTime;
    }

    setGameStatisticTimeAvgInMilliseconds() {
        this.gameStatisticTimeAvgInMilliseconds = this.gameStatisticTimeSumInMilliseconds / this.countedClicksNumber;
    }

    setGameStatisticTimeMaxInMilliseconds() {
        if (this.gameStatisticTimeMaxInMilliseconds < this.reactionTime)
            this.gameStatisticTimeMaxInMilliseconds = this.reactionTime;
    }

    setGameStatisticTimeBestInMilliseconds() {
        if (this.gameStatisticTimeBestInMilliseconds > this.gameStatisticTimeMinInMilliseconds)
            this.gameStatisticTimeBestInMilliseconds = this.gameStatisticTimeMinInMilliseconds;
    }

    setGameStatisticTimeInMilliseconds() {
        this.setGameStatisticTimeMinInMilliseconds();
        this.setGameStatisticTimeAvgInMilliseconds();
        this.setGameStatisticTimeMaxInMilliseconds();
        this.setGameStatisticTimeBestInMilliseconds();
    }

    // color change
    playClickerGame() {

        if (this.countedClicksNumber === 1)
            this.createContainersGameFiledStatistics();

        this.setEndTime();
        this.setClickReactionTime();
        this.setGameStatisticTimeSumInMilliseconds();
        this.setGameStatisticTimeInMilliseconds();
        this.setGameStatisticTimeInSeconds();
        this.setGameStatisticFraudData();

        // origin
        // if (this.countedClicksNumber < this.maxClicksNumber) {
        if (this.countedClicksNumber < this.roundNumber) {
            this.setConfigurationGameRound();
            this.countedClicksNumber++;
        } else {
            // console.log("GAME OVER");
            this.setConfigurationGameOver();
        }
    }

    setConfigurationGameOver() {
        // removeFunctionOnclick(gameFiledButtonPlay);
        // removeFunctionOnclick(buttonMainStop);
        // setElementTextById(gameFiledButtonPlay, gameFiledButtonPlayGameOverTextDisplay);
        // setElementClassNameById(gameFiledButtonPlay, gameFiledButtonPlayGameOver);
        // this.setConfigurationButtonMainGameOver();
        // this.removeConfigurationButtonChosenNumber();
    }

    removeConfigurationGameOver() {
        // setElementTextById(gameFiledButtonPlay, "");
        // removeElementClassNameById(gameFiledButtonPlay, gameFiledButtonPlayGameOver);
    }

    setClickReactionTime() {
        this.reactionTime = this.endTime - this.startTime + this.reactionTimeTimeout;
    }

    setEndTime() {
        this.endTime = performance.now();
    }

    setGameTimeTimeoutStart() {
        this.gameTimeTimeoutStart = performance.now();
    }

    setConfigurationGameRound() {
        this.gameColors = this.colors;
        this.startTime = 0;
        this.endTime = 0;
        this.reactionTimeTimeout = 0;

        // logic
        this.setGameRandomColor();
        this.setGameRandomTimeInMillisecondsToChangeColor();
        this.setGameTimeTimeoutStart();

        // logic ?
        this.setFunctionOnclickPlayGameColorClickBeforeNewRound();

        // logic
        this.runTimeoutButtonStop();
    }

    createElementFraudCountRoundInner(parentId, childId) {

        // VIEW FRAUD
        // createElementDiv(parentId, childId);
        // setElementClassNameById(childId, commonGameFiledDisplay);
        // setElementClassNameById(childId, commonStaticText);
        // setElementClassNameById(childId, fraudCountRoundCommon);
        // setElementTextById(childId, statisticsFraudCountNumberTextDisplaySetUp);
    }

    createElementFraudCountRoundMain(parentId, childId) {
        // createElementDiv(parentId, childId);
        // setElementClassNameById(parentId, fraudCountRound);
        // setElementClassNameById(parentId, fraudCountRoundUpdateNumber);
    }


    // OLD
    playClickerGameClickBeforeNewRound() {
        this.fraudCountedNumber++;
    }


    setGameStatisticFraudData() {
        this.fraudCountedSumNumber += this.fraudCountedNumber;


        // ACTION - FRAUD
        this.setGameStatisticFraudCountedNumber();


        // ACTION - FRAUD
        this.setGameStatisticFraudCountedSumNumber();

        // LOGIC
        this.setGameSConfigurationStatisticFraud();
    }

    setGameSConfigurationStatisticFraud() {
        this.fraudCountRoundIndex++;
        this.fraudCountedNumber = 0;
    }

    setGameStatisticFraudCountedNumber() {

        // ACTION - FRAUD

        // let result;
        // if (this.fraudCountedNumber < 10)
        //     result = valueToString(this.fraudCountedNumber) + statisticsFraudCountNumberTextDisplayLessThanTen;
        // else
        //     result = this.fraudCountedNumber;

        // let elementId = fraudCountRoundGamePlayUpdateNumberPrefix + this.fraudCountRoundIndex;
        // let text = statisticsFraudCountNumberTextDisplay + result;
        // setElementTextById(elementId, text);
    }

    setGameStatisticFraudCountedSumNumber() {
        // ACTION - FRAUD
        // setElementTextById(statisticsFraudBestGamePlay, this.fraudCountedSumNumber);
    }

    createContainersGameFiledStatistics() {

        // VIEW TIME - FRAUD

        // this.createGameFieldStatisticsTime();
        // this.createGameFieldStatisticsFraud();
    }

    removeContainersGameFiledStatistics() {
        // removeElementById(containerGameFiledStatisticsTimeParts);
        // removeElementById(containerGameFiledStatisticsFraudParts);
    }

    createContainersGameFiledButtonsMainStop() {
        // this.createGameFieldPButtonMainStop();
    }

    removeContainersGameFiledButtonsMainStop() {
        // removeElementById(containerGameFiledButtonsMainStop);

    }
}