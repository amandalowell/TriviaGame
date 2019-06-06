// time for each question
var time = 60;

// # of questions user got right
var correctGuesses = 0;

// # of questions user got right
var incorrectGuesses = 0;

// which question the user is on
var questionCounter = 0;

$("#startButton").click(function(event){
    $("#gameScreen").css("display", "block"); //show the game
    $(this).css("display", "none"); //hide start button
    startTimer();
})

function startTimer(){
    //time var set to 60
    //want to count down seconds to 0
    //every second decrement the time value
    //make sure not less than 0, if less than 0, call endGame function
    setInterval(function(){
        time--
        console.log(time)
        $("#timer").text(time);
    }, 1000) //this is 1 second. 

}



//things i need :
// variable to start game ( click button called Start)
//need a timeout function for timer (call it time reamaining)
//need a reset function for when you want to start a new game/ end old game
//click button for "done"
//function to get you to the final screen to show : correct ans., incorrect ans.

//questions: how to make seperate pages....do i hide start button/ how does that html look