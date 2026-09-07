import {
    createContainerMainElements,
    createElementDiv,
    createElementDivWithTheSameIdAndClassName
} from "../common/function/commonFunctions.js";
import * as variablesMain from "../common/variable/main/variablesMain.js";
import * as variablesGameButtons from "../common/variable/control/variablesGameButtons.js";
import * as variablesGameStatisticsTimeGeneral
    from "../common/variable/statistic/variablesStatisticsTime.js";
import * as containerGameFiledStatisticsFraud from "../common/variable/statistic/variablesStatisticsFraud.js";

export class ViewMain {

    setConfigurationWebpageStart() {
        createElementDiv(variablesMain.containerMain, variablesMain.containerMainSectionMenu);
        createElementDiv(variablesMain.containerMain, variablesMain.containerMainSectionActions);
        createElementDiv(variablesMain.containerMain, variablesMain.containerMainSectionFooter);
    }

    setContainerMainSection() {
        this.setConfigurationWebpageStart();
        this.createSubpageHome();
    }

    createSubpageHome() {
        this.createMainContainerHome();
        this.createMainContainerGameElements();
    }

    createMainContainerHome() {
        createContainerMainElements(variablesMain.containerMainSectionActions, variablesMain.sectionHome, variablesMain.containerMainSectionHome, variablesMain.containerMainHome);
    }

    createMainContainerGameElements() {
        createElementDivWithTheSameIdAndClassName(variablesMain.containerMainHome, variablesMain.containerGameElements);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameElements, variablesGameButtons.containerGameFiledButtonPlay);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameElements, variablesGameButtons.containerGameFiledButtonMain);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameElements, variablesGameStatisticsTimeGeneral.containerGameFiledStatisticsTime);
        createElementDivWithTheSameIdAndClassName(variablesMain.containerGameElements, containerGameFiledStatisticsFraud.containerGameFiledStatisticsFraud);
    }
}