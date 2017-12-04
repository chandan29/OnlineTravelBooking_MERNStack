import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Car1 from './../car1.png';
import Cards from './../CreditCards.png';
import carLogo1 from './../hertz.png';
var FontAwesome = require('react-fontawesome');
class CarCheckoutDetails extends Component {

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
      handleRedirectBooking: PropTypes.func.isRequired
  }

  componentWillMount(){
    console.log(this.props.carTile);
  }

  render() {
    return (
        <div>
      <div className="outerDiv" style={{marginTop: 20}}>
        <div className="outerDiv-left-carCheckoutDetails">
            <div className="outerDiv-left-carCheckoutDetails-top">
              <h3 style={{lineHeight: "140%"}}>{this.props.carTile.cartile.carType} (Toyota Corolla or similar)<br/>
              Automatic transmission, Air-conditioning</h3>
              <h5>{this.props.carTile.cartile.carFromDate} to {this.props.carTile.cartile.carToDate} (1 day)</h5>
            </div>
            <div className="outerDiv-right-carCheckoutDetails-bottom" style={{paddingTop: 10}}>
                <span style={{display: "inline", float:"left",marginLeft:"2%"}}>{this.props.carTile.cartile.carCapacity}<p style={{float:"left",marginRight:5}}><FontAwesome name='user' size='1x'/></p></span>
                <span style={{display:"inline", float:"left",marginLeft:"12%"}}>2 bags<p style={{float:"left",marginRight:5}}><FontAwesome name='suitcase' size='1x'/></p></span>
                <span style={{display:"inline",float:"left",marginLeft:"12%"}}>4 doors<p style={{float:"left",marginRight:5}}><FontAwesome name='folder' size='1x'/></p></span>
            </div>
        </div>
        <div className="outerDiv-right-carCheckoutDetails" style={{marginLeft: 0}}>
            <img src={Car1}/>
        </div>
      </div>

      <div className="outerDiv">
            <div className="outerDiv-left-carCheckoutDetails1">
                <h5>Pick up: {this.props.carTile.cartile.carFromDate} – 12:00PM</h5>
                <p></p>
                <h5>Agency name: {this.props.carTile.cartile.carAgency}<br/>
                2800 Leavenworth St, Suite A44<br/>
                {this.props.carTile.cartile.carCity}</h5>

                <h5>Phone: +1 415 306 5289</h5>
            </div>
            <div className="outerDiv-mid-carCheckoutDetails1">
                <h5>Drop Off: {this.props.carTile.cartile.carToDate} – 12:00PM</h5>
                <p></p>
                <h5>Agency name: {this.props.carTile.cartile.carAgency}<br/>
                2800 Leavenworth St, Suite A44<br/>
                {this.props.carTile.cartile.carCity}</h5>

                <h5>Phone: +1 415 306 5289</h5>
            </div>
            <div className="outerDiv-right-carCheckoutDetails1">
                <img src={carLogo1} alt="agencylogo"/>
            </div>
          </div>
          <div className="outerDiv">

                <div style={{width: "90%", backgroundColor: "#ebebed",marginTop:5,marginLeft:"5%",borderRadius: 3,height: 28,paddingTop: 5}}>The booking will be charged in USD, the daily rate is <strong>${this.props.carTile.cartile.carOriginalPrice}</strong> USD including taxes.</div>
                <table>
                  <tr>
                    <th style={{borderTop:"none"}}></th>
                    <th style={{borderTop:"none",color: "#558fe6"}}>Per Day</th>
                    <th style={{borderTop:"none",color: "#558fe6"}}>Total</th>
                  </tr>
                  <tr>
                    <td>{this.props.carTile.cartile.carType} ({this.props.carTile.cartile.carName} or similar)</td>
                    <td>${this.props.carTile.cartile.carOriginalPrice}</td>
                    <td>${this.props.carTile.cartile.carOriginalPrice}</td>
                  </tr>
                  <tr>
                    <td>Taxes and Fees</td>
                    <td>${this.props.carTile.cartile.carOriginalPrice/10}</td>
                    <td>${this.props.carTile.cartile.carOriginalPrice/10}</td>
                  </tr>
                  <tr>
                    <td><strong>Rental Car Total</strong></td>
                    <td><strong>${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10}</strong></td>
                    <td><strong>${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10}</strong></td>
                  </tr>
                </table>
          </div>

          <div className="outerDiv" style={{height: "auto"}}>
                <h4>Renter Details</h4>
                <div style={{backgroundColor:"#f1f1f1"}}>
                  <h5 style={{height: 36,padding:"1%"}}><span style={{color: "#558fe6",marginLeft: 10}}>Sign in if you have an account</span> to retrieve saved travelers and credit cards.</h5>
                </div>


                    <h4>Enter Billing information </h4>
                    <p>Billing Address</p>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Apt Suite"/>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "5%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Apt Number"/>
                    <p></p>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Street Address" onChange={(event) => {
                  this.setState({
                      userAddress: event.target.value
                  });
                }}/>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "5%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="City" onChange={(event) => {
                  this.setState({
                      userCity: event.target.value
                  });
                }}/>
              {/*Adding a field of zipcode*/}
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
                    <input type="text" style={{width: "10%",height:35,marginLeft: "5%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Country" onChange={(event) => {
                  this.setState({
                      userCountry: event.target.value
                  });
                }}/>
                <hr/>
                    <h4>Card Details </h4>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Name on Card*"/>
                    <input type="number" style={{width: "40%",height:35,marginLeft: "3%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Card Number*" onChange={(event) => {
                  this.setState({
                      creditCard: event.target.value
                  });
                }}/>
                    <p></p>

                    <input type="text" style={{width: "11%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Month"/>
                    <input type="text" style={{width: "11%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Year"/>
                    <input type="text" style={{width: "12%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="CVV"/>
                    <img src={Cards}  style={{float:"right"}}/>
                <hr/>
                    <div style={{height: 120,paddingBottom:10,marginBottom: 10}}>
                        <h5 style={{display: "inline"}}><span style={{color: "green"}}>Pay ${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10} USD today.</span> Pay ${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10} USD at pick-up.</h5>
                        <button  onClick={()=>{this.props.handleRedirectBooking({userAddress:this.state.userAddress,userCity:this.state.userCity,userCountry:this.state.userCountry,userState:this.state.userState,creditCard:this.state.creditCard,userZip:this.state.zipCode})}} style={{display:"inline",marginLeft: "45%",width: "15%", height: 30,marginBottom: 10, border: "none", backgroundColor: "#ff4f3a"}}>Book Now</button>
                    </div>

          </div>

      </div>

);
  }
}

export default CarCheckoutDetails;
