const inquirer = require("inquirer");
const Word = require("./Words")
const gameWord = require("./wordChoices")  

let guesses = 10;
const guessedLetters = [];
//Starts the game, gameWord is passed into getLetters method from new Word object
//Splits random word from wordChoices array--> pushed into new Letter object
//Check character value method takes the array of objects and displays blanks based on the true/false value of each letter
const newGame = () => {
    const theWord = new Word();
    theWord.getLetters(gameWord)
    theWord.checkCharacterValue()
}

newGame()




    



 
    






   












