var path = require('path');
var express = require('express');
var signuphandler = express.Router();
var mongoSessionURL = "mongodb://localhost:27017/login";
var mysql      = require('mysql');
var bcrypt= require('bcrypt');
var passport = require('passport');
var time = require('time');
var fs = require('fs');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'kayak'
});




/*
signuphandler.post('/loginUser', function(req, res,next) {
  const saltRounds = 10;
  var salt=bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(req.body.password, salt);
  console.log(hash);
  pool.getConnection(function(err, connection) {
    connection.query("select password from users where emailId='"+req.body.email+"'", function (error, results, fields) {
      connection.release();
      if (results.length>=1){
        bcrypt.compare(req.body.password,results[0].password, function(err, res1) {
          if(res1==true){
          res.status(201).send({status:201,msg:"Password is right"});
          }
          else{
            res.status(400).send({status:400,msg:"Password is wrong"})
          }
        });


      }
      else{
      res.status(404).send({msg:"Failed"});
    }

    });
  });
});
*/


signuphandler.post('/registerUser',function(req,res){
  pool.getConnection(function(err, connection) {
    connection.query("select emailId from users where emailId='"+req.body.email+"'", function (error, results, fields) {
      connection.release();
      if (results.length>=1){
        res.status(401).send({status:401,msg:"User with this email id already exists"});
      }
      else{

        const saltRounds = 10;
        var salt=bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(req.body.password, salt);
        var email=req.body.email;
        console.log(hash);
        pool.getConnection(function(err, connection) {
      console.log("insert into users (firstname,lastname,emailId,password) values ('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.email+"','"+hash+"')");
          connection.query("insert into users (firstName,lastName,emailId,password) values ('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.email+"','"+hash+"')", function (error, results, fields) {
            connection.release();
            if (error){
              res.status(400).send({status:400,message:"Failed to register"});
            }
            else{
            res.status(201).send({status:201,msg:"User is successfully registered"});
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
            fs.appendFile("../Kafka-backend/public/logging/"+user+".txt", "User registered on |"+date+" at "+curTime+",register\n", function(err) {
              if(err) {
                  res.send({0:0});

              }
              console.log("The file was saved!");
            });
                var folder = "./public/Userfiles/" + email;
                console.log('email:', email);
                console.log('folder:', folder);

                fs.mkdir(folder, function (err) {

                    if (!err) {
                        console.log('Directory created');

                    }
                    else {

                        console.log('Directory can’t be created');
                    }
                });

            }

          });
        });
      }

    });






});

});


module.exports = signuphandler;
