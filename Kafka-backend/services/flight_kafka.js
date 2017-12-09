

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
    if (msg.type == "getFlights") {

        var flightFromCity = msg.body.flightFromCity;
        var flightToCity = msg.body.flightToCity;
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('flight');
            console.log(msg.body);
            var seats = msg.body.seats;
            console.log("Seats are:"+msg.body.seats);
            coll.find({}).toArray(function(err, user){
                if (user) {
                    console.log(user);
                  //  res.status(201).json({user:user,seats:msg.body.seats});
                    console.log("data in get flights: ",user);
                    res.status = 201;
                    res.value = user;
                    res.seats = msg.body.seats;
                    callback(null, res);

                    //logger

                    var fromCity=flightFromCity;
                    var toCity = flightToCity;
                    var t=time.localtime(Date.now()/1000);
                    var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                    var curTime=""+t.hours+":"+t.minutes;
                    var user1="";
                    if(msg.session.user){
                        user1=msg.session.user;
                    }
                    else{
                        user1="guestuser";
                    }
                    fs.appendFile("./public/logging/"+user1+".txt", "User queried flight listing from the city of "+fromCity+" to the city of "+toCity+"|"+date+","+curTime+",flight,listing\n", function(err) {
                        if(err) {
                          //  res.send({0:0});

                        }

                        console.log("The file was saved!");
                    });

                } else {

                    res.status(401).json({wrong:1});
                }
            });
        });


    }

    else if(msg.type == "bookFlight")
    {
        console.log("Flight tile:\n"+JSON.stringify(msg.body));
        var flightFromCity=msg.body.flightFromCity;
        var flightToCity=msg.body.flightToCity;
        var flightId=msg.body.flightId;
        var flightDate = msg.body.flightFromDate;
        var flightFare=msg.body.flightFareDetails * msg.body.seat;
        console.log("in book flight");
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('flightTrip');
            console.log(msg.body);
            var coll1 = mongo.collection('flight');
            var coll2 = mongo.collection('userTrips');

            coll1.find({flightId: msg.body.flightId}, function(err, user){
                if(user) {
                    var changedSeatCount = msg.body.flightAvailableSeats - msg.body.seat;
                    console.log(msg.body.seat);
                    coll1.update(
                        { flightId: msg.body.flightId },
                        {
                            flightId: msg.body.flightId,
                            flightClass: msg.body.flightClass,
                            flightTripType: msg.body.flightTripType,
                            flightFromCity: msg.body.flightFromCity,
                            flightToCity: msg.body.flightToCity,
                            flightDepartureTime: msg.body.flightDepartureTime,
                            flightArrivalTime: msg.body.flightArrivalTime,
                            flightAgency: msg.body.flightAgency,
                            flightRating: msg.body.flightRating,
                            flightAvailableSeats: msg.body.flightAvailableSeats - msg.body.seat,
                            flightFareDetails: msg.body.flightFareDetails,
                            flightFromDate: msg.body.flightFromDate,
                            flightToDate: msg.body.flightToDate,
                            flightCapacity: msg.body.flightCapacity,
                            flightDuration: msg.body.flightDuration,
                            flightStops: msg.body.flightStops
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
            coll2.insertOne({type: "flight",tripId:msg.body.flightId,userEmail:user,flightId:msg.body.flightId,flightFromCity:msg.body.flightFromCity,fromCity:msg.body.flightFromCity,flightToCity:msg.body.flightToCity,flightDate:msg.body.flightFromDate,toDate:msg.body.flightFromDate,fromDate:msg.body.flightFromDate,fareDetails:msg.body.flightFareDetails * msg.body.seat},function(err, user){
                if (user) {

                    console.log("Details Saved Successfuly into userTrips DB");


                } else {

                    console.log("Error in saving data into UserTrips---Flight details")
                }
                //fs.writeStream('',func)



            });

            coll.insertOne({flightId:msg.body.flightId,fromDate:msg.body.flightFromDate,toDate:msg.body.flightFromDate,fromCity:msg.body.flightFromCity,flightFromCity:msg.body.flightFromCity,flightToCity:msg.body.flighttoCity,flightDate:msg.body.flightFromDate,fareDetails:msg.body.flightFareDetails * msg.body.seat},function(err, user){
                if (user) {

                    //res.status(201).json({user: user,username: msg.session.user});
                    console.log("data",user);
                    res.status = 201;
                    res.value = user;
                    callback(null, res);


                    var bill = `                                                                                  Receipt




                                Flight From:  `+flightFromCity+`

                                  Price:`+flightFare+`
                                `;
                    fs.writeFile("./public/flightbills/"+flightId+".txt", bill, function(err) {
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
                            text:    flightFromCity,
                            from:    "you <automailerkayak@gmail.com>",
                            to:      "Chandan <chandan.paranjape@gmail.com>, Shashank <shashank.singh9193@gmail.com>,Shripal <shripal555@gmail.com>,Anshit<anshit.sobti@gmail.com>,Swapnil <swapnil.mundhe747@gmail.com>",
                            subject: flightFromCity,
                            attachment:
                                [
                                    {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
                                    {path:"./public/flightbills/"+flightId+".txt", type:"application/text", name:""+flightId+".txt"}
                                ]
                        }, function(err, message) { console.log(err || message);});
                    });
                    //write a logger
                    var fromCity=flightFromCity;
                    var toCity = flightToCity;
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
                    fs.appendFile("./public/logging/"+user+".txt", "User booked a Flight from the city of "+fromCity+"to the city of "+toCity+"|"+date+","+curTime+",flight,buying\n", function(err) {
                        if(err) {
                            // res.send({0:0});

                        }
                        console.log("The file was saved!");
                    });


                    fs.appendFile("./public/city/"+fromCity+".txt",flightFare+"\n", function(err) {
                        if(err) {
                            //    res.send({0:0});

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

/*{"flightFromCity": msg.body.flightFromCity, "flightToCity": msg.body.flightToCity,"flightToDate":msg.body.flightDate } */

/*{"flightFromCity": msg.body.flightFromCity, "flightToCity": msg.body.flightToCity,"flightToDate":msg.body.flightDate } */
