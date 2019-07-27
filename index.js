const inquirer = require("inquirer");
const Word = require("./Words")

//Starts the game, gameWord is passed into getLetters method from new Word object
//Splits random word from wordChoices array--> pushed into new Letter object
//Check character value method takes the array of objects and displays blanks based on the true/false value of each letter

const wordChoices = ['apathetic','careless','inattentive','lackadasical','weary','slothful','snoozy','laggard'
,'comatose','dallying','drowsy','lifeless','slack','unindustrious','unconcerned','unpreserving','unready'];

const randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
//Game continues until all the false values of each letter are true or the player runs out of guesses
let startGame = () => {
	let guesses = 10
	let guessedLetters = []
	//Create a new object with all the methods of the word constructor
	
	const theWord = new Word();
	theWord.getLetters(randomWord)
	theWord.getBlanks()
	
	inquirer.prompt([
		{
			type:'input',
			name:'guesses',
			message:"Guess a letter"
		}
	]).then(response => {
		theWord.singleLetters.forEach(item => {
			item.checkGuess(response.guesses)
			console.log(item.inProgress)
		})
		theWord.getBlanks()
	})
		
	
	
}

startGame()



    



 
    






   












