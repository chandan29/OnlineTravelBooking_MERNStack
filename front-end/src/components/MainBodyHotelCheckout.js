import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import StayUptoDate from './StayUptoDate';
import Carousal1 from './Carousal1';
import Carousal2 from './Carousal2';
import BeautifulDown from './BeautifulDown';
import HotelCheckoutDetails from './HotelCheckoutDetails';
var FontAwesome = require('react-fontawesome');

class MainBodyHotelCheckout extends Component {
  state={

  }
  render() {
    return (
      <div className="mainBodyHotelCheckout">
        <div className="main-pane-hotelcheckout">
            <HotelCheckoutDetails hotelTile={this.props.hotelTile} room={this.props.room} handleRedirectBooking1={this.props.handleRedirectBooking1}/>
        </div>

      </div>
);
  }
}

export default MainBodyHotelCheckout;
