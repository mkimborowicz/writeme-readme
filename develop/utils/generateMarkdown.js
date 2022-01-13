function generateMarkdown(data) {
  return `
  [![](https://img.shields.io/badge/License-${data.license}-${data.color})](https://opensource.org/licenses/)


# ${data.title} 

## Description

${data.description}
  

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#howtocontribute)
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

© Copyright 2022 ${data.github}

This application is covered under the following license: ${data.license}.

For more information about this license, click [here](https://opensource.org/licenses/${data.license})
`;
}

module.exports = generateMarkdown;
