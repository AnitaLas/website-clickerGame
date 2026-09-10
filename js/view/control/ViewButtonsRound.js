import {
    createElementButton,
    createElementDiv,
    createElementDivAnaDivChild,
    createElementDivWithTheSameIdAndClassName, getElementAttributeValueById,
    setElementAttributeValueById,
    setElementClassNameById,
    setElementClassNamedAndText,
    setElementClassNames,
    setElementStyletAsGrid,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesMenu from "../../common/variable/menu/variablesMenu.js";
import * as variableButtonRound from "../../common/variable/control/variableButtonRound.js";
import * as variablesStatisticsTime from "../../common/variable/statistic/variablesStatisticsTime.js";

export class ViewButtonsRound {

    createViewGameConfigurationRound() {
        this.createMainContainerConfiguration();
        this.createContainerMenuConfigurationText();
        // createContainerMenuConfigurationGameKind();
        this.createContainerConfigurationClickNumber();
    }

    createMainContainerConfiguration() {
        createElementDivWithTheSameIdAndClassName(variablesMenu.containerMenuMainParts, variableButtonRound.containerMenuGameConfiguration);
        createElementDiv(variableButtonRound.containerMenuGameConfiguration, variableButtonRound.containerMenuGameConfigurationParts);
    }

    createContainerConfiguration(containerMenuGameConfigurationText, menuGameConfigurationText) {
        createElementDivAnaDivChild(variableButtonRound.containerMenuGameConfigurationParts, containerMenuGameConfigurationText, menuGameConfigurationText);
    }

    createContainerMenuConfigurationText() {
        this.createContainerConfiguration(variableButtonRound.containerMenuGameConfigurationText, variableButtonRound.menuGameConfigurationText);
        setElementClassNamedAndText(variableButtonRound.menuGameConfigurationText, variableButtonRound.menuGameConfigurationDisplay, variableButtonRound.menuGameConfigurationTextDisplay);
    }

    createContainerMenuConfigurationGameKind() {
        createElementDiv(variableButtonRound.containerMenuGameConfigurationParts, variableButtonRound.containerMenuGameConfigurationGameKind);
    }

    createContainerConfigurationClickNumber() {
        this.createContainerConfiguration(variableButtonRound.containerMenuGameConfigurationClickNumber, variableButtonRound.containerMenuGameConfigurationClickNumberParts);
        this.createContainersConfigurationClickNumberButton();
    }

    createContainersConfigurationClickNumberButton() {
        this.createContainersConfigurationClickNumberRows();
        this.createContainersConfigurationClickNumberAllRows();
    }

    createContainersConfigurationClickNumberRows() {
        createElementDivAnaDivChild(variableButtonRound.containerMenuGameConfigurationClickNumberParts, variableButtonRound.containerMenuGameConfigurationClickNumberRow0, variableButtonRound.containerMenuGameConfigurationClickNumberPartsRow0);
        createElementDivAnaDivChild(variableButtonRound.containerMenuGameConfigurationClickNumberParts, variableButtonRound.containerMenuGameConfigurationClickNumberRow1, variableButtonRound.containerMenuGameConfigurationClickNumberPartsRow1);
    }

    createContainersConfigurationClickNumberAllRows() {

        for (let rowNumber = 0; rowNumber < 2; rowNumber++) {
            this.createContainersConfigurationClickNumberPerRow(rowNumber);
        }
    }

    createContainersConfigurationClickNumberPerRow(rowNumber) {

        let parentId = variableButtonRound.containerMenuGameConfigurationClickNumberPartsRow + rowNumber;
        let clicksNumberPerRow = 5;

        let gridRowStartNumber = 1;
        let gridColumnStartNumber = 1;
        let gridRowEndNumber = 2;
        let gridColumnEndNumber = 2;

        let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
        let gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 38fr 1fr)";
        setElementStyletAsGrid(parentId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns);

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        let clickNumberButton = 1;

        if (rowNumber === 1) {
            clickNumberButton = clicksNumberPerRow + 1;
        }

        for (let i = 0; i < clicksNumberPerRow; i++) {

            let childId = variableButtonRound.containerGameConfigurationRoundNumberPrefix + rowNumber + "-button-" + i;
            createElementDiv(parentId, childId);

            let gridTemplateRowsChild = "1fr";
            let gridTemplateColumnsChild = "1fr";
            setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);

            let buttonId = variableButtonRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumberButton);
            let elementText = variableButtonRound.menuGameConfigurationClickNumberTextDisplay + valueToString(clickNumberButton);
            this.createGameConfigurationRoundButton(childId, buttonId, clickNumberButton, elementText);

            if (clickNumberButton === 5)
                setElementClassNameById(buttonId, variableButtonRound.menuGameConfigurationButtonCurrentNumber);

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
            clickNumberButton += 1;
        }
    }

    createGameConfigurationRoundButton(parentId, buttonId, attributeValue, elementText) {
        createElementButton(parentId, buttonId);
        setElementAttributeValueById(buttonId, valueToString(attributeValue));
        setElementClassNames(buttonId, variablesStatisticsTime.commonGameFiledDisplay, variableButtonRound.menuGameConfigurationButton);
        setElementClassNamedAndText(buttonId, variableButtonRound.menuGameConfigurationText, elementText);
    }

    getMaxClicksNumberSetByUser(buttonIdCurrent) {
        return getElementAttributeValueById(buttonIdCurrent);
    }
}