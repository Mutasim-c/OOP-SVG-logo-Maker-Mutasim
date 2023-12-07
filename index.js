const inquirer = require('inquirer');
const Shape = require('./lib/shapes.js');
const Render = require('./lib/render.js');//links to classes
const { readFile, writeFile } = require('fs/promises');//gets read write package
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
];//question going to be aksed to the user

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
      }//creates shape object from which shape the user chose
      if(answers.text.length > 3){
        throw new Error('Text is longer than 3 characters');//checks to see if the text for th log is less than 3 if not it throws an error
      }
      const text = new Render.Text(answers.text, answers.textColour)
      shape.setColour(answers.shapeColour);
      const shapeRender = shape.render();
      const textRender = text.render();
      const svg = new Render.SVG();
      const svgRender = svg.renderSVG(shapeRender, textRender);//uses all user info to render the info needed to render the svg file
      return writeFile('./dist/logo.svg', svgRender);//writes file to dist folder

  }).then((res) => console.log("Generated logo.svg"))//after file written prints confirmation message
}

// Function call to initialize app
init();
