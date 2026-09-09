import {ViewButtonsRound} from "./view/control/ViewButtonsRound.js";
import {ActionButtonsRound} from "./action/control/ActionButtonsRound.js";
import {ControllerButtonsRound} from "./controller/control/ControllerButtonsRound.js";

import {ViewButtonClickColor} from "./view/control/ViewButtonClickColor.js";
import {ActionButtonClickColor} from "./action/control/ActionButtonClickColor.js";
import {ControllerButtonClickColor} from "./controller/control/ControllerButtonClickColor.js";

import {ViewButtonStart} from "./view/control/ViewButtonStart.js";
import {ActionButtonStart} from "./action/control/ActionButtonStart.js";
import {ControllerButtonStart} from "./controller/control/ControllerButtonStart.js";

import {ViewButtonStop} from "./view/control/ViewButtonStop.js";
import {ActionButtonStop} from "./action/control/ActionButtonStop.js";
import {ControllerButtonStop} from "./controller/control/ControllerButtonStop.js";

import {ControllerButtonsMain} from "./controller/control/ControllerButtonsMain.js";

import {ViewStatisticsTime} from "./view/statistic/ViewStatisticsTime.js";
import {ActionStatisticsTime} from "./action/statistic/ActionStatisticsTime.js";
import {ControllerStatisticsTime} from "./controller/statistic/ControllerStatisticsTime.js";

import {ViewStatisticsFraud} from "./view/statistic/ViewStatisticsFraud.js";
import {ControllerStatisticsFraud} from "./controller/statistic/ControllerStatisticsFraud.js";

import {ControllerStatisticsMain} from "./controller/statistic/ControllerStatisticsMain.js";

import {ControllerMain} from "./controller/ControllerMain.js";
import {ActionStatisticsFraud} from "./action/statistic/ActionStatisticsFraud.js";

export class GameModule {

    constructor() {

        this.actionButtonsRound =
            new ActionButtonsRound();

        this.viewButtonsRound =
            new ViewButtonsRound();

        this.controllerButtonsRound =
            new ControllerButtonsRound(
                this.viewButtonsRound,
                this.actionButtonsRound);


        this.viewButtonClickColor =
            new ViewButtonClickColor();

        this.actionButtonClickColor =
            new ActionButtonClickColor();

        this.controllerButtonClickColor =
            new ControllerButtonClickColor(
                this.viewButtonClickColor,
                this.actionButtonClickColor);


        this.viewButtonStart =
            new ViewButtonStart();

        this.actionButtonStart =
            new ActionButtonStart();

        this.controllerButtonStart =
            new ControllerButtonStart(
                this.viewButtonStart,
                this.actionButtonStart,
                this.actionButtonsRound);


        this.viewButtonStop =
            new ViewButtonStop();

        this.actionButtonStop =
            new ActionButtonStop();

        this.controllerButtonStop =
            new ControllerButtonStop(
                this.viewButtonStop,
                this.actionButtonStop);


        this.controllerButtonsMain =
            new ControllerButtonsMain(
                this.controllerButtonsRound,
                this.controllerButtonStart,
                this.controllerButtonStop,
                this.controllerButtonClickColor);


        this.viewStatisticsTime =
            new ViewStatisticsTime();

        this.actionStatisticsTime =
            new ActionStatisticsTime();

        this.controllerStatisticsTime =
            new ControllerStatisticsTime(
                this.viewStatisticsTime,
                this.actionStatisticsTime);


        this.viewStatisticsFraud =
            new ViewStatisticsFraud();

        this.actionStatisticsFraud =
            new ActionStatisticsFraud();

        this.controllerStatisticsFraud =
            new ControllerStatisticsFraud(
                this.viewStatisticsFraud,
                this.actionStatisticsFraud);


        this.controllerStatisticsMain =
            new ControllerStatisticsMain(
                this.controllerStatisticsTime,
                this.controllerStatisticsFraud);


        this.controllerMain =
            new ControllerMain(
                this.controllerButtonsMain,
                this.controllerStatisticsMain,
            );

        this.controllerMain.configureStartGame();
        // this.controllerMain.configureClickColor();
    }

    createGame() {
        this.createGameConfigurationRoundView();
        this.createGameButtonPlayClickColorView();
        this.createGameGameButtonsPlayStartView();
    }

    createGameConfigurationRoundView() {
        this.controllerButtonsRound.createConfigurationRound();
    }

    createGameButtonPlayClickColorView() {
        this.controllerButtonClickColor.createGameButtonsView();
    }

    createGameGameButtonsPlayStartView() {
        this.controllerButtonStart.createGameButtonsView();
    }
}