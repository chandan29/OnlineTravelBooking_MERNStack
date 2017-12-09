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
    console.log("In handle request of cars:" + JSON.stringify(msg));
    if (msg.type == "getCars") {


        var carCity=msg.carCity;
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('car');
            console.log(msg);
           coll.find({"carCity":msg.carCity,"dummy":"dummy"}).toArray(function(err, user){
           // coll.find({"carCity":msg.carCity}).toArray(function(err, user){
               //db.car.find({"carCity":'New York',"carFromDate":'2017-12-01',"carToDate":'2017-12-04'});
                if (user) {
                    //console.log(user);
                    //res.status(201).json(user);
                    console.log("data",user);
                    res.status = 201;
                    res.value = user;
                    callback(null, res);
                    //logger

                    var city=carCity;
                    var t=time.localtime(Date.now()/1000);
                    var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                    var curTime=""+t.hours+":"+t.minutes;
                    var user=msg.session;
                    fs.appendFile("./public/logging/"+user+".txt", "User queried car listing from the city of "+carCity+" on |"+date+","+curTime+",car,listing\n", function(err) {
                        if(err) {
                            //res.status({});
res.status(201).json({wrong:1});
                        }

                        console.log("The file was saved!");
                    });
                } else {

                    res.status(201).json({wrong:1});
                }


            });

        });

    }

    else if(msg.type == "bookCar")
    {

        console.log("book car: ",msg.body);
        var payload=JSON.stringify(msg.body.payload);
        var carCity=msg.body.cartile.carCity;
        var carId=msg.body.cartile.carId;
        var carRate=msg.body.cartile.carOriginalPrice;
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('carTrip');
            var coll1 = mongo.collection('userTrips');
            console.log(msg.body);
            var coll1 = mongo.collection('car');
            coll1.update(
                { carId:msg.body.cartile.carId },
                {
                    "dummy":"not dummy"
                },
                { upsert: true }
            )


            coll1.insertOne({type: "car",carId:msg.body.cartile.carId,userEmail:msg.session,tripId:msg.body.cartile.carId,fromCity:msg.body.cartile.carCity,toCity:msg.body.cartile.carCity,fromDate:msg.body.cartile.carFromDate,toDate:msg.body.cartile.carToDate,fareDetails:msg.body.cartile.carOriginalPrice},function(err, user){
                if (user) {

                    console.log("Details Saved Successfuly into userTrips DB");


                } else {

                    console.log("Error in saving data into UserTrips---Car details")
                }
                //fs.writeStream('',func)



            });




            coll.insertOne({carId:msg.body.cartile.carId,fromCity:msg.body.cartile.carCity,toCity:msg.body.cartile.carCity,fromDate:msg.body.cartile.carFromDate,toDate:msg.body.cartile.carToDate,fareDetails:msg.body.cartile.carOriginalPrice},function(err, user){
                if (user) {

                  //  res.status(201).json({user: user,username: req.session.user});
                    res.status = "201";
                    res.value = user;
                    callback(null, res);
                    console.log("we hae sent the response");
                    var bill = `                                                                                  Receipt



                Name: `+payload.firstName+` `+payload.lastName+`
                Payment form: Credit Card
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
                                    {data:"<html>"+carId+" booked by "+carCity+"</html>", alternative:true},
                                    {path:"./public/carbills/"+carId+".txt", type:"application/text", name:""+carId+".txt"}
                                ]
                        }, function(err, message) { console.log(err || message);});
                    });
                    //write a logger
                    var city=carCity;
                    var t=time.localtime(Date.now()/1000);
                    var date=""+t.month+"/"+t.dayOfMonth+"/2017";
                    var curTime=""+t.hours+":"+t.minutes;
                    var user=msg.session;
                    console.log("USER:"+user);
                    fs.appendFile("./public/logging/"+user+".txt", "User booked a car from the city of "+carCity+"on |"+date+","+curTime+",car,buying\n", function(err) {
                        if(err) {
                          //  res.send({0:0});

                        }

                        console.log("The file was saved!");
                    });
                    fs.appendFile("./public/city/"+carCity+".txt",carRate+"\n", function(err) {
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



        })
    }

    else if(msg.type == ""){

    }
}
exports.handle_request = handle_request;

/*{"carCity":msg.carCity, "carFromDate": msg.carFromDate, "carToDate": msg.carToDate} */
