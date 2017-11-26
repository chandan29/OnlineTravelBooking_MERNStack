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
function handle_request3(msg, callback) {
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));
        var userPath = session.username;
        console.log('inside createSharedfolder: ', userPath);
        console.log('inside createSharedfolder HAI=>', msg.userlist);

        var newSharedFolder = '././public/uploads/Userfiles/' + userPath + '/Shared--'+msg.sharedfoldername;

        console.log("newFolder Path :", newSharedFolder);

        console.log("Userlists to share the folder with: ", msg.userlist);

        fs.mkdir(newSharedFolder, function (err) {
            if (!err) {
                console.log('Directory created');
            }
            else {
                console.log('Unable to create');
                res.code='401';
                res.value={message:"not created"};
                callback(null,res);
            }
        });

        var rand = rn(options);
        console.log(rand);
        // insert data about group into the collection(groups).
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('groups');

            coll.insert({ GID: rand, admin: session.username}, function(err, users){
                if (users) {
                    console.log("Data inserted into the groups collection for group description.");

                } else {
                    console.log("data insertion error in groups collection.");
                }
            });
        });

        // logic to insert data into groups collection ends here.

        // inserting data into groupDetails about admin starts here.
        // inserting details about group and its members in groupDetails collection.
        mongo.connect(mongoURL, function(){
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('groupDetails');

            coll.insert({ GID: rand, admin: session.username, username: session.username}, function(err, users){
                if (users) {
                    console.log("Data inserted into the groups collection for group description.");

                } else {
                    console.log("data insertion error in groups collection.");
                }
            });
        });

        // logic to insert data into the groupDetails about admin ends here.
        console.log("userlists in which we have to create the shared folder are: ", msg.userlist);
        var userlist = msg.userlist;
        userlists = userlist.split(',');

        for(var i=0;i<userlists.length;i++) {
            //usrs.push(userlists[i]);
            var newSharedFolder = '././public/uploads/Userfiles/' + userlists[i] + '/'+msg.sharedfoldername;
            fs.mkdir(newSharedFolder, function (err) {

                if (!err) {
                    console.log('Directory created');
                    //  res.status(201).end();
                }
                else {
                    res.code='401';
                    res.value={message:"not created"};
                    callback(null,res);
                }
            });
        }
        // inserting details about group and its members in groupDetails collection.
        console.log("length of userlist array :  ", userlists.length);
        console.log("contents of userlists array:   ", userlists);


        for(var j=0;j<userlists.length;j++) {
            mongo.connect(mongoURL, function(){
                console.log('Connected to mongo at: ' + mongoURL);
                var coll = mongo.collection('groupDetails');

                console.log("user deails:--------- ",userlists[j]);

                coll.insert({ GID: rand, admin: session.username, username: JSON.stringify(userlists[j])}, function(err, users){
                    if (users) {
                        console.log("Data inserted into the groups collection for group description.");
                    } else {
                        console.log("data insertion error in groups collection.");
                    }
                });
            });
        }
        // logic to insert data into groupDetails ends here.
        res.code='200';
        res.value={message:"directory successfully created"};
        callback(null,res);

}
exports.handle_request3 = handle_request3;