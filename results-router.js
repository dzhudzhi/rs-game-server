const express = require('express');

const resultsModel = require('./results-model');

const router = new express.Router();

router.get('/', async (req, res) => {
  const results = await resultsModel.read();

  res.append('Content-Type', 'application/json');
  res.write(JSON.stringify(results));

  res.end();
});

router.post('/', async (req, res) => {
  const { name, monstersCount } = req.body;
  await resultsModel.create({ name, monstersCount });

  res.end();
});

router.delete('/', async (req, res) => {
  await resultsModel.deleteAll();

  res.end();
});

module.exports = router;
