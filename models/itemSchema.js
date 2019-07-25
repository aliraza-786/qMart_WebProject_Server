var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Item = new Schema({
  id : Number,
  Title: String,
  Des: String,
  Price: Number,
  img: String
});
const itemCollection = mongoose.model("items", Item);

module.exports = itemCollection;
