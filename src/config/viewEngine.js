const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views')); // Lựa chọn nơi server.js nó có thể đọc được file này -> chuyển ra cho nó bắt đầu từ trong src
    app.set('view engine', 'ejs');

    // Config static files: css, js, images
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;