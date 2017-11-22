import React, {Component} from 'react';
import Logo from './../logo.png';
import Header from './Header';

class Signin extends Component {

  state={

  }
  render() {
    return (
        <div style={{backgroundColor: "white"}}>
        <Header />
    <div className="container" style={{marginTop: "3%"}}>
        <div style={{marginLeft: "30%"}}>
          <h2 style={{color: "orange"}}>Sign In</h2>
        </div>
        <p></p>
        <div style={{marginLeft: "30%"}}>
            <div className="ui large form">
              <div className="ten wide field">
                <label>Email Id</label>
                <input placeholder="Email address" type="text" />
              </div>
            </div>
            <br/>
            <div className="ui large form">
              <div className="ten wide field">
                <label>Password</label>
                <input placeholder="Password" type="password" />
              </div>
            </div>
            <br/>

              <div style={{marginTop: "2%",float: "left"}}>
                <button className="ui orange button">Sign In</button>
              </div>
              <div style={{marginTop: "4%", float: "left", marginLeft: "24%"}}>
                <h5>Dont have an account? <span style={{color:"orange"}}>Sign Up</span></h5>
              </div>
        </div>
    </div>
    </div>
);
  }
}

export default Signin;
