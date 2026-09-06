import {ControllerGameStatisticsTimeGeneral} from "./ControllerGameStatisticsTimeGeneral.js";
import {ControllerGameStatisticsTimeFraud} from "./ControllerGameStatisticsTimeFraud.js";


export class ControllerGameStatisticsMain {


    constructor(controllerGameStatisticsTimeGeneral, controllerGameStatisticsTimeFraud) {
        this.controllerGameStatisticsTimeGeneral = controllerGameStatisticsTimeGeneral;
        this.controllerGameStatisticsTimeFraud = controllerGameStatisticsTimeFraud;
    }


    createConfigurationStatisticsFraud(maxClicksNumber){
        this.controllerGameStatisticsTimeFraud.createConfigurationGameStatisticsTimeFraud(maxClicksNumber);
    }



}