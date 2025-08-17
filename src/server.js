const express = require('express');
const path = require('path');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const hostname = process.env.HOST_NAME || 'localhost'; // Default to 'localhost' if HOST_NAME is not set

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//config static files: css, js, images
app.use(express.static(path.join(__dirname, 'public')));

// Khai báo routes
// Trang chủ
app.get('/', (req, res) => {
  res.send('Hello Hiệp');
});

// abc
app.get('/abc', (req, res) => {
  res.render('sample', { title: 'Sample Page' });
});

app.listen(port, hostname, () => {
  console.log(`Server running at ${port}`);
});
