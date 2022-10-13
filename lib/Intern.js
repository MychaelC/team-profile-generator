const Employee = require('../lib/Employee');
class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email);
        // if role property is empty when declaring intern
        if (role == '') {
            this.role = 'Employee';
        } else {
            //else have it = to what was typed in property
            this.role = role;
        }
        //unique property for this class assigned here
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    // override default if new role is assigned
    getRole() {
        // if role is empty when declaring object use default role
        if (this.role == '') {
            return 'Employee';
        } else {
            return this.role;
        }
    }
}
module.exports = Intern;