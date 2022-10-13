const Employee = require('../lib/Employee');
class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        //Rather than doing this.name for all classes we are using the Employee class which are still the same
        super(name, id, email);
        //If this role property is empty when declaring
        if (role == '') {
            this.role = 'Employee';
        } else {
            //equal to the type in the property
            this.role = role;
        }
        //unique to this class
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    //override the default if new 
    getRole() {
        //use default parent if empty
        if (this.role == '') {
            return 'Employee';
        } else {
            //else return current 
            return this.role;
        }
    }
}
module.exports = Manager;