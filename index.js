//Can only require things that exist

const inquirer = require("inquirer");
const Word = require("./Words")
// get random word
const gameWord = require("./wordChoices")  

//Check if letter user typed matches the letter in the array.

// create a new word Object w/ random word
const theWord = new Word();
//WTCYWYH
let guesses = 15
//Each letter in that word is an object.
// show the word so far
// theWord.getLetters(gameWord);
theWord.getLetters(gameWord)
theWord.checkCharacterValue();
// get user input use inquire
//Write a function in words that takes in a user guess and displays it one the command line
let newGame = () => {
    inquirer.prompt([
        {
            name:"userGuess",
            message: `${theWord.currentLetter()} \n Take Your Best Shot!
            \n You have ${guesses} guesses left...`
            

        }
    ]).then(response => {
        console.log(response)
    })
}

newGame()

// wrap this in a function to get user input
// var userLetter = getUserInput(); // should be replaced w/ userINput
// isIncluded = theWord.isIncluded(userLetter); // return a boolean



    



 
    






   












