import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import StayUptoDate from './StayUptoDate';
import Carousal1 from './Carousal1';
import Carousal2 from './Carousal2';
import BeautifulDown from './BeautifulDown';
import CarTile from './CarTile';
import Header from './Header';
var FontAwesome = require('react-fontawesome');


class FlightBookingSuccessful extends Component {

  componentWillMount(){
console.log(this.props.carTile);
  }
  state={

  }
  render() {
    return (
      <div style={{backgroundColor: "#E8E8E8", textAlign: "center", minHeight: 800}}>
      <Header handleClickSignup={this.props.handleClickSignup} handleClickSignin={this.props.handleClickSignin}/>
      <div style={{width: "40%", height: "auto",marginTop: 100,marginLeft: "30%"}}>
        <i className="huge icons">
        <i aria-hidden="true" style={{color: "green"}}className="sun big loading icon"></i>
        <i aria-hidden="true" style={{color:"green"}}className="user icon"></i></i>
        {this.props.flightTile.flightDate}
        <h1>Booking Successful.</h1>
        <hr />
        <h1>Your Booking Details:</h1>
        <h3>Name:{this.props.flightTile.flighttile.hotelId} </h3>
        <h3>Email Id:</h3>
        <h3>Booking Id:</h3>
        <h3>Booking Description: </h3>
    </div>


      </div>
);
  }
}

export default FlightBookingSuccessful;
