const { get } = require("../routes/web");

const getHomePage = (req, res) => {
    // process data
    // call model
    res.send('Hello Hiệp');
}

const getABC = (req, res) => {
    res.render('sample', { title: 'Sample Page' });
}

module.exports = {
    getHomePage,
    getABC
};