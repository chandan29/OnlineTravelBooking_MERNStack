import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Flight2 from './../flight2.jpg';
import LeftFilterCars from './LeftFilterCars';
import FlightLogo from './../flights.png';
var FontAwesome = require('react-fontawesome');


class HotelTile extends Component {
  componentWillMount(){

  }

  state={

  }


  handlestar1 = () => {

  };

  handlestar2 = () => {

  };

  handlestar3 = () => {

  };

  handlestar4 = () => {

  };

  handlestar5 = () => {

  };

  render() {
    return (
        <div>
            <div className="leftFilterHotels">
                <div classNameName="mainBodyLeftFilterHotels">
                  <div classNameName="starFilter">
                      <form className="rating">
                          <label>
                          <input type="radio" name="stars" value="1" onClick={this.handlestar1}/>
                          <span className="icon">★</span>
                          </label>
                          <label>
                          <input type="radio" name="stars" value="2" onClick={this.handlestar2}/>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          </label>
                          <label>
                          <input type="radio" name="stars" value="3" onClick={this.handlestar3}/>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          </label>
                          <label>
                          <input type="radio" name="stars" value="4"  onClick={this.handlestar4}/>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          </label>
                          <label>
                          <input type="radio" name="stars" value="5" onClick={this.handlestar5}/>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          </label>
                      </form>
                  </div>

                  <div classNameName="priceFilter">

                  </div>
                </div>

            </div>

<div className="mid-hoteltile">
<div className="outerDiv-flight">
    <div className="outerDiv-flight-left">
        <img src={Flight2}  style={{paddingLeft: "29%", paddingTop: "12%"}}/>
    </div>
    <div className="outerDiv-flight-mid">
        <div className="flighttileStrap" style={{height: "43%",paddingTop: "3%"}}>
        <span style={{float: "left",marginLeft:"2%", fontWeight: "bold"}}>2:10 Pm<br/>DEL</span>
        <span style={{float: "left",marginLeft: "10%", fontWeight: "bold"}}>-----*------<br/><span style={{marginLeft: 12}}>TPE</span></span>
        <span style={{float: "left",marginLeft: "10%",fontWeight: "bold"}}>12:10 pm</span>
        <span style={{float: "left",marginLeft: "10%",fontWeight: "bold"}}>35 hr 30 mins</span>
        </div>

        <div className="flighttileStrap" style={{marginTop: "3%",height: "22%"}}>
            <span style={{float: "right",marginRight: 5}}>₹41302 book easily on KAYAK</span><span style={{float: "right",marginRight: 10}}><img src={FlightLogo} alt="flight logo" /></span>
        </div>
    </div>
    <div className="outerDiv-hotel-right">
        <p style={{lineheight: "70%",marginTop: "2%"}}>$180</p>
        <p>KAYAK</p>
        <button style={{width: "80%",backgroundColor: "#ff731a",height: "20%", borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0}}>View Deal</button>
        <div style={{marginTop: "7%"}}>
            <i className="fa fa-share-alt" aria-hidden="true"></i>&nbsp;Share &nbsp;&nbsp;<i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;Watch
        </div>
    </div>

</div>
</div>
</div>
);
  }
}

export default HotelTile;
