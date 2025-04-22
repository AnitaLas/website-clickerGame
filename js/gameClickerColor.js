const maxClicksNumber = 5;

let gameRandomColor = "white";
let gameRandomTime = 1;
const gameRandomTimeMaxSecond = 10;
let maxTimeToChangeColor = 0;
let gameTimeNow = 0;
let gameTimeStart = gameTimeNow;
let reactionTime = 0;
let startTime = 0;
let endTime = 0;


const fileWithColors = "pink, orange, yellow, blue, red, darkslategrey, greenyellow, palegreen, ";
const colors = fileWithColors.split(", ")

let gameColors = colors;


function playGameColorStart(){
    console.log("f -> playGameColorStart")

    setGameButtonStartColor();
    setGameConfiguration();


}

function playGameColorStop(){
    console.log("f -> playGameColorStop")
    // random time cut down - stop
}


function getRandomNumber(maxNumber) {
    // return Math.floor((Math.random() * (colors.length)));
    return Math.floor((Math.random() * maxNumber));
}



function setGameRandomColor(){

    // console.log("S -> colors: " + colors);

        let randomNumber = getRandomNumber(colors.length);

        // console.log("gameColor: " + gameColor);
        // console.log("colors["+randomNumber+"]: " + colors[randomNumber]);

        // while(gameColor !== colors[randomNumber]){

            let tempColor = gameRandomColor;
            // console.log("1 tempColor: " + tempColor);

            gameRandomColor = colors[randomNumber];
            // console.log("1 gameColor: " + gameColor);

            colors[randomNumber] = tempColor;
            // console.log("colors["+randomNumber+"]: " + colors[randomNumber]);



    // console.log("F -> colors: " + colors);

}

function setGameFieldColor(colorName){
    rootVariables.style.setProperty(cssGameFiledButtonPlayColor, colorName);
}

// let setColor = function setGameButtonColor(){
//     setGameFieldColor(gameRandomColor);
// }

function setGameButtonColor(){
    setTimeout(function(){
        setGameFieldColor(gameRandomColor);
    },  maxTimeToChangeColor);

}


// let functionOnclickPlayGameColor = function setFunctionOnclickPlayGameColor(){
//     setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
// }

function setFunctionOnclickPlayGameColor(){

    setTimeout(function(){
        setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
    },  maxTimeToChangeColor);

}

// let setReactionStartTime = function getStartTime(){
//     startTime = performance.now();
// }

function getStartTime(){

    setTimeout(function(){
        startTime = performance.now();
    },  maxTimeToChangeColor);

}


function setGameButtonStartColor(){
    setGameFieldColor(gameFiledButtonPlayStartColor);
}

function setGameRandomTime(){
    let randomSecond = getRandomNumber(gameRandomTimeMaxSecond) + 1;
    // console.log(">>> 1 randomSecond: " + randomSecond);
    // console.log("> 1 gameRandomTime: " + gameRandomTime);
    gameRandomTime = randomSecond * 1000;
    // console.log("> 2 gameRandomTime: " + gameRandomTime);
}

function setTimeNow(){
    gameTimeNow = performance.now();
    // console.log("gameTimeNow: " + gameTimeNow);
}

function setTimeToChangeColor(){
    // console.log("1 maxTimeToChangeColor: " + maxTimeToChangeColor);
    // maxTimeToChangeColor = gameTimeNow + gameRandomTime;
    maxTimeToChangeColor = gameTimeStart - gameTimeNow + gameRandomTime;
    // console.log("2 gameTimeNow: " + gameTimeNow);
    // console.log("2 gameRandomTime: " + gameRandomTime);
    console.log("2 maxTimeToChangeColor: " + maxTimeToChangeColor);
    console.log(" ");
}



function playClickerGame(){


    getEndTime();
    getClickReactionTime();
    setGameConfiguration();



}

function getClickReactionTime(){

    reactionTime = endTime - startTime;
    // console.log("endTime: " + endTime);
    // console.log("startTime: " + startTime);
    // console.log("reactionTime: " + reactionTime);
}



function getEndTime(){
    endTime = performance.now();
}

function setGameConfiguration(){

    maxTimeToChangeColor = 0;
    // gameTimeNow = 0;
    gameRandomTime = 0;
    reactionTime = 0;
    startTime = 0;
    endTime = 0;
    gameColors = colors;

    setGameRandomColor();

    setGameRandomTime();
    setTimeNow();
    setTimeToChangeColor();

    // setTimeout(setColor,  maxTimeToChangeColor);
    setGameButtonColor();

    // setTimeout(setReactionStartTime,  maxTimeToChangeColor);
    getStartTime();

    // setTimeout(functionOnclickPlayGameColor,  maxTimeToChangeColor);
    setFunctionOnclickPlayGameColor();



}


// playGameColorStart(); // temp on click


