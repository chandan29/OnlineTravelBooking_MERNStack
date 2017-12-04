import React, {Component} from 'react';

import StayUptoDate from './StayUptoDate';
import Carousal1 from './Carousal1';
import Carousal2 from './Carousal2';

import BeautifulDown from './BeautifulDown';
var FontAwesome = require('react-fontawesome');

class MainBody extends Component {

  componentWillMount(){

    var today=new Date().toISOString().split('T')[0];
  //  var arr=today.split('-');
  //  arr[arr.length-1]-=1;
  //  var min=arr.join('-');
    this.setState({
      minDate : today
    })

  }
        state = {
                carsObj: [],
                city:"",
                carCity:"",
                fromDate:"",
                toDate:""
            };

  render() {
    return (
      <div>
      <div className="container-mainbody" onClick={this.props.nav1} style={{paddingLeft:"2%"}}>
            <br />
            <br />
            <div className="displayText">
              Search hundreds of travel sites at once.
            </div>
            <br/>
            <br/>

              <div className="tabs" style={{marginLeft: "30%"}}>
                    <div className="tab">
                     <span style={{float:"left",paddingTop:"6%",paddingLeft: "10%"}}>
                        <svg className="svgs" width="30" height="30">
                          <path d="M2 14.77h21v2H2z"></path>
                          <path d="M6 7.07V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.07h1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.07h2V0H4v7.07h2zM21 8.67H4a4.06 4.06 0 0 0-4 4.07v2.43h25v-2.43a4.06 4.06 0 0 0-4-4.07z"></path>
                        </svg>
                     </span>
                     <span style={{float:"left",marginTop:5,fontSize:13}}><a href="/hotels"><strong>HOTELS</strong></a></span>
                     </div>
                     <div className="tab">
                      <span style={{float:"left",paddingTop:"5%",marginLeft:"5%"}}>
                         <svg className="svgs" width="30" height="30">
                         <path d="M16.79 7.83l-3.93 3.93 4.51 7.05.76-.76-1.34-10.22M12.24 3.15L1.62 1.76l-.75.76 7.32 4.69 4.05-4.06"></path>
                           <path d="M10.73 11.94l1.3-1.3 4.28-4.28 2.8-2.8s1.54-2.12.46-3.17-3.17.47-3.17.47l-2.62 2.62-4.4 4.4L8 9.24a20 20 0 0 0-2.23 3.2l-4.67-.89L0 12.62l3.79 2.65.92.92L7.41 20l1.07-1.1-.91-4.76a20.06 20.06 0 0 0 3.16-2.2z"></path>
                         </svg>
                      </span>
                      <span style={{float:"left",marginTop:5,fontSize:13}}><a href="/flights"><strong>FLIGHTS</strong></a></span>
                      </div>
                      <div className="tab">
                       <span style={{float:"left",paddingTop:"6%",paddingLeft:"13%"}}>
                          <svg className="svgs" width="30" height="30" fill="#ff690f">
                            <path d="M10.6 2.77L.61 1.2V0h9.99v2.77"></path>
                            <path fill="none" d="M12 1.84v3.33l8.14.11C18.29 3.56 16 1.87 14.72 1.84c-.96-.03-2.72 0-2.72 0z"></path>
                            <path d="M31 7.77c-.87-1.6-8.41-2.52-8.41-2.52S17.3.46 14.53 0H6.37h1.5A7.73 7.73 0 0 0 3 1.59a18.47 18.47 0 0 0-3 4.23v3.83c0 3.86 1.55 4.49 2.53 4.52v-.13A3.76 3.76 0 1 1 10 14v.07l9-.01a3.76 3.76 0 0 1 7.52 0h.79a7 7 0 0 0 3.9-.93A28.38 28.38 0 0 0 31 7.77zm-19-2.6V1.84h2.72c1.3 0 3.56 1.72 5.42 3.45z"></path>
                            <circle cx="22.71" cy="14.04" r="2.36"></circle>
                            <circle cx="6.28" cy="14.04" r="2.36"></circle>
                          </svg>
                       </span>
                       <span style={{float:"left",marginTop:5,marginLeft: 10,fontSize:13,color: "#ff690f"}}><strong>CARS</strong></span>
                       </div>
                       <div className="tab">
                        <span style={{float:"left",paddingTop:"6%"}}>
                           <svg className="svgs" width="30" height="30">
                             <path d="M8.86 8.41A6.45 6.45 0 0 1 10.8 9a6.39 6.39 0 0 1 1.79 1.3c.93-1.45 2.87-5.07 2-8.72-3.44 1.51-5.13 5.18-5.73 6.83zM7.66 7.83C8.33 6 10 2.48 13.38.63 8.09-1 4.91 3.24 4.14 4.47l-.69 1.4a6.21 6.21 0 0 1 2.43.67 6.39 6.39 0 0 1 1.78 1.29zM16.06 2.12a13.75 13.75 0 0 1-2.23 8.74 6.46 6.46 0 0 1 1.92.61 6.2 6.2 0 0 1 2 1.55l.66-1.42a8.46 8.46 0 0 0-2.35-9.48zM11.23 10.42l-1.34-.67-3.08 6.18A18.51 18.51 0 0 0 0 17.17v1.58h15v-1.63c-.91-.57-3.57-1.1-6.48-1.19z"></path>
                            </svg>
                        </span>
                        <span style={{float:"left",marginTop:5,fontSize:13}}><strong>PACKAGES</strong></span>
                        </div>
              </div>

              <br/>
              <br />
              <div className="main-content">

                <div className="car-booking">

                  <div style={{paddingTop:"4.5%"}}>

                  <input placeholder="San Jose, CA" list="cities" name="city"  value={this.state.city} onChange={(event) => {
                      console.log(event.target.value);
                this.setState({
                    city: event.target.value
                });}} style={{width:"43%", paddingTop: "5%",float:"left",marginLeft:7, border:"none",padding:28}} />
                        <datalist id="cities">
                          <option value="San Jose" />
                          <option value="New York" />
                          <option value="Santa Clara" />
                          <option value="Las Vegas" />
                          <option value="Chicago" />
                          <option value="Dallas" />
                          <option value="Philadelphia" />
                          <option value="San Francisco" />
                          <option value="Oakland" />
                          <option value="Denver" />
                         </datalist>
                  </div>

                  <div>
                      <input placeholder="From Date" min={this.state.minDate} type="date" onChange={(event) => {
                          console.log(event.target.value);
                    this.setState({
                        fromDate: event.target.value
                    });}}
                     style={{marginLeft:4,width:"22%",height:"10%",float:"left",display: "inline",paddingTop:"5%", border:"none",padding:26,paddingLeft: "7%"}}/>
                  </div>

                  <div>
                      <input placeholder="To Date" min={this.state.minDate} type="date" onChange={(event) => {
                          console.log(event.target.value);
                    this.setState({
                        toDate: event.target.value
                    });}}
                     style={{marginLeft:4,width:"22%",float:"left",display: "inline",paddingTop:"5%", border:"none",padding:26, paddingLeft: "7%"}}/>
                  </div>

                    <button  className="arrow" style={{marginLeft:4,width:"6.5%",height: 74,float:"left",display: "inline",paddingTop:"5%",border:"none",padding:28}} onClick={()=>{this.props.handleCarFetch({carCity:this.state.city,fromDate:this.state.fromDate,toDate:this.state.toDate})}}>
                    </button>



                </div>
                <div className="stayUptoDate">

                </div>

              </div>
      </div>
      <StayUptoDate body1={this.props.body1}/>
      <Carousal1 body1={this.props.body1}/>
      <br/>
      <Carousal2 body1={this.props.body1}/>
      <br/>
      <BeautifulDown body1={this.props.body1}/>
      </div>
);
  }
}

export default MainBody;
