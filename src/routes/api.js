const express = require('express');

const routes = express.Router();

// Define your API routes here
routes.get('/example', (req, res) => {
    res.json({ message: 'This is an example API route' });
});

// Trang chủ
routes.get('/', (req, res) => {
  res.send('Hello Hiệp');
});

// abc
routes.get('/abc', (req, res) => {
  res.render('sample', { title: 'Sample Page' });
});

module.exports = routes; // export defined routes
// This allows the routes to be used in server.js