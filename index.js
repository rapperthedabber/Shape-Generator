const inquirer = require('inquirer')
const fs = require("fs/promises")
const Markdown = require("./utils/generateMarkdown")
const path = require("path");

const askMe = [{
  type: 'input',
  message: 'What color would you like your shape to be?',
  name: 'color',
},
{
  type: "confirm",
  message: 'Would you like a circle?',
  name: 'Circle',

},
{
  type: "confirm",
  message: 'Would you like a rectangle?',
  name: 'rectangle',
},
{
  type: "confirm",
  message: 'Would you like a triangle?',
  name: 'triangle',

}
  ,
{
  type: "input",
  message: 'What text would you like in it',
  name: 'text',

}
]
function writeToFile(fileName, data) {
  fs.writeFile(path.join(process.cwd(), "/dist", fileName), data, function (err) {
    if (err) {
      console.log("did not go through");
    } else {
      console.log("success!!!")
      console.log(fileName);
      console.log(data)
    }
  })
}

function init() {
  inquirer.prompt(askMe).then(function (data) {
    writeToFile("Shape.html", Markdown(data));
    console.log(data);
  })
}

init()