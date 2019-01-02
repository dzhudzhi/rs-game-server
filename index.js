const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const resultsRouter = require('./results-router');

mongoose.connect('mongodb://rs-game-user:rs2018q3@ds026658.mlab.com:26658/rs-game')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/results', resultsRouter);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen();
