"use strict";

var mongoose = require('mongoose'),
    Article = require('../models/article'),
    Comment = require('../models/comment');

module.exports = function (config) {
    mongoose.connect(config.db);

    var db = mongoose.connection;

    db.once('open', function (err) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }

        console.log('Database up and running...');
    });

    db.on('error', function (err) {
        console.log('Database error: ' + err);
        return;
    });
};