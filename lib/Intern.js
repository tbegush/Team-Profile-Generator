const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  // Overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
