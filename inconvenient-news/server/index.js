const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const {getNews} = require('../database/controllers/getNews.js')


const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/news', getNews);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});