
const express = require('express');
const { getHomePage, getABC } = require('../controllers/homeController'); 
const routes = express.Router();

// Trang chủ
// routes.get('/', (req, res) => {

// });
routes.get('/', getHomePage); // Use the controller function for the home page
routes.get('/abc', getABC);

module.exports = routes; // export defined routes
// This allows the routes to be used in server.js