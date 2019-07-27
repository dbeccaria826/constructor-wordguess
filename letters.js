
function Letters (letter) {
    this.letter = letter
    this.status = false

    this.checkGuess = function(userGuess) {
        userGuess === this.letter ? this.status = true: this.status = false
    }
    this.checkCharacter = function () {
        if(this.status === true) {
            return this.letter
        } else {
            return "_"
        }
    }
    
}






module.exports = Letters