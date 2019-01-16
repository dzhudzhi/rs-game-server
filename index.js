const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const resultsRouter = require('./results-router');

mongoose.connect(process.env.MONGODB_URI)

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

app.listen(process.env.PORT);
