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

// "Word" contains random array item chosen from list
var word = words[Math.floor(Math.random() * words.length)];

// for loop to give blank spaces for length of chosen word
for (var w = 0; w < word.length; w++) {
    answerArray[w] = "_";
  }

  