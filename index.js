const inquirer = require("inquirer");
const generateHtml = require('./util/generateHtml')
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
                break;
            case 'Add Intern':
                break;
            case 'Finish Building Team':
                break;
            default:
                console.log('Choose an option.');
                break;
        }
    })
}

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