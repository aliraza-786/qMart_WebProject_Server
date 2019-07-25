var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const admins = new Schema({  
    username: String,
    password: String,
});

const adminCollection = mongoose.model("admin", admins);

module.exports = adminCollection;
