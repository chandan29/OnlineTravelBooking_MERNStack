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
import ReactGridLayout from 'react-grid-layout';

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: ''
    };

    componentWillMount(){
      var layout = [
        {i: 'a', x: 0, y: 0, w: 5, h: 4},
        {i: 'b', x: 4, y: 4, w: 3, h: 6, minW: 2, maxW: 4},
        {i: 'c', x: 8, y: 7, w: 7, h: 4},
        {i: 'd', x: 10, y: 13, w: 6, h: 6, minW:3,maxW:4},
        {i: 'e', x: 17, y: 16, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'f', x: 21, y: 41, w: 4, h: 7},
        {i: 'g', x: 31, y: 33, w: 5, h: 8, minW: 2, maxW: 4},
        {i: 'h', x: 41, y: 43, w: 4, h: 5, minW: 2, maxW: 4},
        {i: 'i', x: 36, y: 12, w: 6, h:4},
        {i: 'j', x: 26, y: 16, w: 3, h: 5},
        {i: 'k', x: 19, y: 6, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'l', x: 31, y: 15, w: 1, h: 5}
      ];
      this.setState({
        la:layout
      });
    }

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

              <Route exact path="/extra" render={() => (
                    <div>


        <ReactGridLayout className="layout" layout={this.state.la} cols={12} rowHeight={30} width={1500}>
          <div key="a" style={{backgroundColor:"gray"}}>Some Sample Text</div>
          <div key="b" style={{backgroundColor:"peachpuff"}}>Some Sample Text 2</div>
          <div key="c"style={{backgroundColor:"black"}}>Some Sample Text 3</div>
            <div key="d" style={{backgroundColor:"green"}}>Some Sample Text</div>
            <div key="e" style={{backgroundColor:"red"}}>Some Sample Text 2</div>
            <div key="f"style={{backgroundColor:"blue"}}>Some Sample Text 3</div>
              <div key="g" style={{backgroundColor:"lightblue"}}>Some Sample Text</div>
              <div key="h" style={{backgroundColor:"orange"}}>Some Sample Text 2</div>
              <div key="i"style={{backgroundColor:"lightgreen"}}>Some Sample Text 3</div>
                <div key="j" style={{backgroundColor:"azure"}}>Some Sample Text</div>
                <div key="k" style={{backgroundColor:"peachpuff"}}>Some Sample Text 2</div>
                <div key="l"style={{backgroundColor:"pink"}}>Some Sample Text 3</div>
        </ReactGridLayout>
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);
