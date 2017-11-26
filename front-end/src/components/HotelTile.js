import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Hotel1 from './../hotel1.jpg';
import LeftFilterCars from './LeftFilterCars';
var FontAwesome = require('react-fontawesome');


class HotelTile extends Component {
  componentWillMount(){
    console.log(this.props.hotels);
    this.setState({
        hotels: this.props.hotels,
        hotelsCopy: this.props.hotels
    });
  }

  state={
hotelsCopy: this.props.hotels
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
    {this.state.hotelsCopy.map(hotel => (
<div className="outerDiv-hotel">
    <div className="outerDiv-hotel-left">

    </div>
    <div className="outerDiv-hotel-mid">
        <h3>The Park Central San Francisco</h3>

        <div className="hoteltileStrap" style={{height: "33%",borderBottom: "1px solid",borderColor: "#f1f1f1"}}>
            <div className="rating-small">
                8.4
            </div>
            <div className="reviews-hotel">
                <p style={{fontSize: 13,lineHeight: "120%"}}><strong>Excellent</strong>
                <br/>5,860 reviews</p>
            </div>
            <div className="location-hotel">
            <p style={{fontSize: 13,lineHeight: "120%"}}><strong>Location</strong>
            <br/>South of Market</p>
            </div>
        </div>

        <div className="hoteltileStrap" style={{marginTop: "1%",height: "29%"}}>
            <div className="hotel-vendor" style={{marginLeft: 0}}>
                <p style={{fontSize: 13}}><span style={{fontWeight: "bold"}}>Expedia</span><br/>$200</p>
            </div>
            <div className="hotel-vendor">
                <p style={{fontSize: 13}}><strong>Priceline</strong><br/>$220</p>
            </div>
            <div className="hotel-vendor">
                <p style={{fontSize: 13}}><strong>Kayak</strong><br/>$235</p>
            </div>
            <div className="hotel-vendor">
                <p style={{fontSize: 13}}><strong>Booking.com</strong><br/>$240</p>
            </div>
        </div>
    </div>

    <div className="outerDiv-hotel-right">
        <p style={{lineheight: "70%",marginTop: "2%"}}><span style={{color: "red", textDecoration: "line-through"}}>$200</span><br/>
        $180</p>
      <p>Kayak.com</p>{this.props.hotels[0]._id}
        <button onClick={()=>{this.props.handleHoteltileFetch({hoteltile: hotel, fromDate: "11-21-2017", toDate: "11-23-2017"})}} style={{width: "80%",backgroundColor: "#ff731a",height: "20%", borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0}}>View Deal</button>
        <div style={{marginTop: "7%"}}>
            <i className="fa fa-share-alt" aria-hidden="true"></i>&nbsp;Share &nbsp;&nbsp;<i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;Watch
        </div>
    </div>

</div>
))}
</div>
</div>
);
  }
}

export default HotelTile;
