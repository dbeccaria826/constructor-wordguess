
const Letter = require("./Letters")
function Word (word) {
    this.word = word;
    this.splitWords = []
    this.getLetters = function (word) {
        for(let item of word) {
            this.splitWords.push(new Letter(item, false))
        }
     }
    
     //Grabbing each letter object and calling a method on each letter to check for true/false
     this.checkCharacterValue = function() {
        let stringValue = ""
        this.splitWords.forEach(item => {
           
            stringValue = stringValue + item.checkCharacter() + " " 
        })
        console.log(stringValue)
        
     }
     this.currentLetter = function(guess) {
         this.splitWords.forEach(item => {
             item.checkGuess(guess)
         })
     }
     //Local String value
}




//Need a function that compares letter guesses to the letters in the split word
//Function that pushes correct guess into split word array
//^function that takes in user input, checks it against array



module.exports = Word;