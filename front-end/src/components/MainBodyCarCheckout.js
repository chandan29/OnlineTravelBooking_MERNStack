import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import StayUptoDate from './StayUptoDate';
import Carousal1 from './Carousal1';
import Carousal2 from './Carousal2';
import BeautifulDown from './BeautifulDown';
import CarCheckoutDetails from './CarCheckoutDetails';
var FontAwesome = require('react-fontawesome');

class MainBodyCarCheckout extends Component {
  state={

  }
  render() {
    return (
      <div className="mainBodyCarCheckout">
        <div className="main-pane-carcheckout">
            <CarCheckoutDetails />
        </div>

        <div className="right-pane-carcheckout">

        </div>
      </div>
);
  }
}

export default MainBodyCarCheckout;
