const mongoose = require('mongoose');

const { Types } = mongoose.Schema;

const ResultSchema = mongoose.Schema({
  name: Types.String,
  monstersCount: Types.Number,
});

module.exports = ResultSchema;
