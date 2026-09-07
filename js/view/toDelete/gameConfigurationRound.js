// // configuration - round number
// function createContainerManuConfiguration() {
//     createMainContainerManuConfiguration();
//     createContainerMenuConfigurationText();
//     // createContainerMenuConfigurationGameKind();
//     createContainerMenuConfigurationClickNumber();
// }
//
// function createMainContainerManuConfiguration() {
//     createElementDivWithTheSameIdAndClassName(containerMenuMainParts, containerMenuGameConfiguration);
//     createElementDiv(containerMenuGameConfiguration, containerMenuGameConfigurationParts);
// }
//
// function createContainerMenuConfiguration(containerMenuGameConfigurationText, menuGameConfigurationText) {
//     createElementDivAnaDivChild(containerMenuGameConfigurationParts, containerMenuGameConfigurationText, menuGameConfigurationText);
// }
//
// function createContainerMenuConfigurationText() {
//     createContainerMenuConfiguration(containerMenuGameConfigurationText, menuGameConfigurationText);
//     setElementClassNamedAndText(menuGameConfigurationText, menuGameConfigurationDisplay, menuGameConfigurationTextDisplay);
// }
//
// function createContainerMenuConfigurationGameKind() {
//     createElementDiv(containerMenuGameConfigurationParts, containerMenuGameConfigurationGameKind);
// }
//
// function createContainerMenuConfigurationClickNumber() {
//     createContainerMenuConfiguration(containerMenuGameConfigurationClickNumber, containerMenuGameConfigurationClickNumberParts);
//     createContainersMenuConfigurationClickNumberButton();
// }
//
// function createContainersMenuConfigurationClickNumberButton() {
//     createContainersMenuConfigurationClickNumberRows();
//     createContainersMenuConfigurationClickNumberAllRows();
// }
//
// function createContainersMenuConfigurationClickNumberRows() {
//     createElementDivAnaDivChild(containerMenuGameConfigurationClickNumberParts, containerMenuGameConfigurationClickNumberRow0, containerMenuGameConfigurationClickNumberPartsRow0);
//     createElementDivAnaDivChild(containerMenuGameConfigurationClickNumberParts, containerMenuGameConfigurationClickNumberRow1, containerMenuGameConfigurationClickNumberPartsRow1);
// }
//
// function createContainersMenuConfigurationClickNumberAllRows() {
//     for (let rowNumber = 0; rowNumber < 2; rowNumber++) {
//         createContainersMenuConfigurationClickNumberPerRow(rowNumber);
//     }
// }
//
// function createGameConfigurationRoundButton(parentId, buttonId, elementText) {
//     createElementButtonAndSetFunctionOnclick(parentId, buttonId, functionNameOnclickSetConfigurationClickNumber);
//     setElementAttributeValueById(buttonId, valueToString(clickNumberButton));
//     setElementClassNames(buttonId, commonGameFiledDisplay, menuGameConfigurationButton);
//     setElementClassNamedAndText(buttonId, menuGameConfigurationText, elementText);
// }
//
// function createContainersMenuConfigurationClickNumberPerRow(rowNumber) {
//
//     let parentId = containerMenuGameConfigurationClickNumberPartsRow + rowNumber;
//     let clicksNumberPerRow = 5;
//
//     let gridRowStartNumber = 1;
//     let gridColumnStartNumber = 1;
//     let gridRowEndNumber = 2;
//     let gridColumnEndNumber = 2;
//
//     let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
//     let gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 38fr 1fr)";
//     setElementStyletAsGrid(parentId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns);
//
//     let gridRowStartNumberChild = 2;
//     let gridColumnStartNumberChild = 2;
//     let gridRowEndNumberChild = 3;
//     let gridColumnEndNumberChild = 3;
//
//     for (let i = 0; i < clicksNumberPerRow; i++) {
//
//         let childId = containerGameConfigurationRoundNumberPrefix + rowNumber + "-button-" + i;
//         createElementDiv(parentId, childId);
//
//         let gridTemplateRowsChild = "1fr";
//         let gridTemplateColumnsChild = "1fr";
//         setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);
//
//         let buttonId = menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumberButton);
//         let elementText = menuGameConfigurationClickNumberTextDisplay + valueToString(clickNumberButton);
//         createGameConfigurationRoundButton(childId, buttonId, elementText);
//
//         if (clickNumberButton === 5)
//             setElementClassNameById(buttonId, menuGameConfigurationButtonCurrentNumber);
//
//         gridColumnStartNumberChild += 3;
//         gridColumnEndNumberChild += 3;
//         clickNumberButton += 1;
//     }/
// }