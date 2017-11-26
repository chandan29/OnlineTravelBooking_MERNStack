import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Car1 from './../car1.png';
import Cards from './../CreditCards.png';
import Flight1 from './../flight1.jpg';
var FontAwesome = require('react-fontawesome');

class FlightCheckoutDetails extends Component {

  state={

  }

  static PropTypes={

  }

  componentWillMount(){

  }

  render() {
    return (

    <div style={{backgroundColor: "#f1f1f1"}}>



    <div className="outerDiv-flightcheckout1" style={{paddingTop: "1%", paddingLeft: "1%"}}>
    <div style={{float: "left"}}>
        <p style={{lineWidth: "140", fontSize: 18, fontWeight: "bold"}}>New Delhi, India (DEL) to San Francisco, CA (SFO)
        <br/>China Airlines, one-way, economy, 1 adult</p>
        <p style={{fontSize: 18}}>Depart: Tue Nov 28 2017</p>
        </div>
        <div className="flightLogo">
            <img src={Flight1} alt="Flight Logo"/>
        </div>
    </div>
    <div className="outerDiv-flightcheckout2">

    </div>

    <div className="outerDiv-flightcheckout3">

    </div>
    <div className="outerDiv-flightcheckout4">

    </div>
    <div className="outerDiv-flightcheckout5">

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
              <td>carType (Toyota Corolla or similar)</td>
              <td>$30</td>
              <td>$40</td>
              <td>$70</td>
            </tr>
            <tr>
              <td>Taxes and Fees</td>
              <td>$50</td>
              <td>$70</td>
              <td>$90</td>
            </tr>
            <tr>
              <td><strong>Rental Car Total</strong></td>
              <td>$80</td>
              <td>$90</td>
              <td>$100</td>
            </tr>
          </table>
    </div>


          <div className="outerDiv" style={{height: "auto"}}>
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
                        <h5 style={{display: "inline"}}><span style={{color: "green"}}>Pay $0 USD today.</span> Pay $200 USD at pick-up.</h5>
                        <button  style={{display:"inline",marginLeft: "45%",width: "15%", height: 30,marginBottom: 10, border: "none", backgroundColor: "orange"}}>Book Now</button>
                    </div>

          </div>








    </div>

);
  }
}

export default FlightCheckoutDetails;
