import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import StayUptoDate from './StayUptoDate';
import Carousal1 from './Carousal1';
import Carousal2 from './Carousal2';
import BeautifulDown from './BeautifulDown';
import FlightTile from './FlightTile';
var FontAwesome = require('react-fontawesome');


class MainBodyFlight extends Component {

  componentWillMount(){

  }
  state={

  }
  render() {
    return (
      <div className="mainBodyHotel" style={{backgroundColor:"#f1f1f1"}}>
        <div className="middle-pane">
            <FlightTile flights={this.props.flights} seats={this.props.seats} handleFlighttileFetch={this.props.handleFlighttileFetch}/>
        </div>
      </div>
);
  }
}

export default MainBodyFlight;
