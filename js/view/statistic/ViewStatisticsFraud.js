import {
    createElementDiv,
    createElementDivAnaDivChild,
    createElementDivWithIdAndSetClassName,
    createElementDivWithTheSameIdAndClassName,
    isElementsExistById,
    removeElementById,
    setElementClassNameById,
    setElementClassNamedAndText,
    setElementClassNameSameAsIdAndSetText,
    setElementStyletAsGrid,
    setElementTextById,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesStatisticsFraud from "../../common/variable/statistic/variablesStatisticsFraud.js";
import * as variablesStatisticsTime from "../../common/variable/statistic/variablesStatisticsTime.js";


export class ViewStatisticsFraud {

    createContainerStatisticsFraudSumMain() {
        createElementDivAnaDivChild(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts, variablesStatisticsFraud.containerGameFiledStatisticsFraudBest, variablesStatisticsFraud.containerGameFiledStatisticsFraudBestParts);
        setElementClassNameById(variablesStatisticsFraud.containerGameFiledStatisticsFraudBestParts, variablesStatisticsTime.containerGameFiledCommonParts);
    }

    createContainerStatisticsFraudMain(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay) {
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudGamePlay, fraudUpdate);
        createElementDivWithIdAndSetClassName(containerGameFiledStatisticsFraudGamePlay, gameFiledStatisticsFraudGamePlay, commonGameFiledDisplay);
    }

    createContainerStatisticsFraudSumUpdate() {
        this.createContainerStatisticsFraudMain(variablesStatisticsFraud.containerGameFiledStatisticsFraudBestParts, variablesStatisticsFraud.containerGameFiledStatisticsFraudBestGamePlay, variablesStatisticsFraud.fraudCountRoundUpdateSumNumber, variablesStatisticsFraud.gameFiledStatisticsFraudBestGamePlay, variablesStatisticsTime.commonGameFiledDisplay);
        createElementDivWithIdAndSetClassName(variablesStatisticsFraud.gameFiledStatisticsFraudBestGamePlay, variablesStatisticsFraud.statisticsFraudBestGamePlay, variablesStatisticsTime.commonGamePlayTextUpdate);
        setElementClassNamedAndText(variablesStatisticsFraud.statisticsFraudBestGamePlay, variablesStatisticsFraud.statisticsFraudBestUpdateNumber, variablesStatisticsFraud.statisticsFraudBestGamePlayDisplay);
    }

    createContainerStatisticsFraudSumTextStatic() {
        this.createContainerStatisticsFraudMain(variablesStatisticsFraud.containerGameFiledStatisticsFraudBestParts, variablesStatisticsFraud.containerGameFiledStatisticsFraudBestText, variablesStatisticsTime.containerGameFiledCommonStaticText, variablesStatisticsFraud.gameFiledStatisticsFraudBestText, variablesStatisticsTime.commonGameFiledDisplay);
        createElementDivWithIdAndSetClassName(variablesStatisticsFraud.gameFiledStatisticsFraudBestText, variablesStatisticsFraud.statisticsFraudBestText, variablesStatisticsTime.commonStaticText);
        setElementClassNameSameAsIdAndSetText(variablesStatisticsFraud.statisticsFraudBestText, variablesStatisticsFraud.statisticsFraudBestTextDisplay);
    }

    createContainerStatisticsFraudSum() {
        this.createContainerStatisticsFraudSumMain();
        this.createContainerStatisticsFraudSumUpdate()
        this.createContainerStatisticsFraudSumTextStatic();
    }

    createContainerStatisticsFraudRoundUpdate() {
        createElementDivWithTheSameIdAndClassName(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts, variablesStatisticsFraud.containerGameFiledStatisticsFraudCount);
        createElementDivWithIdAndSetClassName(variablesStatisticsFraud.containerGameFiledStatisticsFraudCount, variablesStatisticsFraud.containerGameFiledStatisticsFraudCountParts, variablesStatisticsTime.containerGameFiledCommonParts);
        createElementDiv(variablesStatisticsFraud.containerGameFiledStatisticsFraudCountParts, variablesStatisticsFraud.containerGameFiledStatisticsFraudCountGamePlay);
        createElementDiv(variablesStatisticsFraud.containerGameFiledStatisticsFraudCountParts, variablesStatisticsFraud.containerGameFiledStatisticsFraudCountText);
        this.createContainerStatisticsFraudMain(variablesStatisticsFraud.containerGameFiledStatisticsFraudCountText, variablesStatisticsFraud.gameFiledStatisticsFraudCountText, variablesStatisticsTime.commonGameFiledDisplay, variablesStatisticsFraud.statisticsFraudCountText, variablesStatisticsTime.commonStaticText);
        setElementClassNameSameAsIdAndSetText(variablesStatisticsFraud.statisticsFraudCountText, variablesStatisticsFraud.statisticsFraudCountTextDisplay);
    }

    createGameFieldStatisticsFraud(maxClicksNumber) {
        createElementDivWithTheSameIdAndClassName(variablesStatisticsFraud.containerGameFiledStatisticsFraud, variablesStatisticsFraud.containerGameFiledStatisticsFraudParts);
        this.createContainerStatisticsFraudSum();
        this.createContainerStatisticsFraudRoundUpdate();
        this.createContainerStatisticsFraudCountPerRound(maxClicksNumber);
    }

    createElementFraudCountRoundInner(parentId, childId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(childId, variablesStatisticsTime.commonGameFiledDisplay);
        setElementClassNameById(childId, variablesStatisticsTime.commonStaticText);
        setElementClassNameById(childId, variablesStatisticsFraud.fraudCountRoundCommon);
        setElementTextById(childId, variablesStatisticsFraud.statisticsFraudCountNumberTextDisplaySetUp);
    }

    createElementFraudCountRoundMain(parentId, childId) {
        createElementDiv(parentId, childId);
        setElementClassNameById(parentId, variablesStatisticsFraud.fraudCountRound);
        setElementClassNameById(parentId, variablesStatisticsFraud.fraudCountRoundUpdateNumber);
    }

    createContainerStatisticsFraudCountPerRound(maxClicksNumber) {

        let parentId = variablesStatisticsFraud.containerGameFiledStatisticsFraudCountGamePlay;
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

            let childId = variablesStatisticsFraud.containerGameFiledStatisticsFraudCountGamePlay + "-" + valueToString(i);
            this.createElementFraudCountRoundMain(parentId, childId);

            let gridTemplateRowsChild = "1fr";
            let gridTemplateColumnsChild = "1fr";
            setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);

            let grandChildId = variablesStatisticsFraud.fraudCountRoundGamePlayUpdateNumberPrefix + valueToString(i);
            this.createElementFraudCountRoundInner(childId, grandChildId);

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
        }
    }

    setGameStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex) {
        this.setGameStatisticFraudRoundCountedNumber(fraudCountedRoundNumber, fraudRoundIndex);
        this.setGameStatisticFraudCountedSumNumber(fraudCountedSumNumber);
    }

    setGameStatisticFraudRoundCountedNumber(fraudCountedRoundNumber, fraudRoundIndex) {
        let result;
        if (fraudCountedRoundNumber < 10)
            result = valueToString(fraudCountedRoundNumber) + variablesStatisticsFraud.statisticsFraudCountNumberTextDisplayLessThanTen;
        else
            result = fraudCountedRoundNumber;

        let elementId = variablesStatisticsFraud.fraudCountRoundGamePlayUpdateNumberPrefix + fraudRoundIndex;
        let text = variablesStatisticsFraud.statisticsFraudCountNumberTextDisplay + result;
        setElementTextById(elementId, text);
    }

    setGameStatisticFraudCountedSumNumber(fraudCountedSumNumber) {
        setElementTextById(variablesStatisticsFraud.statisticsFraudBestGamePlay, fraudCountedSumNumber);
    }

    removeGameFieldStatisticsFraud() {
        if (isElementsExistById(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts))
            removeElementById(variablesStatisticsFraud.containerGameFiledStatisticsFraudParts);
    }
}