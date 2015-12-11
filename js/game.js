// Theses are global variables
var theNum;
var theMax = 10;
var score = 100 ;
var minimum = 15;
var highscore = 0;

//reduction of score function on relevant wrong guess

function addScore() {
    score -=10;
    if (score < minimum) {score=minimum};
    document.getElementById("score").innerHTML=score;
}
//highscore function
function keepTrack() {
    highscore +=score;
    document.getElementById("highscore").innerHTML=highscore;
}

// If we dont know it yet, we ask the user for his name and keep in localStorage
if (!localStorage.userName) {
    localStorage.userName = prompt("Your name?");
}
document.querySelector('#userName').innerText = localStorage.userName;


// initialize the game for the first time
initGame();


// This function is in charge for initializing the game
function initGame() {

    document.querySelector('#max').innerText = theMax;
    theNum = 1 + Math.floor(Math.random() * theMax);
    score =100;
    document.querySelector("#score").innerText = score;
    console.log(theNum);

}


// This function is called when user click the GUESS button
function userGuess() {
    var guess = prompt('Guess my number');

    // TODO: use parseInt to convert the guess to a number

    // if user has guesses right, we increase the range and re-initialize the game
    if (theNum-guess==0) {
        alert("Not bad...not bad at all");
        theMax *= 2;
        keepTrack();
        initGame();
    }else if (guess > theMax) { //in case number is bigger than max
        alert("Try this guess later on...")
    }else if (guess < 1) { //in case number is a 0 or negative
        alert("Don't be so Negative")
    }else if (isNaN (guess)) { //in case guess is a letter or other object
        alert("We're taking nubers here!!")
    }

    else if (theNum - guess > 0) { //in case guess is lower then answer
        alert("Don't be so CHEAP")
        addScore()
    }

    else { //in case guess is higher then answer
    alert ("I think you're exaggerating")
    addScore();}

}





