const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')

const employeeArray = []
    
function initalizeApp () {
    inquirer.prompt( [
    // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    {
        type: 'input',
        name: 'managersName',
        message:'If you are the manager what is your name and or whats your managers name?'
    },

    {
        type: 'input',
        name: 'managerId',
        message: 'What is your employee ID?',
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your email address?'
    },

    {
        type: 'input',
        name: 'managersPhoneNum',
        message: 'Whats is the phone number to reach you while you are in your office?'
    }
])
.then( answers => {
const newManager = new Manager(answers.managersName, answers.managerId, answers.managerEmail, answers.managersPhoneNum)
console.log(newManager)
employeeArray.push(newManager)
additionalEmployee()
})
}


function additionalEmployee () {

    inquirer.prompt( [
    {
        type: 'list',
        name: 'addAnotherEmployeeQ',
        // WHEN I decide to finish building my team
        // THEN I exit the application, and the HTML is generated
        message:'Would you like to add an additional Employee?',
        choices: ['engineer', 'intern', 'Click here to no longer add any additional people to the organizational structure.']
    },

])
.then (answers => {
    switch(answers.addAnotherEmployeeQ) {
        case 'engineer':
            getEngineer()
            break;
        case 'intern':
            getIntern()
            break;
        case 'Click here to no longer add any additional people to the organizational structure.':
            endCreation()
            break;
    }
})}



function getEngineer() {

    inquirer.prompt( [


        {
            // WHEN I select the engineer option
            // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, 
            type: 'inpu',
            name: 'engineerName',
            message: 'Please enter the engineers name here',
        },
    
        {
            type: 'input',
            name: 'engineerId',
            message: 'Whats is your engineers employee ID?'
        },
    
        {
            type: 'input',
            name:'engineerEmail',
            message:'What is your engineers email address?'
        },
    
        {
            type: 'input',
            name: 'engineerGit',
            message: 'Whats your engineers Github username?'
            //then I am taken back to the menu 
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGit)
        console.log(engineer)
        employeeArray.push(engineer)
        additionalEmployee()
    })   
}

function getIntern () {

    inquirer.prompt ( [

        {    // WHEN I select the intern option
            // THEN I am prompted to enter the intern’s name, ID, email, and school, 
            type:'input',
            name:'internName',
            message: 'What is the name of your intern?',
        },
    
        {
            type:'input',
            name:'internId',
            message: 'What is your interns employee ID?',
        },
    
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your interns email address?',
        }, 
    
        {
            type: 'input',
            name:'internSchool',
            message: 'What school is your intern currently attending?'
        }
        // then I am taken back to the menu
    ]
    )
.then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
    console.log(intern)
    employeeArray.push(intern)
    additionalEmployee()
})
} 
function endCreation() {
    console.log('The process has ended.')
}
initalizeApp()
