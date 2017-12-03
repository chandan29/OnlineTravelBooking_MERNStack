import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Car1 from './../car1.png';
import Cards from './../CreditCards.png';
import Hotel1 from './../hotel1.jpg';
var FontAwesome = require('react-fontawesome');

class HotelCheckoutDetails extends Component {

  state={

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
            <div className="outerDiv-hotelcheckout-left" style={{backgroundSize: "cover", backgroundImage: "url(" + Hotel1 + ")"}}>

            </div>
            <div className="outerDiv-hotelcheckout-right">
                <span style={{lineHeight: "70%",fontSize: 18}}>{this.props.hotelTile.hotelName}</span><p></p>
                <span style={{lineHeight: "180%", fontSize: 16}}>1 room, 2 adults, 1 night
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
Located in the San Francisco theater district with a BART and MUNI station at its entrance, this downtown hotel is 6 blocks from Union Square and within a mile of Moscone Center and SFMOMA</h5>
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
                    <p style={{fontSize: 13,paddingTop: "3%"}}>2 double beds<br/>
                    <br/>₹6805 <span style={{textDecoration: "line-through", fontSize: 12}}>$13588</span><br/>
                    $1225 taxes/fees</p>
                </div>
                <div className="second1" style={{padding: "3%"}}>
                    <p style={{color: "#20bf7c"}}>Flash sale: save 50% <br/>Free Cancellation<br/> Free Internet<br/><span style={{color: "gray"}}>Cancellation Policy</span></p>
                </div>
                <div className="third1" style={{paddingTop:"7%",paddingLeft:"5%"}}>
                    <button style={{width:"80%", height:"45%",backgroundColor:"#558fe6"}}><span style={{color: "white"}}>Change</span></button>
                </div>
            </div>
      </div>

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
            <h5 style={{display: "inline"}}><span style={{color: "green"}}>Pay ${this.props.hotelTile.hotelOriginalPrice * this.props.room} USD today.</span> Pay ${this.props.hotelTile.hotelOriginalPrice * this.props.room} USD at Check-In.</h5>
                <button  onClick={()=>{this.props.handleRedirectBooking1({firstName:this.state.firstName,lastName:this.state.lastName,contact:this.state.contact,userAddress:this.state.userAddress,userCity:this.state.userCity,userCountry:this.state.userCountry,userState:this.state.userState,creditCard:this.state.creditCard})}} style={{display:"inline",marginLeft: "45%",width: "15%", height: 30,marginBottom: 10, border: "none", backgroundColor: "orange"}}>Book Now</button>
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
