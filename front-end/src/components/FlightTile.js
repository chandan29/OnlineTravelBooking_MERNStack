import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Flight2 from './../flight2.jpg';
import LeftFilterCars from './LeftFilterCars';
import FlightLogo from './../flights.png';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideFlight1 from './../sideflight1.png';
import SideFlight2 from './../sideflight2.png';
import Alaska from './../alaska.png';
import American from './../american.png';
import British from './../british.png';
import Spirit from './../spirit.png';
import United from './../united.png';
import Virgin from './../virgin.png';
var FontAwesome = require('react-fontawesome');


class HotelTile extends Component {
  /*  componentWillMount(){
      console.log(this.props.flights);

      console.log("seats count", this.props.seats)
      var seat = this.props.seats[0];
      seat = parseInt(seat);
      console.log("Seats count Integer", seat);


      this.setState({
          flights: this.props.flights,
          flightsCopy: this.props.flights,
          seat: seat
      });
    }
*/

componentWillMount(){

  for(var i=0;i<this.props.flights.length;i++){
    var x=this.props.flights[i].flightDepartureTime.split(' ')[1];
    if(x=="PM"){
      var y=this.props.flights[i].flightDepartureTime.split(' ')[0].split(':')[0];
      var z=this.props.flights[i].flightDepartureTime.split(' ')[0].split(':')[1];
      if(parseInt(y)<12){
        var a=parseInt(y)+12;
        y=a+":"+z;
        this.props.flights[i].flightDepartureTime=y;
        console.log(y);
      }
    }

  }

  //  console.log(this.props.flights[i].flightDepartureTime);

//  console.log(this.props.flights[0].flightDepartureTime);

  console.log("seats count", this.props.seats)
  var seat = this.props.seats[0];
  seat = parseInt(seat);
  console.log("Seats count Integer", seat);


  this.setState({
      flights: this.props.flights,
      flightsCopy: this.props.flights,
      flightsDep:this.props.flights,
      seat: seat
  });


}
  state={
      flightsCopy: this.props.flights,
      val:500,
      val1:0
  }

  handleDepartureFilter = (event, value) => {

      console.log("value of slider", value);
      this.setState({
          val1: value
      });

      var dummyFlights = [];
      for(var i=0;i<this.state.flights.length;i++)
      {
          if(parseInt(this.state.flights[i].flightDepartureTime.split(':')[0]) <= value)
          {
              dummyFlights.push(this.state.flights[i]);
          }
      }
      this.setState({
          flightsCopy: dummyFlights
      });
  }

  handlestar1 = () => {
      var dummyFlights = [];
      for(var i=0;i<this.state.flights.length;i++)
      {
          if(this.state.flights[i].flightRating >= 1 )
          {
              dummyFlights.push(this.state.flights[i]);
          }
      }

      this.setState({
          flightsCopy:dummyFlights
      });
  };

  handlestar2 = () => {
      var dummyFlights = [];
      for(var i=0;i<this.state.flights.length;i++)
      {
          if(this.state.flights[i].flightRating >= 2 )
          {
              dummyFlights.push(this.state.flights[i]);
          }
      }

      this.setState({
          flightsCopy:dummyFlights
      });
  };

  handlestar3 = () => {
      var dummyFlights = [];
      for(var i=0;i<this.state.flights.length;i++)
      {
          if(this.state.flights[i].flightRating >= 3 )
          {
              dummyFlights.push(this.state.flights[i]);
          }
      }

      this.setState({
          flightsCopy:dummyFlights
      });
  };

  handlestar4 = () => {
      var dummyFlights = [];
      for(var i=0;i<this.state.flights.length;i++)
      {
          if(this.state.flights[i].flightRating >= 4 )
          {
              dummyFlights.push(this.state.flights[i]);
          }
      }

      this.setState({
          flightsCopy:dummyFlights
      });
  };

  handlestar5 = () => {
      var dummyFlights = [];
      for(var i=0;i<this.state.flights.length;i++)
      {
          if(this.state.flights[i].flightRating === 5 )
          {
              dummyFlights.push(this.state.flights[i]);
          }
      }

      this.setState({
          flightsCopy:dummyFlights
      });
  };

  handlePriceFilterFlight = (event, value) => {

      console.log("value of slider", value);
      this.setState({
          val: value
      });

      var dummyFlights = [];
      for(var i=0;i<this.state.flights.length;i++)
      {
          if(this.state.flights[i].flightFareDetails <= value)
          {
              dummyFlights.push(this.state.flights[i]);
          }
      }
      this.setState({
          flightsCopy: dummyFlights
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
                onChange={this.handlePriceFilterFlight}
              />
              </MuiThemeProvider>
              <span style={{float: "left", display: "inline"}}>1000</span>
              </div>
              <p style={{width: "90%", textAlign: "center",marginTop: 0}}>Current Price range: 0 - {this.state.val}</p>
              <hr/>
            </div>
            <div className="departureFilter" style={{marginTop: 30}}>
            <label style={{display: "inline", float: "left",marginLeft: "7%"}}>0</label>
            <MuiThemeProvider>
            <Slider
              min={0}
              max={23}
              step={1}
              style={{width: "70%",marginLeft: "2%",display:"inline", float: "left"}}
              value={this.state.val1}
              onChange={this.handleDepartureFilter}
            />
            </MuiThemeProvider>
            <span style={{float: "left", display: "inline"}}>23</span>
            <p style={{width: "90%", textAlign: "center",marginTop: 0}}>Current Max Departure time: 0 - {this.state.val1}</p>
            </div>
            <div style={{textAlign: "center",width: "85%",marginTop: 10,marginLeft: "5%",height: 25,fontSize: 18,borderBottom: "1px solid"}}><span style={{float:"left", fontWeight: 700}}>Flight Agency</span></div>

            <div className="filter_car_type" style={{width: "100%", height: 150,padding: "5%",marginTop: 10}}>

                    <input type="checkbox" name="carType"  onChange={(event) => {
                  this.setState({
                      Spirit: event.target.checked
                  });}}/>&nbsp;Spirit Airlines<br/>

                    <input type="checkbox" name="carType"  onChange={(event) => {
                  this.setState({
                      British: event.target.checked
                  });}} />&nbsp;British Airways<br/>
                    <input type="checkbox" name="carType"  onChange={(event) => {
                  this.setState({
                      American: event.target.checked
                  });}} />&nbsp;American Airlines<br/><p></p>
                    <button  style={{width: "28%", height: 25,backgroundColor:"#558FE6"}} onClick={()=>{this.handleCarTypeFilter({HatchBack: this.state.HatchBack, Sedan: this.state.Sedan, SUV: this.state.SUV})}}>Filter</button>
            </div>
            <hr/>
            <div style={{textAlign: "center",width: "85%",marginTop: 10,marginLeft: "5%",height: 25,fontSize: 18,borderBottom: "1px solid"}}><span style={{float:"left", fontWeight: 700}}>Flight Class</span></div>

            <div className="filter_car_type" style={{width: "100%", height: 150,padding: "5%",marginTop: 10}}>

                    <input type="checkbox" name="carType"  onChange={(event) => {
                  this.setState({
                      Economy: event.target.checked
                  });}}/>&nbsp;Economy<br/>

                    <input type="checkbox" name="carType"  onChange={(event) => {
                  this.setState({
                      FirstClass: event.target.checked
                  });}} />&nbsp;First Class<br/>
                    <input type="checkbox" name="carType"  onChange={(event) => {
                  this.setState({
                      Business: event.target.checked
                  });}} />&nbsp;Business<br/><p></p>
                    <button  style={{width: "28%", height: 25,backgroundColor:"#558FE6"}} onClick={()=>{this.handleCarTypeFilter({HatchBack: this.state.HatchBack, Sedan: this.state.Sedan, SUV: this.state.SUV})}}>Filter</button>
            </div>
        </div>
        <hr/>



<div className="mid-hoteltile">
{this.state.flightsCopy.map(flight => (
<div className="outerDiv-flight">
    <div className="outerDiv-flight-left">
        {
            flight.flightAgency === "American Airlines"
            ?
            <img src={American}  style={{paddingLeft: "29%", paddingTop: "12%"}}/>
            :
            null
        }
        {
            flight.flightAgency === "British Airlines"
            ?
            <img src={British}  style={{paddingLeft: "29%", paddingTop: "12%"}}/>
            :
            null
        }
        {
            flight.flightAgency === "United Airlines"
            ?
            <img src={United}  style={{paddingLeft: "29%", paddingTop: "12%"}}/>
            :
            null
        }
        {
            flight.flightAgency === "Spirit Airlines"
            ?
            <img src={Spirit}  style={{paddingLeft: "29%", paddingTop: "12%"}}/>
            :
            null
        }
        {
            flight.flightAgency === "Alaska Airlines"
            ?
            <img src={Alaska}  style={{paddingLeft: "29%", paddingTop: "12%"}}/>
            :
            null
        }
        {
            flight.flightAgency === "Virgin Airlines"
            ?
            <img src={Virgin}  style={{paddingLeft: "29%", paddingTop: "12%"}}/>
            :
            null
        }

    </div>
    <div className="outerDiv-flight-mid">
        <div className="flighttileStrap" style={{height: "43%",paddingTop: "3%"}}>
        <span style={{float: "left",marginLeft:"2%", fontWeight: "bold"}}>{flight.flightDepartureTime}<br/>DEL</span>
        <span style={{float: "left",marginLeft: "10%", fontWeight: "bold"}}>-----*------<br/><span style={{marginLeft: 12}}>TPE</span></span>
        <span style={{float: "left",marginLeft: "10%",fontWeight: "bold"}}>{flight.flightArrivalTime}</span>
        <span style={{float: "left",marginLeft: "10%",fontWeight: "bold"}}>35 hr 30 mins</span>
        </div>

        <div className="flighttileStrap" style={{marginTop: "3%",height: "22%",display: "inline",marginTop: "10%"}}>
        <p></p>
            <span style={{float: "left"}}>Available Seats: <strong>{flight.flightAvailableSeats}</strong></span>
            <span style={{float: "right",marginRight: 5}}><strong>${flight.flightFareDetails * this.state.seat}</strong> book easily on KAYAK</span><span style={{float: "right",marginRight: 10}}><img src={FlightLogo} alt="flight logo" /></span>
        </div>
    </div>
    <div className="outerDiv-hotel-right"><p></p>
        <p style={{lineheight: "120%",marginTop: "2%"}}>${flight.flightFareDetails} * {this.state.seat}&nbsp; Seats<br/>
        <strong>KAYAK</strong></p>
        <button onClick={() => {this.props.handleFlighttileFetch({flighttile: flight, seat: this.state.seat})}}style={{width: "80%",backgroundColor: "#ff731a",height: "20%", borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0}}>View Deal</button>
        <div style={{marginTop: "7%"}}>
            <i className="fa fa-share-alt" aria-hidden="true"></i>&nbsp;Share &nbsp;&nbsp;<i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;Watch
        </div>
    </div>


</div>
))};


</div>
    <div className="rightFillers">
    <div>
        <img src={SideFlight1} />
    </div>
    <div>
        <img src={SideFlight2} />
    </div>
    </div>
</div>

);
  }
}

export default HotelTile;
