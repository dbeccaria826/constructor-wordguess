function Word (word) {
    this.word = word;
    this.splitWords = []
}

//Start with an array of word choices.
//Theme: Syonyms for lazy
const wordChoices = ['apathetic','careless','inattentive','lackadasical','weary','slothful','snoozy','laggard'
,'comatose','dallying','drowsy','lifeless','slack','unindustrious','unconcerned','unpreserving','unready'];

const randomChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];
let newWord = new Word(randomChoice)

Word.prototype.getLetters = function () {
    let array = this.word.split("")
    for(let i = 0; i < array.length; i++) {
        this.splitWords.push("_")
    }
    return this.splitWords
}

console.log(newWord.getLetters())