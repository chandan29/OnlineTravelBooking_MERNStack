import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import StayUptoDate from './StayUptoDate';
import Carousal1 from './Carousal1';
import Carousal2 from './Carousal2';
import * as API from '../api/API';
import BeautifulDown from './BeautifulDown';
var FontAwesome = require('react-fontawesome');

class MainBody extends Component {


  state={
        carsObj: [],
        city:''
  }
  render() {
    return (
      <div>
      <div className="container-mainbody" style={{paddingLeft:"2%"}}>
            <br />
            <br />
            <div className="displayText">
              Search hundreds of travel sites at once.
            </div>
            <br/>
            <br/>

              <div className="tabs">
                    <div className="tab">
                     <span style={{float:"left"}}> <FontAwesome name='bed' size='2x'/></span><span style={{float:"left",marginLeft:10,marginTop:5}}>Hotels</span>
                     </div>
                    <div className="tab">
                        <span style={{float:"left"}}>  <FontAwesome name='plane' size='2x'/></span><span style={{float:"left",marginLeft:10,marginTop:5}}>Flights</span>
                    </div>
                    <div className="tab">
                        <span style={{float:"left"}}><FontAwesome name='car' size='2x'/></span><span style={{float:"left",marginLeft:10,marginTop:5}}>Cars</span>
                    </div>
                    <div className="tab">
                        <span style={{float:"left"}}><FontAwesome name='plane' size='2x'/></span><span style={{float:"left",marginLeft:10,marginTop:5}}>Packages</span>
                    </div>
              </div>

              <br/>
              <br />
              <div className="main-content">

                <div className="car-booking">
                <div className="dropoff" style={{width: "100%", float: "left",marginTop:13,marginLeft: 8}}>
                  <a href="#" style={{marginLeft:18,color:"black",fontSize:12}}>SAME DROP-OFF</a>
                  <a href="#" style={{marginLeft:18,color:"black",fontSize:12}}>DIFFERENT DROP-OFF</a>
                </div>
                  <div style={{paddingTop:"4.5%"}}>
                      <input onChange type="text" value={this.state.city} onChange={(event) => {
                          console.log(event.target.value);
                    this.setState({
                        city: event.target.value
                    });}} style={{width:"43%", paddingTop: "5%",float:"left",marginLeft:7, border:"none",padding:28}} />
                  </div>

                  <div>
                      <input type="text" style={{marginLeft:4,width:"22%",float:"left",display: "inline",paddingTop:"5%", border:"none",padding:28}}/>
                  </div>

                  <div>
                      <input type="text" style={{marginLeft:4,width:"22%",float:"left",display: "inline",paddingTop:"5%", border:"none",padding:28}}/>
                  </div>


                    <button  className="arrow" style={{marginLeft:4,width:"6.5%",height: 74,float:"left",display: "inline",paddingTop:"5%",border:"none",padding:28}} onClick={()=>{this.props.handleCarFetch({carCity:this.state.city,fromDate:'11-12-2017',toDate:'12-12-2017'})}}>
                    </button>




                </div>
                <div className="stayUptoDate">

                </div>

              </div>
      </div>
      <StayUptoDate />
      <Carousal1 />
      <br/>
      <Carousal2 />
      <br/>
      <BeautifulDown />
      </div>
);
  }
}

export default MainBody;
