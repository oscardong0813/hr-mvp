const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  // your code here
  title: String,
  author: String,
  email: String,
  discrption: String,
  source: String,
  url: String,
  publishedDate: Date,
  content: String
});

const News = mongoose.model('News', newsSchema);

module.exports = News;