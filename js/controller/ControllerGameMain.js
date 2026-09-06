import {ControllerGamePlayControls} from "./control/ControllerGamePlayControls.js";
import {ControllerGameStatisticsMain} from "./statistics/ControllerGameStatisticsMain.js";
import {ControllerGameButtonPlayClickColor} from "./ControllerGameButtonPlayClickColor.js";

export class ControllerGameMain{

    constructor(controllerGamePlayControls, controllerGameButtonPlayClickColor, controllerGameStatisticsMain) {
        this.controllerGamePlayControls = controllerGamePlayControls;
        this.controllerGameButtonPlayClickColor = controllerGameButtonPlayClickColor;
        this.controllerGameStatisticsMain = controllerGameStatisticsMain;
    }


    startGame() {

        const maxClicksNumber =
            this.controllerGamePlayControls
                .getMaxClicksNumberSetByUser();

        this.controllerGameStatisticsMain
            .createConfigurationStatisticsFraud(maxClicksNumber);
    }


}