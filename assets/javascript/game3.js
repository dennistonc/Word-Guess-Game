// Variables ===
// Array containing all the words
var words = [
    "link",
    "mario",
    "zelda",
    "kirby",
    "yoshi",
    "starfox",
    "samus",
    "pikachu",
    ];

var wins = 0;
var wrongLetter = [];
var guessesLeft = 6;
var underScores = [];
var userGuesses = [];
var randWord;
var winCounter = 0;

// Functions ===
function reset() {
    userWinReset = function(){
        wrongLetter.reset();
        guessesLeft.reset();
        underScores.reset();
        userGuesses.reset();
        randWord.reset();
    }

    wrongLetter = [];
    guessesLeft = 6;
    underScores = [];
    userGuesses = [];
    randWord;

    randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);
    for (var n = 0; n < randWord.length; n++) {
        underScores.push("_");
    }
    document.getElementById("hangmanWordHere").innerHTML = underScores.join(" ");
}

function startGame() {
    // Everytime you startGame, it will call a random word
    randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);

    // This pushes underscores 
    for (var n = 0; n < randWord.length; n++) {
        underScores.push("_");
    }

    // This prints the underscores onto the page by using ID; joins the underscores with a space instead of comma default
    document.getElementById("hangmanWordHere").innerHTML = underScores.join(" ");

    // This is printing these on the screen, pushing to HTML
    //alreadyGuessed
    // Prints the var guessesLeft of 6 to HTML after numGuesses ID
    document.getElementById("numGuesses").innerHTML = guessesLeft;

}

// Hint System -- can't figure

// Outside Function for win/loss
// TO DO: Compare string in randword to string in userGuess and have a condition to compare so u don't have to enter letters in order
function winCounts () {
    if  (userGuesses === randWord.length) {
        alert("Winner!");
        winCounter++;
        document.getElementById("numWins").innerHTML = winCounter;
        reset();
    }

    else if(guessesLeft === 0) {
        alert("Loser!");
        reset();
    }
}


// Outside Function to get User Guesses (each key we press)
document.onkeyup = function(event) {
    userGuesses = event.key;
    //console.log(userGuesses);
    // Checking if the letter exists inside the word
    // **Using indexOf returns the position of the first occurrence of a specified value in a string; returns -1 if the value-to-search-for never occurs
    if (randWord.indexOf(userGuesses) > -1) {
        //console.log("u got it");
        // **This is extra to see how indexOf works -- i.e. Link is 4 letters and the indexes are L,I,N,K:0,1,2,3. Those values are all greater than -1. All other values are -1
        //console.log(randWord.indexOf(userGuesses));

    for (var n = 0; n < randWord.length; n++) {
        // [n] starts at 0 and goes through and sees if userGuesses match to each letter that's in the randWord
        if(randWord[n] === userGuesses) {
            // Then makes userGuesses fill the specific underscore it correlates with
            underScores[n] = userGuesses;
            //console.log(underScores);
            document.getElementById("hangmanWordHere").innerHTML = underScores.join("");
            winCounts();
            }
        }
    }

    else {
        wrongLetter.push(userGuesses);
        // Each wrong letter takes away from number of guesses left which is 6
        guessesLeft--;
        document.getElementById("alreadyGuessed").innerHTML = wrongLetter.join(", ");
        document.getElementById("numGuesses").innerHTML = guessesLeft;
        //console.log(guessesLeft);
        console.log(wrongLetter);
        winCounts();
    }

// Hangman Image -- can't figure
// document.getElementById("stickfigure").src = "../assets/images/hangman6.png";

}

// Main ===

// this is running the actual function way up above
startGame();