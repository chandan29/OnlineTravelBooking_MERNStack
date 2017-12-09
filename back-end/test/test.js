var assert = require('chai').assert;
const app = require('../app');
var http = require('http');
var request = require('request');

describe('Mocha tests for Kayak', function() {

  it("Should return cars listing", function(done) {
    request.post("http://localhost:3001/getCars", {
      form: {
        "carCity": "New York",
        "carFromDate": "2017-12-21",
        "carToDate": "2017-12-23"
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(201, response.statusCode);
      done();
    });
  });

  it("Should return flights listing", function(done) {
    request.post("http://localhost:3001/getFlights", {
      form: {
        "flightFromCity": "Chicago",
        "flightToCity": "San Jose",
        "flightDate": "2017-12-10"
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(201, response.statusCode);
      done();
    });
  });

  it("Should return booked flight", function(done) {
    request.post("http://localhost:3001/bookFlight", {
      form: {
        "flightId": "UA1529"
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(201, response.statusCode);
      done();
    });
  });

  it("Should return hotels listing", function(done) {
    request.post("http://localhost:3001/getHotels", {
      form: {
        "hotelCity": "New York",
        "hotelFromDate": "2017-12-10",
        "hotelToDate": "2017-12-11"
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(201, response.statusCode);
      done();
    });
  });

  it("Should return booked hotel", function(done) {
    request.post("http://localhost:3001/bookHotel", {
      form: {
        "hotelId": 1
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(201, response.statusCode);
      done();
    });
  });

  it("Should return admin bills", function(done) {
    request.post("http://localhost:3001/getAdminBills", {
      form: {
        "username": "Anshit"
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(200, response.statusCode);
      done();
    });
  });

  it("Should return admin bill details", function(done) {
    request.post("http://localhost:3001/getAdminBillDetail", {
      form: {
        "tripId": 2,
        "type":"hotel"
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(200, response.statusCode);
      done();
    });
  });

  it("Should return users under admin", function(done) {
    request.post("http://localhost:3001/getAdminUsers", {
      form: {}
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(200, response.statusCode);
      done();
    });
  });
/*
  it("Should return details of users under admin", function(done) {
    request.post("http://localhost:3001/getAdminUserDetail", {
      form: {
        "userId": 3
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(200, response.statusCode);
      done();
    });
  });
*/
  it("Should return array of cars", function(done) {
    request.post("http://localhost:3001/getAdminCarArray", {
      form: {}
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(200, response.statusCode);
      done();
    });
  });

  it("Should return cars if Id is valid", function(done) {
    request.post("http://localhost:3001/getAdminCars", {
      form: {
        "carId": 1
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(201, response.statusCode);
      done();
    });
  });

  it("Should return array of flights", function(done) {
    request.post("http://localhost:3001/getAdminFlightArray", {
      form: {}
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(200, response.statusCode);
      done();
    });
  });

  it("Should return flights if Id is valid", function(done) {
    request.post("http://localhost:3001/getAdminFlights", {
      form: {
        "flightId": "UA1529"
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(201, response.statusCode);
      done();
    });
  });

  it("Should return array of hotels", function(done) {
    request.post("http://localhost:3001/getAdminHotelArray", {
      form: {}
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(200, response.statusCode);
      done();
    });
  });

  it("Should return hotels if Id is valid", function(done) {
    request.post("http://localhost:3001/getAdminHotels", {
      form: {
        "hotelId": 2
      }
    }, function(error, response, body) {
      console.log(response.statusCode);
      assert.equal(201, response.statusCode);
      done();
    });
  });
});
