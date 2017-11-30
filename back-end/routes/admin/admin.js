var path = require('path');
var express = require('express');
var multer = require('multer');
var glob = require('glob');
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
    //Input parameters: from city, from date,to date
    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('carTrip');
        console.log(req.body);
        coll.find({tripId:parseInt(req.body.tripId)}).toArray(function(err, user){
            if (user) {
                console.log(user);
                res.json({status:201,user:user});
            } else {

                res.json({status:401});
            }
        });
    });
    console.log(req.param('from'));
    console.log(req.query.from);
//  res.status(201).json({from:req.query.from,to:req.query.to,date:req.query.date});
});

{/********************************************  ADMIN USER APIs   ***************************************************/}


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
        coll.insertOne({carId:parseInt(req.body.carId),
            carType:req.body.carType,carCity:req.body.carCity,
            carAgency:req.body.carAgency,carSpecs:req.body.carSpecs,
            carAvailability:req.body.carAvailability,carRating:req.body.carRating,
            carRate:req.body.carRate},function(err, user){
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
        coll.updateOne({carId:parseInt(req.body.carId)},{$set: {carType:req.body.carType,carCity:req.body.carCity,
            carAgency:req.body.carAgency,carSpecs:req.body.carSpecs,
            carAvailability:req.body.carAvailability,carRating:req.body.carRating,
            carRate:req.body.carRate}},function(err, user){
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
            flightClass:req.body.flightClass,fromCity:req.body.fromCity,
            toCity:req.body.toCity,startTime:req.body.startTime,
            endTime:req.body.endTime,flightAgency:req.body.flightAgency,
            flightRating:req.body.flightRating,availableSeats:req.body.availableSeats,
            fareDetails:req.body.fareDetails},function(err, user){
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




module.exports = adminhandler;
