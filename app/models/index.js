const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.user = require("./user.model");   //model
db.role = require("./role.model");   //model
db.ROLES = ["user","admin","moderator"];

module.exports = db;



