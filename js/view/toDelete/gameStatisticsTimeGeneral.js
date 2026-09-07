// let newContainerGameFiledStatisticsTimeKindParts;
//
// function createCSSVariableName(baseVariableName, partToSwitch) {
//     let timeKind = "Kind";
//     return baseVariableName.replace(timeKind, partToSwitch);
// }
//
// function createContainerStatisticsTimeMain(timeKind){
//
//     let newContainerGameFiledStatisticsTimeKind = createCSSVariableName(containerGameFiledStatisticsTimeKind, timeKind);
//     createElementDiv(containerGameFiledStatisticsTimeParts, newContainerGameFiledStatisticsTimeKind);
//
//     newContainerGameFiledStatisticsTimeKindParts = createCSSVariableName(containerGameFiledStatisticsTimeKindParts, timeKind);
//     createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKind, newContainerGameFiledStatisticsTimeKindParts, containerGameFiledCommonParts);
//
//     setElementClassNameById(newContainerGameFiledStatisticsTimeKindParts, containerGameFiledCommonParts);
// }
//
// function createContainerStatisticsTimeUpdate(timeKind) {
//
//     let newContainerGameFiledStatisticsTimeKindGamePlay = createCSSVariableName(containerGameFiledStatisticsTimeKindGamePlay, timeKind);
//     createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindGamePlay, containerGameFiledCommonGamePlayUpdate);
//
//     let newGameFiledStatisticsTimeKindGamePlay = createCSSVariableName(gameFiledStatisticsTimeKindGamePlay, timeKind);
//     createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindGamePlay, newGameFiledStatisticsTimeKindGamePlay, commonGameFiledDisplay);
//
//     let newStatisticsTimeKindGamePlay = createCSSVariableName(statisticsTimeKindGamePlay, timeKind);
//     createElementDivWithIdAndSetClassName(newGameFiledStatisticsTimeKindGamePlay, newStatisticsTimeKindGamePlay, commonGamePlayTextUpdate);
//     setElementClassNames(newStatisticsTimeKindGamePlay, commonGamePlayUpdateTextTime, newStatisticsTimeKindGamePlay);
//
//     let newStatisticsTimeKindGamePlayTextDisplay = createCSSVariableName(statisticsTimeKindGamePlayDisplay, timeKind);
//     setElementTextById(createCSSVariableName(newStatisticsTimeKindGamePlay, timeKind), newStatisticsTimeKindGamePlayTextDisplay);
// }
//
// function createContainerStatisticsTimeTextStatic(timeKind, newStatisticsTimeKindTextDisplay){
//
//     let newContainerGameFiledStatisticsTimeKindText = createCSSVariableName(containerGameFiledStatisticsTimeKindText, timeKind);
//     createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindParts, newContainerGameFiledStatisticsTimeKindText, containerGameFiledCommonStaticText);
//
//     let newGameFiledStatisticsTimeKindText = createCSSVariableName(gameFiledStatisticsTimeKindText, timeKind);
//     createElementDivWithIdAndSetClassName(newContainerGameFiledStatisticsTimeKindText, newGameFiledStatisticsTimeKindText, commonGameFiledDisplay);
//
//     let newStatisticsTimeKindText = createCSSVariableName(statisticsTimeKindText, timeKind);
//     createElementDivWithIdAndSetClassName(newGameFiledStatisticsTimeKindText, newStatisticsTimeKindText, commonStaticText);
//
//     setElementClassNameSameAsIdAndSetText(newStatisticsTimeKindText, newStatisticsTimeKindTextDisplay);
// }
//
// function createContainerStatisticsTime(timeKind, newStatisticsTimeKindTextDisplay) {
//     createContainerStatisticsTimeMain(timeKind);
//     createContainerStatisticsTimeUpdate(timeKind);
//     createContainerStatisticsTimeTextStatic(timeKind, newStatisticsTimeKindTextDisplay);
// }
//
// function createContainerStatisticsTimeBest() {
//     createContainerStatisticsTime(timeKindBest, statisticsTimeBestTextDisplay);
// }
//
// function createContainerStatisticsTimeMin() {
//     createContainerStatisticsTime(timeKindMin, statisticsTimeMinTextDisplay);
// }
//
// function createContainerStatisticsTimeAvg() {
//     createContainerStatisticsTime(timeKindAvg, statisticsTimeAvgTextDisplay);
// }
//
// function createContainerStatisticsTimeMax() {
//     createContainerStatisticsTime(timeKindMax, statisticsTimeMaxTextDisplay);
// }
//
// function createGameFieldStatisticsTime() {
//     createElementDivWithTheSameIdAndClassName(containerGameFiledStatisticsTime, containerGameFiledStatisticsTimeParts);
//     createContainerStatisticsTimeBest();
//     createContainerStatisticsTimeMin();
//     createContainerStatisticsTimeAvg();
//     createContainerStatisticsTimeMax();
// }