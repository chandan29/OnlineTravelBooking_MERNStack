import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Car1 from './../car1.png';
import Cards from './../CreditCards.png';
import Flight1 from './../flight1.jpg';
import Alaska from './../alaska1.png';
import American from './../american1.jpg';
import British from './../british1.jpg';
import Spirit from './../spirit1.JPG';
import United from './../united1.png';
import Virgin from './../virgin1.jpg';
var FontAwesome = require('react-fontawesome');

class FlightCheckoutDetails extends Component {

  state={
    firstName:"",
    lastName:"",
    contact:"",
    userAddress:"",
    userCity:"",
    userCountry:"",
    userState:"",
    creditCard:"",
    zipCode:""
  }

  static PropTypes={

  }

  componentWillMount(){
      console.log(this.props.flightTile);
      console.log(this.props.seat);
  }

  render() {
    return (

    <div style={{backgroundColor: "#f1f1f1"}}>



    <div className="outerDiv-flightcheckout1" style={{paddingTop: "1%", paddingLeft: "1%"}}>
    <div style={{float: "left", display: "inline",width: "100%"}}>
    <div style={{float: "left",display:"inline"}}>
        <p style={{lineWidth: "140", fontSize: 18, fontWeight: "bold"}}>{this.props.flightTile.flightFromCity} to {this.props.flightTile.flightToCity}
        <br/>{this.props.flightTile.flightAgency}, one-way, {this.props.flightTile.flightClass}</p>
        <p style={{fontSize: 18, width: "80%"}}>Depart: {this.props.flightTile.flightFromDate}</p>
    </div>
    <div style={{float: "right"}}>
        {
            this.props.flightTile.flightAgency === "American Airlines"
            ?
            <img src={American}/>
            :
            null
        }
        {
            this.props.flightTile.flightAgency === "British Airlines"
            ?
            <img src={British}  />
            :
            null
        }
        {
            this.props.flightTile.flightAgency === "United Airlines"
            ?
            <img src={United}  />
            :
            null
        }
        {
            this.props.flightTile.flightAgency === "Spirit Airlines"
            ?
            <img src={Spirit}  />
            :
            null
        }
        {
            this.props.flightTile.flightAgency === "Alaska Airlines"
            ?
            <img src={Alaska} />
            :
            null
        }
        {
            this.props.flightTile.flightAgency === "Virgin Airlines"
            ?
            <img src={Virgin} />
            :
            null
        }
        </div>
        </div>

    </div>
    <div className="outerDiv-flightcheckout2">
        The booking will be charged in USD. The average ticket price of ${this.props.flightTile.flightFareDetails * this.props.seat}.
    </div>

    <div className="outerDiv-flightcheckout3">
        <span style={{float: "left"}}>Flight Details</span><span style={{float: "right"}}><svg className="svgs" width="40" height="40" fill="white">
        <path d="M16.79 7.83l-3.93 3.93 4.51 7.05.76-.76-1.34-10.22M12.24 3.15L1.62 1.76l-.75.76 7.32 4.69 4.05-4.06"></path>
          <path d="M10.73 11.94l1.3-1.3 4.28-4.28 2.8-2.8s1.54-2.12.46-3.17-3.17.47-3.17.47l-2.62 2.62-4.4 4.4L8 9.24a20 20 0 0 0-2.23 3.2l-4.67-.89L0 12.62l3.79 2.65.92.92L7.41 20l1.07-1.1-.91-4.76a20.06 20.06 0 0 0 3.16-2.2z"></path>
        </svg></span>
    </div>
    <div className="outerDiv-flightcheckout5">
        <p><span style={{marginLeft: "1%"}}><i className="fa fa-plane" aria-hidden="true"></i>&nbsp;&nbsp;</span>&nbsp;{this.props.flightTile.flightAgency} - Flight 45 (Economy)</p>
        <p><span style={{marginLeft: "1%"}}><i className="fa fa-arrow-up" aria-hidden="true"></i>&nbsp;&nbsp;</span> {this.props.flightTile.flightDepartureTime}	<span style={{marginLeft: "8%"}}>{this.props.flightTile.flightFromDate}</span><span style={{marginLeft: "5%"}}>{this.props.flightTile.flightFromCity}</span></p>
        <p><span style={{marginLeft: "1%"}}><i className="fa fa-arrow-down" aria-hidden="true"></i>&nbsp;&nbsp;</span> {this.props.flightTile.flightArrivalTime}	<span style={{marginLeft: "8%"}}>{this.props.flightTile.flightToDate}</span><span style={{marginLeft: "5%"}}>{this.props.flightTile.flightToCity}</span></p>
    </div>

    <div className="outerDiv">
          <h4>Price: </h4>
          <table>
            <tr>
              <th style={{borderTop:"none"}}>Ticket</th>
              <th style={{borderTop:"none"}}>Base</th>
              <th style={{borderTop:"none"}}>Taxes, Fees & Surcharges</th>
              <th style={{borderTop:"none"}}>Total</th>

            </tr>
            <tr>
              <td>{this.props.flightTile.flightAgency}</td>
              <td>${this.props.flightTile.flightFareDetails * this.props.seat}</td>
              <td>${(this.props.flightTile.flightFareDetails * this.props.seat)/10}</td>
              <td>${(this.props.flightTile.flightFareDetails* this.props.seat) + (this.props.flightTile.flightFareDetails * this.props.seat)/10 }</td>
            </tr>

            <tr>
              <td><strong>Rental Car Total</strong></td>
              <td></td>
              <td></td>
              <td>${(this.props.flightTile.flightFareDetails* this.props.seat) + (this.props.flightTile.flightFareDetails * this.props.seat)/10 }</td>
            </tr>
          </table>
    </div>



          {/*<div className="outerDiv" style={{height: "auto"}}>
                <h3>Enter Guest Details </h3>
                <div style={{backgroundColor:"#f1f1f1"}}>
                  <h5 style={{height: 30,padding:"1%"}}><span style={{color:"blue"}}>Sign in if you have an account</span> to retrieve saved travelers and credit cards.</h5>
                </div>
                <div>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="First Name"/>
                    <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Last Name"/>
                </div>
                <br/>
                <div>
                <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Email Adress"/>
                <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Phone number"/>
                </div>
                <hr/>
                    <h3><b>Enter Billing information </b></h3>
                    <p>Billing Address</p>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Street(Line 1)"/>
                    <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Street(Line 2)"/>
                    <p></p>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Postal Code"/>
                    <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="City"/>
                    <p></p>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="State"/>
                    <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Country"/>
                <hr/>
                    <h4>Card Details </h4>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Name on Card*"/>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "10%"}} placeholder="Card Number*"/>
                    <p></p>

                    <input type="text" style={{width: "13%",height:35,marginLeft: "1%"}} placeholder="month"/>
                    <input type="text" style={{width: "9%",height:35,marginLeft: "3%"}} placeholder="year"/>
                    <input type="text" style={{width: "12%",height:35,marginLeft: "3%"}} placeholder="CVV"/>
                    <img src={Cards}  style={{float:"right"}}/>
                <hr/>
                    <div style={{height: 120,paddingBottom:10,marginBottom: 10}}>
                        <h5 style={{display: "inline"}}><span style={{color: "green"}}>Pay ${this.props.flightTile.flightFareDetails * this.props.seat} USD today.</span></h5>
                        <button  onClick={this.props.handleRedirectBooking2} style={{display:"inline",marginLeft: "45%",width: "15%", height: 30,marginBottom: 10, border: "none", backgroundColor: "orange"}}>Book Now</button>
                    </div>

          </div>


*/}





        <div className="outerDiv" style={{height: "auto"}}>
            <h4>Enter Billing information </h4>
            <p>Billing Address</p>
            <input type="text" style={{width: "40%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Apt Suite"/>
            <input type="text" style={{width: "40%",height:35,marginLeft: "10%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Apt Number"/>
            <p></p>
            <input type="text" style={{width: "40%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Street Address" onChange={(event) => {
                this.setState({
                    userAddress: event.target.value
                });
            }}/>
            <input type="text" style={{width: "40%",height:35,marginLeft: "10%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="City" onChange={(event) => {
                this.setState({
                    userCity: event.target.value
                });
            }}/>
            <p></p>
              <input type="text" required   style={{width: "40%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Zip Code" onChange={(event) => {
                  this.setState({
                      zipCode: event.target.value
                  });
              }}/>
                    <p></p>
            <input type="text" list="states" style={{width: "40%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="State" onChange={(event) => {
                this.setState({
                    userState: event.target.value
                });
            }}/>
            <datalist id="states">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </datalist>
            <input type="text" style={{width: "40%",height:35,marginLeft: "10%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Country" onChange={(event) => {
                this.setState({
                    userCountry: event.target.value
                });
            }}/>
            <hr/>
            <h4>Card Details </h4>
            <input type="text" style={{width: "40%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Name on Card*"/>
            <input type="text" style={{width: "40%",height:35,marginLeft: "10%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Card Number*" onChange={(event) => {
                this.setState({
                    creditCard: event.target.value
                });
            }}/>
            <p></p>

            <input type="text" style={{width: "11%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Month"/>
            <input type="text" style={{width: "11%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Year"/>
            <input type="text" style={{width: "11%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="CVV"/>
            <img src={Cards}  style={{float:"right"}}/>
            <hr/>
            <div style={{height: 120,paddingBottom:10,marginBottom: 10}}>
                <h5 style={{display: "inline"}}><span style={{color: "green"}}>Pay ${(this.props.flightTile.flightFareDetails* this.props.seat) + (this.props.flightTile.flightFareDetails * this.props.seat)/10 } USD today.</span></h5>
                <button  onClick={()=>{this.props.handleRedirectBooking2({firstName:this.state.firstName,lastName:this.state.lastName,contact:this.state.contact,userAddress:this.state.userAddress,userCity:this.state.userCity,userCountry:this.state.userCountry,userState:this.state.userState,creditCard:this.state.creditCard,userZip:this.state.zipCode})}} style={{display:"inline",marginLeft: "45%",width: "15%", height: 30,marginBottom: 10, border: "none", backgroundColor: "orange"}}>Book Now</button>
            </div>

        </div>

    </div>

    );
  }
}

                export default FlightCheckoutDetails;
