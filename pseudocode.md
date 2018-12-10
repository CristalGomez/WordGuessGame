*** Psychic game
1. Appearance of the game:
    * Title: Psychic Game on a banner
        * custom font from google
    * Container with instructions: guess the letter i'm thinking of
    * Wins, Losses, Guesses left, Your guesses so far
2. Computer will randomly guess a letter
    * entries A-Z are the only ones valid
    * Any entry that is not a letter will be invalid
    * Invalid answers will not compute a response back to the user
3. Wins:
    * Unlimited. The # of wins will stay on the page until the user refreshes
4. Losses: 
    * Unlimited. The # of losses will stay on the page until the user refreshes
5. Guesses left:
    * User will be allowed 10 guesses
    * An invalid answer (such as a !$%^&) will not deduct their guesses
    * Every time the user guesses a letter between A-Z, they will be deducted a guess UNLESS
    * their guess is what the computer randomly chose -- if this happens: then their guesses will start OVER (back to 10 guesses) & they will get one point added to their wins
6. Your gusses so far:
    * This will only list 10 letters MAX (because they're only allowed 10 guesses)
    * Any character that is not A-Z will not be listed in their character list & will not be deducted
    * Once the user has reached 10 guesses OR guessed the letter correctly, then the list of "your guesses so far" will restart
    * If the user has not reached 10 letters, but has refreshed the page, the list of letters will also refresh
7. Variables:
    * Computer's generated letter
        * Does not appear on the screen
    * Wins
    * Losses
    * Guesses Remaining
    * Guesses so far
8. Function:
    * Computer will generate a letter A-Z
    * if (guesses so far) = (computer generated letter) is true --> 1 point added to win & guesses remaining -1
    * else 1 point added to losses & -1 point from guesses remaining