const News = require('../models/News.js');

exports.getNews = (req, res) => {
  console.log(req.query.keyWord);
  res.send('Received')
}

/*


*/
