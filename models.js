var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    "twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photo": String
});

exports.User = mongoose.model('User', UserSchema)