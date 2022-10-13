const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        //using the Employee properties class which are valid for the rest of the classes
        super(name, id, email);
        //if role is empty when declaring Intern obj
        if (role == '') {
            //role == Employee
            this.role = 'Employee';
        } else {
            this.role = role;
        }
        this.github = github;
    }
    // return github link
    getGithub() {
        return `https//github.com/${this.github}`;
    }

    //override default role if new role is added
    getRole() {
        //If role is empty use default parent
        if (this.role == '') {
            return 'Employee';
        } else {
            return this.role;
        }
    }
}
module.exports = Engineer;