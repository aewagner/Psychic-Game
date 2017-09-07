var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guessesLeft = 9;



document.onkeyup = function(event) {


        var userGuess = event.key;


        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];




        if (userGuess === computerGuess) {
            wins++;
        } else {
            guessesLeft--;
            var letter = "<p>" + userGuess + " </p>";
            document.querySelector("#guessesSoFar").innerHTML = letter;
        }

        if (guessesLeft === 0) {
            losses++;
        }




        var html =

            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>guesses left: " + guessesLeft + "</p>";


        document.querySelector("#game").innerHTML = html;
      };