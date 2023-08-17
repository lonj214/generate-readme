// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    // {
    //     type: 'input',
    //     name: 'table of contents',
    //     message: 'What is the table of contents of your project?',
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Which license did you use?',
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Did anyone contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Did you write any tests for your project? If so provide examples on how to run them here.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions about the project you developed?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
    }
];
 

// function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('File ${fileName} has been written successfully.');
        }
    })
}
// function to initialize app
async function init() {
    const responses = await inquirer.prompt(questions)
    console.log(responses)
    const markdown = generateMarkdown(responses);
    writeToFile(markdown);
};

// Function call to initialize app
init();
