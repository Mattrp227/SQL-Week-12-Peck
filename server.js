//create initial constructors
const db = require('./db/connection'); 
const inquirer = require('inquirer');
const figlet = require('figlet');
require('console.table');
//prompt inquirer
const beginQuestions = () => {
    return inquirer.createPromptModule([{
        type: 'Question',
        name: 'answers',
        message: 'click an option',
        choices: [
            'Add Employee',
            'Remove Employee',
            'Add Role',
            'Remove Role',
            'Add Department',
            'Remove Department',
        ]
    }])
}
