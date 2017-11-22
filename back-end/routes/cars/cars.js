var path = require('path');
var express = require('express');
var carshandler = express.Router();
var mongo=require('../mongo.js');
var mongoURL = "mongodb://localhost:27017/kayak";

module.exports = carshandler;

carshandler.post('/getCars',function(req,res){
  //Input parameters: from city, from date,to date
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('car');
            console.log(req.body);
            coll.find({"carCity":req.body.carCity}).toArray(function(err, user){
                if (user) {
                  console.log(user);
                	res.status(201).json(user);
                } else {

                	res.status(201).json({wrong:1});
                }
            });
        });
console.log(req.param('from'));
console.log(req.query.from);
//  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});


carshandler.post('/bookCar',function(req,res){
  /*{
	"_id" : ObjectId("5a0e91f4cda390e36cece396"),
	"carId" : 210,
	"fromCity" : "Chicago",
	"toCity" : "New York",
	"fromDate" : "10-29-2017",
	"toDate" : "11-01-2017",
	"fareDetails" : 390
}*/

  console.log(req.body);
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('carTrip');
            console.log(req.body);
            coll.insertOne({carId:req.body.cartile.carId,fromCity:req.body.cartile.carCity,toCity:req.body.cartile.carCity,fromDate:req.body.fromDate,toDate:req.body.toDate,fareDetails:req.body.cartile.carRate},function(err, user){
                if (user) {
                	res.status(201).json(user);
                } else {

                	res.status(201).json({wrong:1});
                }
            });
        });

});

carshandler.post('/receipt',function(req,res){
  var email 	= require("emailjs/email");
var server 	= email.server.connect({
   user:    "automailerkayak@gmail.com",
   password:"shashankui",
   host:    "smtp.gmail.com",
   ssl:     true
});

// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "With attachment",
   from:    "you <automailerkayak@gmail.com>",
   to:      "Chandan <chandan.paranjape@gmail.com>, Shashank <shashank.singh9193@gmail.com>,Shripal <shripal555@gmail.com>,Anshit<anshit.sobti@gmail.com>",
   subject: "testing emailjs",
   attachment:
  [
     {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
     {path:"/Users/chandanparanjape/272/README.txt", type:"application/text", name:"README.txt"}
  ]
}, function(err, message) { console.log(err || message);
  if(message){
    res.json({1:1});
  }
  else{
    res.json({0:0});
  }
});
});
