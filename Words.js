function Word (word) {
    this.word = word;
    this.splitWords = []
}

let newWord = new Word('chicken')

Word.prototype.getLetters = function () {
    let array = this.word.split("")
    for(let i = 0; i < array.length; i++) {
        this.splitWords.push("_")
    }
    return this.splitWords
}

console.log(newWord.getLetters())