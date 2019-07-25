const randomWord = require("./wordChoices.js")

function Word (word) {
    this.word = word;
    this.splitWords = []
}

//Start with an array of word choices.
//Theme: Syonyms for lazy

const blanks = new Word(randomWord)
Word.prototype.getLetters = function () {
    let array = this.word.split("")
    for(let i = 0; i < array.length; i++) {
        this.splitWords.push("_")
    }
    return this.splitWords
}



console.log(blanks.getLetters())

module.exports = Word;