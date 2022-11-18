const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //using the Employee properties class which are valid for the rest of the classes
        super(name, id, email);
        //if role is empty when declaring Intern obj
        this.github = github;
    }
    // return github link
    getGithub() {
        return this.github;
    }

    //override default role if new role is added
    getRole() {
        //If role is empty use default parent
        return 'Engineer'
    }
}
module.exports = Engineer;