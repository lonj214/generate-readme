//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache': '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL': '[![License: GPL](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  };

  if (license in licenseBadge) {
    return licenseBadge[license];
  } else {
    return '';
  };
};

const licenseName = 'MIT';

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const section = {
    'MIT': `
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`,
        'Apache': `
## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details.`,
        'GPL': `
## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.`,
  };
  if (license in section) {
    return section[license];
  } else {
    return '';
  };
}
const license = 'MIT';
const licenseSection = renderLicenseSection(license);
console.log(licenseSection);

//function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contributors, tests, questions, github, email}) {
  return `# ${title}

# Table of Contents
1. [description](#description)
2. [installation](#installation)
3. [usage](#usage)
4. [license](#license)
5. [contributors](#contributors)
6. [tests](#tests)
7. [questions](#questions)
8. [github](#github)
9. [email](#email)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${renderLicenseBadge(license)}

## Contributors
${contributors}

## Tests
${tests}

## Questions
${questions}

## GitHub
${github}

## Email
${email}

`;
};

module.exports = generateMarkdown;
