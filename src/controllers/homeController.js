
const connection = require("../config/database");

const { get } = require("../routes/web");

const getHomePage = (req, res) => {
    // process data
    // call model
    res.send('Hello Hiệp');

    let users = [];

    connection.query(
        'SELECT * FROM Users u',
        function(err, results, fields) {
            users = results;
            console.log('>>> Check results: ', results); // results contains rows returned by server
            console.log('>>> Check fields: ', fields); // fields contains extra meta data about results, if available
            console.log('>>> Check users: ', users); // results contains rows returned by server
        }
    );
}

const getABC = (req, res) => {
    res.render('sample', { title: 'Sample Page' });
}

module.exports = {
    getHomePage,
    getABC
};