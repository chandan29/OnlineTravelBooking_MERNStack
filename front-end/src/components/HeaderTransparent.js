import React, {Component} from 'react';
import * as API from '../api/API';


import Logo from './../logo.png';

class HeaderTransparent extends Component {

  componentWillMount(){
    API.getUsername()
        .then((res) => {
            this.setState({
              username:res.username,
              bool:true
            })
        });
  }
    state={

    }

    render() {
        return (
            <div onClick={this.props.headerCarClick} className="container-header1" style={{paddingLeft:"2%"}}>
                <div className="body-header" style={{width: "78%",marginLeft: "8%"}}>
                    <div className="logo">
                        <img src={Logo} alt="kayak logo"/>
                    </div>
                    <ul>
                        <li style={{marginLeft:"3%"}}><a href="/">Home</a></li>
                        <li style={{marginLeft:"3%"}}><a href="/flights">Flights</a></li>
                        <li style={{marginLeft:"3%" , borderBottom: "2px solid"}}><a href="/">Cars</a></li>
                        <li style={{marginLeft:"3%"}}><a href="/hotels">Hotels</a></li>
                        <li style={{marginLeft:"3%"}}><a onClick={()=>{
                            if(this.props.LoginInFlag){
                                alert('Sign out of the current user, then login for admin');
                            }
                            else{
                                this.props.redirectToAdmin();
                            }
                        }

                        }>Admin</a></li>
                        <li style={{marginLeft:"3%"}}><a href="/signin" onClick={this.props.handleLogout}>Logout</a></li>
                    </ul>
                    <div style={{float: "right", color: "white"}}>
                      <img className="img-circle" style={{width: 35, height: 35, borderRadius:20}}
   src={"http://localhost:3001/Userfiles/" + this.state.username + "/" + this.state.username + ".jpg?_=" + Date.now()}
   alt="No profile picture Available"/>

                        <div className="dropdown">
                            <span  className="dropbtn" style={{marginLeft: 10}}>My Account</span>
                            <div className="dropdown-content">
                                <button style={{backgroundColor: "orange"}} onClick={()=>{
                                    if(this.props.LoginInFlag){
                                        alert('You are already logged in');
                                    }
                                    else{
                                        this.props.handleClickSignup();
                                    }
                                }}>Sign Up</button>
                                <button onClick={()=>{
                                    if(this.props.LoginInFlag){
                                        alert('You are already logged in');
                                    }
                                    else{
                                        this.props.handleClickSignin();
                                    }
                                }}>Sign In</button>
                                <button onClick={this.props.handleUserProfile}>My Profile</button>
                                <span className={'trips'} onClick={this.props.handleShowTrips}>
                        <img className="iconBriefcase1" src="https://a1.r9cdn.net/res/images/header/suitcase.svg?v=18804b5951efb78848210a3f7c2d9e76f3c77d62" role="presentation"/>Trips</span>
                                <span className={'trips'}><img className="iconBriefcase" src="https://a1.r9cdn.net/res/images/header/pricealert.svg?v=4db39979f590837a5b4d5877c736e68b2627e023" role="presentation"/>Price Alerts</span>
                            </div>
                        </div>

                    </div>
                </div>
                <hr width="73%" style={{borderColor: "#A8A8A8"}}/>
            </div>
        );
    }
}

export default HeaderTransparent;
