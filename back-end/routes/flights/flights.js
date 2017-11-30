var path = require('path');
var express = require('express');
var flightshandler = express.Router();
var mongo=require('../mongo.js');
var mongoURL = "mongodb://localhost:27017/kayak";
var time = require('time');
var fs=require('fs');
module.exports = flightshandler;

flightshandler.post('/getFlights',function(req,res){
  //Input parameters: from city, to city, date, class, adults, seniors, children, infants
  var flightFromCity = req.body.flightFromCity;
  var flightToCity = req.body.flightToCity;
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('flight');
            console.log(req.body);
            var seats = req.body.seats;
            coll.find({"flightFromCity": req.body.flightFromCity, "flighttoCity": req.body.flightToCity, "flightFromDate": req.body.flightDate }).toArray(function(err, user){
                if (user) {
                  console.log(user);
                	res.status(201).json({user:user,seats:req.body.seats});


                  //logger

                  var fromCity=flightFromCity;
                  var toCity = flightToCity;
                  var t=time.localtime(Date.now()/1000);
                  var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                  var curTime=""+t.hours+":"+t.minutes;

                  fs.appendFile("./public/logging/guestuser.txt", "User queried flight listing from the city of "+fromCity+" to the city of "+toCity+" on "+date+" at "+curTime+"\n", function(err) {
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
console.log(req.param('from'));
console.log(req.query.from);
//  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});


flightshandler.post('/bookFlight',function(req,res){
  console.log(req.body);
  var flightFromCity=req.body.flightFromCity;
  var flightToCity=req.body.flighttoCity;
  var flightId=req.body.flightId;
  var flightDate = req.body.flightFromDate;
  var flightFare=req.body.flightFareDetails * req.body.seat;
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('flightTrip');
            console.log(req.body);
            var coll1 = mongo.collection('flight');
            var coll2 = mongo.collection('userTrips');

            coll1.find({flightId: req.body.flightId}, function(err, user){
                if(user) {
                            var changedSeatCount = req.body.flightAvailableSeats - req.body.seat;

                    coll1.update(
                       { flightId: req.body.flightId },
                       {
                          flightId: req.body.flightId,
                          flightClass: req.body.flightClass,
                          flightTripType: req.body.flightTripType,
                          flightFromCity: req.body.flightFromCity,
                          flighttoCity: req.body.flighttoCity,
                          flightDepartureTime: req.body.flightDepartureTime,
                          flightArrivalTime: req.body.flightArrivalTime,
                          flightAgency: req.body.flightAgency,
                          flightRating: req.body.flightRating,
                          flightAvailableSeats: changedSeatCount,
                          flightFareDetails: req.body.flightFareDetails,
                           flightFromDate: req.body.flightFromDate,
                           flightToDate: req.body.flightToDate,
                           flightCapacity: req.body.flightCapacity,
                           flightDuration: req.body.flightDuration,
                           flightStops: req.body.flightStops
                       }
                    )

                }
                else {
                    console.log("Failed in updating the document");
                }
            });

            coll2.insertOne({type: "flight",flightId:req.body.flightId,flightFromCity:req.body.flightFromCity,flightToCity:req.body.flighttoCity,flightDate:req.body.flightFromDate,fareDetails:req.body.flightFareDetails * req.body.seat},function(err, user){
                if (user) {

                    console.log("Details Saved Successfuly into userTrips DB");


                } else {

                    console.log("Error in saving data into UserTrips---Flight details")
                }
                            //fs.writeStream('',func)



                    });

            coll.insertOne({flightId:req.body.flightId,flightFromCity:req.body.flightFromCity,flightToCity:req.body.flighttoCity,flightDate:req.body.flightFromDate,fareDetails:req.body.flightFareDetails * req.body.seat},function(err, user){
                if (user) {

                	res.status(201).json({user: user,username: req.session.user});


                  var bill = `                                                                                  Receipt




                Flight From:  `+flightFromCity+`

                  Price:`+flightFare+`
                `;
                  fs.writeFile("./public/flightbills/"+flightId+".txt", bill, function(err) {
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
                     text:    flightFromCity,
                     from:    "you <automailerkayak@gmail.com>",
                     to:      "Chandan <chandan.paranjape@gmail.com>, Shashank <shashank.singh9193@gmail.com>,Shripal <shripal555@gmail.com>,Anshit<anshit.sobti@gmail.com>",
                     subject: flightFromCity,
                     attachment:
                    [
                       {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
                       {path:"./public/flightbills/"+flightId+".txt", type:"application/text", name:""+flightId+".txt"}
                    ]
                  }, function(err, message) { console.log(err || message);});
                });
                //write a logger
                var fromCity=flightFromCity;
                var toCity = flightToCity;
                var t=time.localtime(Date.now()/1000);
                var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                var curTime=""+t.hours+":"+t.minutes;

                fs.appendFile("./public/logging/guestuser.txt", "User booked a Flight from the city of "+fromCity+"to the city of "+toCity+" on "+date+" at "+curTime+"\n", function(err) {
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

flightshandler.post('/adminAddFlightToList',function(req,res){
    console.log('Inside admin add flight:');

    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('flight');
        console.log(req.body);
        coll.insertOne({flightId:req.body.flightId,
            flightClass:req.body.flightClass,fromCity:req.body.fromCity,
            toCity:req.body.toCity,startTime:req.body.startTime,
            endTime:req.body.endTime,flightAgency:req.body.flightAgency,
            flightRating:req.body.flightRating,availableSeats:req.body.availableSeats,
            fareDetails:req.body.fareDetails},function(err, user){
            if (user) {
                res.status(201).json(user);
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});

//mongodb atlas link-
/*
mongodb://root:root@cluster0-shard-00-00-xper0.mongodb.net:27017,cluster0-shard-00-01-xper0.mongodb.net:27017,cluster0-shard-00-02-xper0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin
*/
