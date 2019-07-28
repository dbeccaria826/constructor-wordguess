const inquirer = require("inquirer");
const Word = require("./Words")

//Starts the game, gameWord is passed into getLetters method from new Word object
//Splits random word from wordChoices array--> pushed into new Letter object
//Check character value method takes the array of objects and displays blanks based on the true/false value of each letter

const wordChoices = ['apathetic','careless','inattentive','lackadasical','weary','slothful','snoozy','laggard'
,'comatose','dallying','drowsy','lifeless','slack','unindustrious','unconcerned','unpreserving','unready'];

let guesses = 10;
let guessedLetters = []
let guessCorrect = false
//Game continues until all the false values of each letter are true or the player runs out of guesses
let init = () => {
	console.log("Welcome to Word Guess CLI Edition: The Theme is Synonyms for Laziness")
	
	let theWord = new Word();
	let randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
	theWord.getLetters(randomWord)
	theWord.getBlanks()
	gameLoop(theWord)
}
//Create a new object with all the methods of the word constructor
//NODE WON'T DECREMENT GUESSES ON ITS OWN. Need to store guesses in an array, then check if guess is in array, then decrement guesses
//and do nothing if guessed letter is already in there.	
//Checking if char pushed into array if it matches any characters in the array, no --, all false = --
//Grabbing user input and matching it with randomword. This function is called until the word is complete
//Need to exit the function once the word is completed or player runs out of guesses
let gameLoop = (theWord) => {
	
	inquirer.prompt([
		{
			type:'input',
			name:'guesses',
			message:"Guess a letter",
			
		}
	]).then(response => {
		theWord.singleLetters.forEach(item => {
			item.checkGuess(response.guesses.charAt(0))
		})
		
		//console.log(guessedLetters.includes(response.guesses.charAt(0)))
		if(guessedLetters.length === 0){
			guessedLetters.push(response.guesses);
			checkIfCorrect(theWord,response.guesses.charAt(0))
		}else{
			if(guesses > 0 && guessedLetters.includes(response.guesses.charAt(0)) === false) {
				guessedLetters.push(response.guesses);
				checkIfCorrect(theWord,response.guesses.charAt(0))
			}
		}
		
		theWord.getBlanks()
		if(guessCorrect) {
			guessCorrect = false
		} else {
			guesses--
			console.log(`Your guesses : ${guesses}`)
		}

		
		if(guesses ===  0){
			continueGame();
		}else{

		for(let index in theWord.singleLetters) {
			if(!theWord.singleLetters[index].inProgress) {
				gameLoop(theWord);
				return;
			}
		}
		continueGame();
	}
		
		
		//Need to exit recursion loop
		//Need to get a new word when the current word is complete
	})
}
//what if our responses are correct? Don't push to guessedLetters and don't subtract 1 from guesses
let checkIfCorrect = (theWord, char) => {
	for(let index in theWord.singleLetters) {
		if(char === theWord.singleLetters[index].letter) {
			guessCorrect = true;
		}
	}
}

let continueGame = () => {
	inquirer.prompt([
		{
			type:"confirm",
			message:"Would you like to play again?",
			name:"continue"
		}
	]).then(response => {
		if(response.continue){
			guesses = 10;
			guessedLetters = []
			guessCorrect = false
			init()
		}else {
			console.log("Thanks for playing")
		}
	})
}
init()


    



 
    






   












