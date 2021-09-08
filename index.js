const inquirer = require("inquirer");
const fs = require("fs");

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
    message: "What is the employee ID number?",
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
  {
    type: "list",
    name: "employeeType",
    message: "Which other team members would you like to add?",
    choices: ["intern", "engineer", "quit"],
  },
];

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
    message: "What is the employee ID number?",
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
    message: "What is the office number?",
    validate: (githubName) => {
      if (githubName) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "employeeType",
    message: "Which other team members would you like to add?",
    choices: ["intern", "engineer", "quit"],
  },
];

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
    message: "What is the employee ID number?",
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
    message: "What is the office number?",
    validate: (schoolName) => {
      if (schoolName) {
        return true;
      } else {
        console.log("Required!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "employeeType",
    message: "Which other team members would you like to add?",
    choices: ["intern", "engineer", "quit"],
  },
];

// TODO: Create a function to write index.html file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    //   const page = generateMD(answer);
    writeToFile("./index.html", page);
  });
}

// Function call to initialize app
init();
