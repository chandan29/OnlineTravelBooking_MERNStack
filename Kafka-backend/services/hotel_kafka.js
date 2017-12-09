/*
var hotelCity=req.body.hotelCity;
mongo.connect(mongoURL, function(){
    console.log('Connected to mongo at: ' + mongoURL);
    var coll = mongo.collection('hotel');
    console.log(req.body);
    var rooms = req.body.rooms;
    coll.find({"hotelCity":req.body.hotelCity, "hotelFromDate": req.body.fromDate, "hotelToDate": req.body.toDate}).toArray(function(err, user){
        if (user) {
            res.status(201).json({user:user,rooms:req.body.rooms});

            //logger

            var city=hotelCity;
            var t=time.localtime(Date.now()/1000);
            var date=""+t.month+"/"+t.dayOfMonth+"/2017";
            var curTime=""+t.hours+":"+t.minutes;
            var user="";
            if(req.session.user){
                user=req.session.user;
            }
            else{
                user="guestuser";
            }
            fs.appendFile("./public/logging/"+user+".txt", "User queried hotel listing for the city of "+hotelCity+"|"+date+","+curTime+",hotel,listing\n", function(err) {
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

*/



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
var time = require('time');
var options = {
    min:  0,
    max:  10000,
    integer: true
}

function handle_request(msg, callback) {
    var res = {};
    //console.log("In handle request of flights:" + JSON.stringify(msg));
    if (msg.type == "getHotels") {

        var hotelCity=msg.body.hotelCity;
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('hotel');
            console.log(msg.body);
            console.log(msg.body.rooms);
            var rooms = msg.body.rooms;
            coll.find({"hotelCity":msg.body.hotelCity}).toArray(function(err, user){
                if (user) {
                 //   res.status(201).json({user:user,rooms:msg.body.rooms});
                    res.status = 201;
                    res.value = user;
                    res.rooms = msg.body.rooms;
                    callback(null, res);
                    //logger

                    var city=hotelCity;
                    var t=time.localtime(Date.now()/1000);
                    var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                    var curTime=""+t.hours+":"+t.minutes;
                    var user="";
                    if(msg.session.user){
                        user=msg.session.user;
                    }
                    else{
                        user="guestuser";
                    }
                    fs.appendFile("./public/logging/"+user+".txt", "User queried hotel listing for the city of "+hotelCity+"|"+date+","+curTime+",hotel,listing\n", function(err) {
                        if(err) {
                        //    res.send({0:0});

                        }

                        console.log("The file was saved!");
                    });
                } else {

                    res.status(401).json({wrong:1});
                }
            });
        });



    }

    else if(msg.type == "bookHotel")
    {
        console.log(" we have to check this",msg.body);
        var hotelCity=msg.body["hotelCity"];
        var hotelId=msg.body.hotelId;
        var hotelRate=msg.body.hotelOriginalPrice * msg.body.room;
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('hotelTrip');
            console.log(msg.body);

            var coll1 = mongo.collection('hotel');
            var coll2 = mongo.collection('userTrips');

            coll1.find({hotelId: msg.body.hotelId}, function(err, user){
                if(user) {
                    var changedRoomCount = msg.body.hotelNumberOfRooms - msg.body.room;
                    console.log(msg.body.room);
                    coll1.update(
                        { hotelId: msg.body.hotelId },
                        {
                            hotelId: msg.body.hotelId,
                            hotelFromDate: msg.body.hotelFromDate,
                            hotelToDate: msg.body.hotelToDate,
                            hotelNumberOfRooms: changedRoomCount,
                            hotelNumberOfGuests: msg.body.hotelNumberOfGuests,
                            hotelCity: msg.body.hotelCity,
                            hotelArea: msg.body.hotelArea,
                            hotelReviewType: msg.body.hotelReviewType,
                            hotelNumberOfReviews: msg.body.hotelNumberOfReviews,
                            hotelRating: msg.body.hotelRating,
                            hotelStars: msg.body.hotelStars,
                            hotelAddress: msg.body.hotelAddress,
                            hotelContact: msg.body.hotelContact,
                            hotelCapacity: msg.body.hotelCapacity,
                            hotelAvailability: msg.body.hotelAvailability,
                            hotelOldPrice: msg.body.hotelOldPrice,
                            hotelOriginalPrice: msg.body.hotelOriginalPrice,
                            hotelName: msg.body.hotelName,
                            dummy: "dummy"

                        },
                        { upsert: true }
                    )

                }
                else {
                    console.log("Failed in updating the document");
                }
            });
            var user="";
            if(msg.session.user){
                user=msg.session.user;
            }
            else{
                user="guestuser";
            }
            coll2.insertOne({type: "hotel",tripId:msg.body.hotelId,userEmail:user,hotelId:msg.body.hotelId,fromCity:msg.body.hotelCity,fromDate:msg.body.hotelFromDate,toDate:msg.body.hotelToDate,fareDetails:msg.body.hotelOriginalPrice * msg.body.room},function(err, user){
                if (user) {

                    console.log("Details Saved Successfuly into userTrips DB");


                } else {

                    console.log("Error in saving data into UserTrips---Flight details")
                }
                //fs.writeStream('',func)



            });

            coll.insertOne({hotelId:msg.body.hotelId,fromCity:msg.body.hotelCity,fromDate:msg.body.hotelFromDate,toDate:msg.body.hotelToDate,fareDetails:msg.body.hotelOriginalPrice * msg.body.room},function(err, user){
                if (user) {

                   // res.status(201).json({user: user,username: msg.session.user});
                    res.status = 201;
                    res.value = user;
                    res.username = msg.session.user;
                    callback(null, res);

                    var bill = `                                                                                  Receipt


                                Name:Chandan Paranjape
                                Method of Payment: Credit Card
                                Hotel in:  `+hotelCity+`

                                  Price:`+hotelRate+`
                                `;
                    fs.writeFile("./public/hotelbills/"+hotelId+".txt", bill, function(err) {
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
                            text:    hotelCity,
                            from:    "you <automailerkayak@gmail.com>",
                            to:      "Chandan <chandan.paranjape@gmail.com>, Shashank <shashank.singh9193@gmail.com>,Shripal <shripal555@gmail.com>,Anshit<anshit.sobti@gmail.com>,Swapnil <swapnil.mundhe747@gmail.com>",
                            subject: hotelCity,
                            attachment:
                                [
                                    {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
                                    {path:"./public/hotelbills/"+hotelId+".txt", type:"application/text", name:""+hotelId+".txt"}
                                ]
                        }, function(err, message) { console.log(err || message);});
                    });
                    //write a logger
                    var city=hotelCity;
                    var t=time.localtime(Date.now()/1000);
                    var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                    var curTime=""+t.hours+":"+t.minutes;
                    var user="";
                    if(msg.session.user){
                        user=msg.session.user;
                    }
                    else{
                        user="guestuser";
                    }
                    fs.appendFile("./public/logging/"+user+".txt", "User booked a hotel in the city of "+city+"|"+date+","+curTime+"hotel,buying\n", function(err) {
                        if(err) {
                          //  res.send({0:0});

                        }

                        console.log("The file was saved!");
                    });

                    fs.appendFile("./public/city/"+city+".txt",hotelRate+"\n", function(err) {
                        if(err) {
                         //   res.send({0:0});

                        }

                        console.log("Entry for city saved!");
                    });


                } else {

                    res.status(201).json({wrong:1});
                }
                //fs.writeStream('',func)



            });
        });


    }




    else if(msg.type == ""){

    }
}
exports.handle_request = handle_request;

/*{"hotelCity":msg.body.hotelCity, "hotelFromDate": msg.body.fromDate, "hotelToDate": msg.body.toDate} */
