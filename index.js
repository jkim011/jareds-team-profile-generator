const inquirer = require("inquirer");
const fs = require("fs");

// Imported employee classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Imported page that generates HTML
const generateHTML = require("./src/generateHTML")

// For team members
const teamArray = [];

// Add manager
const addManager = () => {
    return inquirer
    .prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter manager's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(" ---Enter a valid name: ");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager's ID number: ",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log (" ---Enter a valid ID number: ")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager's email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log (" ---Enter a valid email: ")
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager's office number: ",
            validate: officeNumberInput => {
                if  (isNaN(officeNumberInput)) {
                    console.log (" ---Enter a valid office number: ")
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        const newManager = new Manager (name, id, email, officeNumber);

        teamArray.push(newManager);
        console.log(newManager);
    })
};

// Add team members(engineers and interns)
const addEmployee = () => {
    return inquirer
    .prompt ([
        {
            type: "list",
            name: "role",
            message: "Please choose your employee's role",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Enter employee's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(" ---Enter a valid name: ");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee's ID number: ",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log (" ---Enter a valid ID number: ")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee's email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log (" ---Enter a valid email: ")
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter employee's GitHub username: ",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log(" ---Enter valid GitHub username: ");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log (" ---Enter a valid school: ")
                }
            }
        },
        {
            type: "confirm",
            name: "addEmployeeConfirm",
            message: "Would you like to add more team members?"
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, addEmployeeConfirm} = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if(addEmployeeConfirm) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your new team profile has been created in the index.html file!");
        }
    })
};

addManager().then(addEmployee).then(teamArray => {
        return generateHTML(teamArray);
    }).then(pageHTML => {
        return writeFile(pageHTML);
    }).catch(err => {
        console.log(err);
    });