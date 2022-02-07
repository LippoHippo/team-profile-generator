const inquirer = require('inquirer');
const fs = require('fs');
const templateData = require('./src/profile-template');

const questions = [

]

function startUp() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('index.html', generateProfile(data));
        console.log(data);
    })
}

startUp();