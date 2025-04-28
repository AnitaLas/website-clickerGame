let clickNumberButton = 1;

function setContainerMainSection() {
    createElementDiv(containerMain, containerMainSectionMenu);
    createElementDiv(containerMain, containerMainSectionActions);
    createElementDiv(containerMain, containerMainSectionFooter);
}

setConfigurationWebpageStart();

function setConfigurationWebpageStart() {
    setContainerMainSection();
    createMenu();
    createSubpageHome();
    createFooter();
}

function createMenu() {
    createContainerMainMenu();
    createContainerMainMenuParts();
    createContainerManuTitle();
    createContainerManuConfiguration();
}

// menu
function createContainerMainMenu() {
    createContainerMainElements(containerMainSectionMenu, sectionMenu, containerSectionMenu, containerMenuMain);
}

function createContainerMainMenuParts() {
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMain, containerMenuMainParts);
}

function createContainerManuTitle() {
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMainParts, containerMenuTitleMain);
    createElementDiv(containerMenuTitleMain, menuTitle);
    setElementClassName(menuTitle, menuTitle)
    createElementP(menuTitle, menuTitleText);
    setElementClassName(menuTitleText, menuTitleText);
    setElementTextById(menuTitleText, menuTitleTextDisplay);
}

function createContainerManuConfiguration() {
    createMainContainerManuConfiguration();
    createContainerMenuConfigurationText();
    // createContainerMenuConfigurationGameKind();
    createContainerMenuConfigurationClickNumber();
}

function createMainContainerManuConfiguration() {
    createElementDivWithTheSameValueForIdAndClassName(containerMenuMainParts, containerMenuGameConfiguration);
    createElementDiv(containerMenuGameConfiguration, containerMenuGameConfigurationParts);
}

function createContainerMenuConfigurationText(){
    createElementDiv(containerMenuGameConfigurationParts, containerMenuGameConfigurationText);
    createElementDiv(containerMenuGameConfigurationText, menuGameConfigurationText);
    setElementClassName(menuGameConfigurationText, menuGameConfigurationDisplay);
    setElementTextById(menuGameConfigurationText, menuGameConfigurationTextDisplay);
}

function createContainerMenuConfigurationGameKind(){
    createElementDiv(containerMenuGameConfigurationParts, containerMenuGameConfigurationGameKind);
}

function createContainerMenuConfigurationClickNumber(){
    createElementDiv(containerMenuGameConfigurationParts, containerMenuGameConfigurationClickNumber);
    createElementDiv(containerMenuGameConfigurationClickNumber, containerMenuGameConfigurationClickNumberParts);
    createContainersMenuConfigurationClickNumberButton();
}


function createContainersMenuConfigurationClickNumberButton(){
    createContainersMenuConfigurationClickNumberRows();
    createContainersMenuConfigurationClickNumberAllRows();
}

function createContainersMenuConfigurationClickNumberRows(){
    createElementDiv(containerMenuGameConfigurationClickNumberParts, containerMenuGameConfigurationClickNumberRow0);
    createElementDiv(containerMenuGameConfigurationClickNumberRow0, containerMenuGameConfigurationClickNumberPartsRow0);
    createElementDiv(containerMenuGameConfigurationClickNumberParts, containerMenuGameConfigurationClickNumberRow1);
    createElementDiv(containerMenuGameConfigurationClickNumberRow1, containerMenuGameConfigurationClickNumberPartsRow1);
}

function  createContainersMenuConfigurationClickNumberAllRows(){
    for(let rowNumber =0; rowNumber<2; rowNumber++){
        createContainersMenuConfigurationClickNumberPerRow(rowNumber);
    }
}

function createContainersMenuConfigurationClickNumberPerRow(rowNumber) {
    // console.log("rowNumber: " +rowNumber);
    let parentElement = document.getElementById(containerMenuGameConfigurationClickNumberPartsRow+rowNumber);

    // console.log("containerMenuGameConfigurationClickNumberRow: " + containerMenuGameConfigurationClickNumberRow+rowNumber);
    let clicksNumberPerRow = 5;

    let rowStart = 1;
    let columnStart = 1;
    let rowEnd = 2;
    let columnEnd = 2;

    parentElement.style.display = "grid";
    parentElement.style.backgroundColor = "black";
    parentElement.style.gridRow = setNumberAsString(rowStart);
    parentElement.style.gridColumn = setNumberAsString(columnStart);
    parentElement.style.gridRowEnd = setNumberAsString(rowEnd);
    parentElement.style.gridColumnEnd = setNumberAsString(columnEnd);
    // parentElement.style.gridTemplateRows = " repeat(1, 2fr 6fr 2fr) ";
    parentElement.style.gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
    // parentElement.style.gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 100fr 1fr)";
    parentElement.style.gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 38fr 1fr)";

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 3;
    let columnChildEnd = 3;

    for (let i = 0; i < clicksNumberPerRow; i++) {

        let newDiv = document.createElement("div");
        parentElement.append(newDiv);
        newDiv.style.display = "grid";
        newDiv.style.gridRow = setNumberAsString(rowChildStart);
        newDiv.style.gridColumn = setNumberAsString(columnChildStart);
        newDiv.style.gridRowEnd = setNumberAsString(rowChildEnd);
        newDiv.style.gridColumnEnd = setNumberAsString(columnChildEnd);
        newDiv.style.gridTemplateRows = "1fr";
        newDiv.style.gridTemplateColumns = "1fr";

        let newButton = document.createElement("button");
        newDiv.append(newButton);
        newButton.innerHTML = menuGameConfigurationClickNumberTextDisplay + setNumberAsString(clickNumberButton);
        newButton.setAttribute("id", menuGameConfigurationButtonClickNumber + setNumberAsString(clickNumberButton));
        newButton.classList.add(commonGameFiledDisplay);
        newButton.classList.add(menuGameConfigurationText);
        newButton.classList.add(menuGameConfigurationButton);
        newButton.value = clickNumberButton;
        setFunctionOnclick(menuGameConfigurationButtonClickNumber + setNumberAsString(clickNumberButton), functionNameOnclickSetConfigurationClickNumber);

        if(clickNumberButton === 5){
            newButton.classList.add(menuGameConfigurationButtonCurrentNumber);
        }

        columnChildStart += 3;
        columnChildEnd += 3;
        clickNumberButton += 1;
    }
}

// main section
function createSubpageHome() {
    createMainContainerHome();
    createContainerGameElements();
}

function createMainContainerHome() {
    createContainerMainElements(containerMainSectionActions, sectionHome, containerMainSectionHome, containerMainHome);
}

function createMainContainerGameElements() {
    createElementDivWithTheSameValueForIdAndClassName(containerMainHome, containerGameElements);
    createElementDivWithTheSameValueForIdAndClassName(containerGameElements, containerGameFiledButtonPlay);
    createElementDivWithTheSameValueForIdAndClassName(containerGameElements, containerGameFiledButtonMain);
    createElementDivWithTheSameValueForIdAndClassName(containerGameElements, containerGameFiledStatisticsTime);
    createElementDivWithTheSameValueForIdAndClassName(containerGameElements, containerGameFiledStatisticsFraud);
}

function createContainerGameElements() {
    createMainContainerGameElements();
    createGameFieldPButtonPlay();
    createGameFieldPButtonMain();
    // createGameFieldStatisticsTime();
    // createGameFieldStatisticsFraud();
}

function createGameFieldPButtonMain() {
    // start and stop
    createElementDiv(containerGameFiledButtonMain, containerGameFiledButtonsMainParts);
    createGameFieldPButtonMainStart();
    // createGameFieldPButtonMainStop();
}

function createGameFieldPButtonPlay() {
    createElementButton(containerGameFiledButtonPlay, gameFiledButtonPlay);
    setElementClassName(gameFiledButtonPlay, gameFiledButtonPlay);
    // setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
}

function createGameFieldPButtonMainStart() {
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStart);
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    createElementButton(gameFiledButtonMainStart, buttonMainStart);
    setElementClassName(buttonMainStart, gameFiledButtonMain);
    setFunctionOnclick(buttonMainStart, functionNameOnclickPlayGameColorStart);
    setElementTextById(buttonMainStart, containerGameFiledButtonsMainStartTextDisplay);
}

function createGameFieldPButtonMainStop() {
    let result = isElementsExistById(containerGameFiledButtonsMainStop);
    if (!result) {
        createElementDivWithTheSameValueForIdAndClassName(containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStop);
        createElementDivWithTheSameValueForIdAndClassName(containerGameFiledButtonsMainStop, gameFiledButtonMainStop);
        createElementButton(gameFiledButtonMainStop, buttonMainStop);
        setElementClassName(buttonMainStop, gameFiledButtonMain);
        setFunctionOnclick(buttonMainStop, functionNameOnclickPlayGameColorStop);
        setElementTextById(buttonMainStop, containerGameFiledButtonsMainStopTextDisplay);
    }
}

function createCSSVariableName(baseVariableName, partToSwitch) {
    let timeKind = "Kind";
    return baseVariableName.replace(timeKind, partToSwitch);
}

function createContainerStatisticsTime(timeKind, newStatisticsTimeKindTextDisplay) {
    // container main
    let newContainerGameFiledStatisticsTimeKind = createCSSVariableName(containerGameFiledStatisticsTimeKind, timeKind);
    createElementDiv(containerGameFiledStatisticsTimeParts, newContainerGameFiledStatisticsTimeKind);

    let newContainerGameFiledStatisticsTimeKindParts = createCSSVariableName(containerGameFiledStatisticsTimeKindParts, timeKind);
    createElementDiv(newContainerGameFiledStatisticsTimeKind, newContainerGameFiledStatisticsTimeKindParts);
    setElementClassName(newContainerGameFiledStatisticsTimeKindParts, containerGameFiledCommonParts);
    setElementClassName(newContainerGameFiledStatisticsTimeKindParts, containerGameFiledCommonParts);

    // game play - time update
    let newContainerGameFiledStatisticsTimeKindGamePlay = createCSSVariableName(containerGameFiledStatisticsTimeKindGamePlay, timeKind);
    createElementDiv(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindGamePlay);
    setElementClassName(newContainerGameFiledStatisticsTimeKindGamePlay, containerGameFiledCommonGamePlayUpdate);

    let newGameFiledStatisticsTimeKindGamePlay = createCSSVariableName(gameFiledStatisticsTimeKindGamePlay, timeKind);
    createElementDiv(newContainerGameFiledStatisticsTimeKindGamePlay, newGameFiledStatisticsTimeKindGamePlay);
    setElementClassName(newGameFiledStatisticsTimeKindGamePlay, commonGameFiledDisplay);

    let newStatisticsTimeKindGamePlay = createCSSVariableName(statisticsTimeKindGamePlay, timeKind);
    createElementDiv(newGameFiledStatisticsTimeKindGamePlay, newStatisticsTimeKindGamePlay);
    setElementClassName(createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), commonGamePlayTextUpdate);
    setElementClassName(createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), commonGamePlayUpdateTextTime);
    setElementClassName(createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), newStatisticsTimeKindGamePlay);

    let newStatisticsTimeKindGamePlayTextDisplay = createCSSVariableName(statisticsTimeKindGamePlayDisplay, timeKind);
    setElementTextById(createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), newStatisticsTimeKindGamePlayTextDisplay);

    // text - static
    let newContainerGameFiledStatisticsTimeKindText = createCSSVariableName(containerGameFiledStatisticsTimeKindText, timeKind);
    createElementDiv(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindText);
    setElementClassName(newContainerGameFiledStatisticsTimeKindText, containerGameFiledCommonStaticText);

    let newGameFiledStatisticsTimeKindText = createCSSVariableName(gameFiledStatisticsTimeKindText, timeKind);
    createElementDiv(newContainerGameFiledStatisticsTimeKindText, newGameFiledStatisticsTimeKindText);
    setElementClassName(newGameFiledStatisticsTimeKindText, commonGameFiledDisplay);

    let newStatisticsTimeKindText = createCSSVariableName(statisticsTimeKindText, timeKind);
    createElementDiv(newGameFiledStatisticsTimeKindText, newStatisticsTimeKindText);
    setElementClassName(newStatisticsTimeKindText, commonStaticText);
    setElementClassName(newStatisticsTimeKindText, newStatisticsTimeKindText);
    setElementTextById(newStatisticsTimeKindText, newStatisticsTimeKindTextDisplay);
}

function createContainerStatisticsTimeBest() {
    createContainerStatisticsTime(timeKindBest, statisticsTimeBestTextDisplay);
}

function createContainerStatisticsTimeMin() {
    createContainerStatisticsTime(timeKindMin, statisticsTimeMinTextDisplay);
}

function createContainerStatisticsTimeAvg() {
    createContainerStatisticsTime(timeKindAvg, statisticsTimeAvgTextDisplay);
}

function createContainerStatisticsTimeMax() {
    createContainerStatisticsTime(timeKindMax, statisticsTimeMaxTextDisplay);
}

function createGameFieldStatisticsTime() {
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledStatisticsTime, containerGameFiledStatisticsTimeParts);
    createContainerStatisticsTimeBest();
    createContainerStatisticsTimeMin();
    createContainerStatisticsTimeAvg();
    createContainerStatisticsTimeMax();
}

function createContainerStatisticsFraudSum() {
    // container main
    createElementDiv(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudBest);
    createElementDiv(containerGameFiledStatisticsFraudBest, containerGameFiledStatisticsFraudBestParts);
    setElementClassName(containerGameFiledStatisticsFraudBestParts, containerGameFiledCommonParts);

    // game play - Fraud update
    createElementDiv(containerGameFiledStatisticsFraudBestParts, containerGameFiledStatisticsFraudBestGamePlay);
    // setElementClassName(containerGameFiledStatisticsFraudBestGamePlay, containerGameFiledCommonGamePlayUpdate);
    setElementClassName(containerGameFiledStatisticsFraudBestGamePlay, fraudCountRoundUpdateSumNumber);
    createElementDiv(containerGameFiledStatisticsFraudBestGamePlay, gameFiledStatisticsFraudBestGamePlay);
    setElementClassName(gameFiledStatisticsFraudBestGamePlay, commonGameFiledDisplay);
    createElementDiv(gameFiledStatisticsFraudBestGamePlay, statisticsFraudBestGamePlay);
    setElementClassName(statisticsFraudBestGamePlay, commonGamePlayTextUpdate);
    setElementClassName(statisticsFraudBestGamePlay, statisticsFraudBestUpdateNumber);
    setElementTextById(statisticsFraudBestGamePlay, statisticsFraudBestGamePlayDisplay);

    // text - static
    createElementDiv(containerGameFiledStatisticsFraudBestParts, containerGameFiledStatisticsFraudBestText);
    setElementClassName(containerGameFiledStatisticsFraudBestText, containerGameFiledCommonStaticText);
    createElementDiv(containerGameFiledStatisticsFraudBestText, gameFiledStatisticsFraudBestText);
    setElementClassName(gameFiledStatisticsFraudBestText, commonGameFiledDisplay);
    createElementDiv(gameFiledStatisticsFraudBestText, statisticsFraudBestText);
    setElementClassName(statisticsFraudBestText, commonStaticText);
    setElementClassName(statisticsFraudBestText, statisticsFraudBestText);
    setElementTextById(statisticsFraudBestText, statisticsFraudBestTextDisplay);
}

function createContainerStatisticsFraudCount() {
    // container main
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudCount);
    createElementDiv(containerGameFiledStatisticsFraudCount, containerGameFiledStatisticsFraudCountParts);
    setElementClassName(containerGameFiledStatisticsFraudCountParts, containerGameFiledCommonParts);

    // game play - Fraud update;
    createElementDiv(containerGameFiledStatisticsFraudCountParts, containerGameFiledStatisticsFraudCountGamePlay);
    // setElementClassName(containerGameFiledStatisticsFraudBestGamePlay, containerGameFiledCommonGamePlayUpdate);

    // text - static
    createElementDiv(containerGameFiledStatisticsFraudCountParts, containerGameFiledStatisticsFraudCountText);
    // setElementClassName(containerGameFiledStatisticsFraudCountText, containerGameFiledCommonStaticText);
    createElementDiv(containerGameFiledStatisticsFraudCountText, gameFiledStatisticsFraudCountText);
    setElementClassName(gameFiledStatisticsFraudCountText, commonGameFiledDisplay);
    createElementDiv(gameFiledStatisticsFraudCountText, statisticsFraudCountText);
    setElementClassName(statisticsFraudCountText, commonStaticText);
    setElementClassName(statisticsFraudCountText, statisticsFraudCountText);
    setElementTextById(statisticsFraudCountText, statisticsFraudCountTextDisplay);
}

function createGameFieldStatisticsFraud() {
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledStatisticsFraud, containerGameFiledStatisticsFraudParts);
    createContainerStatisticsFraudSum();
    createContainerStatisticsFraudCount();
    createContainerStatisticsFraudCountPerRound();
}

// footer
function createFooter() {
    createContainerMainFooter();
    createContainerFooterAuthor();
}

function createContainerMainFooter() {
    createContainerMainElements(containerMainSectionFooter, sectionFooter, containerSectionFooter, containerMainFooter);
    setElementClassName(containerSectionFooter, containerSectionFooter);
}

function createContainerFooterAuthor() {
    createElementDiv(containerMainFooter, containerFooterAuthor);
    setElementClassName(containerFooterAuthor, containerFooterAuthor);
    createElementP(containerFooterAuthor, footerAuthor);
    setElementClassName(footerAuthor, footerAuthor);
    setElementTextById(footerAuthor, footerAuthorData);
}