const inquirer = require("inquirer");
const Words = require("./Words.js");

//Start with an array of word choices.
//Theme: Syonyms for lazy

const wordChoices = ['apathetic','careless','inattentive','lackadasical','weary','slothful','snoozy','laggard'
,'comatose','dallying','drowsy','lifeless','slack','unindustrious','unconcerned','unpreserving','unready'];

const randomChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];



const blanks = [];

for(let i = 0; i < randomChoice.length; i++) {
    
   blanks.push("_");
}
console.log(blanks);