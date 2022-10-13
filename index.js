const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page-template');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employeeArr = {manager: '', engineer: [], intern: [] };

const promptManager = () => {
    console.log('\n\n--- Manager ---');

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your team managers name?',
            validate: (managerNameInput) => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter your employee ID for the manager:',
            validate: (managerIdInput) => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log('Enter an ID number!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter manager email address:',
            validate: (managerEmailInput) => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('Enter an email!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number:',
            validate: (officeNumber) => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Enter your office number!');
                    return false;
                }
            },
        },
    ])
    .then((managerData) => {
        const { managerName, managerId, managerEmail, officeNumber } = 
        managerData;

        const managerObj = new Manager(
            managerName,
            managerId,
            managerEmail,
            'Manager',
            officeNumber
        );

        employeeArr.manager = managerObj;
    });
};

const promptEngineer = () => {
    console.log('\n\n--- Engineer ---');

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your engineers name?',
            validate: (engineerNameInput) => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log('Enter a name!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Enter your employee ID for the engineer:',
            validate: (engineerIdInput) => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log('Enter an ID number!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Enter engineer email address:',
            validate: (engineerEmailInput) => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('Enter an email!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'Enter the engineers github username:',
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Enter a username!');
                    return false;
                }
            },
        },
    ])
    .then((engineerData) => {
        const { engineerName, engineerId, engineerEmail, githubUser } = 
        engineerData;

        const engineerObj = new Engineer(
            engineerName,
            engineerId,
            engineerEmail,
            'Engineer',
            githubUser
        );

        employeeArr.engineer.push(engineerObj);

        nextPrompt();
    });
};

const promptIntern = () => {
    console.log('\n\n--- Intern ---');

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your interns name?',
            validate: (internNameInput) => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Enter a name!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Enter employee ID for the intern:',
            validate: (internIdInput) => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log('Enter an ID number!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Enter intern email address:',
            validate: (internEmailInput) => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log('Enter an email!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the interns school:',
            validate: (schoolInput) => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Enter a school!');
                    return false;
                }
            },
        },
    ])
    .then((internData) => {
        const { internName, internId, internEmail, school} = 
        internData;

        const internObj = new Intern(
            internName,
            internId,
            internEmail,
            'Intern',
            school
        );

        employeeArr.intern.push(internObj);

        nextPrompt();
    });
};

//Generate HTML or add employee
const nextPrompt = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'nextSteps',
            message: 'Please choose from one of the following:',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building team'],
        },
    ])
    .then((chosenStep) => {
        if (chosenStep.nextSteps == 'Add an Engineer') {
            promptEngineer();
        } else if (chosenStep.nextSteps == 'Add an Intern') {
            promptIntern();
        } else {
            generateWebpage();
        }
    });
};

//class obj for each employee
function generateWebpage() {
    //Pass array into the function to generate content
    employeeProfiles = generatePage(employeeArr);
    //then generate HTML fs
    fs.writeFile(''), employeeProfiles, (err) => {
        if (err) throw new Error(err);
        //User alerted file is generated
        console.log(
            'Your HTML has been created!'
        );
    }
}

promptManager().then(nextPrompt);