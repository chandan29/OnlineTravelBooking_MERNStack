import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Car1 from './../car1.png';
import LeftFilterCars from './LeftFilterCars';
import rangesliderJs from 'rangeslider-js';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideCar1 from './../sidecar1.png';
import SideCar2 from './../sidecar2.png';

import car1 from './../Red.jpg';
import car2 from './../Red2.jpg';
import car3 from './../White.png';
import car4 from './../car1.png';
import car5 from './../Black.jpg';
import car6 from './../Black2.jpg';
import car7 from './../Blue.png';
import car8 from './../Blue2.png';
import car9 from './../Grey.jpg';
import car10 from './../Grey2.jpg';
var carsImgs = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

var FontAwesome = require('react-fontawesome');
var rand = require('unique-random')(0, 9);


class CarTile extends Component {
    componentWillMount(){
      console.log(this.props.cars);
      this.setState({
          cars: this.props.cars,
          carsCopy: this.props.cars,
          carsImgs: carsImgs
      });

          //  localStorage.setItem(this.props.cars, JSON.stringify(this.props.cars));
            /*this.setState({ cars: JSON.parse(cachedHits) });*/

      const cachedHits = localStorage.getItem("cars");
        if (cachedHits) {
            this.setState({ carsCopy : JSON.parse(cachedHits),
            cars: JSON.parse(cachedHits)});
            console.log("cache data",cachedHits);
        }
    }

    var

    state={
        carsCopy: this.props.cars,
        val:50
    }



  handlestar1 = () => {
      var dummyCars = [];
      for(var i=0;i<this.state.cars.length;i++)
      {
          if(this.state.cars[i].carRating === 1 || this.state.cars[i].carRating > 1)
          {
              dummyCars.push(this.state.cars[i]);
          }
      }

      this.setState({
          carsCopy:dummyCars
      });
  };

  handlestar2 = () => {
      var dummyCars = [];
      for(var i=0;i<this.state.cars.length;i++)
      {
          if(this.state.cars[i].carRating === 2 || this.state.cars[i].carRating > 2)
          {
              dummyCars.push(this.state.cars[i]);
          }
      }

      this.setState({
          carsCopy:dummyCars
      });
  };

  handlestar3 = () => {
      var dummyCars = [];
      for(var i=0;i<this.state.cars.length;i++)
      {
          if(this.state.cars[i].carRating === 3 || this.state.cars[i].carRating > 3)
          {
              dummyCars.push(this.state.cars[i]);
          }
      }

      this.setState({
          carsCopy:dummyCars
      });
  };

  handlestar4 = () => {
      var dummyCars = [];
      for(var i=0;i<this.state.cars.length;i++)
      {
          if(this.state.cars[i].carRating === 4 || this.state.cars[i].carRating > 4)
          {
              dummyCars.push(this.state.cars[i]);
          }
      }

      this.setState({
          carsCopy:dummyCars
      });
  };

  handlestar5 = () => {
      var dummyCars = [];
      for(var i=0;i<this.state.cars.length;i++)
      {
          if(this.state.cars[i].carRating === 5)
          {
              dummyCars.push(this.state.cars[i]);
          }
      }

      this.setState({
          carsCopy:dummyCars
      });
  };

  handlePriceFilter = (event, value) => {

      console.log("value of slider", value);
      this.setState({
          val: value
      });

      var dummyCars = [];
      for(var i=0;i<this.state.cars.length;i++)
      {
          if(this.state.cars[i].carOriginalPrice <= value)
          {
              dummyCars.push(this.state.cars[i]);
          }
      }
      this.setState({
          carsCopy: dummyCars
      });
  }

  handleCarTypeFilter(msg) {
      console.log("CarTypes checked: ",msg.HatchBack);
      console.log(this.state.cars);
      var finalCars = [];

      var carsHatchback =[];
      var carsSedan = [];
      var carsSUV = [];

      for(var i=0;i<this.state.cars.length;i++) {
          if(this.state.cars[i].carType === "Hatchback") {
              carsHatchback.push(this.state.cars[i]);
          }
          if(this.state.cars[i].carType === "Sedan") {
              carsSedan.push(this.state.cars[i]);
          }
          if(this.state.cars[i].carType === "SUV") {
              carsSUV.push(this.state.cars[i]);
          }
      }

      console.log("Hatchback Cars:",carsHatchback);

      console.log("Sedan Cars:", carsSedan);

      console.log("SUV cars: ",carsSUV);

      if(msg.HatchBack === true) {
          for(var i=0;i<carsHatchback.length;i++) {
              finalCars.push(carsHatchback[i]);
          }
      }
      if(msg.Sedan === true) {
          for(var i=0;i<carsSedan.length;i++) {
              finalCars.push(carsSedan[i]);
          }
      }
      if(msg.SUV === true) {
          for(var i=0;i<carsSUV.length;i++) {
              finalCars.push(carsSUV[i]);
          }
      }

      this.setState({
          carsCopy: finalCars
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
                    max={100}
                    step={1}
                    style={{width: "70%",marginLeft: "2%",display:"inline", float: "left",height: 60}}
                    value={this.state.val}
                    onChange={this.handlePriceFilter}
                  />
                  </MuiThemeProvider>
                  <span style={{float: "left", display: "inline"}}>100</span>
                  </div>
                  <p style={{width: "90%", textAlign: "center",marginTop: 0}}>Current Price range: 0 - {this.state.val}</p>
                  <hr/>
                </div>
                <div style={{textAlign: "center",width: "85%",marginTop: 10,marginLeft: "5%",height: 25,fontSize: 18,borderBottom: "1px solid"}}><span style={{float:"left", fontWeight: 700}}>Car Type</span></div>

                <div className="filter_car_type" style={{width: "100%", height: 150,padding: "5%",marginTop: 10}}>

                        <input type="checkbox" name="carType"  onChange={(event) => {
                      this.setState({
                          HatchBack: event.target.checked
                      });}}/>&nbsp;HatchBack<br/>

                        <input type="checkbox" name="carType"  onChange={(event) => {
                      this.setState({
                          Sedan: event.target.checked
                      });}} />&nbsp;Sedan<br/>
                        <input type="checkbox" name="carType"  onChange={(event) => {
                      this.setState({
                          SUV: event.target.checked
                      });}} />&nbsp;SUV<br/><p></p>
                        <button  style={{width: "28%", height: 25,backgroundColor:"#558FE6"}} onClick={()=>{this.handleCarTypeFilter({HatchBack: this.state.HatchBack, Sedan: this.state.Sedan, SUV: this.state.SUV})}}>Filter</button>
                </div>
            </div>

<div className="mid-cartile">

      {this.state.carsCopy.map(car => (

<div className="outerDiv">
        <div className="outerDiv-left">
            <div className="outerDiv-left-top">
                <h4 style={{marginLeft: "2%"}}>{car.carType}</h4>
                <h6 style={{marginLeft: "2%"}}>{car.carName}</h6>
                <div className="outerDiv-left-top-icons" style={{paddingTop: "1%"}}>
                    <span style={{display: "inline", float:"left",marginLeft:"2%"}}>{car.carCapacity}&nbsp; people<p style={{float:"left",marginRight:5}}><FontAwesome name='user'/></p></span>
                    <span style={{display:"inline", float:"left",marginLeft:"12%"}}>1<p style={{float:"left",marginRight:5}}><FontAwesome name='suitcase'/></p></span>
                    <span style={{display:"inline",float:"left",marginLeft:"12%"}}>4<p style={{float:"left",marginRight:5}}><FontAwesome name='folder'/></p></span>
                </div>
            </div>
            <div className="outerDiv-left-bottom">
                <span style={{display: "inline", float:"left",marginLeft:"2%",marginTop:15}}>
                <svg className="svgs" width="30" height="30">
                <path d="M16.79 7.83l-3.93 3.93 4.51 7.05.76-.76-1.34-10.22M12.24 3.15L1.62 1.76l-.75.76 7.32 4.69 4.05-4.06"></path>
                  <path d="M10.73 11.94l1.3-1.3 4.28-4.28 2.8-2.8s1.54-2.12.46-3.17-3.17.47-3.17.47l-2.62 2.62-4.4 4.4L8 9.24a20 20 0 0 0-2.23 3.2l-4.67-.89L0 12.62l3.79 2.65.92.92L7.41 20l1.07-1.1-.91-4.76a20.06 20.06 0 0 0 3.16-2.2z"></path>
                </svg>
                </span>
                <span style={{display: "inline", float:"left",marginLeft:"2%"}}><p style={{lineHeight:"70%",marginTop:10}}>Airport Terminal</p><p style={{lineheight:"70%"}}>{car.carCity}</p></span>
            </div>
        </div>
        <div className="outerDiv-mid" style={{textAlign: "center"}}>
        <button style={{marginTop:"5%",width: "45%",backgroundColor: "#1E90FF",height: "15%", borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0,float:"right",marginRight:"2%"}}>Great Deal</button>
        <br/>
        <img style={{marginLeft:"10%"}} src={this.state.carsImgs[rand()]}/>
        </div>
        <div className="outerDiv-right">

            <h4 style={{marginTop: "4%"}}>${car.carOriginalPrice}
            <br></br>
            Total</h4>
            <button onClick={()=>{this.props.handleCartileFetch({cartile: car})}} style={{width: "80%",backgroundColor: "#ff690f",height: "20%", borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0}}>View Deal</button>
            <div style={{marginTop: "12%"}}>
                <i className="fa fa-share-alt" aria-hidden="true"></i>&nbsp;Share &nbsp;&nbsp;<i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;Watch
            </div>
        </div>
    </div>

    ))}

</div>
        <div className="rightFillers">
        <div>
            <img src={SideCar1} />
        </div>
        <div>
            <img src={SideCar2} />
        </div>
        </div>
</div>
);
  }
}

export default CarTile;
