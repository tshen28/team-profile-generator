const inquirer = require("inquirer");
const generate = require('./util/generateHtml')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require("fs");
const teamMembers = [];

const buildTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Choose an option.',
            choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']
        }
    ]).then(ans => {
        switch (ans.options) {
            case 'Add Engineer':
                addEngineer();
                break;
            case 'Add Intern':
                addIntern();
                break;
            case 'Finish Building Team':
                fs.writeFileSync("./util/index.html", generate(teamMembers));
                console.log("Team generated.")
                break;
            default:
                console.log('Choose an option.');
                break;
        }
    })
};

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name of engineer:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter id of engineer:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email of engineer:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter github of engineer:'
        },
    ]).then(res => {
        const engineer = new Engineer(res.name, res.id, res.email, res.github);
        teamMembers.push(engineer);
        buildTeam();
    })
};

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name of intern:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter id of intern:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email of intern:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter school of intern:'
        },
    ]).then(res => {
        const intern = new Intern(res.name, res.id, res.email, res.school);
        teamMembers.push(intern);
        buildTeam();
    })
};

const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager email:',
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter manager office number:',
        },
    ]).then(res => {
        const newManager = new Manager(res.name, res.id, res.email, res.office);
        teamMembers.push(newManager);
        buildTeam();
    })
};

createManager();