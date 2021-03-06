
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
        message: "How would another developer make contributions to this project?",
        name: "contributing",
      },
      {
        type: "rawlist",
        message: "Which license would you like to include with your project?",
        choices: ['Apache_2.0', 'BSD_3--Clause', 'BSD_2--Clause','MIT', 'MPL_2.0', 'CDDL_1.0', 'EPL_2.0', 'Boost_1.0'],
        name: "license",
      },
      {
        type: "rawlist",
        message: "What color would you like your license badge?",
        choices: ['green', 'yellow', 'orange', 'red', 'blue','lightgrey', 'blueviolet'],
        name: "color",
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
      }
      
]
inquirer.prompt(questions)
.then((data)=>

fs.writeFile("README.md", generateMarkdown(data),
(err) => (err ? console.error(err) : console.log("ReadMe Created!"))
));