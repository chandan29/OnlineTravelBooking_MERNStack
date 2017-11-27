import React, {Component} from 'react';

import Logo from './../logo.png';

class HeaderTransparentHotel extends Component {

  state={

  }

  render() {
    return (
      <div className="container-header1" style={{paddingLeft:"2%"}}>
        <div className="body-header" style={{width: "78%",marginLeft: "8%"}}>
            <div className="logo">
              <img src={Logo} alt="kayak logo"/>
            </div>
            <ul>
              <li style={{marginLeft:"3%"}}><a href="">Home</a></li>
              <li style={{marginLeft:"3%"}}><a href="/flight">Flights</a></li>
              <li style={{marginLeft:"3%"}}><a href="/">Cars</a></li>
              <li style={{marginLeft:"3%" , borderBottom: "2px solid"}}><a href="/hotel">Hotels</a></li>
              <li style={{marginLeft:"3%"}}><a href="/signin">Logout</a></li>
            </ul>
            <div style={{float: "right", color: "white"}}>
              <span className="glyphicon glyphicon-user"></span>

              <div className="dropdown">
                  <span  className="dropbtn" style={{marginLeft: 10}}>My Account</span>
                  <div className="dropdown-content">
                    <button style={{backgroundColor: "orange"}} onClick={this.props.handleClickSignup}>Sign Up</button>
                    <button onClick={this.props.handleClickSignin}>Sign In</button>
                    <span>Trips</span>
                    <span>Price Alerts</span>
                  </div>
              </div>

            </div>
        </div>
        <hr width="73%" style={{borderColor: "#A8A8A8"}}/>
      </div>
);
  }
}

export default HeaderTransparentHotel;
