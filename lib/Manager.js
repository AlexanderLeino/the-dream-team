// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
const EmployeeConstructor = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
}