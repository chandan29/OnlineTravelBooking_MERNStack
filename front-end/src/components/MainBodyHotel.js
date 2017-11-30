import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import StayUptoDate from './StayUptoDate';
import Carousal1 from './Carousal1';
import Carousal2 from './Carousal2';
import BeautifulDown from './BeautifulDown';
import HotelTile from './HotelTile';
var FontAwesome = require('react-fontawesome');


class MainBodyHotel extends Component {

  componentWillMount(){

  }
  state={

  }
  render() {
    return (
      <div className="mainBodyHotel" style={{backgroundColor:"#f1f1f1"}}>
        <div className="middle-pane">
            <HotelTile hotels={this.props.hotels} rooms={this.props.rooms} handleHoteltileFetch={this.props.handleHoteltileFetch}/>
        </div>
      </div>
);
  }
}

export default MainBodyHotel;
