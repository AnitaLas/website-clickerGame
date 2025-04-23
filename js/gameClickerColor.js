let maxClicksNumber = 5;
let countedClicksNumber = 0;

let gameRandomColor = "white";
let gameRandomTimeToChangeColor = 1;
const gameRandomTimeMaxSecond = 10;
// let maxTimeToChangeColor = 0;
// let gameTimeNow = 0;
// let gameTimeStart = gameTimeNow;
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

const fileWithColors = "pink, orange, yellow, blue, red, darkslategrey, greenyellow, palegreen, ";
const colors = fileWithColors.split(", ")

let gameColors = colors;


function playGameColorStart() {
    console.log("f -> playGameColorStart")


    // setGameConfigurationButtonStart();

    setGameButtonStartColor();
    setGameConfiguration();

    setElementTextById(gameFiledButtonPlay, "")
    countedClicksNumber = 0;
     gameStatisticTimeMinInMilliseconds = 1300000;
     gameStatisticTimeAvgInMilliseconds = 0;
     gameStatisticTimeSumInMilliseconds = 0;
     gameStatisticTimeMaxInMilliseconds = 0;

    countedClicksNumber++;


}

function playGameColorStop() {
    // console.log("f -> playGameColorStop")

    clearTimeoutSetGameButtonPlayColor();
    clearTimeoutSetFunctionOnclickPlayGameColor();
    clearTimeoutSetStartTime();
    setConfigurationGameContinue();
    // random time cut down - stop



    console.log("S startTime: " + startTime);
    console.log("S endTime: " + endTime);
    console.log("S reactionTimeTimeout: " + reactionTimeTimeout);
}

let gameTimeTimeoutStart;

function setConfigurationGameContinue(){
    let functionName = document.getElementById(gameFiledButtonPlay).getAttribute('onclick');
    if(functionName !== null){
        currentFunctionOnclickName = functionName.replace("(this.id)", "");
    }

    setFunctionOnclick(buttonMainStop, functionNameOnclickPlayGameColorContinue);
    setElementTextById(buttonMainStop, containerGameFiledButtonsMainContinueTextDisplay);
    removeFunctionOnclick(gameFiledButtonPlay);

    setEndTime();
    setClickReactionTimeTimeout();

    console.log("11 startTime: " + startTime);
    console.log("11 endTime: " + endTime);
    console.log("11 reactionTimeTimeout: " + reactionTimeTimeout);

    startTime = 0;
    endTime = 0;

}


function playGameColorContinue() {
    // console.log("f -> playGameColorContinue")

    setFunctionOnclick(buttonMainStop, functionNameOnclickPlayGameColorStop);
    setElementTextById(buttonMainStop, containerGameFiledButtonsMainStopTextDisplay);

    // console.log("1 currentFunctionOnclickName: " + currentFunctionOnclickName);

    if(currentFunctionOnclickName !== undefined){
        setFunctionOnclick(gameFiledButtonPlay, currentFunctionOnclickName);
    }


    gameRandomTimeToChangeColor =  gameRandomTimeToChangeColor - gameTimeTimeoutStart;

    // setTimeNow();
    console.log("C 2 startTime: " + startTime);
    console.log("C 2 endTime: " + endTime);
    console.log("C 2 reactionTimeTimeout: " + reactionTimeTimeout);

    // console.log("C startTime: " + startTime);
    // console.log("C endTime: " + endTime);
    // console.log("C reactionTimeTimeout: " + reactionTimeTimeout);


    runTimeoutSetGameButtonPlayColor();
    runTimeoutSetFunctionOnclickPlayGameColor();
    runTimeoutSetStartTime();


    gameTimeTimeoutStart = 0;

}






function getRandomNumber(maxNumber) {
    // return Math.floor((Math.random() * (colors.length)));
    return Math.floor((Math.random() * maxNumber));
}


function setGameRandomColor() {

    // console.log("S -> colors: " + colors);

    let randomNumber = getRandomNumber(colors.length);

    // console.log("gameColor: " + gameColor);
    // console.log("colors["+randomNumber+"]: " + colors[randomNumber]);

    // while(gameColor !== colors[randomNumber]){

    let tempColor = gameRandomColor;
    // console.log("1 tempColor: " + tempColor);

    gameRandomColor = colors[randomNumber];
    console.log("COLOR: " + gameRandomColor);

    colors[randomNumber] = tempColor;
    // console.log("colors["+randomNumber+"]: " + colors[randomNumber]);


    // console.log("F -> colors: " + colors);

}

function setGameFieldColor(colorName) {
    rootVariables.style.setProperty(cssGameFiledButtonPlayColor, colorName);
}

// button color
let funButtonPlayColor = function setGameButtonPlayColor() {
        setGameFieldColor(gameRandomColor);
}

let timeoutSetGameButtonPlayColor;

function runTimeoutSetGameButtonPlayColor() {
    timeoutSetGameButtonPlayColor =  setTimeout(funButtonPlayColor,  gameRandomTimeToChangeColor);
}

function clearTimeoutSetGameButtonPlayColor() {
    clearTimeout(timeoutSetGameButtonPlayColor);
}


// function play game
let funOnclickPlayGameColor = function setFunctionOnclickPlayGameColor() {
    setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
}

let timeoutSetFunctionOnclickPlayGameColor;

function runTimeoutSetFunctionOnclickPlayGameColor() {
    timeoutSetFunctionOnclickPlayGameColor = setTimeout(funOnclickPlayGameColor, gameRandomTimeToChangeColor);
}

function clearTimeoutSetFunctionOnclickPlayGameColor() {
    clearTimeout(timeoutSetFunctionOnclickPlayGameColor);
}

// start time
let funStartTime = function getStartTime() {
        startTime = performance.now();
}



let timeoutSetStartTime;

function runTimeoutSetStartTime() {
    timeoutSetStartTime = setTimeout(funStartTime, gameRandomTimeToChangeColor);
}

function clearTimeoutSetStartTime() {
    clearTimeout(timeoutSetStartTime);
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
    console.log("BREAK TIME: " + gameRandomTimeToChangeColor);
}

function getGameStatisticTimeInSeconds(timeInMilliseconds) {

    // let timeIk = (timeInMilliseconds / 1000).toFixed(4);
    // console.log(">  timeInMilliseconds / 1000: " + (timeInMilliseconds / 1000));
    // console.log(">  timeIk: " + timeIk);
    // return timeIk;
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

// function setTimeStart(){
//     gameTimeStart = gameTimeNow;
//     // console.log("gameTimeNow: " + gameTimeNow);
// }

// function setTimeNow() {
//     gameTimeNow = performance.now();
//     // console.log("gameTimeNow: " + gameTimeNow);
// }

function setGameStatisticTimeMinInMilliseconds() {
    if (gameStatisticTimeMinInMilliseconds > reactionTime) {
        gameStatisticTimeMinInMilliseconds = reactionTime;
    }
}

function setGameStatisticTimeSumInMilliseconds() {
    gameStatisticTimeSumInMilliseconds += reactionTime;
}

function setGameStatisticTimeAvgInMilliseconds() {
    gameStatisticTimeAvgInMilliseconds = gameStatisticTimeSumInMilliseconds / countedClicksNumber;
}

function setGameStatisticTimeMaxInMilliseconds() {
    if (gameStatisticTimeMaxInMilliseconds < reactionTime) {
        gameStatisticTimeMaxInMilliseconds = reactionTime;
    }
}

function setGameStatisticTimeBestInMilliseconds() {
    if (gameStatisticTimeBestInMilliseconds > gameStatisticTimeMinInMilliseconds) {
        gameStatisticTimeBestInMilliseconds = gameStatisticTimeMinInMilliseconds;
    }
}

function setGameStatisticTimeInMilliseconds() {
    setGameStatisticTimeMinInMilliseconds();
    setGameStatisticTimeAvgInMilliseconds();
    setGameStatisticTimeMaxInMilliseconds();
    setGameStatisticTimeBestInMilliseconds();
}

function playClickerGame() {

    // console.log("countedClicksNumber: " + countedClicksNumber);

    setEndTime();
    setClickReactionTime();
    setGameStatisticTimeSumInMilliseconds();
    setGameStatisticTimeInMilliseconds();
    setGameStatisticTimeInSeconds();

    if (countedClicksNumber < maxClicksNumber) {
        // setGameConfigurationButtonPlay();
        setGameConfiguration();
        countedClicksNumber++;
    } else {
        // console.log("countedClicksNumber: " + countedClicksNumber);
        console.log("GAME OVER");
        setGameOverConfiguration();
    }
}

function setGameOverConfiguration() {
    removeFunctionOnclick(gameFiledButtonPlay);
    setGameFieldColor("skyblue");
    setElementTextById(gameFiledButtonPlay, "You did well ! <br /><br /> game over")
}

function setClickReactionTime() {

    // reactionTime = endTime - startTime;
    reactionTime = endTime - startTime + reactionTimeTimeout;
    console.log("===== FINAL  startTime: " + startTime);
    console.log("===== FINAL  endTime: " + endTime);
    console.log("===== FINAL  endTime - startTime: " + ( endTime - startTime));
    console.log("===== FINAL  reactionTimeTimeout: " + reactionTimeTimeout);
    console.log("===== FINAL reactionTime: " + reactionTime);
}

function setClickReactionTimeTimeout() {

    reactionTimeTimeout = endTime - startTime;
    // console.log("endTime: " + endTime);
    // console.log("startTime: " + startTime);
    // console.log("====== reactionTimeTimeout: " + reactionTimeTimeout);
}

function setEndTime() {
    endTime = performance.now();
}

function  setGameTimeTimeoutStart() {
    gameTimeTimeoutStart = performance.now();
}

function setGameConfiguration() {
    gameColors = colors;
    startTime = 0;
    endTime = 0;
    reactionTimeTimeout = 0;

    console.log("1 startTime: " + startTime);
    console.log("1 endTime: " + endTime);
    console.log("1 reactionTimeTimeout: " + reactionTimeTimeout);

    setGameRandomColor();
    setGameRandomTimeInMillisecondsToChangeColor();
    // setTimeNow();
    // setGameButtonPlayColor();
    // getStartTime();
    runTimeoutSetStartTime();
    setGameTimeTimeoutStart();
    setFunctionOnclickPlayGameColorClickBeforeNewRound();

    runTimeoutSetGameButtonPlayColor();
    runTimeoutSetFunctionOnclickPlayGameColor();
    // runTimeoutRemoveFunctionOnclickPlayGameColorClickBeforeNewRound();




}

function createContainerStatisticsFraudCountPerRound() {
    let parentElement = document.getElementById(containerGameFiledStatisticsFraudCountGamePlay)

    let maxWrongShots= maxClicksNumber;
    // let maxWrongShots= 5;

    let rowStart = 1;
    let columnStart = 1;
    let rowEnd = 2;
    let columnEnd = 2;

    parentElement.style.display = "grid";
    parentElement.style.backgroundColor = "black";
    // parentElement.style.gridRow = rowStart;
    // parentElement.style.gridColumn = columnStart;
    // parentElement.style.gridRowEnd = rowEnd;
    // parentElement.style.gridColumnEnd = columnEnd;
    parentElement.style.gridRow = setNumberAsString(rowStart);
    parentElement.style.gridColumn = setNumberAsString(columnStart);
    parentElement.style.gridRowEnd = setNumberAsString(rowEnd);
    parentElement.style.gridColumnEnd = setNumberAsString(columnEnd);
    parentElement.style.gridTemplateRows = " repeat(1, 2fr 6fr 2fr) ";
    parentElement.style.gridTemplateColumns = " repeat(" + maxWrongShots + ", 5fr 100fr 5fr)";

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 3;
    let columnChildEnd = 3;

    for (let i = 0; i < maxWrongShots; i++) {

        let newDiv = document.createElement("div");
        parentElement.append(newDiv);
        newDiv.style.display = "grid";
        newDiv.classList.add("gameSnowmanLives");

        if (i === maxWrongShots - 1) {
            newDiv.classList.add("gameSnowmanLivesNumber");
        }

        // newDiv.style.gridRow = rowChildStart;
        // newDiv.style.gridColumn = columnChildStart;
        // newDiv.style.gridRowEnd = rowChildEnd;
        // newDiv.style.gridColumnEnd = columnChildEnd;
        newDiv.style.gridRow = setNumberAsString(rowChildStart);
        newDiv.style.gridColumn = setNumberAsString(columnChildStart);
        newDiv.style.gridRowEnd = setNumberAsString(rowChildEnd);
        newDiv.style.gridColumnEnd = setNumberAsString(columnChildEnd);
        newDiv.style.gridTemplateRows = "1fr";
        newDiv.style.gridTemplateColumns = "1fr";
        // newDiv.innerHTML += gameLivesChars[i];
        newDiv.innerHTML += i;
        newDiv.setAttribute("id", "fraudCount-round" + i);

        columnChildStart += 3;
        columnChildEnd += 3;
    }
}
function playClickerGameClickBeforeNewRound() {
    console.log("f -> playClickerGameClickBeforeNewRound ")
}



