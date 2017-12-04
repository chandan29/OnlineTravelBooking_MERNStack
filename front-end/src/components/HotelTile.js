import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Metro from './../Metro.jpg';
import Wingate from './../Wingate.jpg';
import King from './../King.jpg';
import Orbit from './../Orbit.jpg';
import LeftFilterCars from './LeftFilterCars';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideHotel1 from './../sidehotel1.png';
import SideHotel2 from './../sidehotel2.png';
var FontAwesome = require('react-fontawesome');
var rand = require('unique-random')(0, 7);


class HotelTile extends Component {
  componentWillMount(){
    console.log(this.props.hotels);
    console.log("rooms count", this.props.rooms)
    var room = this.props.rooms[0];
    room = parseInt(room);
    console.log("Rooms count Integer", room);
    this.setState({
        hotels: this.props.hotels,
        hotelsCopy: this.props.hotels,
        room: room
    });
  }


  state={
hotelsCopy: this.props.hotels,
val:500
  }


  handlestar1 = () => {
      var dummyHotels = [];
      for(var i=0;i<this.state.hotels.length;i++)
      {
          if(this.state.hotels[i].hotelStars >= 1)
          {
              dummyHotels.push(this.state.hotels[i]);
          }
      }

      this.setState({
          hotelsCopy:dummyHotels
      });
  };

  handlestar2 = () => {
      var dummyHotels = [];
      for(var i=0;i<this.state.hotels.length;i++)
      {
          if(this.state.hotels[i].hotelStars >= 2)
          {
              dummyHotels.push(this.state.hotels[i]);
          }
      }

      this.setState({
          hotelsCopy:dummyHotels
      });
  };

  handlestar3 = () => {
      var dummyHotels = [];
      for(var i=0;i<this.state.hotels.length;i++)
      {
          if(this.state.hotels[i].hotelStars >= 3)
          {
              dummyHotels.push(this.state.hotels[i]);
          }
      }

      this.setState({
          hotelsCopy:dummyHotels
      });
  };

  handlestar4 = () => {
      var dummyHotels = [];
      for(var i=0;i<this.state.hotels.length;i++)
      {
          if(this.state.hotels[i].hotelStars >= 4)
          {
              dummyHotels.push(this.state.hotels[i]);
          }
      }

      this.setState({
          hotelsCopy:dummyHotels
      });
  };

  handlestar5 = () => {
      var dummyHotels = [];
      for(var i=0;i<this.state.hotels.length;i++)
      {
          if(this.state.hotels[i].hotelStars === 5)
          {
              dummyHotels.push(this.state.hotels[i]);
          }
      }

      this.setState({
          hotelsCopy:dummyHotels
      });
  };

  handlePriceFilterHotels = (event, value) => {

      console.log("value of slider", value);
      this.setState({
          val: value
      });

      var dummyHotels = [];
      for(var i=0;i<this.state.hotels.length;i++)
      {
          if(this.state.hotels[i].hotelOriginalPrice <= value)
          {
              dummyHotels.push(this.state.hotels[i]);
          }
      }
      this.setState({
          hotelsCopy: dummyHotels
      });
  }

  render() {
    return (
        <div>
        <div className="leftFilterCars">
            <div classNameName="mainBodyLeftFilterCars">
            <div>
              <div style={{textAlign: "center",width: "85%",marginTop: "3%",marginLeft: "5%",height: 40,fontSize: 22,border: "1px solid",paddingTop: 10}}><strong >Filters</strong></div><hr style={{backgroundColor: "#f00",width: 2}}/>
              <div style={{textAlign: "center",width: "85%",marginTop: 10,marginLeft: "5%",height: 25,fontSize: 18,borderBottom: "1px solid"}}><span style={{float:"left", fontWeight: 700}}>Stars</span></div>
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
            </div>
            <hr/>
            <div style={{textAlign: "center",width: "85%",marginTop: 10,marginLeft: "5%",height: 25,fontSize: 18,borderBottom: "1px solid"}}><span style={{float:"left", fontWeight: 700}}>Price</span></div>
            <div classNameName="priceFilter" style={{marginTop: 30}}>
              <label style={{display: "inline", float: "left",marginLeft: "7%"}}>0</label>
              <MuiThemeProvider>
              <Slider
                min={0}
                max={1000}
                step={1}
                style={{width: "70%",marginLeft: "2%",display:"inline", float: "left",height: 60}}
                value={this.state.val}
                onChange={this.handlePriceFilterHotels}
              />
              </MuiThemeProvider>
              <span style={{float: "left", display: "inline"}}>1000</span>
              </div>
              <p style={{width: "90%", textAlign: "center",marginTop: 0}}>Current Price range: 0 - {this.state.val}</p>
              <hr/>
            </div>
            <div style={{textAlign: "center",width: "85%",marginTop: 10,marginLeft: "5%",height: 25,fontSize: 18,borderBottom: "1px solid"}}><span style={{float:"left", fontWeight: 700}}>Review</span></div>

            <div className="filter_hotel_review" style={{width: "100%", height: 150,padding: "5%",marginTop: 10}}>

                    <input type="checkbox" name="carType"  onChange={(event) => {
                  this.setState({
                      Excellent: event.target.checked
                  });}}/>&nbsp;Excellent<br/>

                    <input type="checkbox" name="carType"  onChange={(event) => {
                  this.setState({
                      Average: event.target.checked
                  });}} />&nbsp;Average<br/>
                    <input type="checkbox" name="carType"  onChange={(event) => {
                  this.setState({
                      Good: event.target.checked
                  });}} />&nbsp;Good<br/><p></p>
                    <button  style={{width: "28%", height: 25,backgroundColor:"#558FE6"}} onClick={()=>{this.handleCarTypeFilter({HatchBack: this.state.HatchBack, Sedan: this.state.Sedan, SUV: this.state.SUV})}}>Filter</button>
            </div>
        </div>

<div className="mid-hoteltile" style={{marginTop: 15}}>
    {this.state.hotelsCopy.map(hotel => (
<div className="outerDiv-hotel">
    <div className="outerDiv-hotel-left">
    {
        hotel.hotelAgency === " Orbit Agency"
        ?
        <img src={Orbit} style={{width: 220, height: 180}}/>
        :
        null
    }
    {
        hotel.hotelAgency === "Wingate Agency"
        ?
        <img src={Wingate}  style={{width: 220, height: 180}}/>
        :
        null
    }
    {
        hotel.hotelAgency === "Metro"
        ?
        <img src={Metro}  style={{width: 220, height: 180}}/>
        :
        null
    }
    {
        hotel.hotelAgency === "King Agency"
        ?
        <img src={King}  style={{width: 220, height: 180}}/>
        :
        null
    }
    </div>
    <div className="outerDiv-hotel-mid">
        <h3>{hotel.hotelName}</h3>

        <div className="hoteltileStrap" style={{height: "33%",borderBottom: "1px solid",borderColor: "#f1f1f1"}}>
            <div className="rating-small">
                {hotel.hotelStars}
            </div>
            <div className="reviews-hotel">
                <p style={{fontSize: 13,lineHeight: "120%"}}><strong>{hotel.hotelReviewType}</strong>
                <br/>{hotel.hotelNumberOfReviews} reviews</p>
            </div>
            <div className="location-hotel">
            <p style={{fontSize: 13,lineHeight: "120%"}}><strong>Location</strong>
            <br/>{hotel.hotelArea}</p>
            </div>

            <div className="available-rooms">
            <p style={{fontSize: 13,lineHeight: "120%"}}><strong>Available Rooms: {hotel.hotelNumberOfRooms}</strong></p>
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
        <p style={{lineheight: "70%",marginTop: "2%"}}><span style={{color: "red", textDecoration: "line-through"}}>${hotel.hotelOldPrice}</span><br/>
        ${hotel.hotelOriginalPrice}&nbsp; * &nbsp;{this.state.room}</p>
      <p>Kayak.com</p>
        <button onClick={()=>{this.props.handleHoteltileFetch({hoteltile: hotel, room: this.state.room})}} style={{width: "80%",backgroundColor: "#ff731a",height: "20%", borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0}}>View Deal</button>
        <div style={{marginTop: "7%"}}>
            <i className="fa fa-share-alt" aria-hidden="true"></i>&nbsp;Share &nbsp;&nbsp;<i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;Watch
        </div>
    </div>

</div>
))}
</div>
    <div className="rightFillers" style={{marginTop: 20}}>
    <div>
        <img src={SideHotel1} />
    </div>
    <div>
        <img src={SideHotel2} />
    </div>
    </div>
</div>
);
  }
}

export default HotelTile;
