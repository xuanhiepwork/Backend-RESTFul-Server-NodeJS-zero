
require('dotenv').config();
const mysql = require('mysql2');

//  CONNECT DATABASE

// create the connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST , 
//     port: process.env.DB_PORT , // default 3306
//     user: process.env.DB_USER , // default 'empty'
//     password: process.env.DB_PASSWORD , // default 'empty'
//     database: process.env.DB_NAME  // default 'hoidanit'
// });

// connection pool pattern
const connection = mysql.createPool({
    host: process.env.DB_HOST , 
    port: process.env.DB_PORT , // default 3306
    user: process.env.DB_USER , // default 'empty'
    password: process.env.DB_PASSWORD , // default 'empty'
    database: process.env.DB_NAME,  // default 'hoidanit'
    waitForConnections: true,
    connectionLimit: 10, // default 10
    queueLimit: 0,
});

module.exports = connection;