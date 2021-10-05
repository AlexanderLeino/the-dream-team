const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')



const employeeArray = []
    
function initalizeApp () {
    inquirer.prompt( [
    // THEN I am prompted to enter the team manager’s name, ID:, email address, and office number
    {
        type: 'input',
        name: 'managersName',
        message:'If you are the manager what is your name and or whats your managers name?'
    },

    {
        type: 'input',
        name: 'managerId',
        message: 'What is your ID:?',
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
            message: 'Whats is your engineers ID:?'
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
            message: 'What is your interns ID:?',
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
    console.log(employeeArray[0].name)
    
  const generatedHTML = `<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>My Team's Organizational Structure</title>
    </head>
    <body>
      <h1>The Dream Teams Organizational Structure</h1>
        <div class="container-fluid justify-content-center d-flex">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${employeeArray[0].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${employeeArray[0].getRole()}</h6>
              <ul>
                <li> Id:<span>${employeeArray[0].getId()}</span></li>
                <li>Email Address: <a href="${employeeArray[0].getEmail()}" class="card-link">${employeeArray[0].getEmail()}</li></a>
                <li>Office Number:>${employeeArray[0].officeNumber}</li>
              </ul>
            </div>
          </div>   
        </div>
        
        <div class="container-fluid justify-content-center d-flex mt-3">
          
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${employeeArray[1].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${employeeArray[1].getRole()}</h6>
              <ul>
                <li>Id:<span>${employeeArray[1].getId()}</span></li>
                <li>Email:<a href="${employeeArray[1].getEmail()}" class="card-link">${employeeArray[1].getEmail()}</a></li>
                <li>GitHub<a href="${employeeArray[1].getGitHub()}" class="card-link">${employeeArray[1].getGitHub()}</a></li>
              </ul>
            </div>
          </div>
  
          <div class="card ms-2" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${employeeArray[2].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${employeeArray[2].getRole()}</h6>
            <ul>
              <li>Id:<span>${employeeArray[2].getId()}</span></li>
              <li>Email:<a href="${employeeArray[2].getEmail()}" class="card-link">${employeeArray[2].getEmail()}</a></li>
              <li>GitHub<a href="${employeeArray[2].getGitHub()}" class="card-link">${employeeArray[2].getGitHub()}</a></li>
            </ul>
          </div>
        </div>
    </div>
  
        <div class="container-fluid justify-content-center d-flex mt-3">
        <div class="card ms-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employeeArray[3].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${employeeArray[2].getRole()}</h6>
          <ul>
            <li>Id:<span>${employeeArray[3].getId()}</span></li>
            <li>Email:<a href="${employeeArray[3].getEmail()}" class="card-link">${employeeArray[3].getEmail()}</a></li>
            <li>GitHub<a href="${employeeArray[3].getSchool()}" class="card-link">${employeeArray[3].getSchool()}</a></li>
          </ul>
        </div>
      </div>
        </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
      <script src="../lib/htmlRender.js"></script>
    </body>
  </html>
  
  `
  fs.writeFile('generatedTeam.HTML',generatedHTML, function(err) {
      if (err) throw err
      console.log(err)
  })
}
initalizeApp()
