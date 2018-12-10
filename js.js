        // here are my variables
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var wins = 0;
        var losses = 0;
        var remainingGuesses = 10;
        // userGuess is set to "" because my code doesn't work if it's var userGuess; like I've seen in other examples.
        // I tried setting my userGuess to "" & []
        var userGuess = " ";


        //referencing the ids
        var computerChoiceText = document.getElementById("computerChoices");
        var userGuessText = document.getElementById("userGuess");
        var winsText = document.getElementById("wins");
        var lossesText = document.getElementById("losses");
        var remainingText = document.getElementById("remainingGuesses");

        //computer choice random letter generator - console.log does show that it works
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // console.log(computerChoice);

        // creating the function - when the user presses a key, then the computer determines if the keys match
        document.onkeypress = function (event) {
            var userGuess = event.key.toLowerCase();
        }
        // user's input compared to computer's choice
            if ((userGuess === computerChoice)) {
        // user's guess matches the computer's choice. They get 1 point added to wins, keep 10 guesses
                wins++;
                remainingGuesses = 10;
                userGuess = [];
            }

        // user's guess does not match the computer's choice so their guesses go down by one point
            if (userGuess !== computerChoice) {
                remainingGuesses--;
            }

        // user reaches 0 guesses so they get 1 point added to their losses & their remaining guesses reset to 10
            if (remaining = 0) {
                losses++;
                remaining = 10;
                userGuess = [];
            }
        // I added this to the bottom so that the computer's choice resets on its own without having to refresh the page
            function resetFunction () {
                document.getElementById("computerChoices").reset();
            }
        // Adding this to the bottom again will also reset the computer's guess
            var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        
        // what appears on the screen
        computerChoiceText.textContent = "Computer Guess: " + computerChoice;
        userGuessText.textContent = "Your guess: " + userGuess;
        winsText.textContent = "Wins:" + wins;
        lossesText.textContent = "Losses: " + losses;
        remainingText.textContent = "Guesses Reamining: " + remainingGuesses;
