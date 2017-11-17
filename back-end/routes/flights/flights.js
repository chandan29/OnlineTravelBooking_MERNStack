var path = require('path');
var express = require('express');
var flightshandler = express.Router();


module.exports = flightshandler;

flightshandler.get('/getFlights',function(req,res){
  //Input parameters: from city, to city, date, class, adults, seniors, children, infants
console.log(req.param('from'));
console.log(req.query.from);
  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});

flightshandler.get('bookFlight',function(req,res){

});


//mongodb atlas link-
/*
mongodb://root:root@cluster0-shard-00-00-xper0.mongodb.net:27017,cluster0-shard-00-01-xper0.mongodb.net:27017,cluster0-shard-00-02-xper0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin
*/
