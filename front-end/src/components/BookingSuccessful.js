import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import StayUptoDate from './StayUptoDate';
import Carousal1 from './Carousal1';
import Carousal2 from './Carousal2';
import BeautifulDown from './BeautifulDown';
import CarTile from './CarTile';
var FontAwesome = require('react-fontawesome');


class BookingSuccessful extends Component {

  componentWillMount(){

  }
  state={

  }
  render() {
    return (
      <div className="mainBodyBookingSuccessful" style={{backgroundColor: "#E8E8E8"}}>

        <div className="body-success">
            <div class="icon-success">
                <FontAwesome name='user' size='3x'/>
            </div>
            <div className="text-success">
              Booking SuccessFul
            </div>
        </div>

      </div>
);
  }
}

export default BookingSuccessful;
