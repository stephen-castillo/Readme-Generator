// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title", 
        message:"What is your project title?", 
        type: "input"
    },
    {
        name: 'description', 
        message: "What's the project description?", 
        type: 'input'
    },
    {
        name: 'install', 
        message: "What are the installation instructions?", 
        type: 'input'
    },
    {
        name: 'usage', 
        message:"What is the usage information?", 
        type: 'input'
    },
    {
        name: 'guidelines',
        message: "What are the contribution guidelines?",
        type: 'input'
    },
    {
        name: 'test', 
        message: "What are the test instructions?", 
        type: 'input'
    },
    {
        name: 'license', 
        message: "What license is your project using?", 
        type: 'list', 
        choices:["None", "MIT", "GNU", "APACHE", "BSD3", "BSD2", "LGPL", "MPL", "AGPL", "unlicense", "CC0-1.0"]
    },
    {
        name: 'user', 
        message: "What is your GitHub username?", 
        type: 'input'
    },
    {
        name: 'email', 
        message: "What is your GitHub email?", 
        type: 'input'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>{
        //console.log(answers);
        answers.badge = renderLicenseBadge(answers.license);
        answers.link = renderLicenseLink(answers.license);
        answers.info = renderLicenseSection(answers.license);
        console.log(answers);
        let readmeData = generateMarkdown(answers);
        console.log(readmeData);
    })
    .catch((error) =>{
        if(error.isTtyError){
            console.log('Prompt could not be rendered');
        }else{
            console.log('Something went wrong.');
        }
    });
}

// Function call to initialize app
init();
