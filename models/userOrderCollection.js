var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mycarts = new Schema({
    
    createdAt: { type: Date, default: Date.now },
    MyCart : Object,
    name: String,
    phoneNumber: String,
    address: String,
});
const userOrder = mongoose.model("mycarts", mycarts);

module.exports = userOrder;