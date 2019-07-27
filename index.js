const inquirer = require("inquirer");
const Word = require("./Words")
const gameWord = require("./wordChoices")
//Starts the game, gameWord is passed into getLetters method from new Word object
//Splits random word from wordChoices array--> pushed into new Letter object
//Check character value method takes the array of objects and displays blanks based on the true/false value of each letter

function Game () {
    this.word = ""
    this.attempts = 10
    this.guessesArray = []
    this.getWord = function() {
        let theWord = new Word()
        theWord.getLetters(gameWord)
        theWord.checkCharacterValue()
        
    }
}


const newGame = new Game()

newGame.getWord()
console.log(`Letters guessed: ${newGame.guessesArray}`)
console.log(`Your attempts: ${newGame.attempts}`)




// const getUserGuess = () => {
//     const guessedLetters = [];
  
//     inquirer.prompt([
//         {
//             name:'guessedLetter',
//             message: `${getWord()} Guess Away!\n
//             Your attempts: ${attempts}`
//         }
//     ]).then((response) => {
        
        
//     })
    
// }

//Take user input and compare it against the true/false value of each letter
//If user guessed at all, starts game.
//User can only enter letters





    



 
    






   












