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
            var rooms = req.body.rooms;
            coll.find({"hotelCity":req.body.hotelCity, "hotelFromDate": req.body.fromDate, "hotelToDate": req.body.toDate}).toArray(function(err, user){
                if (user) {
                	res.status(201).json({user:user,rooms:req.body.rooms});

                  //logger

                  var city=hotelCity;
                  var t=time.localtime(Date.now()/1000);
                  var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                  var curTime=""+t.hours+":"+t.minutes;

                  fs.appendFile("./public/logging/guestuser.txt", "User queried hotel listing for the city of "+hotelCity+" on "+date+" at "+curTime+"\n", function(err) {
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
  console.log(" we have to check this",req.body);
  var hotelCity=req.body["hotelCity"];
  var hotelId=req.body.hotelId;
  var hotelRate=req.body.hotelOriginalPrice * req.body.room;
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('hotelTrip');
            console.log(req.body);

            var coll1 = mongo.collection('hotel');
            var coll2 = mongo.collection('userTrips');

            coll1.find({hotelId: req.body.hotelId}, function(err, user){
                if(user) {
                            var changedRoomCount = req.body.hotelNumberOfRooms - req.body.room;

                    coll1.update(
                       { hotelId: req.body.hotelId },
                       {
                          hotelId: req.body.hotelId,
                           hotelFromDate: req.body.hotelFromDate,
                           hotelToDate: req.body.hotelToDate,
                           hotelNumberOfRooms: changedRoomCount,
                           hotelNumberOfGuests: req.body.hotelNumberOfGuests,
                           hotelCity: req.body.hotelCity,
                           hotelArea: req.body.hotelArea,
                           hotelReviewType: req.body.hotelReviewType,
                           hotelNumberOfReviews: req.body.hotelNumberOfReviews,
                           hotelRating: req.body.hotelRating,
                           hotelStars: req.body.hotelStars,
                           hotelAddress: req.body.hotelAddress,
                           hotelContact: req.body.hotelContact,
                           hotelCapacity: req.body.hotelCapacity,
                           hotelAvailability: req.body.hotelAvailability,
                           hotelOldPrice: req.body.hotelOldPrice,
                           hotelOriginalPrice: req.body.hotelOriginalPrice,
                           hotelName: req.body.hotelName,
                           dummy: "dummy"

                       },
                       { upsert: true }
                    )

                }
                else {
                    console.log("Failed in updating the document");
                }
            });

            coll2.insertOne({type: "hotel",hotelId:req.body.hotelId,fromCity:req.body.hotelCity,fromDate:req.body.hotelFromDate,toDate:req.body.hotelToDate,fareDetails:req.body.hotelOriginalPrice * req.body.room},function(err, user){
                if (user) {

                    console.log("Details Saved Successfuly into userTrips DB");


                } else {

                    console.log("Error in saving data into UserTrips---Flight details")
                }
                            //fs.writeStream('',func)



                    });

            coll.insertOne({hotelId:req.body.hotelId,fromCity:req.body.hotelCity,fromDate:req.body.hotelFromDate,toDate:req.body.hotelToDate,fareDetails:req.body.hotelOriginalPrice * req.body.room},function(err, user){
                if (user) {

                	res.status(201).json({user: user,username: req.session.user});


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

                fs.appendFile("./public/logging/guestuser.txt", "User booked a hotel in the city of "+city+" on "+date+" at "+curTime+"\n", function(err) {
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
