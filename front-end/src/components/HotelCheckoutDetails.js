import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Car1 from './../car1.png';
import Cards from './../CreditCards.png';
import Hotel1 from './../hotel1.jpg';
import Metro from './../Metro.jpg';
import Wingate from './../Wingate.jpg';
import King from './../King.jpg';
import Orbit from './../Orbit.jpg';
var FontAwesome = require('react-fontawesome');

class HotelCheckoutDetails extends Component {

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
    console.log(this.props.hotelTile);
    console.log(this.props.room);
  }

  render() {
    return (
    <div style={{backgroundColor: "#f1f1f1"}}>

      <div className="outerDiv-hotelcheckout1">

      {
          this.props.hotelTile.hotelAgency === " Orbit Agency"
          ?
          <div className="outerDiv-hotelcheckout-left" style={{backgroundSize: "cover", backgroundImage: "url(" + Orbit + ")"}}></div>
          :
          null
      }
      {
          this.props.hotelTile.hotelAgency === "Wingate Agency"
          ?
          <div className="outerDiv-hotelcheckout-left" style={{backgroundSize: "cover", backgroundImage: "url(" + Wingate + ")"}}></div>
          :
          null
      }
      {
          this.props.hotelTile.hotelAgency === "Metro"
          ?
          <div className="outerDiv-hotelcheckout-left" style={{backgroundSize: "cover", backgroundImage: "url(" + Metro + ")"}}></div>
          :
          null
      }
      {
          this.props.hotelTile.hotelAgency === "King Agency"
          ?
          <div className="outerDiv-hotelcheckout-left" style={{backgroundSize: "cover", backgroundImage: "url(" + King + ")"}}></div>
          :
          null
      }








            <div className="outerDiv-hotelcheckout-right">
                <span style={{lineHeight: "70%",fontSize: 18}}>{this.props.hotelTile.hotelName}</span><p></p>
                <span style={{lineHeight: "180%", fontSize: 16}}>{this.props.room} room, {this.props.room *2} adults
                <br/>Check-in: {this.props.hotelTile.hotelFromDate}
                <br/>Check-out: {this.props.hotelTile.hotelToDate}</span>
                <div style={{width: "70%", color: "green", border: "1px solid #20bf7c",paddingLeft: "3%",marginTop: "3%"}}>
                  <h5 style={{color: "#20bf7c"}}>Stay flexible: FREE cancellation on certain rooms</h5>
                </div>
                <p></p>
                <div className="amenitiesHotel">
                  <i className="fa fa-wifi fa-lg" aria-hidden="true"></i>
                  <i className="fa fa-cog fa-lg" aria-hidden="true"></i>
                  <i className="fa fa-product-hunt fa-lg" aria-hidden="true"></i>
                  <i className="fa fa-coffee fa-lg" aria-hidden="true"></i>
                </div>
            </div>
      </div>

      <div className="outerDiv-hotelcheckout2">
            <div className="outerDiv-hotelcheckout2-top">
                <h4>DETAILS</h4>
            </div>
            <div className="outerDiv-hotelcheckout2-down">
                <div className="outerDiv-hotelcheckout2-down-top">
                    <h5>
Located in the {this.props.hotelTile.hotelCity} theater district with a BART and MUNI station at its entrance, this downtown hotel is 6 blocks from Union Square and within a mile of Moscone Center and SFMOMA</h5>
                </div>
                <div className="outerDiv-hotelcheckout2-down-down">
                    <div className="outerDiv-hotelcheckout2-down-down-left">
                        <h4>Air-conditioned<br/> Bar/Lounge<br/> Business center <br/>Express check out<br/> Fitness center<br/> Internet<br/> Laundry service</h4>
                    </div>
                    <div className="outerDiv-hotelcheckout2-down-down-right">
                        <h4>Meeting/Banquet facilities<br/> No smoking<br/> Parking<br/> Restaurant<br/> Storage available<br/> Wi-Fi</h4>
                    </div>
                </div>

            </div>


      </div>

      <div className="outerDiv-hotelcheckout3">
      <h4 style={{marginLeft: "2%"}}>Standard Double Room, 2 Double Beds</h4>
            <div className="outerDiv-hotelcheckout3-left" style={{backgroundSize: "cover", backgroundImage: "url(" + Hotel1 + ")"}}>

            </div>
            <div className="outerDiv-hotelcheckout3-right">
                <div className="first1">
                    <p style={{fontSize: 13,paddingTop: "3%"}}>{this.props.room} double beds<br/>
                    <br/>${this.props.hotelTile.hotelOriginalPrice * this.props.room} <span style={{textDecoration: "line-through", fontSize: 12}}>${this.props.hotelTile.hotelOldPrice}</span><br/>
                    ${(this.props.hotelTile.hotelOriginalPrice*this.props.room)/10} taxes/fees</p>
                </div>
                <div className="second1" style={{padding: "3%"}}>
                    <p style={{color: "#20bf7c"}}>Flash sale: save 20% <br/>Free Cancellation<br/> Free Internet<br/><span style={{color: "gray"}}>Cancellation Policy</span></p>
                </div>
                <div className="third1" style={{paddingTop:"7%",paddingLeft:"5%"}}>
                    <button style={{width:"80%", height:"45%",backgroundColor:"#558fe6"}}><span style={{color: "white"}}>Change</span></button>
                </div>
            </div>
      </div>

        <div className="outerDiv" style={{height: "auto"}}>

            <hr/>
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
                  <input type="text" style={{width: "10%",height:35,marginLeft: "10%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Country" onChange={(event) => {
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

            <input type="text" style={{width: "11%",height:35,marginLeft: "1%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Month of Exp"/>
            <input type="text" style={{width: "11%",height:35,marginLeft: "3%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="Year of Exp"/>
            <input type="text" style={{width: "12%",height:35,marginLeft: "3%",border: "1px solid",borderColor: "#ebebed",padding:1,paddingLeft: 10}} placeholder="CVV"/>
            <img src={Cards}  style={{float:"right"}}/>
            <hr/>
            <div style={{height: 120,paddingBottom:10,marginBottom: 10}}>
            <h5 style={{display: "inline"}}><span style={{color: "green"}}>Pay ${this.props.hotelTile.hotelOriginalPrice * this.props.room + (this.props.hotelTile.hotelOriginalPrice * this.props.room)/10} USD today.</span></h5>
                <button  onClick={()=>{this.props.handleRedirectBooking1({firstName:this.state.firstName,lastName:this.state.lastName,contact:this.state.contact,userAddress:this.state.userAddress,userCity:this.state.userCity,userCountry:this.state.userCountry,userState:this.state.userState,creditCard:this.state.creditCard,userZip:this.state.zipCode})}} style={{display:"inline",marginLeft: "45%",width: "15%", height: 30,marginBottom: 10, border: "none", backgroundColor: "orange"}}>Book Now</button>
            </div>

        </div>

    </div>

    );
  }
}
/*

        <div className="outerDiv" style={{height: "auto"}}>
            <h6>Renter Details Under 25? </h6>
            <div style={{backgroundColor:"#f1f1f1"}}>
                <h5 style={{height: 30,padding:"1%"}}><span style={{color:"blue"}}>Sign in if you have an account</span> to retrieve saved travelers and credit cards.</h5>
            </div>
            <div>
                <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="First Name" onChange={(event) => {
                    this.setState({
                        firstName: event.target.value
                    });
                }}/>
                <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Last Name" onChange={(event) => {
                    this.setState({
                        lastName: event.target.value
                    });
                }}/>
            </div>
            <br/>
            <div>
                <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Email Address"/>
                <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Phone number" onChange={(event) => {
                    this.setState({
                        contact: event.target.value
                    });
                }}/>
            </div>
            <hr/>
            <h4>Enter Billing information </h4>
            <p>Billing Address</p>
            <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Apt Suite"/>
            <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Apt Number"/>
            <p></p>
            <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Street Address" onChange={(event) => {
                this.setState({
                    userAddress: event.target.value
                });
            }}/>
            <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="City" onChange={(event) => {
                this.setState({
                    userCity: event.target.value
                });
            }}/>
            <p></p>
            <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="State" onChange={(event) => {
                this.setState({
                    userState: event.target.value
                });
            }}/>
            <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Country" onChange={(event) => {
                this.setState({
                    userCountry: event.target.value
                });
            }}/>
            <hr/>
            <h4>Card Details </h4>
            <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Name on Card*"/>
            <input type="text" style={{width: "40%",height:35,marginLeft: "10%"}} placeholder="Card Number*" onChange={(event) => {
                this.setState({
                    creditCard: event.target.value
                });
            }}/>
            <p></p>

            <input type="text" style={{width: "11%",height:35,marginLeft: "1%"}} placeholder="Month of Exp"/>
            <input type="text" style={{width: "11%",height:35,marginLeft: "3%"}} placeholder="Year of Exp"/>
            <input type="text" style={{width: "12%",height:35,marginLeft: "3%"}} placeholder="CVV"/>
            <img src={Cards}  style={{float:"right"}}/>
            <hr/>
            <div style={{height: 120,paddingBottom:10,marginBottom: 10}}>
                <h5 style={{display: "inline"}}><span style={{color: "green"}}>Pay ${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10} USD today.</span> Pay ${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10} USD at pick-up.</h5>
                <button  onClick={()=>{this.props.handleRedirectBooking({firstName:this.state.firstName,lastName:this.state.lastName,contact:this.state.contact,userAddress:this.state.userAddress,userCity:this.state.userCity,userCountry:this.state.userCountry,userState:this.state.userState,creditCard:this.state.creditCard})}} style={{display:"inline",marginLeft: "45%",width: "15%", height: 30,marginBottom: 10, border: "none", backgroundColor: "orange"}}>Book Now</button>
            </div>

        </div>

* */

export default HotelCheckoutDetails;
