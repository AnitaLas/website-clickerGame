import {ViewStatisticsTime} from "../view/statistic/ViewStatisticsTime.js";
import {ActionStatisticsTime} from "../action/statistic/ActionStatisticsTime.js";
import {ControllerStatisticsTime} from "../controller/statistic/ControllerStatisticsTime.js";

import {ViewStatisticsFraud} from "../view/statistic/ViewStatisticsFraud.js";
import {ControllerStatisticsFraud} from "../controller/statistic/ControllerStatisticsFraud.js";

import {ControllerStatisticsMain} from "../controller/statistic/ControllerStatisticsMain.js";

import {ActionStatisticsFraud} from "../action/statistic/ActionStatisticsFraud.js";


export class ModuleStatistics {

    constructor() {

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
    }

    getControllerStatisticsMain() {
        return this.controllerStatisticsMain;
    }
}