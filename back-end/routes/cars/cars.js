var path = require('path');
var express = require('express');
var carshandler = express.Router();
var mongo=require('../mongo.js');
var mongoURL = "mongodb://localhost:27017/kayak";
var fs=require('fs');
var time = require('time');
var kafka = require('../kafka/client');

module.exports = carshandler;

carshandler.post('/getCars',function(req,res){
  //Input parameters: from city, from date,to date
  var redis = require("redis"),
      client = redis.createClient();
      client.get("chome", function(err, reply) {
        if(err){
            client.set("chome",parseInt(req.body.chome));
          }
          else{
           //var x=parseInt(reply)+parseInt(req.body.chome);
            var x =  1 + parseInt(req.body.chome);
            client.set("chome",x);
            console.log("Checking redis:"+x);
          }

        });

        var user="";
        if(req.session.user){
          user=req.session.user;
        }
        else{
          user="guestuser";
        }
    kafka.make_request('cars_topic',{type: "getCars", "carCity":req.body.carCity, "carFromDate": req.body.fromDate, "carToDate": req.body.toDate,session:user}, function(err,results){

        if (results) {
            console.log("sucess from kafka");
            console.log(results.value);
            res.status(results.status).json(results.value);
            if (err) {
                res.send({0: 0});
            }

            //console.log("The file was saved!");
        }
        else {
            res.status(201).json({wrong:1});
        }
    });
});


carshandler.post('/bookCar',function(req,res){


          var redis = require("redis"),
              client = redis.createClient();

              client.get("clist", function(err, reply) {
                if(err){
                    client.set("clist",parseInt(req.body.clist));
                  }
                  else{
                    var x=parseInt(reply)+parseInt(req.body.clist);
                    client.set("clist",x);
                    console.log("Checking redis listing:"+x);
                  }
                });


                client.get("cbooking", function(err, reply) {
                  if(err){
                      client.set("cbooking",parseInt(req.body.cbooking));
                    }
                    else{
                      var x=parseInt(reply)+parseInt(req.body.cbooking);
                      client.set("cbooking",x);
                      console.log("Checking redis booking:"+x);
                    }
                  });
                  var user="";
                  if(req.session.user){
                    user=req.session.user;
                  }
                  else{
                    user="guestuser";
                  }


    kafka.make_request('cars_topic', {type: "bookCar", body: req.body,session:user}, function(err, results){

        if(results){
            console.log("Booking done through kafka cars");
            console.log(results.value);
            res.status(results.status).json(results.value);
            if(err){
                res.send("error").status(404);
            }


        }

    })

});



carshandler.post('/receipt',function(req,res){

  var time = require('time');
  var city="San Jose";
  var t=time.localtime(Date.now()/1000);
  var date=""+t.month+"/"+t.dayOfMonth+"/2017";
  var curTime=""+t.hours+":"+t.minutes;

  fs.appendFile("./public/logging/guestuser.txt", "User queried car listing for the city of "+city+" on "+date+" at "+curTime+"\n", function(err) {
    if(err) {
        res.send({0:0});

    }

    console.log("The file was saved!");
    res.send({1:"User queried car listing for the city of "+city+" on "+date+" at "+curTime+"\n"});
  });


    kafka.make_request('cars_topic', {type: "receipt", body: req.body}, function(err, results){

        if(results){
            console.log("Booking done through kafka cars");
            console.log(results.value);
            res.status(results.status).json(results.value);
            if(err){
                res.send("error").status(404);
            }


        }

    })


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
