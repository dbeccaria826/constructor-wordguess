
const Letter = require("./Letters")
function Word (word) {
    this.word = word;
    this.splitWords = []
    this.getLetters = function (word) {
        for(let item of word) {
            let letter = this.splitWords.push(new Letter(item, false))
           
        }
     }
    //  this.displayGuess = function (userGuess) {
    //     this.splitwords.forEach(item => letter.checkGuess(userGuess))
    //  }
     //Grabbing each letter object and calling a method on each letter to check for true/false
     this.checkCharacterValue = function() {
        let stringValue = ""
        this.splitWords.forEach(item => {
            console.log(item)
            stringValue = stringValue + item.checkCharacter() + " " 
        })
        console.log(stringValue)
        
     }
     //Local String value
}

//Start with an array of word choices.
//Theme: Syonyms for lazy
//Initialization


//Need a function that compares letter guesses to the letters in the split word
//Function that pushes correct guess into split word array
//^function that takes in user input, checks it against array

// console.log(blanks.getLetters())

module.exports = Word;