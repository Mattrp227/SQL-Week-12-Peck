//initialize mysql2

const mysql = require('mysql2');
const util = require('util');

//user and password

let db_user = process.env.db_user;
let db_pw = process.env.db_pw;


//dotenv
require('dotenv').config();


//constructor for user and password connection
const db = mysql.createConnection(
    {

        user: db_user,
        password: db_pw,
        database: 'employee_db',

    },
)

//export
module.exports = db;

