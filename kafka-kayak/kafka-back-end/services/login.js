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
function handle_request(msg, callback){

    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));
	/*if(msg.topic == "login_topic")*/
    if(msg.type=='login'){
    		mongo.connect(mongoURL, function(){
    	    console.log('Connected to mongo at: ' + mongoURL);
    	    var coll = mongo.collection('users');


    	    coll.findOne({"email": msg.username}, function(err, user){
    	    	console.log("user details?",user);
    	        if (bcrypt.compareSync(msg.password, user.password)) {
    	            console.log("Data found in database:",user)
    	            session.username = msg.username;
    	            console.log("Session initialized=> session username: ", session.username);
    	            res.code = "200";
        			res.value = {username: session.username,status: 201 };
        			callback(null, res);
    	        } else {
    	          console.log("User Data not found in the database.");
    	          res.code = "401";
      			res.value = {message: "Login failed",status: 401};
      			callback(null, res);
    	        }
    	    });
    	});
    }
    else if(msg.type=='register'){
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
    	                	console.log('DIrectory not created');
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
    else if(msg.type=='list'){
    	  console.log("Im inside the getimage", session.username);
    	    var userPath = session.username;
    	    console.log(' Get Image=>Username session:', session.username);

    	    var resArr = [];

    	    glob('public/uploads/Userfiles/' + userPath + '/' + '*', function (er, files) {

    	        var userPath = session.username;
    	        var resArr = files.map(function (file) {
    	            var imgJSON = {};
    	            console.log('file:', file);
    	            imgJSON.img = 'uploads/Userfiles/' + userPath + '/' + file.split('/')[4];
    	            console.log('imgJson.img:', imgJSON.img);
    	            imgJSON.cols = 2;
    	            imgJSON.starred=false;
    	            imgJSON.myfileName= file.toString().split('/')[4];
    	            return imgJSON;
    	        });

    	        console.log('resArr:', resArr);
    	        var objSession= session.username;
    	        resObj={resArray: resArr, objectSession: objSession};

    	        console.log('resObj:', resObj);
    	     	res.code="200";
            	res.value=resObj;
            	callback(null, res);
    	    });




    }
    else if(msg.type=='logout'){
    		session.username="";
    	    console.log('Session destroyed');
    	    res.code = "200";
			res.value = {message:'Logout Successful'};
			callback(null, res);
    }
    else if(msg.type=='createFolder'){
    	var userPath = session.username;
        console.log('inside create folder: ', userPath);
        console.log('inside create foldername HAI=>', msg.foldername);

        var newFolder = '././public/uploads/Userfiles/' + userPath + '/'+msg.foldername;

        fs.mkdir(newFolder, function (err) {
            if (!err) {
                console.log('Directory created');
                res.code = "200";
    			res.value = {message:'Directory created'};
    			callback(null, res);
            }
            else {
            	res.code = "401";
    			res.value = {message:'Logout Successful'};
    			callback(null, res);
            }
        });
    }
    else if(msg.type=='createSharedFolder'){
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
    else if(msg.type=='upload'){
    	var userPath = session.username;

    	var homeDir='././public/uploads/Userfiles/'+userPath+'/'+msg.filename;
    	fs.writeFile(homeDir,msg.data, function(err) {
    	    if(err) {
    	        return console.log(err);
    	    }

    	    console.log("The file was saved!");
    	});

        console.log('Req.body=> backend upload file=>', userPath);

        res.code="200";
        res.value={message:"File uploaded"};
        callback(null,res);
    }
    else if(msg.type=="uploader"){
    /*	var storage = multer.diskStorage({
    	    destination: function (req, file, cb) {

    	    	  cb(null, './uploads');
    	    },
    	    filename: function (req, file, cb) {
    	    		console.log(file.originalname);
    	        cb(null, ""+file.originalname);
    	  }
    	});*/
    	//console.log(file);

   /* 	var funcUpload=multer({storage:storage}).single('filename');
    	var index=0;
    	var filelist;*/
    //	console.log("YACHA AAT TARI GELA ATLEAST:"+JSON.stringify(msg));
    //	res.code="200";
    	//res.value={status:201,files:"abc.txt"};
    	//callback(null, res);
    	/*
    	funcUpload(msg.file,res,function(err){
    		if(!err){
    			var payload={index:index++,filename:msg.file.name};
    			*/
    		var obj=shell.ls('../');
    		console.log(obj);
    			mongo.connect(mongoURL, function(){
    		        console.log('Connected to mongo at: ' + mongoURL);

    		        var coll = mongo.collection('files');
/*
    		        coll.insert(payload, function(err, user){
    		            if (user) {


    		            } else {
    		            	res.status(401).send();
    		            }
    		        })
    		        */
    		        coll.find({}).toArray(function(err, user){
    		            if (user) {
    		            	filelist=user;
    		            	console.log(filelist);
    		            	res.code="200";
    	                	res.value={status:201,files:msg.file,filelist:JSON.parse(JSON.stringify(filelist)),obj:JSON.parse(JSON.stringify(obj))};
    	                	callback(null, res);
    		            } else {
    		             	res.code = "401";
    	        			res.value = "Failed Check Session";
    	        			callback(null, res);
    		            }
    		        })


    		    });


    		}
    else if(msg.type=="delete"){
    	 console.log("checking whether path has reached inside deleteFile on back end??", msg.delt);
			 var s = msg.delt;
			 var arr=s.split('/');
	 			 arr=arr[arr.length-1];
	 			 var arr2=arr.split('.');
	 			 if(arr2[1]){
	     	 fs.unlinkSync('/Users/shashanksingh/Downloads/dropbox10/kafka-back-end/public/'+ msg.delt);
	 		 		}
	 				else{
	 					fs.rmdirSync('/Users/shashanksingh/Downloads/dropbox10/kafka-back-end/public/'+ msg.delt);
	 				}

    	 res.code="200";
     res.value={};
     callback(null,res);
    }

    else{

    }
}


exports.handle_request = handle_request;
