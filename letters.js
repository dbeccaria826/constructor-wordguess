const Letters = function (keyBoardChar) {

    this.keyBoardChar = keyBoardChar
    this.guess = false

    this.toString = function() {
        this.guess ? this.character : "_"
    }

}

module.exports = Letters