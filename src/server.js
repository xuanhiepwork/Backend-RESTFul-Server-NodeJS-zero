const express = require('express');
const path = require('path');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const hostname = process.env.HOST_NAME || 'localhost'; // Default to 'localhost' if HOST_NAME is not set

//config template engine
app.set('views', path.join(__dirname + 'views'));
app.set('view engine', 'ejs');

// Khai báo routes
app.get('/', (req, res) => {
  res.send('Hello Hiệp');
});

// abc
app.get('/abc', (req, res) => {
  // res.send('Hello abc');
  res.render('sample.ejs')
});

app.listen(port, hostname, () => {
  console.log(`Server running at ${port}`);
});
