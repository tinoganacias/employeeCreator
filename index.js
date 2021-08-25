const jest = require("jest");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs")

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")


const managerArray = []
const internArray = []
const engineerArray = []

function createManager() {
    inquirer.prompt([
        {
            type:"input",
            message:"Manager's name?",
            name: "managerName"
        },
        {
            type:"input",
            message:"Employee's ID?",
            name: "employeeID",
        },
        {
            type:"input",
            message:"Employee's email?",
            name:"employeeEmail",
        },
        {
            type:"input",
            message: "Employee office number?",
            name: "employeeOfficeNumber",
        },
    ])
    .then ((answers) => {
        const manager = new Manager(answers.managerName, answers.employeeID, answers.employeeEmail, answers.employeeOfficeNumber)
        managerArray.push(manager)
        console.log(managerArray)

        nextQuestion()
    })
}

createManager();

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Engineer's name?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "Employee ID?",
            name: "employeeID"
        },
        {
            type: "input",
            message: "Employee email?",
            name: "employeeEmail"
        },
        {
            type: "input",
            message: "GitHub username?",
            name: "empGitHubUsername"
        }
    ])
    .then ((answers) => {
        const engineer = new Engineer (answers.engineerName, answers.employeeID, answers.employeeEmail, answers.empGitHubUsername)
        engineerArray.push(engineer)
        console.log(engineerArray)

        nextQuestion()
    })
}

function createIntern () {
    inquirer.prompt([
        {
            type: "input",
            message: "Intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "EmployeeID",
            name: "employeeID"
        },
        {
            type: "input",
            message: "Employee email?",
            name: "employeeEmail"
        },
        {
            type: "input",
            message: "Where does the intern go to school?",
            name: "internSchool"   
        },
    ])
    .then ((answers) => {
        const intern = new Intern (answers.internName, answers.employeeID, answers.employeeEmail, answers.internSchool)
        internArray.push(intern)
        console.log(internArray)

        nextQuestion();
    })
}

function nextQuestion() {
    inquirer.prompt([
        {
            type:"list",
            message: "what is the classification of the new employee?",
            choices: ["manager", "intern", "engineer", "Done!"],
            name: "newEmployees"
        }
    ])
    .then(answers => {
        if (answers.newEmployees === "manager") {
            createManager()
        }
    else if (answers.newEmployees === "intern") {
            createIntern()
        }
    else if (answers.newEmployees === "engineer") {
            createEngineer()
        }
    else {
        buildHTML()
    }
    })
}

function buildHTML() {
    fs.writeFile("index.HTML", `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile!</span>
        </nav>
        <div class="container">
       
   
    <div class="card mx-auto mb-3" style="width: 18rem">
            <div>
                <div>
                    ${createManagerCard()}
                    ${createInternCard()}
                    ${createEngineerCard()}
                </div>
                
            </div>
        </div>
    </body>
    </html>
            `, (err) => 
            err ? console.log(err) : console.log("Successfully created index.html!"))
        }
    
        function createManagerCard() {
            let manager = ``;
            for (let i = 0; i < managerArray.length; i++) {
                const managerIndex = managerArray[i];
                 manager+=` 
                
                
            <div class="card" style="background-color: lightblue;" style="width: 18rem;">
     <div class="card-body">
    <h5 class="card-title">${managerIndex.name} - Manager</h5>
    <h6 class="card-subtitle mb-2 text-muted">ID: ${managerIndex.ID}</h6>
    <p class="card-text">office number: ${managerIndex.officeNumber}</p>
    <a href="mailto:${managerIndex.email}" class="card-link">email</a>
 
  </div>

                            
                                
                            </div>
                        </div>
                    </div>
                </div>`
            }
            return manager
        }
    
        function createEngineerCard() {
            let engineer = ``;
            for (let i = 0; i < engineerArray.length; i++) {
                const engineerIndex = engineerArray[i];
                engineer+= `
                
                <div>
                <div class="card mx-auto mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineerIndex.name} - Engineer</h5>
    <h6 class="card-subtitle mb-2 text-muted">ID: ${engineerIndex.ID}</h6>
    <a href="https://GitHub.com/${engineerIndex.GitHub}" class="card-link">GitHub</a>
    <a href="mailto:${engineerIndex.email}" class="card-link">email</a>
 
  </div>
</div>
                            
                                
                            </div>
                        </div>
                    </div>
                
                
                
                
       
                     ` 
                
                
            }
            return engineer
        }
    
        function createInternCard() {
            let intern = ``;
            for (let i = 0; i < internArray.length; i++) {
                const internIndex = internArray[i];
                intern+= `
                <div>
                <div class="card mx-auto mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${internIndex.name} - Intern</h5>
    <h6 class="card-subtitle mb-2 text-muted">ID: ${internIndex.ID}</h6>
    <h6 class="card-subtitle mb-2 text-muted">school: ${internIndex.school}</h6>
    
    <a href="mailto:${internIndex.email}" class="card-link">email</a>
 
  </div>
</div>
                            
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
               </div>
               
               
               
          
                    
                `
            }
            return intern

}

