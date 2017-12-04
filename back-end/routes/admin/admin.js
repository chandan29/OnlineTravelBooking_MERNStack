var path = require('path');
var express = require('express');
var multer = require('multer');
var glob = require('glob');
var adminhandler = express.Router();
var mongo=require('../mongo.js');
var mysql      = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'kayak'
});

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
        coll.find({userEmail: req.session.user}).toArray(function(err, user){
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

{/******************************************** ADMIN SWAPNIL APIs START HERE   ***************************************************/}

{/********************************************  ADMIN BILL APIs   ***************************************************/}

adminhandler.post('/getAdminBills2',function(req,res){
    //Input parameters: from city, from date,to date
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('userTrips');
        console.log(req.body);
        coll.find({}).toArray(function(err, user){
            if (user) {
                console.log(user);
                res.json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });
    console.log(req.param('from'));
    console.log(req.query.from);
//  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});


adminhandler.post('/getAdminBillDetail',function(req,res){
  mongo.connect(mongoURL, function(){
         console.log('Connected to mongo at: ' + mongoURL);

         if(req.body.type==='car') {
             var coll = mongo.collection('carTrip');
             console.log(req.body);
             coll.find({carId: parseInt(req.body.tripId)}).toArray(function (err, user) {
                 if (user) {
                     console.log(user);
                     res.json({status: 201, user: user[0]});
                 } else {

                     res.json({status: 401});
                 }
             });
         }

         else if(req.body.type==='hotel'){
             var coll = mongo.collection('hotelTrip');
             console.log(req.body);
             coll.find({hotelId: parseInt(req.body.tripId)}).toArray(function (err, user) {
                 if (user) {
                     console.log(user);
                     res.json({status: 201, user: user[0]});
                 } else {

                     res.json({status: 401});
                 }
             });
         }

         else if(req.body.type==='flight'){
             var coll = mongo.collection('flightTrip');
             console.log(req.body);
             coll.find({flightId: req.body.tripId}).toArray(function (err, user) {
                 if (user) {
                     console.log(user);
                     res.json({status: 201, user: user[0]});
                 } else {

                     res.json({status: 401});
                 }
             });
         }

     });
});

{/********************************************  ADMIN USER APIs   ***************************************************/}


/*
adminhandler.post('/getAdminUsers',function(req,res){
    //Input parameters: from city, from date,to date
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('userDetails');
        console.log(req.body);
        coll.find({}).toArray(function(err, user){
            if (user) {
                console.log(user);
                res.json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });
    console.log(req.param('from'));
    console.log(req.query.from);
//  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});
*/


/*
adminhandler.post('/getAdminUserDetail',function(req,res){
    //Input parameters: from city, from date,to date

    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('userDetails');
        console.log(req.body);
        coll.findOne({userId:parseInt(req.body.userId)},function(err, user){
            if (user) {
                res.json({status:201,user:user});

            } else {

                res.status(401).json({wrong:1});

            }
        });
    });

});
*/

/*
adminhandler.post('/modifyAdminUserDetail',function(req,res){
    console.log('Inside admin modify user:');

    mongo.connect(mongoURL, function() {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('userDetails');
        console.log(req.body);
        coll.updateOne({userId:parseInt(req.body.userId)},{$set: {address:req.body.address,city:req.body.city,
            state:req.body.state,zipCode:req.body.zipCode,
            phoneNumber:req.body.phoneNumber}},function(err, user){
            if (user) {
                res.status(201).json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});
*/


/*
adminhandler.post('/deleteAdminUser',function(req,res){
    console.log('Inside admin delete user:');

    mongo.connect(mongoURL, function() {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('userDetails');
        console.log(req.body);
        coll.remove({userId:parseInt(req.body.userId)},function(err, user){
            if (user) {
                res.status(201).json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});
*/

{/******************************************** ADMIN CAR APIs   ***************************************************/}

adminhandler.post('/getAdminCarArray',function(req,res){
    //Input parameters: from city, from date,to date
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('car');
        console.log(req.body);
        coll.find({}).toArray(function(err, user){
            if (user) {
                console.log(user);
                res.json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });
    console.log(req.param('from'));
    console.log(req.query.from);
//  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});

adminhandler.post('/deleteCarFromList',function(req,res){
    console.log('Inside admin delete car:');

    mongo.connect(mongoURL, function() {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('car');
        console.log(req.body);
        coll.remove({carId:parseInt(req.body.carId)},function(err, user){
            if (user) {
                res.status(201).json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});


adminhandler.post('/adminAddCarToList',function(req,res){
    console.log('Inside admin add car:');

    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('car');
        console.log(req.body);
        coll.insertOne({carId: parseInt(req.body.carId),
        carType: req.body.carType,
        carCity: req.body.carCity,
        carFromDate:req.body.carFromDate,
        carToDate:req.body.carToDate,
        carAgency: req.body.carAgency,
        carAgencyAddress: req.body.carAgencyAddress,
        carAgencyContact: req.body.carAgencyContact,
        carCapacity: req.body.carCapacity,
        carAvailability: req.body.carAvailability,
        carRating: req.body.carRating,
        carOldPrice:req.body.carOldPrice,
        carOriginalPrice:req.body.carOriginalPrice,
        carName:req.body.carName,
        carBags:req.body.carBags,
        carDoors:req.body.carDoors,
        carColor:req.body.carColor,
        carClass:req.body.carClass,
        carMode:req.body.carMode,
        pickUpLocation:req.body.pickUpLocation,
        dropOffLocation:req.body.dropOffLocation,
        carNumber:req.body.carNumber},function(err, user){
            if (user) {
                res.status(201).json(user);
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});


adminhandler.post('/adminModifyCarToList',function(req,res){
    console.log('Inside admin modify car:');

    mongo.connect(mongoURL, function() {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('car');
        console.log(req.body);
        coll.updateOne({carId:parseInt(req.body.carId)},{$set: {carType: req.body.carType,
        carCity: req.body.carCity,
        carFromDate:req.body.carFromDate,
        carToDate:req.body.carToDate,
        carAgency: req.body.carAgency,
        carAgencyAddress: req.body.carAgencyAddress,
        carAgencyContact: req.body.carAgencyContact,
        carCapacity: req.body.carCapacity,
        carAvailability: req.body.carAvailability,
        carRating: req.body.carRating,
        carOldPrice:req.body.carOldPrice,
        carOriginalPrice:req.body.carOriginalPrice,
        carName:req.body.carName,
        carBags:req.body.carBags,
        carDoors:req.body.carDoors,
        carColor:req.body.carColor,
        carClass:req.body.carClass,
        carMode:req.body.carMode,
        pickUpLocation:req.body.pickUpLocation,
        dropOffLocation:req.body.dropOffLocation,
        carNumber:req.body.carNumber}},function(err, user){
            if (user) {
                res.status(201).json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});

adminhandler.post('/getAdminCars',function(req,res){
    //Input parameters: from city, from date,to date

    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('car');
        console.log("car fetch:",req.body);
        coll.findOne({carId:parseInt(req.body.carId)},function(err, user){
            if (user) {
                res.status(201).json(user);

            } else {

                res.status(401).json({wrong:1});

            }
        });
    });

});

{/******************************************** ADMIN FLIGHT APIs   ***************************************************/}

adminhandler.post('/getAdminFlightArray',function(req,res){
    //Input parameters: from city, from date,to date
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('flight');
        console.log(req.body);
        coll.find({}).toArray(function(err, user){
            if (user) {
                console.log(user);
                res.json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });
    console.log(req.param('from'));
    console.log(req.query.from);
//  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});

adminhandler.post('/deleteFlightFromList',function(req,res){
    console.log('Inside admin delete flight:');

    mongo.connect(mongoURL, function() {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('flight');
        console.log(req.body);
        coll.remove({flightId:req.body.flightId},function(err, user){
            if (user) {
                res.status(201).json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});

adminhandler.post('/adminAddFlightToList',function(req,res){
    console.log('Inside admin add flight:');

    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('flight');
        console.log(req.body);
        coll.insertOne({flightId:req.body.flightId,
            flightClass: req.body.flightClass,
            flightAgency: req.body.flightAgency,
            flightRating: req.body.flightRating,
            flightAvailableSeats: req.body.flightAvailableSeats,
            flightFareDetails: req.body.flightFareDetails,
            flightTripType:req.body.flightTripType,
            flightFromCity:req.body.flightFromCity,
            flightToCity:req.body.flightToCity,
            flightDepartureTime:req.body.flightDepartureTime,
            flightArrivalTime:req.body.flightArrivalTime,
            flightFromDate:req.body.flightFromDate,
            flightToDate:req.body.flightToDate,
            flightCapacity:req.body.flightCapacity,
            flightDuration:req.body.flightDuration,
            flightStops:req.body.flightStops},function(err, user){
            if (user) {
                res.status(201).json(user);
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});


adminhandler.post('/getAdminFlights',function(req,res){
    //Input parameters: from city, from date,to date

    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('flight');
        console.log(req.body);
        coll.findOne({flightId:req.body.flightId},function(err, user){
            if (user) {
                res.status(201).json(user);
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});

//mongodb atlas link-
/*
mongodb://root:root@cluster0-shard-00-00-xper0.mongodb.net:27017,cluster0-shard-00-01-xper0.mongodb.net:27017,cluster0-shard-00-02-xper0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin
*/

adminhandler.post('/adminModifyFlightToList',function(req,res){
    console.log('Inside admin modify flight:');

    mongo.connect(mongoURL, function() {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('flight');
        console.log(req.body);
        coll.updateOne({flightId:req.body.flightId},{$set: {flightClass:req.body.flightClass,fromCity:req.body.fromCity,
                toCity:req.body.toCity,startTime:req.body.startTime,
                endTime:req.body.endTime,flightAgency:req.body.flightAgency,
                flightRating:req.body.flightRating,availableSeats:req.body.availableSeats,
                fareDetails:req.body.fareDetails}},function(err, user){
            if (user) {
                res.status(201).json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});

{/******************************************** ADMIN HOTEL APIs   ***************************************************/}

adminhandler.post('/getAdminHotelArray',function(req,res){
    //Input parameters: from city, from date,to date
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('hotel');
        console.log(req.body);
        coll.find({}).toArray(function(err, user){
            if (user) {
                console.log(user);
                res.json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });
    console.log(req.param('from'));
    console.log(req.query.from);
//  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});


adminhandler.post('/deleteHotelFromList',function(req,res){
    console.log('Inside admin delete hotel:');

    mongo.connect(mongoURL, function() {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('hotel');
        console.log(req.body);
        coll.remove({hotelId:parseInt(req.body.hotelId)},function(err, user){
            if (user) {
                res.status(201).json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});

adminhandler.post('/adminAddHotelToList',function(req,res){
    console.log('Inside admin add hotel:');

    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('hotel');
        console.log(req.body);
        coll.insertOne({hotelId: parseInt(req.body.hotelId),
            hotelName: req.body.hotelName,
            hotelFromDate:req.body.hotelFromDate,
            hotelToDate:req.body.hotelToDate,
            hotelNumberOfGuests: req.body.hotelNumberOfGuests,
            hotelNumberOfRooms: req.body.hotelNumberOfRooms,
            hotelCity: req.body.hotelCity,
            hotelArea: req.body.hotelArea,
            hotelRating: req.body.hotelRating,
            hotelStars: req.body.hotelStars,
            hotelAddress: req.body.hotelAddress,
            hotelContact: req.body.hotelContact,
            hotelCapacity: req.body.hotelCapacity,
            hotelAvailability:req.body.hotelAvailability,
            hotelOldPrice:req.body.hotelOldPrice,
            hotelReviewType:req.body.hotelReviewType,
            hotelNumberOfReviews:req.body.hotelNumberOfReviews,
            hotelOriginalPrice: req.body.hotelOriginalPrice},function(err, user){
            if (user) {
                res.status(201).json(user);
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});

adminhandler.post('/getAdminHotels',function(req,res){
    //Input parameters: from city, from date,to date

    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('hotel');
        console.log(req.body);
        coll.findOne({hotelId:parseInt(req.body.hotelId)},function(err, user){
            if (user) {
                res.status(201).json(user);
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});


adminhandler.post('/adminModifyHotelToList',function(req,res){
    console.log('Inside admin modify hotel:');

    mongo.connect(mongoURL, function() {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('hotel');
        console.log(req.body);
        coll.updateOne({hotelId:parseInt(req.body.hotelId)},{$set: {hotelName: req.body.hotelName,
                hotelFromDate:req.body.hotelFromDate,
                hotelToDate:req.body.hotelToDate,
                hotelNumberOfGuests: req.body.hotelNumberOfGuests,
                hotelNumberOfRooms: req.body.hotelNumberOfRooms,
                hotelCity: req.body.hotelCity,
                hotelArea: req.body.hotelArea,
                hotelRating: req.body.hotelRating,
                hotelStars: req.body.hotelStars,
                hotelAddress: req.body.hotelAddress,
                hotelContact: req.body.hotelContact,
                hotelCapacity: req.body.hotelCapacity,
                hotelAvailability:req.body.hotelAvailability,
                hotelOldPrice:req.body.hotelOldPrice,
                hotelReviewType:req.body.hotelReviewType,
                hotelNumberOfReviews:req.body.hotelNumberOfReviews,
                hotelOriginalPrice: req.body.hotelOriginalPrice}},function(err, user){
            if (user) {
                res.status(201).json({status:201,user:user});
            } else {

                res.status(401).json({wrong:1});
            }
        });
    });

});
{/******************************************** ADMIN USER PROFILE APIs   ***************************************************/}


var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        var userPath=req.session.user;
        console.log('inside multer=>userpath=>',userPath);
        cb(null, './public/Userfiles/' + userPath + '/');
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname);
    }
});


var upload = multer({storage: storage});


adminhandler.post('/upload', upload.single('mypic'), function (req, res, next) {
    //  var userPath = 'q@q.com';
    console.log("user is:",req.session.user);
    var userPath = req.session.user;
    console.log('In upload router call=>Req.body=> backend upload file session Userpath=>', userPath);

    //console.log('req:',req);
    console.log('req.body',req.body);
    console.log('res in upload post:=>',res.body);

    res.status(204).end();
});

adminhandler.get('/getImg', function (req, res, next) {
    console.log("Im inside the getimage=>session Username=>", req.session.user);
    console.log(' Get Image=>Username session:', req.session.user);
    var resArr = [];
    var userPath=req.session.user;
    glob('public/Userfiles/' + userPath + '/' + '*', function (er, files) {

        var userPath=req.session.user;
        var resArr = files.map(function (file) {
            var imgJSON = {};
            console.log('file at getImg map Start=>:', file);
            imgJSON.img = 'Userfiles/' + userPath + '/' + file.split('/')[3];
            console.log('imgJson.img:', imgJSON.img);
            imgJSON.cols = 2;
            imgJSON.myfileName= file.toString().split('/')[3];
            return imgJSON;
            console.log('file at getImg map end=>:', file);
        });

        console.log('resArr:', resArr);
        var objSession= req.session.user;
        resObj={resArray: resArr, objectSession: objSession};

        console.log('resObj:', resObj);

        res.status(200).send(resObj);
    });

});
{/******************************************** ADMIN SWAPNIL APIs END HERE   ***************************************************/}









adminhandler.post('/getRevenuepercity',function(req,res){
    var sj=fs.readFileSync('../Kafka-backend/public/city/San Jose.txt','utf8').split('\n');
    var sj1=0;
    for(var i=0;i<sj.length-1;i++){

        sj1+=parseInt(sj[i]);
    }

    var sf=fs.readFileSync('../Kafka-backend/public/city/San Francisco.txt','utf8').split('\n');
    var sf1=0;
    for(var i=0;i<sf.length-1;i++){
        sf1+=parseInt(sf[i]);
    }

    var bs=fs.readFileSync('../Kafka-backend/public/city/Boston.txt','utf8').split('\n');
    var bs1=0;
    for(var i=0;i<bs.length-1;i++){
        bs1+=parseInt(bs[i]);
    }

    var ch=fs.readFileSync('../Kafka-backend/public/city/Chicago.txt','utf8').split('\n');
    var ch1=0;
    for(var i=0;i<ch.length-1;i++){
        ch1+=parseInt(ch[i]);
    }

    var da=fs.readFileSync('../Kafka-backend/public/city/Dallas.txt','utf8').split('\n');
    var da1=0;
    for(var i=0;i<da.length-1;i++){
        da1+=parseInt(da[i]);
    }

    var de=fs.readFileSync('../Kafka-backend/public/city/Denver.txt','utf8').split('\n');
    var de1=0;
    for(var i=0;i<de.length-1;i++){
        de1+=parseInt(de[i]);
    }

    var la=fs.readFileSync('../Kafka-backend/public/city/Los Angeles.txt','utf8').split('\n');
    var la1=0;
    for(var i=0;i<la.length-1;i++){
        la1+=parseInt(la[i]);
    }

    var ny=fs.readFileSync('../Kafka-backend/public/city/New York.txt','utf8').split('\n');
    var ny1=0;
    for(var i=0;i<ny.length-1;i++){
        ny1+=parseInt(ny[i]);
    }

    var se=fs.readFileSync('../Kafka-backend/public/city/Seattle.txt','utf8').split('\n');
    var se1=0;
    for(var i=0;i<se.length-1;i++){
        se1+=parseInt(se[i]);
    }

    var wa=fs.readFileSync('../Kafka-backend/public/city/Washington.txt','utf8').split('\n');
    var wa1=0;
    for(var i=0;i<wa.length-1;i++){
        wa1+=parseInt(wa[i]);
    }

    res.status(201).send({arr:[sj1,sf1,bs1,ch1,da1,de1,la1,ny1,se1,wa1]});




});



adminhandler.post('/getClicksPerPage',function(req,res){
    var redis = require("redis"),
        client = redis.createClient();
    client.get('chome',function(err,reply){
        var chome=parseInt(reply);
        client.get('clist',function(err1,reply1){
            var clist=parseInt(reply1);
            client.get('cbooking',function(err2,reply2){
                var cbooking=parseInt(reply2);
                client.get('hhome',function(err3,reply3){
                    var hhome=parseInt(reply3);
                    client.get('hlist',function(err4,reply4){
                        var hlist=parseInt(reply4);
                        client.get('hbooking',function(err5,reply5){
                            var hbooking=parseInt(reply5);
                            client.get('fhome',function(err6,reply6){
                                var fhome=parseInt(reply6);
                                client.get('flist',function(err7,reply7){
                                    var flist=parseInt(reply7);
                                    client.get('fbooking',function(err8,reply8){
                                        var fbooking=parseInt(reply8);
                                        res.status(201).send({arr:[chome,hhome,fhome,clist,hlist,flist,cbooking,hbooking,fbooking]});
                                    });
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});

adminhandler.post('/getClickStream',function(req,res){
    var redis = require("redis"),
        client = redis.createClient();
        client.get("a", function(err, reply) {
         client.get("b", function(err1, reply1) {
             client.get("c", function(err2, reply2) {
                 client.get("d", function(err3, reply3) {
                        res.status(201).send({arr3:[parseInt(reply),parseInt(reply1),parseInt(reply2),parseInt(reply3)]});
                 });
             });
         });
          });

});
adminhandler.post('/getTrace',function(req,res){
    var user="";
    if(req.session.user){
        user=req.session.user;
    }
    else{
        user="guestuser";
    }
    var file=fs.readFileSync('../Kafka-backend/public/logging/'+user+'.txt','utf8').split('\n');
    var index=0;
    for(var i=file.length-1;i>=0;i--){
        console.log(i+"=>"+file[i]);
        var x=file[i].split(',');
        x=x[x.length-1];
        if(x.includes('login')){
            index=i;
            break;
        }
    }
    var payload=[];
    for(var i=index;i<file.length-1;i++){

        var x=file[i].split('|');
        payload.push(x[x.length-1]);
    }
    res.status(201).send({arr:payload});

});

adminhandler.post('/getTenProperties',function(req,res){
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('car');

        coll.find({},{carAgency:1,carRating:1,_id:0}).sort({carRating:-1}).limit(10).toArray(function(err, user){
            var cars=user;
            coll1=mongo.collection('flight');
            coll1.find({},{flightAgency:1,flightRating:1,_id:0}).sort({flightRating:-1}).limit(10).toArray(function(err1, user1){
                var flights=user1;
                coll2=mongo.collection('hotel');
                coll2.find({},{hotelName:1,hotelRating:1,_id:0}).sort({hotelRating:-1}).limit(10).toArray(function(err2, user2){
                    var hotels=user2;
                    res.status(201).send({cars:cars,hotels:hotels,flights:flights});
                });
            });
        });
    });
});

adminhandler.post('/getCityWiseRatings',function(req,res){
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('car');

        coll.find({"carCity":"San Jose"},{carRating:1,_id:0}).toArray(function(err, user){
            var car=user;
            var coll1=mongo.collection('hotel');
            coll1.find({"hotelCity":"San Jose"},{hotelRating:1,_id:0}).toArray(function(err1,user1){
                var hotel=user1;
                var coll2=mongo.collection('flight');
                coll2.find({"flightFromCity":"San Jose"},{flightRating:1,_id:0}).toArray(function(err2,user2){
                    var flight=user2;
                    var flightavgsj=0;
                    for(var i=0;i<flight.length;i++){
                        flightavgsj+=flight[0].flightRating;
                    }
                    flightavgsj=Math.floor(flightavgsj/flight.length);

                    var hotelavgsj=0;
                    for(var i=0;i<hotel.length;i++){
                        hotelavgsj+=hotel[0].hotelRating;
                    }
                    hotelavgsj=Math.floor(hotelavgsj/hotel.length)/2;

                    var caravgsj=0;
                    for(var i=0;i<car.length;i++){
                        caravgsj+=car[0].carRating;
                    }
                    caravgsj=Math.floor(caravgsj/car.length);

                    //res.status(201).send(flightavgsj,caravgsj,hotelavgsj});
                })
            })
        });
    });

});


adminhandler.post('/getUserDetails',function(req,res){
    var user="";
    if(req.session.user){
        user=req.session.user;
        pool.getConnection(function(err, connection) {
            connection.query("select * from users where emailId='"+req.session.user+"'", function (error, results, fields) {
                connection.release();
                if (results.length>=1){
                    console.log(JSON.stringify(results));

                    res.status(201).send({msg:results[0]});
                }
                else{
                    res.status(401).send({status:401,msg:"User details not found"});
                }

            })

        })
    }
    else{
        res.status(300).send({msg:"You need to be signed in to view user details"});
    }
});


var parser = require('multer')({dest: 'temp/'}); // temp directory create kardena
var fs = require('fs');
var path = require('path');


adminhandler.post('/profilepicture', parser.single('profile-picture'), function (req,res) {
    // var destination = path.join(process.cwd(), "public", Userfiles, req.session.username , req.session.username + ".jpg");
    var destination = path.join(process.cwd(), "public","Userfiles", req.session.user , req.session.user + ".jpg");
    fs.createReadStream(req.file.path).pipe(fs.createWriteStream(destination));
    fs.unlink(req.file.path, function(err) {
        if(err) {
            res.status("500");
            res.send("An error occured");
        }
        res.send("cool");
    })
});

adminhandler.post('/getUsername',function(req,res){
    console.log(req.session.user);
    res.status(201).send({username:req.session.user});
})
adminhandler.post('/profileUpload',function(req,res){
    console.log('Hitting profileUpload');
    console.log(req.body);
    pool.getConnection(function(err, connection) {
        connection.query("update users set firstName='"+req.body.firstName+"',lastName='"+req.body.lastName+"',creditCard='"+req.body.creditCard+"',gender='"+req.body.gender+"',contact='"+req.body.contact+"',middleName='"+req.body.middleName+"',dateOfBirth='"+req.body.dateOfBirth+"',userCountry='"+req.body.userCountry+"',userCity='"+req.body.userCity+"',userAddress='"+req.body.userAddress+"',userZip='"+parseInt(req.body.userZip)+"' where userId="+parseInt(req.body.userId), function (error, results,fields) {
            connection.release();
            if (results.length>=1){
                res.status(201).send({msg:"Successfully updated user profile"});
            }
            else{
                res.status(201).send({msg:"Successfully updated user profile"});
            }
        });
    });
    //res.status(201).send({1:1});
})


adminhandler.post('/handleDeleteAccount',function(req,res){
  pool.getConnection(function(err, connection) {
    console.log(req.body.userId);
      connection.query("delete from users where userId="+req.body.userId, function (error, results,fields) {
          connection.release();
          if (error){
              res.status(401).send({msg:"Unsuccessfull"});
          }
          else{
            req.session.destroy();
              res.status(201).send({msg:"Successfully deleted user profile"});
          }
      });
  });
})
module.exports = adminhandler;
