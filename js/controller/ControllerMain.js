import {Game} from "../Game.js";

export class ControllerMain {

    constructor(controllerButtonsMain, controllerStatisticsMain) {
        this.controllerButtonsMain = controllerButtonsMain;
        this.controllerStatisticsMain = controllerStatisticsMain;
        this.game = null;
    }

    configureStartGame() {
        this.controllerButtonsMain.setOnStart(() =>
            this.startGame());
    }

    startGame() {

        this.removeContainerStatisticParts();

        const roundNumberSetupByUser =
            this.controllerButtonsMain
                .getMaxClicksNumberSetByUser();

        this.game = new Game(roundNumberSetupByUser);

        this.controllerButtonsMain
            .setConfigurationForButtons();

        // ustawiamy callback FRAUD
        this.configureClickColorCounterFraud();

        // DODAJEMY LISTENER TYLKO RAZ
        this.controllerButtonsMain
            .configureClickColor();

        // tutaj ustawienie początkowego koloru
        this.controllerButtonsMain
            .setButtonClickColorAtStart();

        // pierwsza runda / druga runda / trzecia runda / .......
        this.startRound();
    }

    startRound() {

        // Sprawdzamy, czy są jeszcze rundy.

        if (!this.game.isGameRunning()) {
            this.gameOver();
            return;
        }

        this.game.setCountedRoundNumber();

        this.configureClickColorCounterFraud();

        this.game.playClickColorCounterTime();

        this.runClickColorTimeout();
    }

    runClickColorTimeout() {

        const timeout =
            this.game.getRandomTimeBeforeChangeColor();

        // console.log("TIMEOUT =", timeout);

        setTimeout(() => {

            const color =
                this.game.getRandomColor();

            // console.log("COLOR =", color);

            this.controllerButtonsMain.setButtonClickColorRandom(color);

            this.game.setStartTime();

            this.configureClickColorCounterTime();

        }, timeout);
    }

    configureClickColorCounterFraud() {
        this.controllerButtonsMain.setOnClickColor(() =>
            this.setGameCounterFraud());
    }

    setGameCounterFraud() {

        this.game.playClickColorCounterFraud();
    }

    configureClickColorCounterTime() {
        this.controllerButtonsMain.setOnClickColor(() =>
            this.createStatistic());
    }

    createStatistic() {

        console.log("time");

        if (this.game.getCountedRoundNumber() === 1) {
            this.configureStatistic();
        }

        this.updateStatisticTime();
        this.updateStatisticFraud();
        this.startRound();
    }

    configureStatistic() {

        const maxClicksNumber = this.controllerButtonsMain
            .getMaxClicksNumberSetByUser();

        // console.log("maxClicksNumber = " + maxClicksNumber);

        this.controllerStatisticsMain
            .createConfigurationStatisticsMain(maxClicksNumber);
    }

    removeContainerStatisticParts() {
        this.controllerStatisticsMain.removeContainerStatisticParts();
        this.controllerButtonsMain.removeConfigurationGameOver();
    }

    updateStatisticFraud() {

        this.game.setFraudCountedSum();

        let fraudCountedRoundNumber = this.game
            .getFraudCountedClicks();
        // console.log("fraudCountedRoundNumber = " + this.fraudCountedRoundNumber);

        let fraudCountedSumNumber = this.game
            .getFraudCountedSum();
        // console.log("fraudCountedSumNumber = " + this.fraudCountedSumNumber);

        let fraudRoundIndex = this.game
            .getFraudRoundElementIndexToUpdate();
        // console.log("fraudRoundIndex = " + this.fraudRoundIndex);

        this.controllerStatisticsMain.setGameStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex);

        this.game.resetFraudCountedClicks();
        this.game.setFraudRoundElementIndexToUpdate();
    }

    updateStatisticTime() {
        console.log("static time == start");

        this.game.setConfigurationTime();

        let statisticTimeInSecondsMin = this.game.getStatisticTimeInSecondsMin();
        let statisticTimeInSecondsAvg = this.game.getStatisticTimeInSecondsAvg();
        let statisticTimeInSecondsMax = this.game.getStatisticTimeInSecondsMax();
        let statisticTimeInSecondsBest = this.game.getStatisticTimeInSecondsBest();

        this.controllerStatisticsMain.configureStatisticTime(
            statisticTimeInSecondsMin,
            statisticTimeInSecondsAvg,
            statisticTimeInSecondsMax,
            statisticTimeInSecondsBest
        );
    }

    gameOver() {

        console.log("GAME OVER");

        this.controllerButtonsMain.removeEventListenerOnClickButtonClickColor();
        this.controllerButtonsMain.configureClickColorGameOver();
    }
}