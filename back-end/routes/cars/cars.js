var path = require('path');
var express = require('express');
var carshandler = express.Router();
var mongo=require('../mongo.js');
var mongoURL = "mongodb://localhost:27017/kayak";
var fs=require('fs');
var time = require('time');

module.exports = carshandler;

carshandler.post('/getCars',function(req,res){
  //Input parameters: from city, from date,to date
  var carCity=req.body.carCity;
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('car');
            console.log(req.body);
            coll.find({"carCity":req.body.carCity}).toArray(function(err, user){
                if (user) {
                  console.log(user);
                	res.status(201).json(user);


                  //logger

                  var city=carCity;
                  var t=time.localtime(Date.now()/1000);
                  var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                  var curTime=""+t.hours+":"+t.minutes;
                  var user="";
                  if(req.session.user){
                    user=req.session.user;
                  }
                  else{
                    user="guestuser";
                  }
                  console.log(user);
                  fs.appendFile("./public/logging/"+user+".txt", "User queried car listing for the city of "+carCity+" on "+date+" at "+curTime+"\n", function(err) {
                    if(err) {
                        res.send({0:0});

                    }

                    console.log("The file was saved!");
                  });
                } else {

                	res.status(201).json({wrong:1});
                }


            });
        });

});


carshandler.post('/bookCar',function(req,res){
  console.log(req.body);
  var carCity=req.body.cartile.carCity;
  var carId=req.body.cartile.carId;
  var carRate=req.body.cartile.carOriginalPrice;
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('carTrip');
            console.log(req.body);
            coll.insertOne({carId:req.body.cartile.carId,fromCity:req.body.cartile.carCity,toCity:req.body.cartile.carCity,fromDate:req.body.fromDate,toDate:req.body.toDate,fareDetails:req.body.cartile.carRate},function(err, user){
                if (user) {

                	res.status(201).json(user);


                  var bill = `                                                                                  Receipt




                City:  `+carCity+`

                  Price:`+carRate+`
                `;
                  fs.writeFile("./public/carbills/"+carId+".txt", bill, function(err) {
                    if(err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                    var email 	= require("emailjs/email");
                  var server 	= email.server.connect({
                     user:    "automailerkayak@gmail.com",
                     password:"shashankui",
                     host:    "smtp.gmail.com",
                     ssl:     true
                  });
                  // send the message and get a callback with an error or details of the message that was sent
                  server.send({
                     text:    carCity,
                     from:    "you <automailerkayak@gmail.com>",
                     to:      "Chandan <chandan.paranjape@gmail.com>, Shashank <shashank.singh9193@gmail.com>,Shripal <shripal555@gmail.com>,Anshit<anshit.sobti@gmail.com>",
                     subject: carCity,
                     attachment:
                    [
                       {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
                       {path:"./public/carbills/"+carId+".txt", type:"application/text", name:""+carId+".txt"}
                    ]
                  }, function(err, message) { console.log(err || message);});
                });
                //write a logger
                var city=carCity;
                var t=time.localtime(Date.now()/1000);
                var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                var curTime=""+t.hours+":"+t.minutes;
                var user="";
                if(req.session.user){
                  user=req.session.user;
                }
                else{
                  user="guestuser";
                }
                console.log(user);
                fs.appendFile("./public/logging/"+user+".txt", "User booked a car from the city of "+city+" on "+date+" at "+curTime+"\n", function(err) {
                  if(err) {
                      res.send({0:0});

                  }

                  console.log("The file was saved!");
                });



                } else {

                	res.status(201).json({wrong:1});
                }
                            //fs.writeStream('',func)



                    });
        });



});



carshandler.post('/receipt',function(req,res){
  var time = require('time');
  var city="San Jose";
  var t=time.localtime(Date.now()/1000);
  var date=""+t.month+"/"+t.dayOfMonth+"/2017";
  var curTime=""+t.hours+":"+t.minutes;
  var user="";
  if(req.session.user){
    user=req.session.user;
  }
  else{
    user="guestuser";
  }
  console.log(user);
  fs.appendFile("./public/logging/"+user+".txt", "User queried car listing for the city of "+city+" on "+date+" at "+curTime+"\n", function(err) {
    if(err) {
        res.send({0:0});

    }

    console.log("The file was saved!");
    res.send({1:"User queried car listing for the city of "+city+" on "+date+" at "+curTime+"\n"});
  });

});

carshandler.post('/adminAddCarToList',function(req,res){
    console.log('Inside admin add car:');

    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('car');
        console.log(req.body);
        coll.insertOne({carID:req.body.carID,
            carType:req.body.carType,carCity:req.body.carCity,
            carAgency:req.body.carAgency,carSpecs:req.body.carSpecs,
            carAvailability:req.body.carAvailability,carRating:req.body.carRating,
            carRate:req.body.carRate},function(err, user){
            if (user) {
                res.status(201).json(user);
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});

carshandler.post('/getIp',function(req,res){

         res.status(201).send({ip:req.ip});
});
