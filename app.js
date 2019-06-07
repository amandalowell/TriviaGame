// time for each question
var time = 60;

// # of questions user got right
var correctGuesses = 0;

// # of questions user got right
var incorrectGuesses = 0;

// which question the user is on
var questionCounter = 0;

var questions = [
    {
      question: "When was League of Legends released?",
      choices: ["2009", "2012", "2004", "2006"],
      correctAnswer: "2009",
    }, 
    {
      question: "How many original champions did the game have when it was released?",
      choices: ["20", "40", "55", "60"],
      correctAnswer: "40",
    }, 
    {
      question: "What is the name of Quinn's W Ability?",
      choices: ["High Alert", "6th Sense", "Heightened Senses", "Eyes on Them"],
      correctAnswer: "Heightened Senses",
    }, 
    {
      question: "What is the name of Zoe's R Ability?",
      choices: ["Now You See Me!", "Warp Dive", "Noxious Trap", "Portal Jump"],
      correctAnswer: "Portal Jump",
    }, 
    ];
    

$("#startButton").click(function(event){
    $("#gameScreen").css("display", "block"); //show the game
    $(this).css("display", "none");
    
    $("#scorePage").css("display", "block"); //show the game
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
        //console.log(time)//
        if(time < 0){
            endGame(); // pulls up final screen, if they dont press done in time
        }
        $("#timer").text(time); //displays countdown on screen
    }, 1000) //this is 1 second. 

}

function endGame(){
    $("#scorePage").css("display");
    $(this).css("display","none");
    $("#timer").css("display","none");
}
    //show correct answers and incorrect answers, use same format as above to show or block display



$("#endButton").click(function(event){
    $("#scorePage").css("display");
    $(this).css("display","none");
    $("#timer").css("display","none");

    
    //need to hide game screen, need to hide score until end button is clicked.
})

function questionContent() {
    // a for loop would be cool here...
    $("#gameScreen").append("<p><strong>" + 
        questions[questionCounter].question + 
        "</p><p class='choices'>" + 
        questions[questionCounter].choices[0] + 
        "</p><p class='choices'>" + 
        questions[questionCounter].choices[1] + 
        "</p><p class='choices'>" + 
        questions[questionCounter].choices[2] + 
        "</p><p class='choices'>" + 
        questions[questionCounter].choices[3] + 
        "</strong></p>");
}


// make "done" call endGame function when clicked
// variable to start game ( click button called Start)
//need a reset function for when you want to start a new game/ end old game
//click button for "done"
//function to get you to the final screen to show : correct ans., incorrect ans.

