const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config()
const {getNews} = require('../database/controllers/getNews.js')


const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

//handler refresh when in guess or search
app.get('/search', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
  })
})

app.get('/guess', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
  })
})

//fetch from api
app.get('/news', getNews);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



/*
left: atlantic, msnbc, the new york times, washington post
lean-left: cnn, cbs, bloomberg, nbc
middle: reuters, the hill,
lean-right: wsj, washington times, new york post
right: fox news





*/