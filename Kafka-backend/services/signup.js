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
var options = {
    min:  0,
    max:  10000,
    integer: true
}
function handle_request2(msg, callback) {

    var res = {};
    console.log("In handle request:" + JSON.stringify(msg));


    mongo.connect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('users');
        // generating salt.
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(msg.password, salt);

        coll.insert({ firstname: msg.firstname, lastname: msg.lastname, email: msg.email, password: hash}, function(err, users){
            if (users) {
                console.log("Data inserted into the users collection under dropbox database");
                var folder = "././public/uploads/Userfiles/" + msg.email;

                fs.mkdir(folder, function (err) {

                    if (!err) {
                        console.log('Directory created');
                        res.code = "200";
                        res.value = {status: 201 };
                        callback(null, res);
                    }
                    else {
                        console.log('Directory not created');
                        res.code = "401";
                        res.value = {status: 401 };
                        callback(null, res);
                    }
                })

            } else {
                console.log("data insertion error while registering..");
                res.code = "401";
                res.value = {status: 401 };
                callback(null, res);
            }
        });
    });

}
exports.handle_request2 = handle_request2;