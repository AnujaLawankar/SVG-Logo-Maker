
//import node_modules package
const fs = require('./node_modules/graceful-fs/graceful-fs');

//import inquire package
const inquirer = require("inquirer");
//const path = require('path');
//const writeFile = require('fs/promises');

//declare class from lib directory
const { Circle, Rectangle, Triangle, Square } = require("./lib/shapes");


class Logo {

    //constructor
    constructor() {
        this.textElement = "";
        this.shapeElement = "";


    }
    // In svg file showing the data 
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;

    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;

    }

    setshapeElement(shape) {

        this.shapeElement = shape.render();

    }
}

// question for  CLI input
const question = [

    {
        type: 'input',
        name: 'text-color',
        message: 'Please can you enter the  Text Color.',

    },
    {
        type: 'input',
        name: 'text',
        message: 'Please can you enter the text for logo upto 3 char.',

    },

    {
        type: 'input',
        name: 'shape',
        message: 'shape colors, Enter shape color.',

    },
    {
        type: 'list',
        name: 'pixel-img',
        message: 'Please can you enter the shape.',
        choices: ['Circle', 'Rectangle', 'Triangle', 'Square'],
    },

];

// return the data in the svg file 
function writeFile(filename, data) {
    console.log("Write [" + data + "] to   [" + filename + "]");
    fs.writeFile(filename, data, function (err) {
        if (err) {
            return console.log(err);

        }

        console.log("SVG logo is generated");
    });



}

//initialize the function and it is async because have to wait for answer for a questions.
async function init() {


    console.log("staring init function");
    var svgString = "";
    var svg_file = "logo.svg";

    const answer = await inquirer.prompt(question);

    //user text
    var user_text = "";
    //input 1 to 3 character
    if (answer.text.length > 0 && answer.text.length < 4) {
        user_text = answer.text;

    }
    else {

        console.log("Please enter text length between 1 to 3 charaters");
        return;

    }

    // text_color = "";
    console.log("User text:[" + user_text + "]");
    user_font_color = answer["text-color"];

    console.log("User font color: [" + user_font_color + "]");



    user_shape_color = answer.shape;
    console.log("User shape color: [" + user_shape_color + "]");

    user_shape_type = answer["pixel-img"];

    console.log("User shape type is: [" + user_shape_type + "]");


    let user_shape;


    if (user_shape_type === 'Circle' || user_shape_type === 'circle') {
        user_shape = new Circle();
        console.log("User selected Circle shape");

    } else if (user_shape_type === 'Rectangle' || user_shape_type === 'rectangle') {
        user_shape = new Rectangle();
        console.log("User selected Rectangle shape");

    } else if (user_shape_type === 'Triangle' || user_shape_type === 'triangle') {
        user_shape = new Triangle();
        console.log("User selected triangle shape");


    } else if (user_shape_type === 'Square' || user_shape_type === 'square') {
        user_shape = new Square();
        console.log("User selected square shape");

    } else {
        console.log("Invalid shape");

    }


    user_shape.setcolor(user_shape_color);

    // object of logo
    var svg = new Logo();

    svg.setTextElement(user_text, user_font_color);
    svg.setshapeElement(user_shape);
    svgString = svg.render();

    console.log("Display shape " + svgString);
    console.log("success");
    writeFile(svg_file, svgString);



}


// call function init
init();