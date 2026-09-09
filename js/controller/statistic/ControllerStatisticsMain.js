import {addEventListenerOnClickButton, getElementById} from "../../common/function/commonFunctions.js";
import * as variablesGameButtons from "../../common/variable/control/variablesGameButtons.js";

export class ControllerStatisticsMain {

    constructor(controllerStatisticsTime, controllerStatisticsFraud) {
        this.controllerStatisticsTime = controllerStatisticsTime;
        this.controllerStatisticsFraud = controllerStatisticsFraud;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    createConfigurationStatisticsMain(maxClicksNumber) {
        this.createConfigurationStatisticsTime();
        this.createConfigurationStatisticsFraud(maxClicksNumber);
    }

    createConfigurationStatisticsTime() {
        this.controllerStatisticsTime.createConfigurationGameStatisticsTimeGeneral();
    }

    setConfigurationCLickColor(event) {

        // this.createConfigurationStatisticsMain(maxClicksNumber);

        if (this.onStart) {
            this.onStart();
        }
    }

    configureButtonClickColor() {
        addEventListenerOnClickButton(
            variablesGameButtons.gameFiledButtonPlay,
            this.setConfigurationCLickColor,
            this
        );
    }

    createConfigurationStatisticsFraud(maxClicksNumber) {
        this.controllerStatisticsFraud.createConfigurationGameStatisticsTimeFraud(maxClicksNumber);
    }

    setGameStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex) {
        this.controllerStatisticsFraud.setGameStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex);
    }
}