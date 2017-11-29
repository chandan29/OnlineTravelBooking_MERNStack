var path = require('path');
var express = require('express');
var hotelhandler = express.Router();
var mongo=require('../mongo.js');
var mongoURL = "mongodb://localhost:27017/kayak";
var fs=require('fs');
var time = require('time');

module.exports = hotelhandler;

hotelhandler.post('/getHotels',function(req,res){
  //Input parameters: from city, from date,to date
  var hotelCity=req.body.hotelCity;
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('hotel');
            console.log(req.body);
            coll.find({"hotelCity":req.body.hotelCity}).toArray(function(err, user){
                if (user) {
                  console.log(user);
                	res.status(201).json(user);


                  //logger

                  var city=hotelCity;
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
                  fs.appendFile("./public/logging/"+user+".txt", "User queried hotel listing for the city of "+hotelCity+","+date+","+curTime+",listing\n", function(err) {
                    if(err) {
                        res.send({0:0});

                    }

                    console.log("The file was saved!");
                  });
                } else {

                	res.status(401).json({wrong:1});
                }
            });
        });

});





hotelhandler.post('/bookHotel',function(req,res){
  console.log(req.body.hoteltile);
  var hotelCity=req.body.hoteltile.hotelCity;
  var hotelId=req.body.hoteltile.hotelId;
  var hotelRate=req.body.hoteltile.hotelOriginalPrice;
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('hotelTrip');
            console.log(req.body);
            coll.insertOne({hotelId:req.body.hoteltile.hotelId,fromCity:req.body.hoteltile.hotelCity,fromDate:req.body.fromDate,toDate:req.body.toDate,fareDetails:req.body.hoteltile.hotelOriginalPrice},function(err, user){
                if (user) {

                	res.status(201).json(user);


                  var bill = `                                                                                  Receipt




                Hotel in:  `+hotelCity+`

                  Price:`+hotelRate+`
                `;
                  fs.writeFile("./public/hotelbills/"+hotelId+".txt", bill, function(err) {
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
                     text:    hotelCity,
                     from:    "you <automailerkayak@gmail.com>",
                     to:      "Chandan <chandan.paranjape@gmail.com>, Shashank <shashank.singh9193@gmail.com>,Shripal <shripal555@gmail.com>,Anshit<anshit.sobti@gmail.com>",
                     subject: hotelCity,
                     attachment:
                    [
                       {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
                       {path:"./public/hotelbills/"+hotelId+".txt", type:"application/text", name:""+hotelId+".txt"}
                    ]
                  }, function(err, message) { console.log(err || message);});
                });
                //write a logger
                var city=hotelCity;
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
                fs.appendFile("./public/logging/"+user+".txt", "User booked a hotel in the city of "+city+","+date+","+curTime+","+hotelRate+","+hotelId+",buying\n", function(err) {
                  if(err) {
                      res.send({0:0});

                  }

                  console.log("The file was saved!");
                });

                fs.appendFile("./public/city/"+city+".txt",hotelRate+"\n", function(err) {
                  if(err) {
                      res.send({0:0});

                  }

                  console.log("Entry for city saved!");
                });


                } else {

                	res.status(201).json({wrong:1});
                }
                            //fs.writeStream('',func)



                    });
        });



});




hotelhandler.post('/redis',function(req,res){

  var redis = require("redis"),
      client = redis.createClient();
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('car');
            coll.find({"carCity":"New York"}).toArray(function(error, user){
                if (user) {

                  client.set("car", JSON.stringify(user));
                  client.get("car", function(err, reply) {
                    if(err){
                        res.status(400).send({nai:"no"});
                      }
                      else{
                        res.status(201).send({value:reply});
                      }

                    });
                  }
                });
});
});
