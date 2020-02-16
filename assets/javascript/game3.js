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
var winCounter;

// Functions ===
function reset() {
    randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);
    for (var n = 0; n < randWord.length; n++) {
        underScores.push("_");
    }
    document.getElementById("hangmanWordHere").innerHTML = underScores.join(" ");

    userGuesses = 0;
    guessesLeft = 6;
    wrongLetter = [];
    underScores = [];
    test = false;
    startGame();

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

    // Reset Game (everything back to default values)
    wrongLetter = [];
    guessesLeft = 6;

    // This is printing these on the screen, pushing to HTML
    //alreadyGuessed
    // Prints the var guessesLeft of 6 to HTML after numGuesses ID
    document.getElementById("numGuesses").innerHTML = guessesLeft;

}

// Outside Function for win/loss
function winCounts () {
    if  (winCounter === randWord.length) {
        alert("Winner!");
        //document.getElementById("numWins").textContent = winCounter;
        //startGame();
    }
    else if(guessesLeft === 0) {
        alert("Loser!"); // this is where hangman photo can be uploaded?
        //startGame();
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
            winCounter++;
            winCounts();
            reset();
            }
        }
    }

    else {
        wrongLetter.push(userGuesses);
        // Each wrong letter takes away from number of guesses left which is 6
        guessesLeft--;
        document.getElementById("alreadyGuessed").innerHTML = wrongLetter.join(", ");
        console.log(guessesLeft);
        console.log(wrongLetter);
        winCounts();
        reset();
    }
}

// Main ===

// this is running the actual function up above
startGame();



/* 
  
5. Press any key to get started!

6. Wins: (# of times user guessed the word correctly).

   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

7. Number of Guesses Remaining: (# of guesses remaining for the user).

8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

9. After the user wins/loses the game should automatically choose another word and make the user play it.

*/