import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Message from "./Message";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Header from './Header';
import MainBody from './MainBody';
import MainBodyCar from './MainBodyCar';
import MainBodyCarCheckout from './MainBodyCarCheckout';
import BookingSuccessful from './BookingSuccessful';
import Admin from "./Admin";
import AdminDashboard from "./AdminDashboard";
import Signup from './Signup';
import Signin from './Signin';
import alert from 'alert-node';

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: ''
    };

    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        username: userdata.username
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };

    handleLogout = () => {
        console.log('logout called');
        API.logout()
            .then((status) => {
                if(status === 200){
                    this.setState({
                        isLoggedIn: false
                    });
                    this.props.history.push("/");
                }
            });
    };

    handleRedirectBooking = () => {
      API.getCartile(this.state.carTile)
          .then((res) => {
              console.log(res);
              this.props.history.push("/bookingSuccessful");

          });

    }

    gotoSignin=()=>{
      this.props.history.push('/signin');
    };

    loginUser=(payload)=>{
      API.loginUser(payload)
      .then((res) => {
          if(res.status==201){
          this.props.history.push("/");
          }
          else{
            alert("Please check your username and password, and reenter!");
            this.props.history.push('/');
            this.props.history.push("/signin");
          }
      });
    }

    gotoSignup=()=>{
      this.props.history.push('/signup');
    };

    registerUser=(payload)=>{
      API.registerUser(payload)
      .then((res) => {
          console.log(res.msg);
          if(res.status==201){
          alert("User registration is successful!");
          this.props.history.push("/signin");
          }
          else if(res.status==401){
            alert("User with this email id already exists. Please use another email id!");
            this.props.history.push("/");
            this.props.history.push("/signup");
          }
          else{
            alert("Failed to register!Please check all the fields and try again");
            this.props.history.push("/signup");
          }

      });
    }

    handleCarFetch = (payload) => {
      API.getCars(payload)
          .then((res) => {
                  this.setState({
                      carsObj:res
                  });
                  this.props.history.push("/searchCar");
          });

    };

    handleCartileFetch = (payload) => {
            this.setState({
                carTile: payload
            });
            this.props.history.push("/carCheckout");

    };

    handleClickSignup = () => {
        this.props.history.push('/signup');
    }

    handleClickSignin = () => {
        this.props.history.push('/signin');
    }

    render() {
        return (
            <div className="container-fluid" style={{backgroundColor:"white"}}>
                <Route exact path="/" render={() => (
                    <div className="opener-image" style={{backgroundColor: "pink",width:"100%", height:500}}>
                          <Header  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                          <MainBody handleCarFetch={this.handleCarFetch}/>
                          <Footer />
                    </div>
                )}/>
                <Route exact path="/searchCar" render={() => (
                    <div>
                        <div className="header-xyz" style={{backgroundColor:"gray"}}>
                          <Header  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                         </div>
                          <div className="mainBodyCar">
                          <MainBodyCar cars={this.state.carsObj} handleCartileFetch={this.handleCartileFetch}/>
                          </div>
                          <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/carCheckout" render={() => (
                    <div>
                        <div className="header-xyz" style={{backgroundColor:"gray"}}>
                          <Header  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                         </div>
                          <div className="mainBodyCarCheckout">
                            <MainBodyCarCheckout carTile={this.state.carTile} handleRedirectBooking={this.handleRedirectBooking}/>
                          </div>
                          <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/bookingSuccessful" render={() => (
                    <div>
                        <BookingSuccessful carTile={this.state.carTile} handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin} />
                    </div>
                )}/>
                <Route exact path="/admin" render={() => (
                    <div>
                        <Admin handleSubmitAdmin={this.handleSubmitAdmin}/>
                    </div>
                )}/>
                <Route exact path="/adminDashboard" render={() => (
                    <div>
                        <AdminDashboard />
                    </div>
                )}/>
                <Route exact path="/signup" render={() => (
                    <div>
                      <Signup gotoSignin={this.gotoSignin} registerUser={this.registerUser} handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                    </div>
                )}/>
                <Route exact path="/signin" render={() => (
                    <div>
                      <Signin gotoSignup={this.gotoSignup} loginUser={this.loginUser} handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);
