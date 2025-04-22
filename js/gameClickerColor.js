function playGameColorStart(){
    console.log("f -> playGameColorStart")
    // create button - stop
    // remove container - statistic

    setRandomColor();
}

function playGameColorStop(){
    console.log("f -> playGameColorStop")
    // random time cut down - stop
}

function playGameColor(){
    console.log("f -> playGameColor")
    // create container statistic
}

const fileWithColors = "pink, orange, yellow, blue, red, darkslategrey, greenyellow, palegreen, ";

const colors = fileWithColors.split(", ")

function getRandomNumber(maxNumber) {
    // return Math.floor((Math.random() * (colors.length)));
    return Math.floor((Math.random() * maxNumber));
}

const maxClicksNumber = 5;

let gameColors = [];
let gameTime;

function setRandomColor(){

    let countedNumber = 0;

    while(countedNumber < maxClicksNumber){



        countedNumber++;

    }


    console.log("gameColors: " + gameColors);

}


playGameColorStart(); // temp on click