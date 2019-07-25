var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const myCart = new Schema({  

  createdAt: { type: Date, default: Date.now },
  MyCart : Object,
  name: String,
  phoneNumber: Number,
  address: String,

});

const cartCollection = mongoose.model("mycarts", myCart);

module.exports = cartCollection;
