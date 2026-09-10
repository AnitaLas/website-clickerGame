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
            .setGameButtonClickColorAtStart();

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
                this.game.getGameRandomColor();

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

    updateStatisticFraud() {

        this.game.setFraudCountedSumNumber();

        let fraudCountedRoundNumber = this.game
            .getFraudCountedRoundNumber();
        // console.log("fraudCountedRoundNumber = " + this.fraudCountedRoundNumber);

        let fraudCountedSumNumber = this.game
            .getFraudCountedSumNumber();
        // console.log("fraudCountedSumNumber = " + this.fraudCountedSumNumber);

        let fraudRoundIndex = this.game
            .getFraudRoundIndex();
        // console.log("fraudRoundIndex = " + this.fraudRoundIndex);

        this.controllerStatisticsMain.setGameStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex);

        this.game.resetFraudCountedRoundNumber();
        this.game.setFraudRoundIndex();
    }

    updateStatisticTime() {
        console.log("static time == start");

        this.game.setConfigurationTime();

        let statisticTimeInSecondsMin = this.game.getStatisticTimeInSecondsMin();
        let statisticTimeInSecondsAvg = this.game.getStatisticTimeInSecondsAvg();
        let statisticTimeInSecondsMax = this.game.getStatisticTimeInSecondsMax();
        let statisticTimeInSecondsBest = this.game.getStatisticTimeInSecondsBest();

        // console.log("min = " + statisticTimeInSecondsMin);
        // console.log("avg = " + statisticTimeInSecondsAvg);
        // console.log("max = " + statisticTimeInSecondsMax);
        // console.log("best = " + statisticTimeInSecondsBest);

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