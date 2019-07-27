//variables
var randomNum = 0;
var wins = 0;
var losses = 0;
var userGuess = 0;
var redCrystNum = 0;
var blueCrsytNum = 0;
var yellowCrystNum = 0;
var greenCrystNum = 0;
var randomCrystNum = 0;
var redClicked = false;
var yellowClicked = false;
var blueClicked = false;
var greenClicked = false;


//functions
//generates random number
function numGenerator(){
    randomNum = Math.floor(Math.random() * 101) + 19;
    console.log(randomNum);
    $("#random-number").text("Random Number: " + randomNum);
}

numGenerator();

//--Win Scenario-- if userGuess equals random number, increments wins, generate new random number
function winLoss() {
    if(userGuess === randomNum){
        wins++;
        $("#wins").text("Wins: " + wins);
        userGuess = 0;
        $("#guess-total").text("Total Score: " + userGuess);
        $("#losses").text("Losses: " + losses);
        numGenerator();
        redClicked = false;
        yellowClicked = false;
        blueClicked = false;
        greenClicked = false;

    }//--Loss Scenario-- if userGuess > random number, increment losses, generate new random number
    else if(userGuess > randomNum){ 
        losses++;
        $("#losses").text("Losses: " + losses);
        userGuess = 0;
        $("#guess-total").text("Total Score: " + userGuess);
        numGenerator();
        redClicked = false;
        yellowClicked = false;
        blueClicked = false;
        greenClicked = false;
    }
}
//generates a random number between 1 and 12 stores in randomCrystNum
function crystalNum(){
    randomCrystNum = Math.floor(Math.random() * 12) + 1;
}

//Red crystal image clicks
$("#red-crystal").on("click", function(){
    if(redClicked === false){
        crystalNum();
        redCrystNum = randomCrystNum;
        userGuess = userGuess + redCrystNum;
        $("#guess-total").text(userGuess);
        redClicked = true;
    }
    else if(redClicked === true){
        userGuess = userGuess + redCrystNum;
        $("#guess-total").text(userGuess);
        if(userGuess >= randomNum){
            winLoss();
        }   
    }
    
})
// Yellow crystal image clicks
$("#yellow-crystal").on("click", function () {
    if (yellowClicked === false) {
        crystalNum();
        yellowCrystNum = randomCrystNum;
        userGuess = userGuess + yellowCrystNum;
        $("#guess-total").text(userGuess);
        yellowClicked = true;
    }
    else if (yellowClicked === true) {
        userGuess = userGuess + yellowCrystNum;
        $("#guess-total").text(userGuess);
        if (userGuess >= randomNum) {
            winLoss();
        }
    }

})
// Blue crystal image clicks
$("#blue-crystal").on("click", function () {
    if (blueClicked === false) {
        crystalNum();
        blueCrystNum = randomCrystNum;
        userGuess = userGuess + blueCrystNum;
        $("#guess-total").text(userGuess);
        blueClicked = true;
    }
    else if (blueClicked === true) {
        userGuess = userGuess + blueCrystNum;
        $("#guess-total").text(userGuess);
        if (userGuess >= randomNum) {
            winLoss();
        }
    }

})
// Green crystal image clicks
$("#green-crystal").on("click", function () {
    if (greenClicked === false) {
        crystalNum();
        greenCrystNum = randomCrystNum;
        userGuess = userGuess + greenCrystNum;
        $("#guess-total").text(userGuess);
        greenClicked = true;
    }
    else if (greenClicked === true) {
        userGuess = userGuess + greenCrystNum;
        $("#guess-total").text(userGuess);
        if (userGuess >= randomNum) {
            winLoss();
        }
    }

})