import {ActionGameButtonRound} from "../action/round/ActionGameButtonRound.js";
import {ViewGameConfigurationRound} from "./ViewGameConfigurationRound.js";
import {ViewGameButtonsPlayClickColor} from "./ViewGameButtonsPlayClickColor.js";
import {ActionGameButtonPlayClickColor} from "../action/ActionGameButtonPlayClickColor.js";
import {ControllerGameButtonRound} from "../controller/control/ControllerGameButtonRound.js";
import {ControllerGameButtonPlayClickColor} from "../controller/ControllerGameButtonPlayClickColor.js";
import {ViewGameStatisticsTimeGeneral} from "./ViewGameStatisticsTimeGeneral.js";
import {ActionGameStatisticsTimeGeneral} from "../action/statistic/ActionGameStatisticsTimeGeneral.js";
import {ControllerGameStatisticsTimeGeneral} from "../controller/statistics/ControllerGameStatisticsTimeGeneral.js";
import {ViewGameButtonsPlayStart} from "./ViewGameButtonsPlayStart.js";
import {ActionGameButtonPlayStart} from "../action/control/ActionGameButtonPlayStart.js";
import {ViewGameButtonsPlayStop} from "./ViewGameButtonsPlayStop.js";
import {ActionGameButtonPlayStop} from "../action/control/ActionGameButtonPlayStop.js";
import {ControllerGameButtonPlayStart} from "../controller/control/ControllerGameButtonPlayStart.js";
import {ControllerGameButtonPlayStop} from "../controller/control/ControllerGameButtonPlayStop.js";
import {ControllerGamePlayControls} from "../controller/control/ControllerGamePlayControls.js";
import {ControllerGameStatisticsTimeFraud} from "../controller/statistics/ControllerGameStatisticsTimeFraud.js";
import {ViewGameStatisticsTimeFraud} from "./ViewGameStatisticsTimeFraud.js";
import {ControllerGameStatisticsMain} from "../controller/statistics/ControllerGameStatisticsMain.js";
import {ControllerGameMain} from "../controller/ControllerGameMain.js";

export class ViewGame {

    constructor() {

        this.gameRoundAction =
            new ActionGameButtonRound();

        this.viewGameConfigurationRound =
            new ViewGameConfigurationRound();

        this.controllerGameButtonRound =
            new ControllerGameButtonRound(
                this.viewGameConfigurationRound,
                this.gameRoundAction);


        this.viewGameButtonsPlayClickColor =
            new ViewGameButtonsPlayClickColor();

        this.gameButtonPlayClickColorAction =
            new ActionGameButtonPlayClickColor();

        this.gameButtonPlayClickColorController =
            new ControllerGameButtonPlayClickColor(
                this.viewGameButtonsPlayClickColor,
                this.gameButtonPlayClickColorAction);


        this.viewGameButtonsPlayStart =
            new ViewGameButtonsPlayStart();

        this.gameButtonsPlayStartAction =
            new ActionGameButtonPlayStart();

        this.gameButtonPlayStartController =
            new ControllerGameButtonPlayStart(
                this.viewGameButtonsPlayStart,
                this.gameButtonsPlayStartAction,
                this.gameRoundAction);


        this.viewGameButtonsPlayStop =
            new ViewGameButtonsPlayStop();

        this.gameButtonsPlayStopAction =
            new ActionGameButtonPlayStop();

        this.gameButtonsPlayStopController =
            new ControllerGameButtonPlayStop(
                this.viewGameButtonsPlayStop,
                this.gameButtonsPlayStopAction);


        this.controllerGamePlayControls =
            new ControllerGamePlayControls(
                this.controllerGameButtonRound,
                this.gameButtonPlayStartController,
                this.gameButtonsPlayStopController,
            );

        this.controllerGamePlayControls.configureStartButton();


        this.viewGameStatisticsTimeGeneral =
            new ViewGameStatisticsTimeGeneral();

        this.gameStatisticsTimeGeneralAction =
            new ActionGameStatisticsTimeGeneral();

        this.gameStatisticsTimeGeneralController =
            new ControllerGameStatisticsTimeGeneral(
                this.viewGameStatisticsTimeGeneral,
                this.gameStatisticsTimeGeneralAction);


        this.viewGameStatisticsTimeFraud =
            new ViewGameStatisticsTimeFraud();

        this.gameStatisticsTimeFraudAction =
            new ActionGameStatisticsTimeGeneral();

        this.gameStatisticsTimeFraudController =
            new ControllerGameStatisticsTimeFraud(
                this.viewGameStatisticsTimeFraud,
                this.gameStatisticsTimeFraudAction);


        this.controllerGameStatisticsMain =
            new ControllerGameStatisticsMain(
                this.gameStatisticsTimeGeneralController,
                this.gameStatisticsTimeFraudController);


        this.controllerGameMain =
            new ControllerGameMain(
                this.controllerGamePlayControls,
                this.controllerGameStatisticsMain,
            );


    }

    createGameConfigurationRoundView() {
        this.controllerGameButtonRound.createConfigurationRound();
    }

    createGameButtonPlayClickColorView() {
        this.gameButtonPlayClickColorController.createGameButtonsView();
    }

    createGameGameButtonsPlayStartView() {
        this.gameButtonPlayStartController.createGameButtonsView();
    }

    createConfigurationGameStatisticsTimeGeneral() {
        this.gameStatisticsTimeGeneralController.createConfigurationGameStatisticsTimeGeneral();
    }

    createConfigurationGameStatisticsTimeFraud() {
        this.gameStatisticsTimeFraudController.createConfigurationGameStatisticsTimeFraud();
    }
}