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
            endCreation(employeeArray)
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
    employeeArray.push(intern)
    additionalEmployee()
})
}


function endCreation(employeeArray) {
    console.log(employeeArray)
  `<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
  
      <title>Hello, world!</title>
    </head>
    <body>
      <h1>${employeeArray[0].name}</h1>
  
      <!-- Optional JavaScript; choose one of the two! -->
  
      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>
  
      <!-- Option 2: Separate Popper and Bootstrap JS -->
      <!--
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.min.js" integrity="sha384-PsUw7Xwds7x08Ew3exXhqzbhuEYmA2xnwc8BuD6SEr+UmEHlX8/MCltYEodzWA4u" crossorigin="anonymous"></script>
      -->
    </body>
  </html>
  `
  fs.writeFile('generatedTeam.HTML', function(err) {
      if (err) throw err
      console.log(err)
  })
}
initalizeApp()
