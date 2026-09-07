// let maxClicksNumber = 5;
// let maxClicksNumberSetByUser = maxClicksNumber;
// let countedClicksNumber = 0;
//
// let gameRandomColor = "#ac4a71";
// let gameRandomTimeToChangeColor = 1;
// const gameRandomTimeMaxSecond = 10;
// let reactionTime = 0;
// let reactionTimeTimeout = 0;
// let startTime = 0;
// let endTime = 0;
// let gameTimeTimeoutStart;
//
// let gameStatisticTimeMinInMilliseconds = 1300000;
// let gameStatisticTimeAvgInMilliseconds = 0;
// let gameStatisticTimeSumInMilliseconds = 0;
// let gameStatisticTimeMaxInMilliseconds = 0;
// let gameStatisticTimeBestInMilliseconds = gameStatisticTimeMinInMilliseconds;
//
// let currentFunctionOnclickName;
// let fraudCountedNumber = 0;
// let fraudCountedSumNumber = 0;
// let fraudCountRoundIndex = 0;
//
// const fileWithColors = "#1A1A1D, #3B1C32, #6A1E55, #A64D79, #251B37, #372948, #FFCACA, #FFECEF, " +
//     "#F3F2DA, #4E8D7C, #045762, #EA97AD, #FAD9E6, #E4AEC5, #5F7464, #243D25";
// const colors = fileWithColors.split(", ");
//
// let gameColors = colors;
//
// function setConfigurationClickNumber(clickedId) {
//     maxClicksNumberSetByUser = getElementAttributeValueById(clickedId);
//     setConfigurationClickNumberButtonChanges();
// }
//
//
// function setConfigurationClickNumberButtonChanges() {
//     for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
//         let buttonId = menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber);
//         removeElementClassNameById(buttonId, menuGameConfigurationButtonCurrentNumber);
//
//         if (valueToString(maxClicksNumberSetByUser) === valueToString(clickNumber))
//             setElementClassNameById(buttonId, menuGameConfigurationButtonCurrentNumber);
//     }
// }
//
// function setConfigurationMaxClicksNumberButtonChosen() {
//     for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
//         let buttonId = menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber)
//         removeElementClassNameById(buttonId, menuGameConfigurationButtonChosenNumber);
//
//         if (valueToString(maxClicksNumberSetByUser) === valueToString(clickNumber)) {
//             setElementClassNameById(buttonId, menuGameConfigurationButtonChosenNumber);
//             setElementClassNameById(buttonId, menuGameConfigurationButtonClickNumberGameOn);
//         }
//     }
// }
//
// function removeConfigurationButtonChosenNumber() {
//     for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
//         let buttonId = menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber)
//         removeElementClassNameById(buttonId, menuGameConfigurationButtonChosenNumber);
//
//         if (valueToString(maxClicksNumberSetByUser) === valueToString(clickNumber)) {
//             removeElementClassNameById(buttonId, menuGameConfigurationButtonChosenNumber);
//             setElementClassNameById(buttonId, menuGameConfigurationButtonCurrentNumber);
//         }
//     }
// }
//
// function setConfigurationButtonMainAfterClick(elementId) {
//     removeElementClassNameById(elementId, gameFiledButtonMainTextDecorationBeforeClick);
//     setElementClassNameById(elementId, gameFiledButtonMainTextDecorationAfterClick);
// }
//
// function removeConfigurationButtonMainAfterClick(elementId) {
//     let buttonPlay = document.getElementById(elementId);
//     if (buttonPlay !== null) {
//         removeElementClassNameById(elementId, gameFiledButtonMainTextDecorationAfterClick);
//         setElementClassNameById(elementId, gameFiledButtonMainTextDecorationBeforeClick);
//     }
// }
//
// function setConfigurationButtonMainGameStart() {
//     setConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
//     removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStopTextDisplayId);
//     removeElementClassNameById(gameFiledButtonMainStop, gameFiledButtonMainInactive);
// }
//
// function setConfigurationButtonMainGameStop() {
//     setConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStopTextDisplayId);
//     removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
// }
//
// function setConfigurationButtonMainGameContinue() {
//     setConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
// }
//
// function removeConfigurationButtonMainGameContinue() {
//     removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
// }
//
// function setConfigurationButtonMainGameOver() {
//     removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
//     setElementClassNameById(gameFiledButtonMainStop, gameFiledButtonMainInactive);
// }
//
// function setConfigurationMaxClicksNumber() {
//     maxClicksNumber = maxClicksNumberSetByUser;
//     setConfigurationMaxClicksNumberButtonChosen();
// }
//
// function playGameColorStart() {
//     removeContainersGameFiledButtonsMainStop();
//     createContainersGameFiledButtonsMainStop();
//     removeContainersGameFiledStatistics();
//     setGameButtonStartColor();
//     setConfigurationGame();
//     removeConfigurationGameOver();
//     setConfigurationMaxClicksNumber();
//     setConfigurationButtonMainGameStart();
//
//     countedClicksNumber = 0;
//     fraudCountedNumber = 0;
//     fraudCountedSumNumber = 0;
//     fraudCountRoundIndex = 0;
//     gameStatisticTimeMinInMilliseconds = 1300000;
//     gameStatisticTimeAvgInMilliseconds = 0;
//     gameStatisticTimeSumInMilliseconds = 0;
//     gameStatisticTimeMaxInMilliseconds = 0;
//     countedClicksNumber++;
// }
//
// function playGameColorStop() {
//     clearTimeoutButtonStop();
//     // [extension V1] button continue is active -> // setConfigurationGameStop();
//     setConfigurationGameStop();
//     // [extension V1] do not even think of removing this function !!!
//     // setConfigurationGameContinue();
// }
//
// function setConfigurationGameStop() {
//     removeFunctionOnclick(gameFiledButtonPlay);
//     removeFunctionOnclick(buttonMainStop);
//     removeConfigurationButtonChosenNumber();
//     setConfigurationButtonMainGameStop();
// }
//
// // [extension V1] do not even think of removing this function !!!
// function setConfigurationGameContinue() {
//     let functionName = document.getElementById(gameFiledButtonPlay).getAttribute('onclick');
//
//     if (functionName !== null)
//         currentFunctionOnclickName = functionName.replace("(this.id)", "");
//
//     setFunctionOnclick(buttonMainStop, functionNameOnclickPlayGameColorContinue);
//     setElementTextById(buttonMainStop, containerGameFiledButtonsMainContinueTextDisplay);
//     removeFunctionOnclick(gameFiledButtonPlay);
//     setEndTime();
//     setClickReactionTimeTimeout();
//     removeConfigurationButtonMainGameContinue();
//
//     startTime = 0;
//     endTime = 0;
// }
//
// // [extension V1] do not even think of removing this function !!!
// function playGameColorContinue() {
//     setFunctionOnclick(buttonMainStop, functionNameOnclickPlayGameColorStop);
//     setElementTextById(buttonMainStop, containerGameFiledButtonsMainStopTextDisplay);
//     setConfigurationButtonMainGameContinue();
//
//     if (currentFunctionOnclickName !== undefined)
//         setFunctionOnclick(gameFiledButtonPlay, currentFunctionOnclickName);
//
//     // ???
//     gameRandomTimeToChangeColor = gameRandomTimeToChangeColor - gameTimeTimeoutStart;
//     runTimeoutButtonStop();
//     gameTimeTimeoutStart = 0;
// }
//
// function getRandomNumber(maxNumber) {
//     return Math.floor((Math.random() * maxNumber));
// }
//
// function setGameRandomColor() {
//     let randomNumber = getRandomNumber(colors.length);
//     let tempColor = gameRandomColor;
//     gameRandomColor = colors[randomNumber];
//     colors[randomNumber] = tempColor;
// }
//
// function setGameFieldColor(colorName) {
//     rootVariables.style.setProperty(cssGameFiledButtonPlayColor, colorName);
// }
//
// let funTimeoutButtonStop = function setTimeoutButtonStop() {
//     setGameFieldColor(gameRandomColor);
//     setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
//     startTime = performance.now();
// }
//
// let timeoutButtonStop;
//
// function runTimeoutButtonStop() {
//     timeoutButtonStop = setTimeout(funTimeoutButtonStop, gameRandomTimeToChangeColor);
// }
//
// function clearTimeoutButtonStop() {
//     clearTimeout(timeoutButtonStop);
// }
//
// function setFunctionOnclickPlayGameColorClickBeforeNewRound() {
//     setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColorClickBeforeNewRound);
// }
//
// function setGameButtonStartColor() {
//     setGameFieldColor(gameFiledButtonPlayStartColor);
// }
//
// function setGameRandomTimeInMillisecondsToChangeColor() {
//     let randomSecond = getRandomNumber(gameRandomTimeMaxSecond) + 1;
//     gameRandomTimeToChangeColor = randomSecond * 1000;
// }
//
// function getGameStatisticTimeInSeconds(timeInMilliseconds) {
//     return (timeInMilliseconds / 1000).toFixed(4);
// }
//
// function setGameStatisticTimeMinInSeconds() {
//     let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeMinInMilliseconds);
//     setElementTextById(statisticsTimeMinGamePlay, timeInSeconds);
// }
//
// function setGameStatisticTimeAvgInSeconds() {
//     let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeAvgInMilliseconds);
//     setElementTextById(statisticsTimeAvgGamePlay, timeInSeconds);
// }
//
// function setGameStatisticTimeMaxInSeconds() {
//     let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeMaxInMilliseconds);
//     setElementTextById(statisticsTimeMaxGamePlay, timeInSeconds);
// }
//
// function setGameStatisticTimeBestInSeconds() {
//     let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeBestInMilliseconds);
//     setElementTextById(statisticsTimeBestGamePlay, timeInSeconds);
// }
//
// function setGameStatisticTimeInSeconds() {
//     setGameStatisticTimeMinInSeconds();
//     setGameStatisticTimeAvgInSeconds();
//     setGameStatisticTimeMaxInSeconds();
//     setGameStatisticTimeBestInSeconds();
// }
//
// function setGameStatisticTimeMinInMilliseconds() {
//     if (gameStatisticTimeMinInMilliseconds > reactionTime)
//         gameStatisticTimeMinInMilliseconds = reactionTime;
// }
//
// function setGameStatisticTimeSumInMilliseconds() {
//     gameStatisticTimeSumInMilliseconds += reactionTime;
// }
//
// function setGameStatisticTimeAvgInMilliseconds() {
//     gameStatisticTimeAvgInMilliseconds = gameStatisticTimeSumInMilliseconds / countedClicksNumber;
// }
//
// function setGameStatisticTimeMaxInMilliseconds() {
//     if (gameStatisticTimeMaxInMilliseconds < reactionTime)
//         gameStatisticTimeMaxInMilliseconds = reactionTime;
// }
//
// function setGameStatisticTimeBestInMilliseconds() {
//     if (gameStatisticTimeBestInMilliseconds > gameStatisticTimeMinInMilliseconds)
//         gameStatisticTimeBestInMilliseconds = gameStatisticTimeMinInMilliseconds;
// }
//
// function setGameStatisticTimeInMilliseconds() {
//     setGameStatisticTimeMinInMilliseconds();
//     setGameStatisticTimeAvgInMilliseconds();
//     setGameStatisticTimeMaxInMilliseconds();
//     setGameStatisticTimeBestInMilliseconds();
// }
//
// function playClickerGame() {
//
//     if (countedClicksNumber === 1)
//         createContainersGameFiledStatistics();
//
//     setEndTime();
//     setClickReactionTime();
//     setGameStatisticTimeSumInMilliseconds();
//     setGameStatisticTimeInMilliseconds();
//     setGameStatisticTimeInSeconds();
//     setGameStatisticFraudData();
//
//     if (countedClicksNumber < maxClicksNumber) {
//         setConfigurationGame();
//         countedClicksNumber++;
//     } else {
//         // console.log("GAME OVER");
//         setConfigurationGameOver();
//     }
// }
//
// function setConfigurationGameOver() {
//     removeFunctionOnclick(gameFiledButtonPlay);
//     removeFunctionOnclick(buttonMainStop);
//     setElementTextById(gameFiledButtonPlay, gameFiledButtonPlayGameOverTextDisplay);
//     setElementClassNameById(gameFiledButtonPlay, gameFiledButtonPlayGameOver);
//     setConfigurationButtonMainGameOver();
//     removeConfigurationButtonChosenNumber();
// }
//
// function removeConfigurationGameOver() {
//     setElementTextById(gameFiledButtonPlay, "");
//     removeElementClassNameById(gameFiledButtonPlay, gameFiledButtonPlayGameOver);
// }
//
// function setClickReactionTime() {
//     reactionTime = endTime - startTime + reactionTimeTimeout;
// }
//
// function setClickReactionTimeTimeout() {
//     reactionTimeTimeout = endTime - startTime;
// }
//
// function setEndTime() {
//     endTime = performance.now();
// }
//
// function setGameTimeTimeoutStart() {
//     gameTimeTimeoutStart = performance.now();
// }
//
// function setConfigurationGame() {
//     gameColors = colors;
//     startTime = 0;
//     endTime = 0;
//     reactionTimeTimeout = 0;
//
//     setGameRandomColor();
//     setGameRandomTimeInMillisecondsToChangeColor();
//     setGameTimeTimeoutStart();
//     setFunctionOnclickPlayGameColorClickBeforeNewRound();
//     runTimeoutButtonStop();
// }
//
// function createElementFraudCountRoundInner(parentId, childId) {
//     createElementDiv(parentId, childId);
//     setElementClassNameById(childId, commonGameFiledDisplay);
//     setElementClassNameById(childId, commonStaticText);
//     setElementClassNameById(childId, fraudCountRoundCommon);
//     setElementTextById(childId, statisticsFraudCountNumberTextDisplaySetUp);
// }
//
// function createElementFraudCountRoundMain(parentId, childId) {
//     createElementDiv(parentId, childId);
//     setElementClassNameById(parentId, fraudCountRound);
//     setElementClassNameById(parentId, fraudCountRoundUpdateNumber);
// }
//
// function createContainerStatisticsFraudCountPerRound() {
//
//     let parentId = containerGameFiledStatisticsFraudCountGamePlay;
//     let fraudNumber = maxClicksNumber;
//
//     let gridRowStartNumber = 1;
//     let gridColumnStartNumber = 1;
//     let gridRowEndNumber = 2;
//     let gridColumnEndNumber = 2;
//
//     let gridTemplateRows = "repeat(1, 2fr 6fr 2fr)";
//     let gridTemplateColumns = "repeat(" + fraudNumber + ", 1fr 100fr 1fr)";
//     setElementStyletAsGrid(parentId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns);
//
//     let gridRowStartNumberChild = 2;
//     let gridColumnStartNumberChild = 2;
//     let gridRowEndNumberChild = 3;
//     let gridColumnEndNumberChild = 3;
//
//     for (let i = 0; i < fraudNumber; i++) {
//
//         let childId = containerGameFiledStatisticsFraudCountGamePlay + "-" + valueToString(i);
//         createElementFraudCountRoundMain(parentId, childId);
//
//         let gridTemplateRowsChild = "1fr";
//         let gridTemplateColumnsChild = "1fr";
//         setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);
//
//         let grandChildId = fraudCountRoundGamePlayUpdateNumberPrefix + valueToString(i);
//         createElementFraudCountRoundInner(childId, grandChildId);
//
//         gridColumnStartNumberChild += 3;
//         gridColumnEndNumberChild += 3;
//     }
// }
//
// function playClickerGameClickBeforeNewRound() {
//     fraudCountedNumber++;
// }
//
// function setGameStatisticFraudData() {
//     fraudCountedSumNumber += fraudCountedNumber;
//     setGameStatisticFraudCountedNumber();
//     setGameStatisticFraudCountedSumNumber();
//     setGameSConfigurationStatisticFraud();
// }
//
// function setGameSConfigurationStatisticFraud() {
//     fraudCountRoundIndex++;
//     fraudCountedNumber = 0;
// }
//
// function setGameStatisticFraudCountedNumber() {
//     let result;
//     if (fraudCountedNumber < 10)
//         result = valueToString(fraudCountedNumber) + statisticsFraudCountNumberTextDisplayLessThanTen;
//     else
//         result = fraudCountedNumber;
//
//     let elementId = fraudCountRoundGamePlayUpdateNumberPrefix + fraudCountRoundIndex;
//     let text = statisticsFraudCountNumberTextDisplay + result;
//     setElementTextById(elementId, text);
// }
//
// function setGameStatisticFraudCountedSumNumber() {
//     setElementTextById(statisticsFraudBestGamePlay, fraudCountedSumNumber);
// }
//
// function createContainersGameFiledStatistics() {
//     createGameFieldStatisticsTime();
//     createGameFieldStatisticsFraud();
// }
//
// function removeContainersGameFiledStatistics() {
//     removeElementById(containerGameFiledStatisticsTimeParts);
//     removeElementById(containerGameFiledStatisticsFraudParts);
// }
//
// function createContainersGameFiledButtonsMainStop() {
//     createGameFieldPButtonMainStop();
// }
//
// function removeContainersGameFiledButtonsMainStop() {
//     removeElementById(containerGameFiledButtonsMainStop);
// }