var dbURL = "localhost:27017/testdb";
var collections = ["users"];
var mongojs = require("mongojs");
var db = mongojs(dbURL, collections);

exports.DB = db;