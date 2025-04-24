const maxClicksNumber = 5;
let countedClicksNumber = 0;

let gameRandomColor = "white";
let gameRandomTimeToChangeColor = 1;
const gameRandomTimeMaxSecond = 10;
let reactionTime = 0;
let reactionTimeTimeout = 0;
let startTime = 0;
let endTime = 0;

let gameStatisticTimeMinInMilliseconds = 1300000;
let gameStatisticTimeAvgInMilliseconds = 0;
let gameStatisticTimeSumInMilliseconds = 0;
let gameStatisticTimeMaxInMilliseconds = 0;
let gameStatisticTimeBestInMilliseconds = gameStatisticTimeMinInMilliseconds;

let currentFunctionOnclickName;
let fraudCountedNumber = 0;
let fraudCountedSumNumber = 0;
let fraudCountRoundIndex = 0;

const fileWithColors = "pink, orange, yellow, blue, red, darkslategrey, greenyellow, palegreen,";
const colors = fileWithColors.split(", ");

let gameColors = colors;

function playGameColorStart() {
    removeContainersGameFiledButtonsMainStop();
    createContainersGameFiledButtonsMainStop();
    removeContainersGameFiledStatistics();
    setGameButtonStartColor();
    setGameConfiguration();
    removeGameOverConfiguration();

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
    // clearTimeoutSetGameButtonPlayColor();
    // clearTimeoutSetFunctionOnclickPlayGameColor();
    // clearTimeoutSetStartTime();
    clearTimeoutButtonStop();
    setConfigurationGameContinue();


    // fraudCountedNumber = 0;
    // fraudCountRoundIndex = 0;
}

let gameTimeTimeoutStart;

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

function playGameColorContinue() {
    setFunctionOnclick(buttonMainStop, functionNameOnclickPlayGameColorStop);
    setElementTextById(buttonMainStop, containerGameFiledButtonsMainStopTextDisplay);

    if (currentFunctionOnclickName !== undefined)
        setFunctionOnclick(gameFiledButtonPlay, currentFunctionOnclickName);

    // gameTimeTimeoutStart - minus time from the begging
    gameRandomTimeToChangeColor = gameRandomTimeToChangeColor - gameTimeTimeoutStart;

    // runTimeoutSetGameButtonPlayColor();
    // runTimeoutSetFunctionOnclickPlayGameColor();
    // runTimeoutSetStartTime();
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
    console.log("COLOR: " + gameRandomColor);

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

// ---
function setFunctionOnclickPlayGameColorClickBeforeNewRound() {
    setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColorClickBeforeNewRound);
}

function setGameButtonStartColor() {
    setGameFieldColor(gameFiledButtonPlayStartColor);
}

function setGameRandomTimeInMillisecondsToChangeColor() {
    let randomSecond = getRandomNumber(gameRandomTimeMaxSecond) + 1;
    gameRandomTimeToChangeColor = randomSecond * 1000;
    console.log("BREAK TIME: " + gameRandomTimeToChangeColor);
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

    if(countedClicksNumber === 1)
        createContainersGameFiledStatistics();

    setEndTime();
    setClickReactionTime();
    setGameStatisticTimeSumInMilliseconds();
    setGameStatisticTimeInMilliseconds();
    setGameStatisticTimeInSeconds();
    setGameStatisticFraudData();

    if (countedClicksNumber < maxClicksNumber) {
        setGameConfiguration();
        countedClicksNumber++;
    } else {
        // console.log("GAME OVER");
        setGameOverConfiguration();
    }
}

function setGameOverConfiguration() {
    removeFunctionOnclick(gameFiledButtonPlay);
    removeFunctionOnclick(buttonMainStop);
    setElementTextById(gameFiledButtonPlay, gameFiledButtonPlayGameOverTextDisplay);
    setElementClassName(gameFiledButtonPlay, gameFiledButtonPlayGameOver);
}

function removeGameOverConfiguration() {
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

function setGameConfiguration() {
    gameColors = colors;
    startTime = 0;
    endTime = 0;
    reactionTimeTimeout = 0;

    setGameRandomColor();
    setGameRandomTimeInMillisecondsToChangeColor();

    // runTimeoutSetStartTime();
    setGameTimeTimeoutStart();
    setFunctionOnclickPlayGameColorClickBeforeNewRound();

    // runTimeoutSetGameButtonPlayColor();
    // runTimeoutSetFunctionOnclickPlayGameColor();

    runTimeoutButtonStop()
}

function createContainerStatisticsFraudCountPerRound() {
    let parentElement = document.getElementById(containerGameFiledStatisticsFraudCountGamePlay)

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
    // document.getElementById(statisticsFraudBestGamePlay).innerHTML += fraudCountedSumNumber;
    document.getElementById(statisticsFraudBestGamePlay).innerHTML = fraudCountedSumNumber;
}


function createContainersGameFiledStatistics() {
    createGameFieldStatistics();
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





