require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web.js'); // Import the routes
const connection = require('./config/database.js');

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const hostname = process.env.HOST_NAME || 'localhost'; // Default to 'localhost' if HOST_NAME is not set

// config template engine
configViewEngine(app);

// Khai báo routes
app.use('/test', webRoutes); //: /test/webRoutes's routes

// test connection


// simple query
connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log('>>> Check results: ', results); // results contains rows returned by server
    console.log('>>> Check fields: ', fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Server running at ${port}`);
});
