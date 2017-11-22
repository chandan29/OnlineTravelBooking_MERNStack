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


    render() {
        return (
            <div className="container-fluid" style={{backgroundColor:"#E8E8E8"}}>
                <Route exact path="/" render={() => (
                    <div className="opener-image" style={{backgroundColor: "pink",width:"100%", height:500}}>
                          <Header />
                          <MainBody handleCarFetch={this.handleCarFetch}/>
                          <Footer />
                    </div>
                )}/>
                <Route exact path="/searchCar" render={() => (
                    <div>
                        <div className="header-xyz" style={{backgroundColor:"gray"}}>
                          <Header />
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
                          <Header />
                         </div>
                          <div className="mainBodyCarCheckout">
                            <MainBodyCarCheckout carTile={this.state.carTile} handleRedirectBooking={this.handleRedirectBooking}/>
                          </div>
                          <Message message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/bookingSuccessful" render={() => (
                    <div>
                        <BookingSuccessful carTile={this.state.carTile}/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);
