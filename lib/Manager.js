const Employee = require('../lib/Employee');
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //Rather than doing this.name for all classes we are using the Employee class which are still the same
        super(name, id, email);
        //unique to this class
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    //override the default if new 
    getRole() {
        //use default parent if empty
        return 'Manager'
    }
}
module.exports = Manager;