import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import StayUptoDate from './StayUptoDate';
import Carousal1 from './Carousal1';
import Carousal2 from './Carousal2';
import BeautifulDown from './BeautifulDown';
import CarTile from './CarTile';
var FontAwesome = require('react-fontawesome');


class MainBodyCar extends Component {

  componentWillMount(){
    console.log(this.props.cars);
  }
  state={

  }
  render() {
    return (
      <div className="mainBodyCar">
        <div className="middle-pane">
            <CarTile cars={this.props.cars} handleCartileFetch={this.props.handleCartileFetch}/>
        </div>
      </div>
);
  }
}

export default MainBodyCar;
