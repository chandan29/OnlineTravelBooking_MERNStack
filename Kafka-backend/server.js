var connection =  new require('./kafka/Connection');
var login = require('./services/login');
var signup = require('./services/signup');
var folder = require('./services/folder');
var flight_kafka = require('./services/flight_kafka');
var car_kafka = require('./services/car_kafka');
var hotel_kafka = require('./services/hotel_kafka');

var topic_name = 'login_topic';
var topic_name2 = 'test_topic';
var topic_name3 = 'folder_topic';
var topic_name4 = 'cars_topic';
var topic_name5 = 'flights_topic';
var topic_name6 = 'hotels_topic';
var consumer = connection.getConsumer(topic_name);
var consumer2 = connection.getConsumer(topic_name2);
var consumer3 = connection.getConsumer(topic_name3);
var consumer4 = connection.getConsumer(topic_name4);
var consumer5 = connection.getConsumer(topic_name5);
var consumer6 = connection.getConsumer(topic_name6);
var producer = connection.getProducer();

console.log('server is running');
consumer.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer2.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    signup.handle_request2(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer3.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    folder.handle_request3(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});
consumer4.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    car_kafka.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer5.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    flight_kafka.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer6.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    hotel_kafka.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});