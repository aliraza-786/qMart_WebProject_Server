var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Comment = new Schema({
  // id : Number,
  // Title: String,
  // Des: String,
  // Price: Number,
  // createdAt: { type: Date, default: Date.now }
  name:String,
  psd:String,
  img:String,
});
// const studentCollection = mongoose.model("Item", Comment);
const studentCollection = mongoose.model("students", Comment);

module.exports = studentCollection;

// var mongoose = require('mongoose');

// const Schema = mongoose.Schema;
// const myCart = new Schema({
//   id : Number,
//   Title: String,
//   Des: String,
//   Price: Number,
//   createdAt: { type: Date, default: Date.now }
// });
// const cartCollection = mongoose.model("carts", myCart);

// module.exports = cartCollection;