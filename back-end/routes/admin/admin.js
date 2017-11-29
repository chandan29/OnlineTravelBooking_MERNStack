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



adminhandler.post('/getRevenuepercity',function(req,res){
    var sj=fs.readFileSync('./public/city/San Jose.txt','utf8').split('\n');
    var sj1=0;
    for(var i=0;i<sj.length-1;i++){

      sj1+=parseInt(sj[i]);
    }

    var sf=fs.readFileSync('./public/city/San Francisco.txt','utf8').split('\n');
    var sf1=0;
    for(var i=0;i<sf.length-1;i++){
      sf1+=parseInt(sf[i]);
    }

    var bs=fs.readFileSync('./public/city/Boston.txt','utf8').split('\n');
    var bs1=0;
    for(var i=0;i<bs.length-1;i++){
      bs1+=parseInt(bs[i]);
    }

    var ch=fs.readFileSync('./public/city/Chicago.txt','utf8').split('\n');
    var ch1=0;
    for(var i=0;i<ch.length-1;i++){
      ch1+=parseInt(ch[i]);
    }

    var da=fs.readFileSync('./public/city/Dallas.txt','utf8').split('\n');
    var da1=0;
    for(var i=0;i<da.length-1;i++){
      da1+=parseInt(da[i]);
    }

    var de=fs.readFileSync('./public/city/Denver.txt','utf8').split('\n');
    var de1=0;
    for(var i=0;i<de.length-1;i++){
      de1+=parseInt(de[i]);
    }

    var la=fs.readFileSync('./public/city/Los Angeles.txt','utf8').split('\n');
    var la1=0;
    for(var i=0;i<la.length-1;i++){
      la1+=parseInt(la[i]);
    }

    var ny=fs.readFileSync('./public/city/New York.txt','utf8').split('\n');
    var ny1=0;
    for(var i=0;i<ny.length-1;i++){
      ny1+=parseInt(ny[i]);
    }

    var se=fs.readFileSync('./public/city/Seattle.txt','utf8').split('\n');
    var se1=0;
    for(var i=0;i<se.length-1;i++){
      se1+=parseInt(se[i]);
    }

    var wa=fs.readFileSync('./public/city/Washington.txt','utf8').split('\n');
    var wa1=0;
    for(var i=0;i<wa.length-1;i++){
      wa1+=parseInt(wa[i]);
    }

    res.status(201).send({arr:[sj1,sf1,bs1,ch1,da1,de1,la1,ny1,se1,wa1]});




});

module.exports = adminhandler;
