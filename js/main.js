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
    createElementDivWithTheSameValueForIdAndClassName(containerGameElements, containerGameFiledStatisticsTime);
    createElementDivWithTheSameValueForIdAndClassName(containerGameElements, containerGameFiledStatisticsFraud);
}

function createContainerGameElements() {
    createMainContainerGameElements();
    createGameFieldPButtonPlay();
    createGameFieldPButtonMain();
    createGameFieldStatistics();
    createGameFieldStatisticsFraud();

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

function createContainerTimeBestDescription(){
    // time - description
    // createElementDivWithTheSameValueForIdAndClassName(containerGameFiledStatisticsParts, containerGameFiledStatisticsMainText);
    // createElementDivWithTheSameValueForIdAndClassName(containerGameFiledStatisticsMainText, gameFiledStatisticsMainText);
    // createElementDivWithTheSameValueForIdAndClassName(gameFiledStatisticsMainText, statisticsMainText);
    // setElementClassName(statisticsMainText, statisticsMainText);
    // setElementTextById(statisticsMainText, statisticsMainTextDisplay);

    // container main
    createElementDiv(containerGameFiledStatisticsTimeParts, containerGameFiledStatisticsTimeBest);
    createElementDiv(containerGameFiledStatisticsTimeBest, containerGameFiledStatisticsTimeBestParts);
    setElementClassName(containerGameFiledStatisticsTimeBestParts, containerGameFiledCommonParts)


    // game play - time update
    createElementDiv(containerGameFiledStatisticsTimeBestParts, containerGameFiledStatisticsTimeBestGamePlay);
    setElementClassName(containerGameFiledStatisticsTimeBestGamePlay, containerGameFiledCommonGamePlayUpdate)

    createElementDiv(containerGameFiledStatisticsTimeBestGamePlay, gameFiledStatisticsTimeBestGamePlay);
    setElementClassName(gameFiledStatisticsTimeBestGamePlay, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsTimeBestGamePlay, statisticsTimeBestGamePlay);
    setElementClassName(statisticsTimeBestGamePlay, commonGamePlayTextUpdate);
    setElementClassName(statisticsTimeBestGamePlay, statisticsTimeBestGamePlay);

    setElementTextById(statisticsTimeBestGamePlay, statisticsTimeBestGamePlayDisplay);


    // text - static
    createElementDiv(containerGameFiledStatisticsTimeBestParts, containerGameFiledStatisticsTimeBestText);
    setElementClassName(containerGameFiledStatisticsTimeBestText, containerGameFiledCommonStaticText)

    createElementDiv(containerGameFiledStatisticsTimeBestText, gameFiledStatisticsTimeBestText);
    setElementClassName(gameFiledStatisticsTimeBestText, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsTimeBestText, statisticsTimeBestText);
    setElementClassName(statisticsTimeBestText, commonStaticText);

    setElementTextById(statisticsTimeBestText, statisticsTimeBestTextDisplay);
}

function createContainerTimeMin(){

    // container main
    createElementDiv(containerGameFiledStatisticsTimeParts, containerGameFiledStatisticsTimeMin);
    createElementDiv(containerGameFiledStatisticsTimeMin, containerGameFiledStatisticsTimeMinParts);
    setElementClassName(containerGameFiledStatisticsTimeMinParts, containerGameFiledCommonParts)


    // game play - time update
    createElementDiv(containerGameFiledStatisticsTimeMinParts, containerGameFiledStatisticsTimeMinGamePlay);
    setElementClassName(containerGameFiledStatisticsTimeMinGamePlay, containerGameFiledCommonGamePlayUpdate)

    createElementDiv(containerGameFiledStatisticsTimeMinGamePlay, gameFiledStatisticsTimeMinGamePlay);
    setElementClassName(gameFiledStatisticsTimeMinGamePlay, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsTimeMinGamePlay, statisticsTimeMinGamePlay);
    setElementClassName(statisticsTimeMinGamePlay, commonGamePlayTextUpdate);
    setElementClassName(statisticsTimeMinGamePlay, commonGamePlayUpdateTextTime);
    setElementClassName(statisticsTimeMinGamePlay, statisticsTimeMinGamePlay);

    setElementTextById(statisticsTimeMinGamePlay, statisticsTimeMinGamePlayDisplay);


    // text - static
    createElementDiv(containerGameFiledStatisticsTimeMinParts, containerGameFiledStatisticsTimeMinText);
    setElementClassName(containerGameFiledStatisticsTimeMinText, containerGameFiledCommonStaticText)

    createElementDiv(containerGameFiledStatisticsTimeMinText, gameFiledStatisticsTimeMinText);
    setElementClassName(gameFiledStatisticsTimeMinText, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsTimeMinText, statisticsTimeMinText);
    setElementClassName(statisticsTimeMinText, commonStaticText);
    setElementClassName(statisticsTimeMinText, statisticsTimeMinText);

    setElementTextById(statisticsTimeMinText, statisticsTimeMinTextDisplay);
}

function createContainerTimeAvg(){
    // container main
    createElementDiv(containerGameFiledStatisticsTimeParts, containerGameFiledStatisticsTimeAvg);

    createElementDiv(containerGameFiledStatisticsTimeAvg, containerGameFiledStatisticsTimeAvgParts);
    setElementClassName(containerGameFiledStatisticsTimeAvgParts, containerGameFiledCommonParts)

    // game play - time update
    createElementDiv(containerGameFiledStatisticsTimeAvgParts, containerGameFiledStatisticsTimeAvgGamePlay);
    setElementClassName(containerGameFiledStatisticsTimeAvgGamePlay, containerGameFiledCommonGamePlayUpdate)

    createElementDiv(containerGameFiledStatisticsTimeAvgGamePlay, gameFiledStatisticsTimeAvgGamePlay);
    setElementClassName(gameFiledStatisticsTimeAvgGamePlay, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsTimeAvgGamePlay, statisticsTimeAvgGamePlay);
    setElementClassName(statisticsTimeAvgGamePlay, commonGamePlayTextUpdate);
    setElementClassName(statisticsTimeAvgGamePlay, commonGamePlayUpdateTextTime);
    setElementClassName(statisticsTimeAvgGamePlay, statisticsTimeAvgGamePlay);

    setElementTextById(statisticsTimeAvgGamePlay, statisticsTimeAvgGamePlayDisplay);

    // text - static
    createElementDiv(containerGameFiledStatisticsTimeAvgParts, containerGameFiledStatisticsTimeAvgText);
    setElementClassName(containerGameFiledStatisticsTimeAvgText, containerGameFiledCommonStaticText)

    createElementDiv(containerGameFiledStatisticsTimeAvgText, gameFiledStatisticsTimeAvgText);
    setElementClassName(gameFiledStatisticsTimeAvgText, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsTimeAvgText, statisticsTimeAvgText);
    setElementClassName(statisticsTimeAvgText, commonStaticText);
    setElementClassName(statisticsTimeAvgText, statisticsTimeAvgText);

    setElementTextById(statisticsTimeAvgText, statisticsTimeAvgTextDisplay);
}

function createContainerTimeMax(){
    // container main
    createElementDiv(containerGameFiledStatisticsTimeParts, containerGameFiledStatisticsTimeMax);

    createElementDiv(containerGameFiledStatisticsTimeMax, containerGameFiledStatisticsTimeMaxParts);
    setElementClassName(containerGameFiledStatisticsTimeMaxParts, containerGameFiledCommonParts)

    // game play - time update
    createElementDiv(containerGameFiledStatisticsTimeMaxParts, containerGameFiledStatisticsTimeMaxGamePlay);
    setElementClassName(containerGameFiledStatisticsTimeMaxGamePlay, containerGameFiledCommonGamePlayUpdate)

    createElementDiv(containerGameFiledStatisticsTimeMaxGamePlay, gameFiledStatisticsTimeMaxGamePlay);
    setElementClassName(gameFiledStatisticsTimeMaxGamePlay, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsTimeMaxGamePlay, statisticsTimeMaxGamePlay);
    setElementClassName(statisticsTimeMaxGamePlay, commonGamePlayTextUpdate);
    setElementClassName(statisticsTimeMaxGamePlay, commonGamePlayUpdateTextTime);
    setElementClassName(statisticsTimeMaxGamePlay, statisticsTimeMaxGamePlay);

    setElementTextById(statisticsTimeMaxGamePlay, statisticsTimeMaxGamePlayDisplay);

    // text - static
    createElementDiv(containerGameFiledStatisticsTimeMaxParts, containerGameFiledStatisticsTimeMaxText);
    setElementClassName(containerGameFiledStatisticsTimeMaxText, containerGameFiledCommonStaticText)

    createElementDiv(containerGameFiledStatisticsTimeMaxText, gameFiledStatisticsTimeMaxText);
    setElementClassName(gameFiledStatisticsTimeMaxText, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsTimeMaxText, statisticsTimeMaxText);
    setElementClassName(statisticsTimeMaxText, commonStaticText);
    setElementClassName(statisticsTimeMaxText, statisticsTimeMaxText);

    setElementTextById(statisticsTimeMaxText, statisticsTimeMaxTextDisplay);
}

function createGameFieldStatistics(){

    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledStatisticsTime, containerGameFiledStatisticsTimeParts);
    createContainerTimeBestDescription();
    createContainerTimeMin();
    createContainerTimeAvg();
    createContainerTimeMax();

}

function createContainerStatisticsFraudSum(){
    // container main
    createElementDiv(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudBest);
    createElementDiv(containerGameFiledStatisticsFraudBest, containerGameFiledStatisticsFraudBestParts);
    setElementClassName(containerGameFiledStatisticsFraudBestParts, containerGameFiledCommonParts)


    // game play - Fraud update
    createElementDiv(containerGameFiledStatisticsFraudBestParts, containerGameFiledStatisticsFraudBestGamePlay);
    // setElementClassName(containerGameFiledStatisticsFraudBestGamePlay, containerGameFiledCommonGamePlayUpdate)
    setElementClassName(containerGameFiledStatisticsFraudBestGamePlay, fraudCountRoundUpdateSumNumber)

    createElementDiv(containerGameFiledStatisticsFraudBestGamePlay, gameFiledStatisticsFraudBestGamePlay);
    setElementClassName(gameFiledStatisticsFraudBestGamePlay, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsFraudBestGamePlay, statisticsFraudBestGamePlay);
    setElementClassName(statisticsFraudBestGamePlay, commonGamePlayTextUpdate);

    setElementTextById(statisticsFraudBestGamePlay, statisticsFraudBestGamePlayDisplay);


    // text - static
    createElementDiv(containerGameFiledStatisticsFraudBestParts, containerGameFiledStatisticsFraudBestText);
    setElementClassName(containerGameFiledStatisticsFraudBestText, containerGameFiledCommonStaticText)

    createElementDiv(containerGameFiledStatisticsFraudBestText, gameFiledStatisticsFraudBestText);
    setElementClassName(gameFiledStatisticsFraudBestText, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsFraudBestText, statisticsFraudBestText);
    setElementClassName(statisticsFraudBestText, commonStaticText);
    setElementClassName(statisticsFraudBestText, statisticsFraudBestText);

    setElementTextById(statisticsFraudBestText, statisticsFraudBestTextDisplay);
}

function createContainerStatisticsFraudCount(){
    // container main
    createElementDivWithTheSameValueForIdAndClassName(containerGameFiledStatisticsFraudParts, containerGameFiledStatisticsFraudCount);

    createElementDiv(containerGameFiledStatisticsFraudCount, containerGameFiledStatisticsFraudCountParts);
    setElementClassName(containerGameFiledStatisticsFraudCountParts, containerGameFiledCommonParts)

    // game play - Fraud update;
    createElementDiv(containerGameFiledStatisticsFraudCountParts, containerGameFiledStatisticsFraudCountGamePlay);
    // setElementClassName(containerGameFiledStatisticsFraudBestGamePlay, containerGameFiledCommonGamePlayUpdate)


    // text - static
    createElementDiv(containerGameFiledStatisticsFraudCountParts, containerGameFiledStatisticsFraudCountText);
    // setElementClassName(containerGameFiledStatisticsFraudCountText, containerGameFiledCommonStaticText)

    createElementDiv(containerGameFiledStatisticsFraudCountText, gameFiledStatisticsFraudCountText);
    setElementClassName(gameFiledStatisticsFraudCountText, commonGameFiledDisplay);

    createElementDiv(gameFiledStatisticsFraudCountText, statisticsFraudCountText);
    setElementClassName(statisticsFraudCountText, commonStaticText);
    setElementClassName(statisticsFraudCountText, statisticsFraudCountText);

    setElementTextById(statisticsFraudCountText, statisticsFraudCountTextDisplay);
}

function createGameFieldStatisticsFraud(){
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