function setContainerMainSection() {
    createElementDiv(containerMain, containerMainSectionMenu);
    createElementDiv(containerMain, containerMainSectionActions);
    createElementDiv(containerMain, containerMainSectionFooter);
}

setContainerMainSection();
createMenu();
createSubpageHome();
createFooter();

function createMenu() {
    createContainerMainMenu();
}

// menu
function createContainerMainMenu() {
    createContainerMainElements(containerMainSectionMenu, sectionMenu, containerSectionMenu, containerMenuMain);
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
    createElementDivWithTheSameValueForIdAndClassName(containerGameElements, containerGameFiledStatistics);
}

function createContainerGameElements() {
    createMainContainerGameElements();
    createGameFieldPButtonPlay();
    createGameFieldPButtonMain();
    createGameFieldStatistics();

}

function createGameFieldPButtonMain(){
    // start and stop
    createElementDiv(containerGameFiledButtonMain,containerGameFiledButtonsMainParts);
    createGameFieldPButtonMainStart();
    createGameFieldPButtonMainStop();
}

function createGameFieldPButtonPlay(){
    createElementButton(containerGameFiledButtonPlay, gameFiledButtonPlay);
    setElementClassName(gameFiledButtonPlay, gameFiledButtonPlay);
    // setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
}

function createGameFieldPButtonMainStart(){
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledButtonsMainParts,containerGameFiledButtonsMainStart);
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    createElementButton(gameFiledButtonMainStart, buttonMainStart);
    setElementClassName(buttonMainStart, gameFiledButtonMain);
    setElementClassName(buttonMainStart, buttonMainStart);
    setFunctionOnclick(buttonMainStart, functionNameOnclickPlayGameColorStart);
    setElementTextById(buttonMainStart, containerGameFiledButtonsMainStartTextDisplay);
}

function createGameFieldPButtonMainStop(){
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledButtonsMainParts,containerGameFiledButtonsMainStop);
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledButtonsMainStop, gameFiledButtonMainStop);
    createElementButton(gameFiledButtonMainStop, buttonMainStop);
    setElementClassName(buttonMainStop, gameFiledButtonMain);
    setElementClassName(buttonMainStop, buttonMainStop);
    setFunctionOnclick(buttonMainStop, functionNameOnclickPlayGameColorStop);
    setElementTextById(buttonMainStop, containerGameFiledButtonsMainStopTextDisplay);
}

function createContainerMainDescription(){
    // time - description
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledStatisticsParts, containerGameFiledStatisticsMainText);
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledStatisticsMainText, gameFiledStatisticsMainText);
    createElementDivWithTheSameValueForIdAndClassName(gameFiledStatisticsMainText, statisticsMainText);
    setElementClassName(statisticsMainText, statisticsMainText);
    setElementTextById(statisticsMainText, statisticsMainTextDisplay);
}

function createContainerTimeMin(){

    // container main
    createElementDiv(containerGameFiledStatisticsParts, containerGameFiledStatisticsTimeMin);
    createElementDiv(containerGameFiledStatisticsTimeMin, containerGameFiledStatisticsTimeMinParts);
    setElementClassName(containerGameFiledStatisticsTimeMinParts, containerGameFiledStatisticsTimeParts)


    // game play - time update
    createElementDiv(containerGameFiledStatisticsTimeMinParts, containerGameFiledStatisticsTimeMinGamePlay);
    setElementClassName(containerGameFiledStatisticsTimeMinGamePlay, containerGameFiledStatisticsTimeGamePlay)

    createElementDiv(containerGameFiledStatisticsTimeMinGamePlay, gameFiledStatisticsTimeMinGamePlay);
    setElementClassName(gameFiledStatisticsTimeMinGamePlay, gameFiledStatisticsText);

    createElementDiv(gameFiledStatisticsTimeMinGamePlay, statisticsTimeMinGamePlay);
    setElementClassName(statisticsTimeMinGamePlay, statisticsTimeGamePlay);

    setElementTextById(statisticsTimeMinGamePlay, statisticsTimeMinGamePlayDisplay);


    // text - static
    createElementDiv(containerGameFiledStatisticsTimeMinParts, containerGameFiledStatisticsTimeMinText);
    setElementClassName(containerGameFiledStatisticsTimeMinText, containerGameFiledStatisticsTimeText)

    createElementDiv(containerGameFiledStatisticsTimeMinText, gameFiledStatisticsTimeMinText);
    setElementClassName(gameFiledStatisticsTimeMinText, gameFiledStatisticsText);

    createElementDiv(gameFiledStatisticsTimeMinText, statisticsTimeMinText);
    setElementClassName(statisticsTimeMinText, statisticsTimeText);

    setElementTextById(statisticsTimeMinText, statisticsTimeMinTextDisplay);
}

function createContainerTimeAvg(){
    // container main
    createElementDiv(containerGameFiledStatisticsParts, containerGameFiledStatisticsTimeAvg);

    createElementDiv(containerGameFiledStatisticsTimeAvg, containerGameFiledStatisticsTimeAvgParts);
    setElementClassName(containerGameFiledStatisticsTimeAvgParts, containerGameFiledStatisticsTimeParts)

    // game play - time update
    createElementDiv(containerGameFiledStatisticsTimeAvgParts, containerGameFiledStatisticsTimeAvgGamePlay);
    setElementClassName(containerGameFiledStatisticsTimeAvgGamePlay, containerGameFiledStatisticsTimeGamePlay)

    createElementDiv(containerGameFiledStatisticsTimeAvgGamePlay, gameFiledStatisticsTimeAvgGamePlay);
    setElementClassName(gameFiledStatisticsTimeAvgGamePlay, gameFiledStatisticsText);

    createElementDiv(gameFiledStatisticsTimeAvgGamePlay, statisticsTimeAvgGamePlay);
    setElementClassName(statisticsTimeAvgGamePlay, statisticsTimeGamePlay);

    setElementTextById(statisticsTimeAvgGamePlay, statisticsTimeAvgGamePlayDisplay);

    // text - static
    createElementDiv(containerGameFiledStatisticsTimeAvgParts, containerGameFiledStatisticsTimeAvgText);
    setElementClassName(containerGameFiledStatisticsTimeAvgText, containerGameFiledStatisticsTimeText)

    createElementDiv(containerGameFiledStatisticsTimeAvgText, gameFiledStatisticsTimeAvgText);
    setElementClassName(gameFiledStatisticsTimeAvgText, gameFiledStatisticsText);

    createElementDiv(gameFiledStatisticsTimeAvgText, statisticsTimeAvgText);
    setElementClassName(statisticsTimeAvgText, statisticsTimeText);

    setElementTextById(statisticsTimeAvgText, statisticsTimeAvgTextDisplay);
}

function createContainerTimeMax(){
    // container main
    createElementDiv(containerGameFiledStatisticsParts, containerGameFiledStatisticsTimeMax);

    createElementDiv(containerGameFiledStatisticsTimeMax, containerGameFiledStatisticsTimeMaxParts);
    setElementClassName(containerGameFiledStatisticsTimeMaxParts, containerGameFiledStatisticsTimeParts)

    // game play - time update
    createElementDiv(containerGameFiledStatisticsTimeMaxParts, containerGameFiledStatisticsTimeMaxGamePlay);
    setElementClassName(containerGameFiledStatisticsTimeMaxGamePlay, containerGameFiledStatisticsTimeGamePlay)

    createElementDiv(containerGameFiledStatisticsTimeMaxGamePlay, gameFiledStatisticsTimeMaxGamePlay);
    setElementClassName(gameFiledStatisticsTimeMaxGamePlay, gameFiledStatisticsText);

    createElementDiv(gameFiledStatisticsTimeMaxGamePlay, statisticsTimeMaxGamePlay);
    setElementClassName(statisticsTimeMaxGamePlay, statisticsTimeGamePlay);

    setElementTextById(statisticsTimeMaxGamePlay, statisticsTimeMaxGamePlayDisplay);

    // text - static
    createElementDiv(containerGameFiledStatisticsTimeMaxParts, containerGameFiledStatisticsTimeMaxText);
    setElementClassName(containerGameFiledStatisticsTimeMaxText, containerGameFiledStatisticsTimeText)

    createElementDiv(containerGameFiledStatisticsTimeMaxText, gameFiledStatisticsTimeMaxText);
    setElementClassName(gameFiledStatisticsTimeMaxText, gameFiledStatisticsText);

    createElementDiv(gameFiledStatisticsTimeMaxText, statisticsTimeMaxText);
    setElementClassName(statisticsTimeMaxText, statisticsTimeText);

    setElementTextById(statisticsTimeMaxText, statisticsTimeMaxTextDisplay);
}

function createGameFieldStatistics(){

    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledStatistics, containerGameFiledStatisticsParts);
    createContainerMainDescription();
    createContainerTimeMin();
    createContainerTimeAvg();
    createContainerTimeMax();

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