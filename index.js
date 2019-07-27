const inquirer = require("inquirer");
const Word = require("./Words")

//Starts the game, gameWord is passed into getLetters method from new Word object
//Splits random word from wordChoices array--> pushed into new Letter object
//Check character value method takes the array of objects and displays blanks based on the true/false value of each letter

const wordChoices = ['apathetic','careless','inattentive','lackadasical','weary','slothful','snoozy','laggard'
,'comatose','dallying','drowsy','lifeless','slack','unindustrious','unconcerned','unpreserving','unready'];

const randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
//Game continues until all the false values of each letter are true or the player runs out of guesses
let init = () => {
	console.log("Welcome to Word Guess CLI Edition: The Theme is Synonyms for Laziness")
	gameLoop()
}
	const theWord = new Word();
	theWord.getLetters(randomWord)	
let gameLoop = () => {
	
	


	//Create a new object with all the methods of the word constructor
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
		gameLoop()
	})
	
}

init()


    



 
    






   












