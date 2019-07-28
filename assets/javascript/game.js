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
        $("#instructions").html("<h1>You Win!</h1>");
        setTimeout(function () {
            $("#instructions").html('<h3>Game Instructions</h3>At the start of each game you will be given a random number.There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score. You win the game by matching your total score to the random number, you lose the game if your total score is more than the random number. The value of each crystal will be hidden until you click on it.Each time the game starts the value of each crystal will change.'); 
        }, 3000);   
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
        $("#instructions").html("<h1>You Lose!</h1>");
        setTimeout(function () {
            $("#instructions").html('<h3>Game Instructions</h3>At the start of each game you will be given a random number.There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score. You win the game by matching your total score to the random number, you lose the game if your total score is more than the random number. The value of each crystal will be hidden until you click on it.Each time the game starts the value of each crystal will change.');
        }, 3000);
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
        $("#guess-total").text("Total Score: " + userGuess);
        redClicked = true;
    }
    else if(redClicked === true){
        userGuess = userGuess + redCrystNum;
        $("#guess-total").text("Total Score: " + userGuess);
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
        $("#guess-total").text("Total Score: " + userGuess);
        yellowClicked = true;
    }
    else if (yellowClicked === true) {
        userGuess = userGuess + yellowCrystNum;
        $("#guess-total").text("Total Score: " + userGuess);
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
        $("#guess-total").text("Total Score: " + userGuess);
        blueClicked = true;
    }
    else if (blueClicked === true) {
        userGuess = userGuess + blueCrystNum;
        $("#guess-total").text("Total Score: " + userGuess);
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
        $("#guess-total").text("Total Score: " + userGuess);
        greenClicked = true;
    }
    else if (greenClicked === true) {
        userGuess = userGuess + greenCrystNum;
        $("#guess-total").text("Total Score: " + userGuess);
        if (userGuess >= randomNum) {
            winLoss();
        }
    }

})