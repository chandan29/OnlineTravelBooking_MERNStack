var path = require('path');
var express = require('express');
var flightshandler = express.Router();
var mongo=require('../mongo.js');
var mongoURL = "mongodb://localhost:27017/kayak";
module.exports = flightshandler;

flightshandler.get('/getFlights',function(req,res){
  //Input parameters: from city, to city, date, class, adults, seniors, children, infants
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('carTrip');

            coll.find({"toCity":"San Jose"}).toArray(function(err, user){
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

flightshandler.get('bookFlight',function(req,res){

});


//mongodb atlas link-
/*
mongodb://root:root@cluster0-shard-00-00-xper0.mongodb.net:27017,cluster0-shard-00-01-xper0.mongodb.net:27017,cluster0-shard-00-02-xper0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin
*/
