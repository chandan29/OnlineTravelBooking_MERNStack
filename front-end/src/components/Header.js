import React, {Component} from 'react';

import Logo from './../logo.png';

class Header extends Component {

  state={

  }

  render() {
    return (
      <div className="container-header" style={{paddingLeft:"2%"}}>
        <div className="body-header">
            <div className="logo">
              <img src={Logo} alt="kayak logo"/>
            </div>
            <ul>
              <li style={{marginLeft:"7%"}}><a href="/">Home</a></li>
              <li><a href="/flights">Flights</a></li>
              <li><a href="/">Cars</a></li>
              <li><a href="/hotels">Hotels</a></li>
              <li onClick={this.props.handleLogout}><span>Logout</span></li>
            </ul>
            <div style={{float: "right", color: "white"}}>
              <span className="glyphicon glyphicon-user"></span>

              <div className="dropdown">
                  <span  className="dropbtn" style={{marginLeft: 10}}>My Account</span>
                  <div className="dropdown-content">
                    <button style={{backgroundColor: "orange"}} onClick={this.props.handleClickSignup}>Sign Up</button>
                    <button onClick={this.props.handleClickSignin}>Sign In</button>
                    <span>Trips onClick={this.props.hadleShowTrips}</span>
                    <span>Price Alerts</span>
                  </div>
              </div>

            </div>
        </div>
      </div>
);
  }
}

export default Header;
