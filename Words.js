//Need a function that compares letter guesses to the letters in the split word
//Function that pushes correct guess into split word array
//^function that takes in user input, checks it against array

const Letter = require("./Letters")
function Word (word) {
    this.word = word;
    this.singleLetters = []
    this.getLetters = function (word) {
        for(let item of word) {
            this.singleLetters.push(new Letter(item))
        }
        
    }
    
    this.checkCharacterValue = function() {
        let stringValue = ""
        this.singleLetters.forEach(item => {
        //    console.log(stringValue)
          stringValue = stringValue + item.checkCharacter() + " "
            // stringValue = stringValue + item.checkCharacter() + " " 
        })
        console.log(stringValue)
    }
     this.userGuess = function(guess) {
         this.singleLetters.forEach(item => {
             item.checkGuess(guess)
        })
     }
 
}







module.exports = Word;