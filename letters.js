
function Letters (letter) {
    this.letter = letter
    this.inProgress = false
    //Checking user input for true/false, allows game to continue running
    this.checkGuess = function(userGuess) {
       
        if(userGuess === this.letter) {
            this.inProgress = true
        }
    }
    //If a user has guessed a letter game is initialized.
    this.checkCharacter = function () {
        if(this.inProgress === true) {
           return this.letter
        } else {
           return "_"
        }
    }
    
}
module.exports = Letters