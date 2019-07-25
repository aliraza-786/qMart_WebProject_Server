var app = require('express').Router();
var studentCollection = require('../models/studentSchema');
var itemCollection = require('../models/itemSchema');
var cartCollection = require('../models/mycartSchema');
var adminCollection = require('../models/adminSchema');
// var adminLogin = require('../models/loginSchema');
// var userOrder = require('../models/userOrderCollection');

var upload = require('../multer/multer');
var passport = require('passport');

app.post("/response", function(req, res) {
  console.log("request recive");
    res.end('RESPONSE');
});

//Passport 
// app.post('/login', passport.authenticate('local'), function (req, res) {
//   res.redirect('/dashboard');
//   // res.send("Ok");
// });

// app.get('/dashboard', function (req, res) {

//   if (!req.isAuthenticated()) {
//       res.send("Login Required to visit this page")
//   } else {
//       res.send("Yes you're logged in, and your data is available here: " + req.user.username)
//   }
// });

app.get('/login', function(req, res) {
  let username = req.body.username;
  let password = req.body.password;

  adminCollection
  .find()
  .exec((err, data) => {
    if (err) {
      res.json("error occored");
    } else {
      res.json(data);
      console.log('LogIn Route',data)
    }
  });
})

app.get("/getAllData", function(req, res) {
    
  itemCollection
      .find()
      .exec((err, data) => {
        if (err) {
          res.json("error occored");
        } else {
          res.json(data);
        }
      });
})

app.get("/getUserOrder", function(req, res) {
    
  // userOrder
  cartCollection
      .find()
      .exec((err, data) => {
        if (err) {
          res.json("error occored");
        } else {
          res.json(data);
        }
      });
      console.log("Request Recive from /getUserOrder");
})

app.post("/save", upload.single("img"), function(req, res) {

  let saveNewRow = new  itemCollection();
  
  saveNewRow.id = req.body.id;
  saveNewRow.Title = req.body.title;
  saveNewRow.Des = req.body.des;
  saveNewRow.Price = req.body.price;
  saveNewRow.img = req.file.path;
  
  console.log('image',req.file);
  
  saveNewRow.save((err, save) => {
    if (err) {
      res.json("error occored");
    } else {
      res.json("data saved");
    }
  });
});


app.post("/carts",  function(req, res) {

  console.log("request recive From /cart");

  let saveNewRow = new  cartCollection();

  saveNewRow.name = req.body.name;
  saveNewRow.phoneNumber = req.body.phoneNumber;
  saveNewRow.address = req.body.address;
  saveNewRow.MyCart = req.body.cart;

  // console.log("req.body.cart", req.body.cart);
  
  saveNewRow.save((err, save) => {
    if (err) {
      res.json("error occored");
    } else {
      res.json("data saved");
    }
  });
});


//=======================Delete Item From MongoDB=========================

app.post("/itemDelete", function(req, res) {
  itemCollection

    .findOneAndDelete()
    .where("id")
    .equals(req.body.id)

    .exec(function(err, data) {
      if (err) {
        console.log(err);
        res.json("error");
      }
      res.json(data);
    });
    console.log("req.body.id" ,req.body.id);
    console.log("Request Recive From itemDelete");
});

//  Delete User Order From MongoDB
app.post("/userOrderDelete", function(req, res) {

  let number = req.body.phoneNumber;
  cartCollection
  // userOrder

    .findOneAndDelete()
    .where("phoneNumber")
    // .equals(req.body.phonenumber)
    .equals(number)

    .exec(function(err, data) {
      if (err) {
        console.log(err);
        res.json("error");
      }
      res.json(data);
    });
    console.log("req.body.PhoneNumber", number);
    console.log("Request Recive From userOrderDelete");
});

module.exports = app;
