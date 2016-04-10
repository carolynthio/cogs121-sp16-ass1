var models = require("../models");

exports.view = function(req, res) {
  models.NewsFeed.find().exec(renderMessage);
  
  function renderMessage(err, newsfeed) {
    if (err) console.log(err);
    res.render('chat', {'data': newsfeed});
  }

};
