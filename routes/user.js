
var app = require('express').Router();

app.get('/', (req, res) => {
    res.json('main user route');
});

app.get('/test', (req, res) => {
    res.json('from route file 0');
});

app.get('/test1', (req, res) => {
    res.json('from route file 1');
});

app.get('/test2', (req, res) => {
    res.json('from route file 2');
});

module.exports = app;