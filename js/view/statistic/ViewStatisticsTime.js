import {
    createElementDiv,
    createElementDivWithIdAndSetClassName,
    createElementDivWithTheSameIdAndClassName,
    setElementClassNameById,
    setElementClassNames,
    setElementClassNameSameAsIdAndSetText,
    setElementTextById
} from "../../common/function/commonFunctions.js";

import * as variablesStatisticsTime from "../../common/variable/statistic/variablesStatisticsTime.js";


let newContainerGameFiledStatisticsTimeKindParts;

export class ViewStatisticsTime {

    createCSSVariableName(baseVariableName, partToSwitch) {
        let timeKind = "Kind";
        return baseVariableName.replace(timeKind, partToSwitch);
    }

    createContainerStatisticsTimeMain(timeKind) {

        let newContainerGameFiledStatisticsTimeKind = this.createCSSVariableName(variablesStatisticsTime.containerGameFiledStatisticsTimeKind, timeKind);
        createElementDiv(variablesStatisticsTime.containerGameFiledStatisticsTimeParts, newContainerGameFiledStatisticsTimeKind);

        newContainerGameFiledStatisticsTimeKindParts = this.createCSSVariableName(variablesStatisticsTime.containerGameFiledStatisticsTimeKindParts, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKind, newContainerGameFiledStatisticsTimeKindParts, variablesStatisticsTime.containerGameFiledCommonParts);

        setElementClassNameById(newContainerGameFiledStatisticsTimeKindParts, variablesStatisticsTime.containerGameFiledCommonParts);
    }

    createContainerStatisticsTimeUpdate(timeKind) {

        let newContainerGameFiledStatisticsTimeKindGamePlay = this.createCSSVariableName(variablesStatisticsTime.containerGameFiledStatisticsTimeKindGamePlay, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindGamePlay, variablesStatisticsTime.containerGameFiledCommonGamePlayUpdate);

        let newGameFiledStatisticsTimeKindGamePlay = this.createCSSVariableName(variablesStatisticsTime.gameFiledStatisticsTimeKindGamePlay, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindGamePlay, newGameFiledStatisticsTimeKindGamePlay, variablesStatisticsTime.commonGameFiledDisplay);

        let newStatisticsTimeKindGamePlay = this.createCSSVariableName(variablesStatisticsTime.statisticsTimeKindGamePlay, timeKind);
        createElementDivWithIdAndSetClassName(newGameFiledStatisticsTimeKindGamePlay, newStatisticsTimeKindGamePlay, variablesStatisticsTime.commonGamePlayTextUpdate);
        setElementClassNames(newStatisticsTimeKindGamePlay, variablesStatisticsTime.commonGamePlayUpdateTextTime, newStatisticsTimeKindGamePlay);

        let newStatisticsTimeKindGamePlayTextDisplay = this.createCSSVariableName(variablesStatisticsTime.statisticsTimeKindGamePlayDisplay, timeKind);
        setElementTextById(this.createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), newStatisticsTimeKindGamePlayTextDisplay);
    }

    createContainerStatisticsTimeTextStatic(timeKind, newStatisticsTimeKindTextDisplay) {

        let newContainerGameFiledStatisticsTimeKindText = this.createCSSVariableName(variablesStatisticsTime.containerGameFiledStatisticsTimeKindText, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindText, variablesStatisticsTime.containerGameFiledCommonStaticText);

        let newGameFiledStatisticsTimeKindText = this.createCSSVariableName(variablesStatisticsTime.gameFiledStatisticsTimeKindText, timeKind);
        createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindText, newGameFiledStatisticsTimeKindText, variablesStatisticsTime.commonGameFiledDisplay);

        let newStatisticsTimeKindText = this.createCSSVariableName(variablesStatisticsTime.statisticsTimeKindText, timeKind);
        createElementDivWithIdAndSetClassName(newGameFiledStatisticsTimeKindText, newStatisticsTimeKindText, variablesStatisticsTime.commonStaticText);

        setElementClassNameSameAsIdAndSetText(newStatisticsTimeKindText, newStatisticsTimeKindTextDisplay);
    }

    createContainerStatisticsTime(timeKind, newStatisticsTimeKindTextDisplay) {
        this.createContainerStatisticsTimeMain(timeKind);
        this.createContainerStatisticsTimeUpdate(timeKind);
        this.createContainerStatisticsTimeTextStatic(timeKind, newStatisticsTimeKindTextDisplay);
    }

    createContainerStatisticsTimeBest() {
        this.createContainerStatisticsTime(variablesStatisticsTime.timeKindBest, variablesStatisticsTime.statisticsTimeBestTextDisplay);
    }

    createContainerStatisticsTimeMin() {
        this.createContainerStatisticsTime(variablesStatisticsTime.timeKindMin, variablesStatisticsTime.statisticsTimeMinTextDisplay);
    }

    createContainerStatisticsTimeAvg() {
        this.createContainerStatisticsTime(variablesStatisticsTime.timeKindAvg, variablesStatisticsTime.statisticsTimeAvgTextDisplay);
    }

    createContainerStatisticsTimeMax() {
        this.createContainerStatisticsTime(variablesStatisticsTime.timeKindMax, variablesStatisticsTime.statisticsTimeMaxTextDisplay);
    }

    createGameFieldStatisticsTime() {
        createElementDivWithTheSameIdAndClassName(variablesStatisticsTime.containerGameFiledStatisticsTime, variablesStatisticsTime.containerGameFiledStatisticsTimeParts);
        this.createContainerStatisticsTimeBest();
        this.createContainerStatisticsTimeMin();
        this.createContainerStatisticsTimeAvg();
        this.createContainerStatisticsTimeMax();
    }
}