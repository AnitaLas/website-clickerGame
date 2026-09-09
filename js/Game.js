import * as variablesMain from "./common/variable/main/variablesMain.js";

export class Game {

    constructor(roundNumberSetupByUser,) {
        this.roundNumberSetupByUser = roundNumberSetupByUser;
        this.roundNumber = this.roundNumberSetupByUser;
        this.countedRoundNumber = 0;
        this.onTime = null;
        this.isGameStarted  = false;
    }

    getCountedRoundNumber(){
        return this.countedRoundNumber;
    }

    roundNumber = this.roundNumberSetupByUser;
    countedRoundNumber = 0;

    maxClicksNumber = 5;
    // roundNumber = this.roundNumberSetupByUser;
    // countedRoundNumber = 0;

    isGameRunning(){
        // this.countedRoundNumber++;

        // console.log("countedRoundNumber = " + this.countedRoundNumber);
        // console.log("roundNumber = " + this.roundNumber);

        return this.countedRoundNumber < this.roundNumber;
    }

    startNextRound() {
        this.countedRoundNumber++;
    }

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
    fraudCountedSumNumber = 0;
    fraudCountedRoundNumber = 0;
    fraudRoundIndex = 0;

    timeoutButtonStop;

    fileWithColors = "#1A1A1D, #3B1C32, #6A1E55, #A64D79, #251B37, #372948, #FFCACA, #FFECEF, " +
        "#F3F2DA, #4E8D7C, #045762, #EA97AD, #FAD9E6, #E4AEC5, #5F7464, #243D25";
    colors = this.fileWithColors.split(", ");

    gameColors = this.colors;


    setOnTime(onTime) {
        this.onTime = onTime;
    }

    playClickColorCounterFraud() {
        this.fraudCountedRoundNumber++;
        console.log("fraudCountedRoundNumber = " + this.fraudCountedRoundNumber);
    }

    updateCounterFraudData() {
        // this.setFraudCountedRoundNumber();
        this.setFraudCountedSumNumber();
        // this.setFraudRoundIndex();
    }


    resetCounterFraudData() {
        this.resetFraudCountedRoundNumber();
        // this.setFraudCountedSumNumber();
        this.setFraudRoundIndex();
    }

    setFraudCountedSumNumber() {
        this.fraudCountedSumNumber = this.fraudCountedSumNumber + this.fraudCountedRoundNumber;
    }

    getFraudCountedSumNumber() {
        return this.fraudCountedSumNumber;
    }

    resetFraudCountedRoundNumber() {
        this.fraudCountedRoundNumber = 0;
    }

    getFraudCountedRoundNumber() {
        return this.fraudCountedRoundNumber;
    }

    setFraudRoundIndex() {
        this.fraudRoundIndex++;
    }

    getFraudRoundIndex() {
        return this.fraudRoundIndex;
    }



    playClickColorCounterTime() {

        console.log("playClickColorCounterTime ---- STRAT");


        // this.setGameButtonStartColor();

        this.setConfigurationGameRound();
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
        // this.setFunctionOnclickPlayGameColorClickBeforeNewRound();

        // logic
        this.runTimeoutButtonStop();
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

    setGameRandomTimeInMillisecondsToChangeColor() {
        let randomSecond = this.getRandomNumber(this.gameRandomTimeMaxSecond) + 1;
        this.gameRandomTimeToChangeColor = randomSecond * 1000;
        console.log(
            "WYLOSOWANY CZAS = " +
            this.gameRandomTimeToChangeColor
        );
    }

    setGameTimeTimeoutStart() {
        this.gameTimeTimeoutStart = performance.now();
    }

    funTimeoutButtonStop = () => {

        console.log(
            "TIMEOUT - zmiana koloru, runda = " +
            this.countedRoundNumber
        );

        // zmiana koloru
        this.setGameFieldColor(this.gameRandomColor);

        // rozpoczęcie pomiaru czasu reakcji
        this.startTime = performance.now();

        // poinformowanie ControllerMain,
        // że teraz CLICK COLOR ma być traktowany jako TIME
        if (this.onTime) {
            this.onTime();
        }
    };

    runTimeoutButtonStop() {
        console.log(
            "SET TIMEOUT, czas = " +
            this.gameRandomTimeToChangeColor
        );

        this.timeoutButtonStop = setTimeout(
            this.funTimeoutButtonStop,
            this.gameRandomTimeToChangeColor
        );
    }


    setGameFieldColor(colorName) {
        variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, colorName);
    }

    setGameButtonStartColor() {
        this.setGameFieldColor(variablesMain.gameFiledButtonPlayStartColor);
    }

}