const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  date: String,
  content: String,
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
