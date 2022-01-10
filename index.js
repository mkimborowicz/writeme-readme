// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Give an overall description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "What is your project used for and how do you use it?",
        name: "usage",
      },
      {
        type: "input",
        message: "How do you install this project?",
        name: "installation",
      },
      {
        type: "input",
        message: "How do you report issues with this project?",
        name: "issues",
      },
      {
        type: "input",
        message: "How would another developer make contributions to this project?",
        name: "contributing",
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      
]
inquirer.prompt(questions)
.then((data)=>

// TODO: Create a function to write README file
fs.writeFile("README.md", generateMarkdown(data),
(err) => (err ? console.error(err) : console.log("ReadMe Created!"))
));

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
