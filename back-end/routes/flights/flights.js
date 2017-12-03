var path = require('path');
var express = require('express');
var flightshandler = express.Router();
var mongo=require('../mongo.js');
var mongoURL = "mongodb://localhost:27017/kayak";
var time = require('time');
var fs=require('fs');
var kafka = require('../kafka/client');

module.exports = flightshandler;


setDummyEntry = true;
flightshandler.post('/getFlights',function(req,res){
  var redis = require("redis")
/*
      client = redis.createClient();
  /!*if(client.get("fhome") == null) {
      client.set("fhome", parseInt(0));
  }
  *!/

  var promise = new Promise(function(resolve, reject){
        if(setDummyEntry) {

            client.set("fhome", 200, function(err, response){
                if(err) {
                    reject("some error occurred");
                    return;
                }

        setDummyEntry = false;
                resolve("cool");
            })
        } else {
            resolve("cool");
        }
  });

  promise.then(function(){
      client.get("fhome", function(err, reply) {
          if(err){
              client.set("fhome",parseInt(req.body.fhome));
          }
          else{
              var x=parseInt(reply)+parseInt(req.body.fhome);
              //  var x = 2 + parseInt(req.body.fhome);
              client.set("fhome",x);
              console.log("Checking redis:"+x);
          }

      });
  }, function(){
      client.get("fhome", function(err, reply) {
          if(err){
              client.set("fhome",parseInt(req.body.fhome));
          }
          else{
              var x=parseInt(reply)+parseInt(req.body.fhome);
              //  var x = 2 + parseInt(req.body.fhome);
              client.set("fhome",x);
              console.log("Checking redis:"+x);
              res.status(201).json({user: user, seats: req.body.seats});
          }

      });
  });
*/


  //Input parameters: from city, to city, date, class, adults, seniors, children, infants
  kafka.make_request('flights_topic', {type: "getFlights", body: req.body, session: req.session}, function (err, results) {

      if(results){
          console.log("in get kafka flights results");
          res.status(results.status).json({user: results.value, username: req.session.user, seats: results.seats});
      }
  })
                  //  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});


flightshandler.post('/bookFlight',function(req,res) {
    var redis = require("redis"),
        client = redis.createClient();

    client.get("flist", function (err, reply) {
        if (err) {
            client.set("flist", parseInt(req.body.flist));
        }
        else {
            var x = parseInt(reply) + parseInt(req.body.flist);
            client.set("flist", x);
            console.log("Checking redis listing:" + x);
        }
    });


    client.get("fbooking", function (err, reply) {
        if (err) {
            client.set("fbooking", parseInt(req.body.fbooking));
        }
        else {
            var x = parseInt(reply) + parseInt(req.body.fbooking);
            client.set("fbooking", x);
            console.log("Checking redis booking:" + x);
        }
    });

    kafka.make_request('flights_topic', {type: "bookFlight", body: req.body, session: req.session}, function (err, results) {

        if (results) {
            console.log("Booking done through kafka");
            console.log(results.value);
            res.status(results.status).json({user: results.value, username: req.session.user});
            if (err) {
                res.send("error").status(404);
            }


        }

    });
})

    flightshandler.post('/adminAddFlightToList', function (req, res) {
        console.log('Inside admin add flight:');

        mongo.connect(mongoURL, function () {
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('flight');
            console.log(req.body);
            coll.insertOne({
                flightId: req.body.flightId,
                flightClass: req.body.flightClass, fromCity: req.body.fromCity,
                toCity: req.body.toCity, startTime: req.body.startTime,
                endTime: req.body.endTime, flightAgency: req.body.flightAgency,
                flightRating: req.body.flightRating, availableSeats: req.body.availableSeats,
                fareDetails: req.body.fareDetails
            }, function (err, user) {
                if (user) {
                    res.status(201).json(user);
                } else {

                    res.status(401).json({wrong: 1});
                }
            });
        });

    })


//mongodb atlas link-
/*
mongodb://root:root@cluster0-shard-00-00-xper0.mongodb.net:27017,cluster0-shard-00-01-xper0.mongodb.net:27017,cluster0-shard-00-02-xper0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin
*/
