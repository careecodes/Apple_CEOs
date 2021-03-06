let ejs = require('ejs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let ceoList = require('./db');

let path = require('path');

const express = require('express');
const app = express();

// Enable static public folder
app.use(express.static('./public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.get('/', (req, res) => {
    res.send("hi");
    console.log("home page");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});