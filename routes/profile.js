var models = require("../models");

exports.view = function(req, res) {
  models.User.find().exec(renderUser);
  
  function renderUser(err, user) {
    if (err) 
    	console.log(err);

    res.render('profile', user);
  }

};
