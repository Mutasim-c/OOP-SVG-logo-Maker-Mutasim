const inquirer = require('inquirer');
const questions = [
    {
    type: 'input',
    name: 'text',
    message: 'What text do you want in your logo?',
    },
    {
    type: 'input',
    name: 'textColour',
    message: 'What colour is your logos text?',
    },
    {
    type: 'list',
    message: 'What shape do you want?',
    name: 'shape',
    choices: ['circle', 'triangle', 'square'],
    },
    {
    type: 'input',
    name: 'shapeColour',
    message: 'What is your shapes colour?',
    }
];

function init() {
  inquirer.prompt(questions).then((answers) => {
      console.log(answers);
  })
}

// Function call to initialize app
init();