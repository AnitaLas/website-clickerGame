export class Game {

    constructor(roundNumberSetupByUser) {
        this.roundNumberSetupByUser = roundNumberSetupByUser;
        this.roundNumber = this.roundNumberSetupByUser;
        this.countedRoundNumber = 0;
    }

    randomColor = "#ac4a71";
    randomTimeToChangeColor = 1;
    randomTimeMaxSecond = 10;
    reactionTime = 0;
    reactionTimeTimeout = 0;
    startTime = 0;
    endTime = 0;
    gameTimeTimeoutStart;

    statisticTimeInMillisecondsMin = 1300000;
    statisticTimeInMillisecondsAvg = 0;
    statisticTimeInMillisecondsSum = 0;
    statisticTimeInMillisecondsMax = 0;
    statisticTimeInMillisecondsBest = this.statisticTimeInMillisecondsMin;

    statisticsTimeInSecondsMin = 0;
    statisticsTimeInSecondsAvg = 0;
    statisticsTimeInSecondsMax = 0;
    statisticsTimeInSecondsBest = 0;

    fraudCountedSumNumber = 0;
    fraudCountedClicks = 0;
    fraudRoundElementIndexToUpdate = 0;

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
        this.fraudCountedClicks++;
    }

    setFraudCountedSum() {
        this.fraudCountedSumNumber = this.fraudCountedSumNumber + this.fraudCountedClicks;
    }

    getFraudCountedSum() {
        return this.fraudCountedSumNumber;
    }

    resetFraudCountedClicks() {
        this.fraudCountedClicks = 0;
    }

    getFraudCountedClicks() {
        return this.fraudCountedClicks;
    }

    setFraudRoundElementIndexToUpdate() {
        this.fraudRoundElementIndexToUpdate++;
    }

    getFraudRoundElementIndexToUpdate() {
        return this.fraudRoundElementIndexToUpdate;
    }

    playClickColorCounterTime() {
        this.setConfigurationGameRound();
    }

    setConfigurationGameRound() {
        this.gameColors = this.colors;
        this.startTime = 0;
        this.endTime = 0;
        this.reactionTimeTimeout = 0;

        this.setRandomColor();
        this.setRandomTimeBeforeChangeColor();
        this.setGameTimeTimeoutStart();
    }

    getRandomNumber(maxNumber) {
        return Math.floor((Math.random() * maxNumber));
    }

    setRandomColor() {
        let randomNumber = this.getRandomNumber(this.colors.length);
        let tempColor = this.randomColor;
        this.randomColor = this.colors[randomNumber];
        this.colors[randomNumber] = tempColor;
    }

    getRandomColor() {
        return this.randomColor;
    }

    setRandomTimeBeforeChangeColor() {
        let randomSecond = this.getRandomNumber(this.randomTimeMaxSecond) + 1;
        this.randomTimeToChangeColor = randomSecond * 1000;
    }

    getRandomTimeBeforeChangeColor() {
        return this.randomTimeToChangeColor;
    }

    setReactionTime() {
        this.reactionTime = this.endTime - this.startTime + this.reactionTimeTimeout;
    }

    getReactionTime() {
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

    getStatisticTimeInSeconds(timeInMilliseconds) {
        return (timeInMilliseconds / 1000).toFixed(4);
    }

    setConfigurationTime() {
        this.setEndTime();
        this.setReactionTime();
        this.setStatisticTimeInMillisecondsSum();
        this.setStatisticTimeInMilliseconds();
        this.setStatisticTimeInSeconds();
    }

    setStatisticTimeInSecondsMin() {
        this.statisticsTimeInSecondsMin = this.getStatisticTimeInSeconds(this.statisticTimeInMillisecondsMin);
    }

    getStatisticTimeInSecondsMin() {
        return this.statisticsTimeInSecondsMin;
    }

    setStatisticTimeInSecondsAvg() {
        this.statisticsTimeInSecondsAvg = this.getStatisticTimeInSeconds(this.statisticTimeInMillisecondsAvg);
    }

    getStatisticTimeInSecondsAvg() {
        return this.statisticsTimeInSecondsAvg;
    }

    setStatisticTimeInSecondsMax() {
        this.statisticsTimeInSecondsMax = this.getStatisticTimeInSeconds(this.statisticTimeInMillisecondsMax);
    }

    getStatisticTimeInSecondsMax() {
        return this.statisticsTimeInSecondsMax;
    }

    setStatisticTimeInSecondsBest() {
        this.statisticsTimeInSecondsBest = this.getStatisticTimeInSeconds(this.statisticTimeInMillisecondsBest);
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
        if (this.statisticTimeInMillisecondsMin > this.reactionTime)
            this.statisticTimeInMillisecondsMin = this.reactionTime;
    }

    setStatisticTimeInMillisecondsSum() {
        this.statisticTimeInMillisecondsSum += this.reactionTime;
    }

    setStatisticTimeInMillisecondsAvg() {
        this.statisticTimeInMillisecondsAvg = this.statisticTimeInMillisecondsSum / this.countedRoundNumber;
    }

    setStatisticTimeInMillisecondsMax() {
        if (this.statisticTimeInMillisecondsMax < this.reactionTime)
            this.statisticTimeInMillisecondsMax = this.reactionTime;
    }

    setStatisticTimeInMillisecondsBest() {
        if (this.statisticTimeInMillisecondsBest > this.statisticTimeInMillisecondsMin)
            this.statisticTimeInMillisecondsBest = this.statisticTimeInMillisecondsMin;
    }

    setStatisticTimeInMilliseconds() {
        this.setStatisticTimeInMillisecondsMin();
        this.setStatisticTimeInMillisecondsAvg();
        this.setStatisticTimeInMillisecondsMax();
        this.setStatisticTimeInMillisecondsBest();
    }
}