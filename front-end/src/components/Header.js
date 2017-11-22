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
              <li style={{marginLeft:"7%"}}><a href="">Home</a></li>
              <li><a href="news.asp">News</a></li>
              <li><a href="contact.asp">Contact</a></li>
              <li><a href="about.asp">About</a></li>
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
