// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`
const EmployeeConstructor = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github

    }
    getGitHub() {

    }
    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer
