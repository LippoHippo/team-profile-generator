const inquirer = require('inquirer');
const fs = require('fs');
const templateData = require('./src/profile-template');

const questions = []

const promptProfile = () => {
    if (!profileData.projects) {
        profileData.projects = [];
    }
    return inquirer.prompt([
        {
            type:'',
            name:'',
            message:''
        },
        {
            type:'',
            name:'',
            message:''
        },
        {
            type:'',
            name:'',
            message:''
        },
        {
            type:'',
            name:'',
            message:''
        },
        {
            type:'',
            name:'',
            message:''
        },
        {
            type:'',
            name:'',
            message:''
        },
        {
            type:'',
            name:'',
            message:''
        },
        {
            type:'',
            name:'',
            message:''
        }
    ])
    .then(projectData => {
        profileData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(profileData);
        } else {
            return profileData;
        }
    });
}

promptProfile()
    .then(profileData => {
    const pageHTML = generatePage(profileData);

    fs.writeFile('./index.html', pageHTML, err => {
         if (err) throw err;
         console.log('Your team has assembled! Load index.html page to see your team.');
    });
});

startUp();