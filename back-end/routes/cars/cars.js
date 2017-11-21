var path = require('path');
var express = require('express');
var carshandler = express.Router();
var mongo=require('../mongo.js');
var mongoURL = "mongodb://localhost:27017/kayak";

module.exports = carshandler;

carshandler.get('/getCars',function(req,res){
  //Input parameters: from city, from date,to date
  mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('car');

            coll.find({"carCity":"New York"}).toArray(function(err, user){
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
