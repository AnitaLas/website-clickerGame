let maxClicksNumber = 5;
let maxClicksNumberSetByUser = maxClicksNumber;
let countedClicksNumber = 0;

let gameRandomColor = "#ac4a71";
let gameRandomTimeToChangeColor = 1;
const gameRandomTimeMaxSecond = 10;
let reactionTime = 0;
let reactionTimeTimeout = 0;
let startTime = 0;
let endTime = 0;
let gameTimeTimeoutStart;

let gameStatisticTimeMinInMilliseconds = 1300000;
let gameStatisticTimeAvgInMilliseconds = 0;
let gameStatisticTimeSumInMilliseconds = 0;
let gameStatisticTimeMaxInMilliseconds = 0;
let gameStatisticTimeBestInMilliseconds = gameStatisticTimeMinInMilliseconds;

let currentFunctionOnclickName;
let fraudCountedNumber = 0;
let fraudCountedSumNumber = 0;
let fraudCountRoundIndex = 0;

const fileWithColors = "#1A1A1D, #3B1C32, #6A1E55, #A64D79, #251B37, #372948, #FFCACA, #FFECEF, " +
    "#F3F2DA, #4E8D7C, #045762, #EA97AD, #FAD9E6, #E4AEC5, #5F7464, #243D25";
const colors = fileWithColors.split(", ");

let gameColors = colors;

function setConfigurationClickNumber(clickedId) {
    maxClicksNumberSetByUser = getElementValue(clickedId);
    setConfigurationClickNumberButtonChanges();
}

function setConfigurationClickNumberButtonChanges() {
    for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
        let confButton = document.getElementById(menuGameConfigurationButtonClickNumber + setNumberAsString(clickNumber));
        confButton.classList.remove(menuGameConfigurationButtonCurrentNumber);

        if (setNumberAsString(maxClicksNumberSetByUser) === setNumberAsString(clickNumber))
            confButton.classList.add(menuGameConfigurationButtonCurrentNumber);
    }
}

function setConfigurationMaxClicksNumberButtonChosen() {
    for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {

        let confButton = document.getElementById(menuGameConfigurationButtonClickNumber + setNumberAsString(clickNumber));
        confButton.classList.remove(menuGameConfigurationButtonChosenNumber);

        if (setNumberAsString(maxClicksNumberSetByUser) === setNumberAsString(clickNumber)) {
            confButton.classList.add(menuGameConfigurationButtonChosenNumber);
            confButton.classList.remove(menuGameConfigurationButtonClickNumberGameOn);
        }
    }
}

function removeConfigurationButtonChosenNumber() {
    for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
        let confButton = document.getElementById(menuGameConfigurationButtonClickNumber + setNumberAsString(clickNumber));

        if (setNumberAsString(maxClicksNumberSetByUser) === setNumberAsString(clickNumber)) {
            confButton.classList.remove(menuGameConfigurationButtonChosenNumber);
            confButton.classList.add(menuGameConfigurationButtonCurrentNumber);
        }
    }
}

function setConfigurationButtonMainAfterClick(elementId) {
    let buttonPlay = document.getElementById(elementId);
    buttonPlay.classList.remove(gameFiledButtonMainTextDecorationBeforeClick);
    buttonPlay.classList.add(gameFiledButtonMainTextDecorationAfterClick);
}

function removeConfigurationButtonMainAfterClick(elementId) {
    let buttonPlay = document.getElementById(elementId);
    if(buttonPlay !== null){
        buttonPlay.classList.remove(gameFiledButtonMainTextDecorationAfterClick);
        buttonPlay.classList.add(gameFiledButtonMainTextDecorationBeforeClick);
    }
}

function setConfigurationButtonMainGameStart(){
    setConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
    removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStopTextDisplayId);
    removeElementClassName(gameFiledButtonMainStop, gameFiledButtonMainInactive);
}

function setConfigurationButtonMainGameStop(){
    setConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStopTextDisplayId);
    removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
}

function setConfigurationButtonMainGameOver(){
    removeConfigurationButtonMainAfterClick(containerGameFiledButtonsMainStartTextDisplayId);
    setElementClassName(gameFiledButtonMainStop, gameFiledButtonMainInactive);
}

function setConfigurationMaxClicksNumber() {
    maxClicksNumber = maxClicksNumberSetByUser;
    setConfigurationMaxClicksNumberButtonChosen();
}

function playGameColorStart() {
    removeContainersGameFiledButtonsMainStop();
    createContainersGameFiledButtonsMainStop();
    removeContainersGameFiledStatistics();
    setGameButtonStartColor();
    setConfigurationGame();
    removeConfigurationGameOver();
    setConfigurationMaxClicksNumber();
    setConfigurationButtonMainGameStart();


    countedClicksNumber = 0;
    fraudCountedNumber = 0;
    fraudCountedSumNumber = 0;
    fraudCountRoundIndex = 0;
    gameStatisticTimeMinInMilliseconds = 1300000;
    gameStatisticTimeAvgInMilliseconds = 0;
    gameStatisticTimeSumInMilliseconds = 0;
    gameStatisticTimeMaxInMilliseconds = 0;
    countedClicksNumber++;
}

function playGameColorStop() {
    clearTimeoutButtonStop();
    // [extension V1] button continue is active -> // setConfigurationGameStop();
    setConfigurationGameStop();
    // [extension V1] do not even think of removing this function !!!
    // setConfigurationGameContinue();
}

function setConfigurationGameStop() {
    removeFunctionOnclick(gameFiledButtonPlay);
    removeFunctionOnclick(buttonMainStop);
    removeConfigurationButtonChosenNumber();
    setConfigurationButtonMainGameStop();
}

// [extension V1] do not even think of removing this function !!!
function setConfigurationGameContinue() {
    let functionName = document.getElementById(gameFiledButtonPlay).getAttribute('onclick');
    if (functionName !== null)
        currentFunctionOnclickName = functionName.replace("(this.id)", "");

    setFunctionOnclick(buttonMainStop, functionNameOnclickPlayGameColorContinue);
    setElementTextById(buttonMainStop, containerGameFiledButtonsMainContinueTextDisplay);
    removeFunctionOnclick(gameFiledButtonPlay);
    setEndTime();
    setClickReactionTimeTimeout();

    startTime = 0;
    endTime = 0;
}

// [extension V1] do not even think of removing this function !!!
function playGameColorContinue() {
    setFunctionOnclick(buttonMainStop, functionNameOnclickPlayGameColorStop);
    setElementTextById(buttonMainStop, containerGameFiledButtonsMainStopTextDisplay);

    if (currentFunctionOnclickName !== undefined)
        setFunctionOnclick(gameFiledButtonPlay, currentFunctionOnclickName);

    // ???
    gameRandomTimeToChangeColor = gameRandomTimeToChangeColor - gameTimeTimeoutStart;
    runTimeoutButtonStop();
    gameTimeTimeoutStart = 0;
}

function getRandomNumber(maxNumber) {
    return Math.floor((Math.random() * maxNumber));
}

function setGameRandomColor() {
    let randomNumber = getRandomNumber(colors.length);
    let tempColor = gameRandomColor;
    gameRandomColor = colors[randomNumber];
    // console.log("COLOR: " + gameRandomColor);
    colors[randomNumber] = tempColor;
}

function setGameFieldColor(colorName) {
    rootVariables.style.setProperty(cssGameFiledButtonPlayColor, colorName);
}

let funTimeoutButtonStop = function setTimeoutButtonStop() {
    setGameFieldColor(gameRandomColor);
    setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
    startTime = performance.now();
}

let timeoutButtonStop;

function runTimeoutButtonStop() {
    timeoutButtonStop = setTimeout(funTimeoutButtonStop, gameRandomTimeToChangeColor);
}

function clearTimeoutButtonStop() {
    clearTimeout(timeoutButtonStop);
}

function setFunctionOnclickPlayGameColorClickBeforeNewRound() {
    setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColorClickBeforeNewRound);
}

function setGameButtonStartColor() {
    setGameFieldColor(gameFiledButtonPlayStartColor);
}

function setGameRandomTimeInMillisecondsToChangeColor() {
    let randomSecond = getRandomNumber(gameRandomTimeMaxSecond) + 1;
    gameRandomTimeToChangeColor = randomSecond * 1000;
    // console.log("BREAK TIME: " + gameRandomTimeToChangeColor);
}

function getGameStatisticTimeInSeconds(timeInMilliseconds) {
    return (timeInMilliseconds / 1000).toFixed(4);
}

function setGameStatisticTimeMinInSeconds() {
    let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeMinInMilliseconds);
    setElementTextById(statisticsTimeMinGamePlay, timeInSeconds);
}

function setGameStatisticTimeAvgInSeconds() {
    let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeAvgInMilliseconds);
    setElementTextById(statisticsTimeAvgGamePlay, timeInSeconds);
}

function setGameStatisticTimeMaxInSeconds() {
    let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeMaxInMilliseconds);
    setElementTextById(statisticsTimeMaxGamePlay, timeInSeconds);
}

function setGameStatisticTimeBestInSeconds() {
    let timeInSeconds = getGameStatisticTimeInSeconds(gameStatisticTimeBestInMilliseconds);
    setElementTextById(statisticsTimeBestGamePlay, timeInSeconds);
}

function setGameStatisticTimeInSeconds() {
    setGameStatisticTimeMinInSeconds();
    setGameStatisticTimeAvgInSeconds();
    setGameStatisticTimeMaxInSeconds();
    setGameStatisticTimeBestInSeconds();
}

function setGameStatisticTimeMinInMilliseconds() {
    if (gameStatisticTimeMinInMilliseconds > reactionTime)
        gameStatisticTimeMinInMilliseconds = reactionTime;
}

function setGameStatisticTimeSumInMilliseconds() {
    gameStatisticTimeSumInMilliseconds += reactionTime;
}

function setGameStatisticTimeAvgInMilliseconds() {
    gameStatisticTimeAvgInMilliseconds = gameStatisticTimeSumInMilliseconds / countedClicksNumber;
}

function setGameStatisticTimeMaxInMilliseconds() {
    if (gameStatisticTimeMaxInMilliseconds < reactionTime)
        gameStatisticTimeMaxInMilliseconds = reactionTime;
}

function setGameStatisticTimeBestInMilliseconds() {
    if (gameStatisticTimeBestInMilliseconds > gameStatisticTimeMinInMilliseconds)
        gameStatisticTimeBestInMilliseconds = gameStatisticTimeMinInMilliseconds;
}

function setGameStatisticTimeInMilliseconds() {
    setGameStatisticTimeMinInMilliseconds();
    setGameStatisticTimeAvgInMilliseconds();
    setGameStatisticTimeMaxInMilliseconds();
    setGameStatisticTimeBestInMilliseconds();
}

function playClickerGame() {

    if (countedClicksNumber === 1)
        createContainersGameFiledStatistics();

    setEndTime();
    setClickReactionTime();
    setGameStatisticTimeSumInMilliseconds();
    setGameStatisticTimeInMilliseconds();
    setGameStatisticTimeInSeconds();
    setGameStatisticFraudData();

    if (countedClicksNumber < maxClicksNumber) {
        setConfigurationGame();
        countedClicksNumber++;
    } else {
        // console.log("GAME OVER");
        setConfigurationGameOver();
    }
}

function setConfigurationGameOver() {
    removeFunctionOnclick(gameFiledButtonPlay);
    removeFunctionOnclick(buttonMainStop);
    setElementTextById(gameFiledButtonPlay, gameFiledButtonPlayGameOverTextDisplay);
    setElementClassName(gameFiledButtonPlay, gameFiledButtonPlayGameOver);
    setConfigurationButtonMainGameOver();
    removeConfigurationButtonChosenNumber();
}

function removeConfigurationGameOver() {
    setElementTextById(gameFiledButtonPlay, "");
    document.getElementById(gameFiledButtonPlay).classList.remove(gameFiledButtonPlayGameOver);
}

function setClickReactionTime() {
    reactionTime = endTime - startTime + reactionTimeTimeout;
}

function setClickReactionTimeTimeout() {
    reactionTimeTimeout = endTime - startTime;
}

function setEndTime() {
    endTime = performance.now();
}

function setGameTimeTimeoutStart() {
    gameTimeTimeoutStart = performance.now();
}

function setConfigurationGame() {
    gameColors = colors;
    startTime = 0;
    endTime = 0;
    reactionTimeTimeout = 0;

    setGameRandomColor();
    setGameRandomTimeInMillisecondsToChangeColor();
    setGameTimeTimeoutStart();
    setFunctionOnclickPlayGameColorClickBeforeNewRound();
    runTimeoutButtonStop();
}

function createContainerStatisticsFraudCountPerRound() {
    let parentElement = document.getElementById(containerGameFiledStatisticsFraudCountGamePlay);
    let fraudNumber = maxClicksNumber;

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
    parentElement.style.gridTemplateRows = " repeat(1, 2fr 6fr 2fr) ";
    parentElement.style.gridTemplateColumns = " repeat(" + fraudNumber + ", 1fr 100fr 1fr)";

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 3;
    let columnChildEnd = 3;

    for (let i = 0; i < fraudNumber; i++) {

        let newDiv = document.createElement("div");
        parentElement.append(newDiv);
        newDiv.style.display = "grid";
        newDiv.classList.add(fraudCountRound);
        newDiv.classList.add(fraudCountRoundUpdateNumber);
        newDiv.style.gridRow = setNumberAsString(rowChildStart);
        newDiv.style.gridColumn = setNumberAsString(columnChildStart);
        newDiv.style.gridRowEnd = setNumberAsString(rowChildEnd);
        newDiv.style.gridColumnEnd = setNumberAsString(columnChildEnd);
        newDiv.style.gridTemplateRows = "1fr";
        newDiv.style.gridTemplateColumns = "1fr";
        newDiv.classList.add(fraudCountRound);

        let newDivChild = document.createElement("div");
        newDiv.append(newDivChild);
        newDivChild.innerHTML = statisticsFraudCountNumberTextDisplay;
        newDivChild.setAttribute("id", fraudCountRoundGamePlayUpdateNumber + i);
        newDivChild.classList.add(commonGameFiledDisplay);
        newDivChild.classList.add(commonStaticText);
        newDivChild.classList.add(fraudCountRoundCommon);

        columnChildStart += 3;
        columnChildEnd += 3;
    }
}

function playClickerGameClickBeforeNewRound() {
    fraudCountedNumber++;
}

function setGameStatisticFraudData() {
    fraudCountedSumNumber += fraudCountedNumber;
    setGameStatisticFraudCountedNumber();
    setGameStatisticFraudCountedSumNumber();
    setGameSConfigurationStatisticFraud();
}

function setGameSConfigurationStatisticFraud() {
    fraudCountRoundIndex++;
    fraudCountedNumber = 0;
}

function setGameStatisticFraudCountedNumber() {
    document.getElementById(fraudCountRoundGamePlayUpdateNumber + fraudCountRoundIndex).innerHTML += fraudCountedNumber;
}

function setGameStatisticFraudCountedSumNumber() {
    document.getElementById(statisticsFraudBestGamePlay).innerHTML = fraudCountedSumNumber;
}

function createContainersGameFiledStatistics() {
    createGameFieldStatisticsTime();
    createGameFieldStatisticsFraud();
}

function removeContainersGameFiledStatistics() {
    removeElementsById(containerGameFiledStatisticsTimeParts);
    removeElementsById(containerGameFiledStatisticsFraudParts);
}

function createContainersGameFiledButtonsMainStop() {
    createGameFieldPButtonMainStop();
}

function removeContainersGameFiledButtonsMainStop() {
    removeElementsById(containerGameFiledButtonsMainStop);
}