import {
    createElementDiv,
    createElementDivAnaDivChild,
    createElementDivWithIdAndSetClassName,
    createElementDivWithTheSameIdAndClassName,
    setElementClassNameById,
    setElementClassNamedAndText,
    setElementClassNameSameAsIdAndSetText,
    setElementStyletAsGrid,
    setElementTextById,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesGameStatisticsTimeFraud from "../../common/variable/statistic/variablesStatisticsFraud.js";
import * as variablesGameStatisticsTimeGeneral from "../../common/variable/statistic/variablesStatisticsTime.js";


export class ViewStatisticsFraud {

    createContainerStatisticsFraudSumMain() {
        createElementDivAnaDivChild(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBest, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestParts);
        setElementClassNameById(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestParts, variablesGameStatisticsTimeGeneral.containerGameFiledCommonParts);
    }

    createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay) {
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate);
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudGamePlay, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay);
    }

    createContainerStatisticsFraudSumUpdate() {
        this.createContainerStatisticsFraudMain(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestGamePlay, variablesGameStatisticsTimeFraud.fraudCountRoundUpdateSumNumber, variablesGameStatisticsTimeFraud.gameFiledStatisticsFraudBestGamePlay, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay);
        createElementDivWithIdAndSetClassName(variablesGameStatisticsTimeFraud.gameFiledStatisticsFraudBestGamePlay, variablesGameStatisticsTimeFraud.statisticsFraudBestGamePlay, variablesGameStatisticsTimeGeneral.commonGamePlayTextUpdate);
        setElementClassNamedAndText(variablesGameStatisticsTimeFraud.statisticsFraudBestGamePlay, variablesGameStatisticsTimeFraud.statisticsFraudBestUpdateNumber, variablesGameStatisticsTimeFraud.statisticsFraudBestGamePlayDisplay);
    }

    createContainerStatisticsFraudSumTextStatic() {
        this.createContainerStatisticsFraudMain(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudBestText, variablesGameStatisticsTimeGeneral.containerGameFiledCommonStaticText, variablesGameStatisticsTimeFraud.gameFiledStatisticsFraudBestText, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay);
        createElementDivWithIdAndSetClassName(variablesGameStatisticsTimeFraud.gameFiledStatisticsFraudBestText, variablesGameStatisticsTimeFraud.statisticsFraudBestText, variablesGameStatisticsTimeGeneral.commonStaticText);
        setElementClassNameSameAsIdAndSetText(variablesGameStatisticsTimeFraud.statisticsFraudBestText, variablesGameStatisticsTimeFraud.statisticsFraudBestTextDisplay);
    }

    createContainerStatisticsFraudSum() {
        this.createContainerStatisticsFraudSumMain();
        this.createContainerStatisticsFraudSumUpdate()
        this.createContainerStatisticsFraudSumTextStatic();
    }

    createContainerStatisticsFraudRoundUpdate() {
        createElementDivWithTheSameIdAndClassName(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCount);
        createElementDivWithIdAndSetClassName(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCount, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountParts, variablesGameStatisticsTimeGeneral.containerGameFiledCommonParts);
        createElementDiv(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountGamePlay);
        createElementDiv(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountParts, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountText);
        this.createContainerStatisticsFraudMain(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountText, variablesGameStatisticsTimeFraud.gameFiledStatisticsFraudCountText, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay, variablesGameStatisticsTimeFraud.statisticsFraudCountText, variablesGameStatisticsTimeGeneral.commonStaticText);
        setElementClassNameSameAsIdAndSetText(variablesGameStatisticsTimeFraud.statisticsFraudCountText, variablesGameStatisticsTimeFraud.statisticsFraudCountTextDisplay);
    }

    createGameFieldStatisticsFraud(maxClicksNumber) {
        createElementDivWithTheSameIdAndClassName(variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraud, variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudParts);
        this.createContainerStatisticsFraudSum();
        this.createContainerStatisticsFraudRoundUpdate();
        this.createContainerStatisticsFraudCountPerRound(maxClicksNumber);
    }

    createElementFraudCountRoundInner(parentId, childId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(childId, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay);
        setElementClassNameById(childId, variablesGameStatisticsTimeGeneral.commonStaticText);
        setElementClassNameById(childId, variablesGameStatisticsTimeFraud.fraudCountRoundCommon);
        setElementTextById(childId, variablesGameStatisticsTimeFraud.statisticsFraudCountNumberTextDisplaySetUp);
    }

    createElementFraudCountRoundMain(parentId, childId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(parentId, variablesGameStatisticsTimeFraud.fraudCountRound);
        setElementClassNameById(parentId, variablesGameStatisticsTimeFraud.fraudCountRoundUpdateNumber);
    }

    createContainerStatisticsFraudCountPerRound(maxClicksNumber) {

        let parentId = variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountGamePlay;
        let fraudNumber = maxClicksNumber;

        let gridRowStartNumber = 1;
        let gridColumnStartNumber = 1;
        let gridRowEndNumber = 2;
        let gridColumnEndNumber = 2;

        let gridTemplateRows = "repeat(1, 2fr 6fr 2fr)";
        let gridTemplateColumns = "repeat(" + fraudNumber + ", 1fr 100fr 1fr)";
        setElementStyletAsGrid(parentId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns);

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        for (let i = 0; i < fraudNumber; i++) {

            let childId = variablesGameStatisticsTimeFraud.containerGameFiledStatisticsFraudCountGamePlay + "-" + valueToString(i);
            this.createElementFraudCountRoundMain(parentId, childId);

            let gridTemplateRowsChild = "1fr";
            let gridTemplateColumnsChild = "1fr";
            setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);

            let grandChildId = variablesGameStatisticsTimeFraud.fraudCountRoundGamePlayUpdateNumberPrefix + valueToString(i);
            this.createElementFraudCountRoundInner(childId, grandChildId);

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
        }
    }
}