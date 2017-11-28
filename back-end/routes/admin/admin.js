var path = require('path');
var express = require('express');
var adminhandler = express.Router();
var mongo=require('../mongo.js');
var mongoURL = "mongodb://localhost:27017/kayak";
var fs=require('fs');
var time = require('time');

adminhandler.post('/getAdminBills',function(req,res){
    //Input parameters: from city, from date,to date
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('userTrips');
        console.log(req.body);
        console.log("Username for session :",req.session.user);
        coll.find({username: req.session.user}).toArray(function(err, user){
            if (user) {
                console.log(user);
                res.json({status:201,user:user, username: req.session.user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });
    console.log(req.param('from'));
    console.log(req.query.from);
//  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});

module.exports = adminhandler;
