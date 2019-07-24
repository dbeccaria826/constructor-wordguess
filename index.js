const inquirer = require('inquirer')
const words = require('./words.js')

//Start with an array of word choices.
//Theme: Syonyms for lazy

const wordChoices = ['apathetic','careless','inattentive','lackadasical','weary','slothful','snoozy','laggard']

const randomChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)]
