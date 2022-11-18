const Employee = require('../lib/Employee');
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        // if role property is empty when declaring intern
        //unique property for this class assigned here
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    // override default if new role is assigned
    getRole() {
        // if role is empty when declaring object use default role
        return 'Intern'
    }
}
module.exports = Intern;