const inquirer = require('inquirer');
const Shape = require('./lib/shapes.js');
const Render = require('./lib/render.js');
const { readFile, writeFile } = require('fs/promises');
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
      let shape;
      switch(answers.shape){
        case 'square':
          shape = new Shape.Square();
          break;
        case 'triangle':
          shape = new Shape.Triangle();
          break;
        case 'circle':
          shape = new Shape.Circle();
          break
      }
      if(answers.text.length > 3){
        throw new Error('Text is longer than 3 characters');
      }
      const text = new Render.Text(answers.text, answers.textColour)
      shape.setColour(answers.shapeColour);
      const shapeRender = shape.render();
      const textRender = text.render();
      const svg = new Render.SVG();
      const svgRender = svg.renderSVG(shapeRender, textRender);
      return writeFile('./dist/logo.svg', svgRender);

  }).then((res) => console.log("Generated logo.svg"))
}

// Function call to initialize app
init();
