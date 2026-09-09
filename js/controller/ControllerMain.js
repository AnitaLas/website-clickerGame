import {Game} from "../Game.js";
import * as variablesGameButtons from "../common/variable/control/variablesGameButtons.js";
import {getElementById} from "../common/function/commonFunctions.js";

export class ControllerMain {

    constructor(controllerButtonsMain, controllerStatisticsMain) {
        this.controllerButtonsMain = controllerButtonsMain;
        this.controllerStatisticsMain = controllerStatisticsMain;
        this.game = null;
    }

    // roundNumberSetupByUser = 5;
    // currenRoundNumber = 1;

    configureStartGame() {

        this.controllerButtonsMain.setOnStart(() =>
            // this.startGameVol0());
            this.startGame());
    }

    // startGameVol0(){
    //
    //     const roundNumberSetupByUser = this.controllerButtonsMain
    //         .getMaxClicksNumberSetByUser();
    //
    //     this.game = new Game(roundNumberSetupByUser);
    //
    //     this.controllerButtonsMain
    //         .setConfigurationForButtons();
    //
    //         this.configureClickColorCounterFraud();
    //
    //
    //         this.game.setOnTime(() =>
    //             this.configureClickColorCounterTime());
    //
    //         this.game.playClickColorCounterTime();
    //
    //         this.currenRoundNumber++;
    //
    // }

    // startGameVol1() {
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

        // "teraz CLICK COLOR = TIME"
        this.game.setOnTime(() =>
            this.configureClickColorCounterTime());

        // tutaj ustawienie początkowego wyglądu
        this.game.setGameButtonStartColor();

        // pierwsza runda
        this.startRound();
    }


    startRound() {

        console.log("========== START ROUND ==========");
        console.log(
            "START ROUND - przed sprawdzeniem: " +
            this.game.getCountedRoundNumber()
        );


        /*
         * Sprawdzamy, czy są jeszcze rundy.
         */
        if (!this.game.isGameRunning()) {

            console.log("BRAK KOLEJNEJ RUNDY");
            this.gameOver();

            return;
        }


        /*
         * Zwiększamy numer rundy.
         */
        this.game.startNextRound();

        console.log(
            "START ROUND - rozpoczęto rundę: " +
            this.game.getCountedRoundNumber()
        );


        this.configureClickColorCounterFraud();


        console.log("URUCHAMIAM NOWY TIMEOUT");
        console.log("GAME =", this.game);

        /*
         * Rozpoczynamy oczekiwanie
         * na pojawienie się koloru.
         */

        console.log("PRZED playClickColorCounterTime");

        console.log(
            "typeof =",
            typeof this.game.playClickColorCounterTime
        );
        console.log(
            "method =",
            this.game.playClickColorCounterTime
        );

        this.game.playClickColorCounterTime();

        console.log("PO playClickColorCounterTime");


    }

    configureClickColorCounterFraud() {

        console.log("counter fraud - start");

        this.controllerButtonsMain.setOnClickColor(() =>
            this.setFunctionCounterFraud());


        // // reset function
        // this.controllerButtonsMain
        //     .configureClickColor();

    }

    setFunctionCounterFraud() {

        console.log("fraud");

        this.game.playClickColorCounterFraud();
    }


    configureClickColorCounterTime() {

        console.log("CLICK COLOR = TIME");

        this.controllerButtonsMain.setOnClickColor(() =>
            this.createStatistic());

        // this.controllerButtonsMain
        //     .configureClickColor();
    }


    createStatistic() {

        console.log("time");

        if (this.game.getCountedRoundNumber() === 1) {
            this.configureStatistic();
        }


        this.updateStatistic();

        this.startRound();
    }


    configureStatistic() {

        const maxClicksNumber = this.controllerButtonsMain
            .getMaxClicksNumberSetByUser();

        console.log("maxClicksNumber = " + maxClicksNumber);

        this.controllerStatisticsMain
            .createConfigurationStatisticsMain(maxClicksNumber);
    }

    updateStatistic() {

        this.game.setFraudCountedSumNumber();

        this.fraudCountedRoundNumber = this.game
            .getFraudCountedRoundNumber();
        console.log("fraudCountedRoundNumber = " + this.fraudCountedRoundNumber);

        this.fraudCountedSumNumber = this.game
            .getFraudCountedSumNumber();
        console.log("fraudCountedSumNumber = " + this.fraudCountedSumNumber);

        this.fraudRoundIndex = this.game
            .getFraudRoundIndex();
        console.log("fraudRoundIndex = " + this.fraudRoundIndex);

        this.controllerStatisticsMain.setGameStatisticFraudData(this.fraudCountedRoundNumber, this.fraudCountedSumNumber, this.fraudRoundIndex)

        this.game.resetFraudCountedRoundNumber();
        this.game.setFraudRoundIndex();


    }

    gameOver() {

        console.log("GAME OVER");

        this.removeButtonClickColorListener();

        this.controllerButtonsMain.configureClickColorGameOver();
    }

    removeButtonClickColorListener() {

        const button = getElementById(
            variablesGameButtons.gameFiledButtonPlay
        );

        button.removeEventListener(
            "click",
            this.clickColorListener
        );

        this.clickColorListener = null;
    }
}