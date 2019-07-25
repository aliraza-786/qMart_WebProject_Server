
//import nodemodule
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const mongoose = require("mongoose");

//import from custom files
var wholeObj = require('./someFile');
var userRoute = require('./routes/user');
var todosRoutes = require('./routes/todos');
var dbConnection = require ('./config/dbConnection');
var upload = require('./multer/multer');

// const path = __dirname ('./upload');


//app create
var app = express();


//add middleware
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var users = [
  { id: 1, username: "admin", password: '12345' },
]
var server = express();

require('./passport/passport')(server, users);



//db connection
dbConnection();

///user routes
app.use('/',userRoute);
app.use('/todo',todosRoutes);

app.listen(process.env.PORT|| 8080, function() {
  console.log("express server running");
});
