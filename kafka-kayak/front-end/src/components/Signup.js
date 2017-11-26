import React, {Component} from 'react';
import Logo from './../logo.png';
import Header from './Header';

class Signup extends Component {

  state={
    firstname:'',
    lastname:'',
    email:'',
    password:''
  }
  render() {
    return (
        <div style={{backgroundColor: "white"}}>
        <Header handleClickSignup={this.props.handleClickSignup} handleClickSignin={this.props.handleClickSignin}/>
    <div className="container" style={{marginTop: "3%"}}>
        <div style={{marginLeft: "30%"}}>
          <h2 style={{color: "orange"}}>Sign Up</h2>
        </div>
        <p></p>
        <div style={{marginLeft: "30%"}}>

            <div className="ui large form">
              <div className="ten wide field">
                <label>First Name</label>
                <input placeholder="First name" type="text" value={this.state.firstname} onChange={(event) => {
              this.setState({
                  firstname: event.target.value
              });}}/>
              </div>
            </div>

            <br/>
            <div className="ui large form">
              <div className="ten wide field">
                <label>Last Name</label>
                <input placeholder="Last name" type="text" value={this.state.lastname} onChange={(event) => {
              this.setState({
                  lastname: event.target.value
              });}}/>
              </div>
            </div>
            <br/>
            <div className="ui large form">
              <div className="ten wide field">
                <label>Email Id</label>
                <input placeholder="Email address" type="text" value={this.state.email} onChange={(event) => {
              this.setState({
                  email: event.target.value
              });}}/>
              </div>
            </div>
            <br/>
            <div className="ui large form">
              <div className="ten wide field">
                <label>Password</label>
                <input placeholder="Password" type="password" value={this.state.password} onChange={(event) => {
              this.setState({
                  password: event.target.value
              });}}/>
              </div>
            </div>
            <br/>
            <div className="ui large form">
              <div className="ten wide field">
                <label>Confirm password</label>
                <input placeholder="Confirm Password" type="password" />
              </div>
            </div>
              <div style={{marginTop: "2%",float: "left"}}>
                <button className="ui orange button" onClick={()=>{this.props.registerUser({firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email,password:this.state.password})}}>Sign Up</button>
              </div>
              <div style={{marginTop: "4%", float: "left", marginLeft: "24%"}}>
                <h5>Already have an account? <span style={{color:"orange",cursor: "pointer"}} onClick={()=>{this.props.gotoSignin()}}>&nbsp;&nbsp;Sign In</span></h5>
              </div>
        </div>
    </div>
    </div>
);
  }
}

export default Signup;
