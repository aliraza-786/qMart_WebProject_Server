var mongoose = require('mongoose');

function dbConnection() {
  // mongoose.connect(`mongodb+srv://Aliraza:AliRaza_1122@cluster0-q7esz.mongodb.net/test?retryWrites=true&w=majority`,
    mongoose.connect(`mongodb+srv://Aliraza:AliRaza_1122@cluster0-q7esz.mongodb.net/test?retryWrites=true`,
      // AliRaza_1122
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log("err", err);
    } else {
      console.log("successfully connected");
    }
  }
);
}

module.exports = dbConnection;
