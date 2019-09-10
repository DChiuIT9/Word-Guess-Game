var userGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var word = {1: "madonna"};

var wins = 0;

var guessesLeft = 7;
var userGuesses = [];

var startText = document.getElementById("start-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userGuessesText = document.getElementById("guessed-text");



document.onkeyup = function(event) {

    startText.textContent = "";
    var userGuess = event.key.toLowerCase();

    userGuesses.push(userGuess);
    userGuessSoFar()

    
if (userGuess === computerGuess) {
    wins++;
    guessesLeft = 9;
    reset ()
}
else if (guessesLeft == 0) {
    losses++;
    guessesLeft = 9;
    reset ()

}
guessesLeft--

    console.log("User: " + userGuess);
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    userGuessesText.textContent = "Your guesses so far: " + userGuesses.join(" ");
};