var mongo = require("./mongo");
var multer=require('multer');
var multer=require('multer');
var shell=require('shelljs');
var bcrypt=require('bcrypt');
var fs=require('fs');
var path=require('path');
var glob = require('glob');
var rn = require('random-number');
var session = require('client-sessions');
var mongoURL = "mongodb://localhost:27017/kayak";
//var time = require('time');
var options = {
    min:  0,
    max:  10000,
    integer: true
}

function handle_request(msg, callback) {
    var res = {};
    console.log("In handle request of cars:" + JSON.stringify(msg));
    if (msg.type = "getCars") {
        mongo.connect(mongoURL, function () {
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('car');
            //  console.log(req.body);
            coll.find({"carCity": msg.carCity}).toArray(function (err, user) {
                if (user) {
                    console.log(user);
                    // res.status(201).json(user);
                    res.status = "201";
                    res.value = user;
                    callback(null, res);


                    //logger
                    /*
                                    var city= msg.carCity;
                                    var t=time.localtime(Date.now()/1000);
                                    var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                                    var curTime=""+t.hours+":"+t.minutes;

                                    fs.appendFile("./public/logging/guestuser.txt", "User queried car listing for the city of "+msg.carCity+" on "+date+" at "+curTime+"\n", function(err) {
                                        if(err) {
                                            res.send({0:0});
                                        }
                                        console.log("The file was saved!");
                                    });
                                } else {

                                    res.status(201).json({wrong:1});*/
                }


            });
            //res.value = {message: "Login failed",status: 401};


        });

    }

    else if(msg.type == "bookCar")
    {
        /*console.log(req.body);
        var carCity=req.body.cartile.carCity;
        var carId=req.body.cartile.carId;
        var carRate=req.body.cartile.carRate*/
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('carTrip');
            console.log(req.body);
            coll.insertOne({carId:msg.body.cartile.carId,fromCity:msg.body.cartile.carCity,toCity:msg.body.cartile.carCity,fromDate:msg.body.fromDate,toDate:msg.body.toDate,fareDetails:msg.body.cartile.carRate},function(err, user){
                if (user) {
                    console.log(user);
                    // res.status(201).json(user);
                    res.status = "201";
                    res.value = user;
                    callback(null, res);


                    /*
                                        var bill = `                                                                                  Receipt




                                    City:  `+carCity+`

                                      Price:`+carRate+`
                                    `;
                                        fs.writeFile("./public/carbills/"+carId+".txt", bill, function(err) {
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
                                                text:    carCity,
                                                from:    "you <automailerkayak@gmail.com>",
                                                to:      "Chandan <chandan.paranjape@gmail.com>, Shashank <shashank.singh9193@gmail.com>,Shripal <shripal555@gmail.com>,Anshit<anshit.sobti@gmail.com>",
                                                subject: carCity,
                                                attachment:
                                                    [
                                                        {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
                                                        {path:"./public/carbills/"+carId+".txt", type:"application/text", name:""+carId+".txt"}
                                                    ]
                                            }, function(err, message) { console.log(err || message);});
                                        });
                                        //write a logger
                                        var city=carCity;
                                        var t=time.localtime(Date.now()/1000);
                                        var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                                        var curTime=""+t.hours+":"+t.minutes;

                                        fs.appendFile("./public/logging/guestuser.txt", "User booked a car from the city of "+city+" on "+date+" at "+curTime+"\n", function(err) {
                                            if(err) {
                                                res.send({0:0});

                                            }

                                            console.log("The file was saved!");
                                        });



                                    } else {

                                        res.status(201).json({wrong:1});*/
                }
                //fs.writeStream('',func)



            });
        });



    }

    else if(msg.type == ""){

    }
}
exports.handle_request = handle_request;