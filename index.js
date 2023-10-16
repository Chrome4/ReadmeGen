const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMd");
const askQuestions = require("./utils/promts.js");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err =>
    err ? console.log(err) : console.log("Success!")
  );
}

function init() {
  inquirer
    .prompt(askQuestions)
    .then(answers => {
      writeToFile("./mytests/README.md", answers);
    })
    .catch(err => {
      if (err.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log(err);
      }
    });
}

init();
