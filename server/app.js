const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const url = 'mongodb://localhost/my-blog';

mongoose.connect(url);
mongoose.Promise = Promise;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

app.get('/', (req, res) => {
    res.status(200).send('bintang!');
});

app.get('/api/users', (req, res) => {
    res.status(200).send('HERE WE ARE!');
});

app.get('/api/blogs', (req, res) => {
    res.status(200).send("We out chere!!!!!");
});

module.exports = app;