var path = require('path');
var express = require('express');
var flightshandler = express.Router();
var mongo=require('../mongo.js');
var mongoURL = "mongodb://localhost:27017/kayak";
var time = require('time');
var fs=require('fs');
var kafka = require('../kafka/client');
var mysql      = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'kayak'
});

module.exports = flightshandler;


setDummyEntry = true;
flightshandler.post('/getFlights',function(req,res){
  var redis = require("redis")

      client = redis.createClient();
      client.get("fhome", function(err, reply) {
        if(err){
            client.set("fhome",parseInt(req.body.fhome));
          }
          else{
           //var x=parseInt(reply)+parseInt(req.body.chome);
            var x =  1 + parseInt(req.body.fhome);
            client.set("fhome",x);
            console.log("Checking redis:"+x);
          }

        });



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


    if(req.session.user) {
        user = req.session.user;
        console.log("user session: ",req.session.user);
        console.log("credit card:",req.body.payload.creditCard, "country: ",req.body.payload.userCountry,"city:", req.body.payload.userCity);

        pool.getConnection(function (err, connection) {
            connection.query("update users set creditCard='" + req.body.payload.creditCard + "',userAddress='" + req.body.payload.userAddress + "', userCountry='" + req.body.payload.userCountry + "',userState='" + req.body.payload.userState + "', userCity='" + req.body.payload.userCity + "' where emailId = '"+ req.session.user +"'", function (error, results, fields) {
//            connection.query("update users set creditCard='" + req.body.creditCard + "',contact='" + req.body.contact + "',dateOfBirth='" + req.body.dateOfBirth + "',userCountry='" + req.body.userCountry + "',userCity='" + req.body.userCity + "' where emailId = '"+ req.session.user +"'", function (error, results, fields) {
                if(results.length >= 0)
                    console.log("success");                                                                                                                             //userAddress
                connection.release();

            });
        });
    }

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
