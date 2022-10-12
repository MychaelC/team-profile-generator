class Employee{
    constructor(name, id, email, role = 'Employee') {
        //properties passed down to the children classes as defaults
        this.name = name;
        this.id = id;
        this.email = email;
        //if "role" is empty when declaring 
        if (role ==''){
            //role == Employee
            this.role ='Employee';
        } else {
            //else equal to type in the property
            this.role = role;
        }
    }

    //methods to return data for each child 
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;