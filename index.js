//Can only require things that exist

const inquirer = require("inquirer");
const Words = require("./Words")


//Start with an array of word choices.
//Theme: Syonyms for lazy

const wordChoices = ['apathetic','careless','inattentive','lackadasical','weary','slothful','snoozy','laggard'
,'comatose','dallying','drowsy','lifeless','slack','unindustrious','unconcerned','unpreserving','unready'];

const randomChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];



