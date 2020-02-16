// Create variables that hold references to the places in the HTML where we want to display things.
// var wins = 0;
// var guesses = 0;

// var startText = document.getElementById("anyKeyToStart");
// var userLetter = document.getElementById("userLetterGuess");
// // blankWordHere
// var winsText = document.getElementById("numWins");
// var guessesChosen = document.getElementById("numGuessesChosen");
// var guessesRemaining = document.getElementById("numGuessesRemaining");


// // Press any key to start so onkeyup
// document.onkeyup = function(_event) {
// }


//display a word



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

// Random array item chosen from list
var chosenWord = words[Math.floor(Math.random() * words.length)];

// Array of correctly/incorrectly guessed words
var rightWord = [];
var wrongWord = [];

// Array of underscores for use
var underScore = [];

// DOM Manipulation
var docUnderScore = document.getElementsByClassName("underScore");
// this inserts the underscores into the HTML

// Array for imgs
var hangmanImages = ["hangman0.png"]

// Testing choosing random word from array
console.log(chosenWord)

// Underscores created based on length of word
// Instead of typing function we can use =>
var generateUnderscore = () => {

    // for loop to give blank spaces for length of chosen word
    for (var w = 0; w < chosenWord.length; w++) {
        underScore.push("_");
    }
    return underScore;
}
//console.log(generateUnderscore());

// On keypress this gets the pressed key (the user guess) and translates it to each letter that is pressed instead of the straight keycode number
document.addEventListener("keypress", (event) => {
    var keycode = event.keyCode;
    var alphabet = String.fromCharCode(keycode);   
    console.log(alphabet);
    // Checks if user guess is right (reread on indexOf being -1 for clarity)
    // if chosenWord IS right, push it to rightWord array
    if (chosenWord.indexOf(alphabet) > -1) {
    console.log(true);
    // Push to the rightWords array
        rightWord.push(alphabet);
        // Replace underscore with the right letter
        underScore[chosenWord.indexOf(alphabet)] = alphabet;
        // Checks to see if user word matches guesses
        if (underScore.join("") == chosenWord) {
            alert("You win!");
        }
        //console.log(rightWord);
        //console.log(underScore);
    }
    // If not, pushes to the wrongWords array
        else {
        wrongWord.push(alphabet);
        console.log(wrongWord);
    }
});

// onkey charat or onkeyup, if word position x contains letter, place letter at position x

// if position does NOT contain character x, place letter in letters used x,

// https://gist.github.com/Dashon-Hawkins/27edf2a7a919d612380a3fc2320eeb53

/* 
  
5. Press any key to get started!

6. Wins: (# of times user guessed the word correctly).

   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

7. Number of Guesses Remaining: (# of guesses remaining for the user).

8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

9. After the user wins/loses the game should automatically choose another word and make the user play it.

*/