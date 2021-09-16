const inquirer = require("inquirer");
const fs = require("fs");
const team = [];
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require("./src/page-template");

// manager’s name, employee ID, email address, and office number
const managerQuestions = [
  {
    type: "input",
    name: "teamManager",
    message: "What is the team manager's name?",
    validate: (teamManager) => {
      if (teamManager) {
        return true;
      } else {
        console.log("This is a required question.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "employeeID",
    message: "What is the employee ID number?",
    validate: (employeeID) => {
      if (employeeID) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "emailAddress",
    message: "What is the email address?",
    validate: (emailAddress) => {
      if (emailAddress) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the office number?",
    validate: (officeNumber) => {
      if (officeNumber) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },
];

function followUp() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Which other team members would you like to add?",
        choices: ["intern", "engineer", "quit"],
      },
    ])
    .then(({ employeeType }) => {
      if (employeeType === "intern") {
        internPrompt();
      } else if (employeeType === "engineer") {
        engineerPrompt();
      } else {
        const pageHTML = generatePage(team);
        writeToFile("./dist/index.html", pageHTML);
      }
    });
}

function engineerPrompt() {
  inquirer
    .prompt(engineerQuestions)
    .then(({ engineerName, employeeID, emailAddress, githubName }) => {
      const newEngineer = new Engineer(
        engineerName,
        employeeID,
        emailAddress,
        githubName
      );
      team.push(newEngineer);
      followUp();
    });
}

//engineer’s name, ID, email, and GitHub
const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineer's name?",
    validate: (engineerName) => {
      if (engineerName) {
        return true;
      } else {
        console.log("This is a required question.");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "employeeID",
    message: "What is the employee ID number?",
    validate: (employeeID) => {
      if (employeeID) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "emailAddress",
    message: "What is the employee email address?",
    validate: (emailAddress) => {
      if (emailAddress) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "githubName",
    message: "What is the github?",
    validate: (githubName) => {
      if (githubName) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },
];

function internPrompt() {
  inquirer
    .prompt(internQuestions)
    .then(({ internName, employeeID, emailAddress, schoolName }) => {
      const newIntern = new Intern(
        internName,
        employeeID,
        emailAddress,
        schoolName
      );
      team.push(newIntern);
      followUp();
    });
}

//intern’s name, ID, email, and school
const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the intern's name?",
    validate: (internName) => {
      if (internName) {
        return true;
      } else {
        console.log("This is a required question.");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "employeeID",
    message: "What is the employee ID number?",
    validate: (employeeID) => {
      if (employeeID) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "emailAddress",
    message: "What is the email address?",
    validate: (emailAddress) => {
      if (emailAddress) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "schoolName",
    message: "What is the school name?",
    validate: (schoolName) => {
      if (schoolName) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },
];

// function to write index.html file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// function to initialize app
function init() {
  inquirer
    .prompt(managerQuestions)
    .then(({ teamManager, employeeID, emailAddress, officeNumber }) => {
      const newManager = new Manager(
        teamManager,
        employeeID,
        emailAddress,
        officeNumber
      );
      team.push(newManager);
      followUp();
    });
}

// Function call to initialize app
init();
