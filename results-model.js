const mongoose = require('mongoose');

const ResultSchema = require('./result-schema');

const ResultsModel = mongoose.model('Result', ResultSchema);

module.exports.read = async function read() {
  const todos = await ResultsModel.find({}).exec();
  
  return todos;
}

module.exports.create = async function create({ name, monstersCount }) {
  await ResultsModel.create({
    name,
    monstersCount,
  });
}

module.exports.deleteAll = async function deleteAll() {
  await ResultsModel.remove({});
}
