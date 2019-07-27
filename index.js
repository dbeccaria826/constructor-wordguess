//Can only require things that exist

const inquirer = require("inquirer");
const Word = require("./Words")
// get random word
const gameWord = require("./wordChoices")  



// create a new word Object w/ random word
const theWord = new Word();
//WTCYWYH

// show the word so far
theWord.getLetters(gameWord);
theWord.checkCharacterValue();

let newGame = () => {
    inquirer.prompt7()
}


// get user input use inquire
// wrap this in a function to get user input
// var userLetter = getUserInput(); // should be replaced w/ userINput
// isIncluded = theWord.isIncluded(userLetter); // return a boolean



    

//Generate an array of blanks (split words from word array)
//Each letter in that word is an object.
//Check if letter user typed matches the letter in the array.
 
    






   












