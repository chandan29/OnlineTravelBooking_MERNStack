import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Car1 from './../car1.png';
import Cards from './../CreditCards.png';
var FontAwesome = require('react-fontawesome');

class CarCheckoutDetails extends Component {

  state={

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
      <div className="outerDiv">
        <div className="outerDiv-left-carCheckoutDetails">
            <div className="outerDiv-left-carCheckoutDetails-top">
              <h4>{this.props.carTile.cartile.carType} (Toyota Corolla or similar)</h4>
              <h4>Automatic transmission, Air-conditioning</h4>
              <h5>{this.props.carTile.cartile.carFromDate} to {this.props.carTile.cartile.carToDate} (1 day)</h5>
            </div>
            <div className="outerDiv-right-carCheckoutDetails-bottom" style={{paddingTop: 10}}>
                <span style={{display: "inline", float:"left",marginLeft:"2%"}}>{this.props.carTile.cartile.carCapacity}<p style={{float:"left",marginRight:5}}><FontAwesome name='user' size='1x'/></p></span>
                <span style={{display:"inline", float:"left",marginLeft:"12%"}}>2 bags<p style={{float:"left",marginRight:5}}><FontAwesome name='suitcase' size='1x'/></p></span>
                <span style={{display:"inline",float:"left",marginLeft:"12%"}}>4 doors<p style={{float:"left",marginRight:5}}><FontAwesome name='folder' size='1x'/></p></span>
            </div>
        </div>
        <div className="outerDiv-right-carCheckoutDetails">
            <img src={Car1}/>
        </div>
      </div>

      <div className="outerDiv">
            <div className="outerDiv-left-carCheckoutDetails1">
                <h6>Pick up: {this.props.carTile.cartile.carFromDate} – 12:00PM</h6>
                <br/>
                <h6>Agency name: {this.props.carTile.cartile.carAgency}</h6>
                <h6>2800 Leavenworth St, Suite A44</h6>
                <h6>{this.props.carTile.cartile.carCity}</h6>

                <h5>Phone: +1 415 306 5289</h5>
            </div>
            <div className="outerDiv-mid-carCheckoutDetails1">
                <h6>Drop Off: {this.props.carTile.cartile.carToDate} – 12:00PM</h6>
                <br/>
                <h6>Agency name: {this.props.carTile.cartile.carAgency}</h6>
                <h6>2800 Leavenworth St, Suite A44</h6>
                <h6>{this.props.carTile.cartile.carCity}</h6>

                <h5>Phone: +1 415 306 5289</h5>
            </div>
            <div className="outerDiv-right-carCheckoutDetails1">
                logo of the agency
            </div>
          </div>
          <div className="outerDiv">
                <h4>Price: {this.props.carTile.cartile.carOriginalPrice}</h4>
                <table>
                  <tr>
                    <th style={{borderTop:"none"}}></th>
                    <th style={{borderTop:"none"}}>Per Day</th>
                    <th style={{borderTop:"none"}}>Total</th>
                  </tr>
                  <tr>
                    <td>{this.props.carTile.cartile.carType} (Toyota Corolla or similar)</td>
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
                    <td>${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10}</td>
                    <td>${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10}</td>
                  </tr>
                </table>
          </div>

          <div className="outerDiv" style={{height: "auto"}}>
                <h6>Renter Details Under 25? </h6>
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
                    <h4>Enter Billing information </h4>
                    <p>Billing Address</p>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Email Adress"/>
                    <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Phone number"/>
                    <p></p>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Email Adress"/>
                    <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Phone number"/>
                    <p></p>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Email Adress"/>
                    <input type="text" style={{width: "40%",height: 35,marginLeft: "10%"}} placeholder="Phone number"/>
                <hr/>
                    <h4>Card Details </h4>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "1%"}} placeholder="Name on Card*"/>
                    <input type="text" style={{width: "40%",height:35,marginLeft: "10%"}} placeholder="Card Number*"/>
                    <p></p>

                    <input type="text" style={{width: "13%",height:35,marginLeft: "1%"}} placeholder="Email Adress"/>
                    <input type="text" style={{width: "9%",height:35,marginLeft: "3%"}} placeholder="Email Adress"/>
                    <input type="text" style={{width: "12%",height:35,marginLeft: "3%"}} placeholder="Email Adress"/>
                    <img src={Cards}  style={{float:"right"}}/>
                <hr/>
                    <div style={{height: 120,paddingBottom:10,marginBottom: 10}}>
                        <h5 style={{display: "inline"}}><span style={{color: "green"}}>Pay ${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10} USD today.</span> Pay ${this.props.carTile.cartile.carOriginalPrice + this.props.carTile.cartile.carOriginalPrice/10} USD at pick-up.</h5>
                        <button  onClick={this.props.handleRedirectBooking} style={{display:"inline",marginLeft: "45%",width: "15%", height: 30,marginBottom: 10, border: "none", backgroundColor: "orange"}}>Book Now</button>
                    </div>

          </div>

      </div>

);
  }
}

export default CarCheckoutDetails;
