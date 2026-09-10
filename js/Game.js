export class Game {

    constructor(roundNumberSetupByUser,) {
        this.roundNumberSetupByUser = roundNumberSetupByUser;
        this.roundNumber = this.roundNumberSetupByUser;
        this.countedRoundNumber = 0;
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

    statisticsTimeInSecondsMin = 0;
    statisticsTimeInSecondsAvg = 0;
    statisticsTimeInSecondsMax = 0;
    statisticsTimeInSecondsBest = 0;

    fraudCountedSumNumber = 0;
    fraudCountedRoundNumber = 0;
    fraudRoundIndex = 0;

    // timeoutButtonStop;

    fileWithColors = "#1A1A1D, #3B1C32, #6A1E55, #A64D79, #251B37, #372948, #FFCACA, #FFECEF, " +
        "#F3F2DA, #4E8D7C, #045762, #EA97AD, #FAD9E6, #E4AEC5, #5F7464, #243D25";
    colors = this.fileWithColors.split(", ");

    gameColors = this.colors;


    isGameRunning() {
        return this.countedRoundNumber < this.roundNumber;
    }

    setCountedRoundNumber() {
        this.countedRoundNumber++;
    }

    getCountedRoundNumber() {
        return this.countedRoundNumber;
    }


    playClickColorCounterFraud() {
        this.fraudCountedRoundNumber++;
        // console.log("fraudCountedRoundNumber = " + this.fraudCountedRoundNumber);
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
        this.setConfigurationGameRound();
    }

    setConfigurationGameRound() {
        this.gameColors = this.colors;
        this.startTime = 0;
        this.endTime = 0;
        this.reactionTimeTimeout = 0;

        this.setGameRandomColor();
        this.setRandomTimeBeforeChangeColor();
        this.setGameTimeTimeoutStart();

        // this.runTimeoutButtonStop();
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

    setRandomTimeBeforeChangeColor() {
        let randomSecond = this.getRandomNumber(this.gameRandomTimeMaxSecond) + 1;
        this.gameRandomTimeToChangeColor = randomSecond * 1000;
    }

    getRandomTimeBeforeChangeColor() {
        return this.gameRandomTimeToChangeColor;
    }

    getGameRandomColor() {
        return this.gameRandomColor;
    }


    // funTimeoutButtonCLickColorBeforeColorChange = () => {
    //     // zmiana koloru
    //     this.setGameFieldColor(this.gameRandomColor);
    //
    //     // rozpoczęcie pomiaru czasu reakcji
    //     this.setStartTime();
    //
    //     // że teraz CLICK COLOR ma być traktowany jako TIME
    //     if (this.onTime) {
    //         this.onTime();
    //     }
    // };

    // runTimeoutButtonStop() {
    //     this.timeoutButtonStop = setTimeout(
    //         this.funTimeoutButtonCLickColorBeforeColorChange,
    //         this.gameRandomTimeToChangeColor
    //     );
    // }

    // // setGameFieldColor(colorName) {
    // setGameFieldColor() {
    //     // variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, colorName);
    //     variablesMain.rootVariables.style.setProperty(variablesMain.cssGameFiledButtonPlayColor, this.gameRandomColor);
    // }

    // setGameButtonClickColor() {
    //     this.setGameFieldColor(variablesMain.gameFiledButtonPlayStartColor);
    // }


    setClickReactionTime() {
        this.reactionTime = this.endTime - this.startTime + this.reactionTimeTimeout;
    }

    getClickReactionTime() {
        return this.reactionTime;
    }

    setStartTime() {
        this.startTime = performance.now();
    }

    getStartTime() {
        return this.startTime;
    }

    setEndTime() {
        this.endTime = performance.now();
    }

    getEndTime() {
        return this.endTime;
    }

    setGameTimeTimeoutStart() {
        this.gameTimeTimeoutStart = performance.now();
    }

    getGameTimeTimeoutStart() {
        return this.gameTimeTimeoutStart;
    }

    getGameStatisticTimeInSeconds(timeInMilliseconds) {
        return (timeInMilliseconds / 1000).toFixed(4);
    }

    setConfigurationTime() {
        this.setEndTime();
        this.setClickReactionTime();
        this.setStatisticTimeInMillisecondsSum();
        this.setStatisticTimeInMilliseconds();
        this.setStatisticTimeInSeconds();
    }

    setStatisticTimeInSecondsMin() {
        this.statisticsTimeInSecondsMin = this.getGameStatisticTimeInSeconds(this.gameStatisticTimeMinInMilliseconds);
    }

    getStatisticTimeInSecondsMin() {
        return this.statisticsTimeInSecondsMin;
    }

    setStatisticTimeInSecondsAvg() {
        this.statisticsTimeInSecondsAvg = this.getGameStatisticTimeInSeconds(this.gameStatisticTimeAvgInMilliseconds);
    }

    getStatisticTimeInSecondsAvg() {
        return this.statisticsTimeInSecondsAvg;
    }

    setStatisticTimeInSecondsMax() {
        this.statisticsTimeInSecondsMax = this.getGameStatisticTimeInSeconds(this.gameStatisticTimeMaxInMilliseconds);
    }

    getStatisticTimeInSecondsMax() {
        return this.statisticsTimeInSecondsMax;
    }

    setStatisticTimeInSecondsBest() {
        this.statisticsTimeInSecondsBest = this.getGameStatisticTimeInSeconds(this.gameStatisticTimeBestInMilliseconds);
    }

    getStatisticTimeInSecondsBest() {
        return this.statisticsTimeInSecondsBest;
    }

    setStatisticTimeInSeconds() {
        this.setStatisticTimeInSecondsMin();
        this.setStatisticTimeInSecondsAvg();
        this.setStatisticTimeInSecondsMax();
        this.setStatisticTimeInSecondsBest();
    }

    setStatisticTimeInMillisecondsMin() {
        if (this.gameStatisticTimeMinInMilliseconds > this.reactionTime)
            this.gameStatisticTimeMinInMilliseconds = this.reactionTime;
    }

    setStatisticTimeInMillisecondsSum() {
        this.gameStatisticTimeSumInMilliseconds += this.reactionTime;
    }

    setStatisticTimeInMillisecondsAvg() {
        this.gameStatisticTimeAvgInMilliseconds = this.gameStatisticTimeSumInMilliseconds / this.countedRoundNumber;
    }

    setStatisticTimeInMillisecondsMax() {
        if (this.gameStatisticTimeMaxInMilliseconds < this.reactionTime)
            this.gameStatisticTimeMaxInMilliseconds = this.reactionTime;
    }

    setStatisticTimeInMillisecondsBest() {
        if (this.gameStatisticTimeBestInMilliseconds > this.gameStatisticTimeMinInMilliseconds)
            this.gameStatisticTimeBestInMilliseconds = this.gameStatisticTimeMinInMilliseconds;
    }

    setStatisticTimeInMilliseconds() {
        this.setStatisticTimeInMillisecondsMin();
        this.setStatisticTimeInMillisecondsAvg();
        this.setStatisticTimeInMillisecondsMax();
        this.setStatisticTimeInMillisecondsBest();
    }
}