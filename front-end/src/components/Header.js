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
              <li style={{marginLeft:"7%"}}><a href="">Hotels</a></li>
              <li><a href="news.asp">Flights</a></li>
              <li><a href="contact.asp">Cars</a></li>
              <li><a href="about.asp">Packages</a></li>
              <li><a href="about.asp">Rentals</a></li>
              <li><a href="about.asp">Cruises</a></li>
              <li><a href="about.asp">More</a></li>
            </ul>
            <div style={{float: "right", color: "white"}}>
              <span className="glyphicon glyphicon-user"></span>
              <span style={{marginLeft: 10}}>My Account</span>
            </div>
        </div>
      </div>
);
  }
}

export default Header;
