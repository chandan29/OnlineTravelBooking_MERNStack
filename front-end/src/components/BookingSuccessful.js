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


class BookingSuccessful extends Component {

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
        <i aria-hidden="true" style={{color:"green"}}className="checkmark icon"></i></i>
        {this.props.carTile.fromDate}
        <h1>Booking Successful.</h1>
        <hr />
    </div>


    <table className="table table-hover" style={{width: "60%", marginLeft: "20%"}}>
<thead>
  <tr>
    <th style={{width: "50%"}}>Your Booking Details</th>
    <th></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Email Id:</td>
    <td>{this.props.username}</td>

  </tr>
  <tr>
    <td>Booking type</td>
    <td>Car Booking</td>
  </tr>
  <tr>
    <td>Booking Id:</td>
    <td>123</td>
  </tr>
  <tr>
    <td>Car type</td>
    <td>{this.props.carTile.cartile.carType}</td>
  </tr>
  <tr>
    <td>Car Agency</td>
    <td>{this.props.carTile.cartile.carAgency}</td>
  </tr>
  <tr>
    <td>Total fare</td>
    <td>${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10}</td>
  </tr>
</tbody>
</table>

      </div>
);
  }
}

export default BookingSuccessful;
