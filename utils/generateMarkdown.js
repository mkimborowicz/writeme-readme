// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.title}

## Description

${data.description}
  
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#how to contribute)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## How to Contribute

${data.contributing}

## Questions

If you have questions or to report issues please contact me:
Email: ${data.email} 
Github: github.com/${data.github}

## License

`;
}

module.exports = generateMarkdown;
