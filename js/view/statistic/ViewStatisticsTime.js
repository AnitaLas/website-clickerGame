import {
    createElementDiv,
    createElementDivWithIdAndSetClassName,
    createElementDivWithTheSameIdAndClassName,
    setElementClassNameById,
    setElementClassNames,
    setElementClassNameSameAsIdAndSetText,
    setElementTextById
} from "../../common/function/commonFunctions.js";

import * as variablesGameStatisticsTimeGeneral from "../../common/variable/statistic/variablesStatisticsTime.js";

let newContainerGameFiledStatisticsTimeKindParts;

export class ViewStatisticsTime {

    createCSSVariableName(baseVariableName, partToSwitch) {
        let timeKind = "Kind";
        return baseVariableName.replace(timeKind, partToSwitch);
    }

    createContainerStatisticsTimeMain(timeKind) {

        let newContainerGameFiledStatisticsTimeKind = this.createCSSVariableName(variablesGameStatisticsTimeGeneral.containerGameFiledStatisticsTimeKind, timeKind);
        createElementDiv(variablesGameStatisticsTimeGeneral.containerGameFiledStatisticsTimeParts, newContainerGameFiledStatisticsTimeKind);

        newContainerGameFiledStatisticsTimeKindParts = this.createCSSVariableName(variablesGameStatisticsTimeGeneral.containerGameFiledStatisticsTimeKindParts, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKind, newContainerGameFiledStatisticsTimeKindParts, variablesGameStatisticsTimeGeneral.containerGameFiledCommonParts);

        setElementClassNameById(newContainerGameFiledStatisticsTimeKindParts, variablesGameStatisticsTimeGeneral.containerGameFiledCommonParts);
    }

    createContainerStatisticsTimeUpdate(timeKind) {

        let newContainerGameFiledStatisticsTimeKindGamePlay = this.createCSSVariableName(variablesGameStatisticsTimeGeneral.containerGameFiledStatisticsTimeKindGamePlay, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindGamePlay, variablesGameStatisticsTimeGeneral.containerGameFiledCommonGamePlayUpdate);

        let newGameFiledStatisticsTimeKindGamePlay = this.createCSSVariableName(variablesGameStatisticsTimeGeneral.gameFiledStatisticsTimeKindGamePlay, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindGamePlay, newGameFiledStatisticsTimeKindGamePlay, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay);

        let newStatisticsTimeKindGamePlay = this.createCSSVariableName(variablesGameStatisticsTimeGeneral.statisticsTimeKindGamePlay, timeKind);
        createElementDivWithIdAndSetClassName(newGameFiledStatisticsTimeKindGamePlay, newStatisticsTimeKindGamePlay, variablesGameStatisticsTimeGeneral.commonGamePlayTextUpdate);
        setElementClassNames(newStatisticsTimeKindGamePlay, variablesGameStatisticsTimeGeneral.commonGamePlayUpdateTextTime, newStatisticsTimeKindGamePlay);

        let newStatisticsTimeKindGamePlayTextDisplay = this.createCSSVariableName(variablesGameStatisticsTimeGeneral.statisticsTimeKindGamePlayDisplay, timeKind);
        setElementTextById(this.createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), newStatisticsTimeKindGamePlayTextDisplay);
    }

    createContainerStatisticsTimeTextStatic(timeKind, newStatisticsTimeKindTextDisplay) {

        let newContainerGameFiledStatisticsTimeKindText = this.createCSSVariableName(variablesGameStatisticsTimeGeneral.containerGameFiledStatisticsTimeKindText, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindText, variablesGameStatisticsTimeGeneral.containerGameFiledCommonStaticText);

        let newGameFiledStatisticsTimeKindText = this.createCSSVariableName(variablesGameStatisticsTimeGeneral.gameFiledStatisticsTimeKindText, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindText, newGameFiledStatisticsTimeKindText, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay);

        let newStatisticsTimeKindText = this.createCSSVariableName(variablesGameStatisticsTimeGeneral.statisticsTimeKindText, timeKind);
        createElementDivWithIdAndSetClassName(newGameFiledStatisticsTimeKindText, newStatisticsTimeKindText, variablesGameStatisticsTimeGeneral.commonStaticText);

        setElementClassNameSameAsIdAndSetText(newStatisticsTimeKindText, newStatisticsTimeKindTextDisplay);
    }

    createContainerStatisticsTime(timeKind, newStatisticsTimeKindTextDisplay) {
        this.createContainerStatisticsTimeMain(timeKind);
        this.createContainerStatisticsTimeUpdate(timeKind);
        this.createContainerStatisticsTimeTextStatic(timeKind, newStatisticsTimeKindTextDisplay);
    }

    createContainerStatisticsTimeBest() {
        this.createContainerStatisticsTime(variablesGameStatisticsTimeGeneral.timeKindBest, variablesGameStatisticsTimeGeneral.statisticsTimeBestTextDisplay);
    }

    createContainerStatisticsTimeMin() {
        this.createContainerStatisticsTime(variablesGameStatisticsTimeGeneral.timeKindMin, variablesGameStatisticsTimeGeneral.statisticsTimeMinTextDisplay);
    }

    createContainerStatisticsTimeAvg() {
        this.createContainerStatisticsTime(variablesGameStatisticsTimeGeneral.timeKindAvg, variablesGameStatisticsTimeGeneral.statisticsTimeAvgTextDisplay);
    }

    createContainerStatisticsTimeMax() {
        this.createContainerStatisticsTime(variablesGameStatisticsTimeGeneral.timeKindMax, variablesGameStatisticsTimeGeneral.statisticsTimeMaxTextDisplay);
    }

    createGameFieldStatisticsTime() {
        createElementDivWithTheSameIdAndClassName(variablesGameStatisticsTimeGeneral.containerGameFiledStatisticsTime, variablesGameStatisticsTimeGeneral.containerGameFiledStatisticsTimeParts);
        this.createContainerStatisticsTimeBest();
        this.createContainerStatisticsTimeMin();
        this.createContainerStatisticsTimeAvg();
        this.createContainerStatisticsTimeMax();
    }
}