const inquirer = require("inquirer");
const Word = require("./Words")
const gameWord = require("./wordChoices")
//Starts the game, gameWord is passed into getLetters method from new Word object
//Splits random word from wordChoices array--> pushed into new Letter object
//Check character value method takes the array of objects and displays blanks based on the true/false value of each letter

function Game () {
    this.word = "I said good day sir!"
    this.attempts = 10
    this.guessesArray = []
    this.getWord = function() {
        let theWord = new Word()
        theWord.getLetters(gameWord)
        theWord.checkCharacterValue()
        
    }
}

function playGame() {
    const newGame = new Game();
   
    inquirer.prompt([
        {
			name:"userInput",
			message: `${newGame.getWord()} Guess a letter`
        }
    ]).then(response =>{
		console.log(response.userInput)
	})



}
   
playGame()
// console.log(`Letters guessed: ${newGame.guessesArray}`)
// console.log(`Your attempts: ${newGame.attempts}`)
// console.log(newGame.word)


//Take user input and compare it against the true/false value of each letter
//If user guessed at all, starts game.
//User can only enter letters





    



 
    






   












