import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Message from "./Message";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Header from './Header';
import HeaderTransparent from './HeaderTransparent';
import HeaderTransparentHotel from './HeaderTransparentHotel';
import HeaderTransparentFlight from './HeaderTransparentFlight';
import MainBody from './MainBody';
import MainBodyCar from './MainBodyCar';
import MainBodyCarCheckout from './MainBodyCarCheckout';
import BookingSuccessful from './BookingSuccessful';
import HotelBookingSuccessful from './HotelBookingSuccessful';
import FlightBookingSuccessful from './FlightBookingSuccessful';
import Admin from "./Admin";
import AdminDashboard from './AdminDashboard';
import Signup from './Signup';
import Signin from './Signin';
import alert from 'alert-node';
import HotelsMainPage from './HotelsMainPage';
import MainBodyHotel from './MainBodyHotel';
import MainBodyHotelCheckout from './MainBodyHotelCheckout';
import FlightsMainPage from './FlightsMainPage';
import MainBodyFlightCheckout from './MainBodyFlightCheckout';
import MainBodyFlight from './MainBodyFlight';
import UserBills from './UserBills';
import Graphs from './Graphs';
import UserProfile from './UserProfile';

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        LoginInFlag:false,
        message: '',
        username: '',
        showUserBillFlag: false,
        headerCarClick:0,
        navCarClick:0,
        midCarClick:0,
        footerCarClick:0,
        searchCarClick:0,
        homeCarClick:0,
        bookingCarClick:0,
        checkoutCarClick:0,
        searchHotelClick:0,
        homeHotelClick:0,
        bookingHotelClick:0,
        checkoutHotelClick:0,
        searchFlightClick:0,
        homeFlightClick:0,
        bookingFlightClick:0,
        checkoutFlightClick:0
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

                    this.props.history.push("/");
            });
    };

    handleRedirectBooking = (payload) => {
      if(payload.userAddress==""||payload.userCity==""||payload.userCountry==""||payload.userZip==""||payload.creditCard==""){
        alert('Please enter all the valid details to move forward with your booking');
        this.props.history.push('/carCheckout');
      }
      else{
      var z="";
      var z=payload.userZip;
      if(z.includes('-')){

        var zip=z.split('-');
        console.log(zip);

        if(parseInt(zip[0])>=100000||parseInt(zip[0])<=9999){
          alert('Please enter zipcode in format XXXXX or XXXXX-XXXX');
          this.props.history.push('/carCheckout');
        }
        else if(parseInt(zip[1])>=10000 || parseInt(zip[1])<=999){
          console.log(zip[1]);
          alert('Please enter zipcode in format XXXXX or XXXXX-XXXX');
          this.props.history.push('/carCheckout');
        }
        else{
        this.state.carTile.clist=this.state.searchCarClick;
        this.state.carTile.cbooking=this.state.checkoutCarClick;
        this.state.carTile.payload=payload;
        console.log(payload);
        API.getCartile(this.state.carTile)
            .then((res) => {
                console.log(res);
                this.setState({
                    username:res.username
                })
                this.props.history.push("/bookingSuccessful");

            });

      }

      }
      else if(!payload.userZip.includes('-')){
        if(parseInt(payload.userZip)>=100000 || parseInt(payload.userZip)<=9999){
          alert('Please enter zipcode in format XXXXX or XXXXX-XXXX');
          this.props.history.push('/carCheckout');
        }
        else{
        this.state.carTile.clist=this.state.searchCarClick;
        this.state.carTile.cbooking=this.state.checkoutCarClick;
        this.state.carTile.payload=payload;
        console.log(payload);
        API.getCartile(this.state.carTile)
            .then((res) => {
                console.log(res);
                this.setState({
                    username:res.username
                })
                this.props.history.push("/bookingSuccessful");

            });

      }
      }

}
    }

    handleProfileUpload=(payload)=>{
        API.profileUpload(payload)
        .then((res) => {
            console.log(res);
            this.setState({

            })
            alert('User info updated successfully');
            this.props.history.push("/");
            this.props.history.push("/userProfile");

        });
    }

    handleRedirectBooking1 = (payload) => {
      if(payload.userAddress==""||payload.userCity==""||payload.userCountry==""||payload.userZip==""||payload.creditCard==""){
        alert('Please enter all the valid details to move forward with your booking');
        this.props.history.push('/hotelCheckout');
      }
      else{
      var z="";
      var z=payload.userZip;
      if(z.includes('-')){

        var zip=z.split('-');
        console.log(zip);

        if(parseInt(zip[0])>=100000||parseInt(zip[0])<=9999){
          alert('Please enter zipcode in format XXXXX or XXXXX-XXXX');
          this.props.history.push('/hotelCheckout');
        }
        else if(parseInt(zip[1])>=10000 || parseInt(zip[1])<=999){
          console.log(zip[1]);
          alert('Please enter zipcode in format XXXXX or XXXXX-XXXX');
          this.props.history.push('/hotelCheckout');
        }
        else{

          this.state.hotelTile.hlist=this.state.searchHotelClick;
          this.state.hotelTile.hbooking=this.state.checkoutHotelClick;
            this.state.hotelTile.room=this.state.room;
            this.state.hotelTile.payload = payload
          API.getHoteltile(this.state.hotelTile)
              .then((res) => {
                  console.log(res);
                  this.setState({
                      username: res.username
                  })
                  this.props.history.push("/hotelbookingSuccessful");

              });
      }

      }
      else if(!payload.userZip.includes('-')){
        if(parseInt(payload.userZip)>=100000 || parseInt(payload.userZip)<=9999){
          alert('Please enter zipcode in format XXXXX or XXXXX-XXXX');
          this.props.history.push('/hotelCheckout');
        }
        else{

          this.state.hotelTile.hlist=this.state.searchHotelClick;
          this.state.hotelTile.hbooking=this.state.checkoutHotelClick;
            this.state.hotelTile.room=this.state.room;
            this.state.hotelTile.payload = payload
          API.getHoteltile(this.state.hotelTile)
              .then((res) => {
                  console.log(res);
                  this.setState({
                      username: res.username
                  })
                  this.props.history.push("/hotelbookingSuccessful");

              });
      }
      }

}
    }




    handleRedirectBooking2 = (payload) => {
      if(payload.userAddress==""||payload.userCity==""||payload.userCountry==""||payload.userZip==""||payload.creditCard==""){
        alert('Please enter all the valid details to move forward with your booking');
        this.props.history.push('/flightCheckout');
      }
      else{
      var z="";
      var z=payload.userZip;
      if(z.includes('-')){

        var zip=z.split('-');
        console.log(zip);

        if(parseInt(zip[0])>=100000||parseInt(zip[0])<=9999){
          alert('Please enter zipcode in format XXXXX or XXXXX-XXXX');
          this.props.history.push('/flightCheckout');
        }
        else if(parseInt(zip[1])>=10000 || parseInt(zip[1])<=999){
          console.log(zip[1]);
          alert('Please enter zipcode in format XXXXX or XXXXX-XXXX');
          this.props.history.push('/flightCheckout');
        }
        else{

          this.state.flightTile.flist=this.state.searchFlightClick;
          this.state.flightTile.fbooking=this.state.checkoutFlightClick;
            this.state.flightTile.seat = this.state.seat;
            this.state.flightTile.payload = payload
          API.getFlighttile(this.state.flightTile)
              .then((res) => {
                  console.log(res);
                  this.setState({
                      username: res.username
                  });
                  this.props.history.push("/flightbookingSuccessful");

              });

      }

      }
      else if(!payload.userZip.includes('-')){
        if(parseInt(payload.userZip)>=100000 || parseInt(payload.userZip)<=9999){
          alert('Please enter zipcode in format XXXXX or XXXXX-XXXX');
          this.props.history.push('/flightCheckout');
        }
        else{

          this.state.flightTile.flist=this.state.searchFlightClick;
          this.state.flightTile.fbooking=this.state.checkoutFlightClick;
            this.state.flightTile.seat = this.state.seat;
            this.state.flightTile.payload = payload
          API.getFlighttile(this.state.flightTile)
              .then((res) => {
                  console.log(res);
                  this.setState({
                      username: res.username
                  });
                  this.props.history.push("/flightbookingSuccessful");

              });

      }
      }

}
    }

    gotoSignin = () => {
        this.props.history.push('/signin');
    };

    loginUser = (payload) => {
        if (!this.state.LoginInFlag){
            API.loginUser(payload)
                .then((res) => {
                    if (res.status == 201) {
                        this.setState({
                            LoginInFlag:true
                        });
                        this.props.history.push("/");
                    }
                    else {
                        alert("Please check your username and password, and reenter!");
                        this.props.history.push('/');
                        this.props.history.push("/signin");
                    }
                });
        }
        else{
            alert("You are already logged in");
            this.props.history.push('/');
        }
    };

    gotoSignup = () => {
        this.props.history.push('/signup');
    };

    registerUser = (payload) => {
        API.registerUser(payload)
            .then((res) => {
                console.log(res.msg);
                if (res.status == 201) {
                    alert("User registration is successful!");
                    this.props.history.push("/signin");
                }
                else if (res.status == 401) {
                    alert("User with this email id already exists. Please use another email id!");
                    this.props.history.push("/");
                    this.props.history.push("/signup");
                }
                else {
                    alert("Failed to register!Please check all the fields and try again");
                    this.props.history.push("/signup");
                }

            });
    }

    handleCarFetch = (payload) => {
      if(payload.carCity==""||payload.fromDate==""||payload.toDate==""){
        alert("Please put all the parameters for searching!");
        this.props.history.push("/");
      }
      else{
      payload.chome=this.state.homeCarClick;
      payload.a=this.state.headerCarClick;
      payload.b=this.state.navCarClick;
      payload.c=this.state.midCarClick;
      payload.d=this.state.footerCarClick;
        API.getCars(payload)
            .then((res) => {
                this.setState({
                    carsObj: res
                });
                localStorage.setItem("cars", JSON.stringify(this.state.carsObj));
                this.props.history.push("/searchCar");
            });
        }
    };

    handleHotelFetch = (payload) => {
      if(payload.hotelCity==""||payload.fromDate==""||payload.toDate==""||payload.rooms==""){
        alert("Please put all the parameters for searching!");
        this.props.history.push("/hotels");
      }
      else{
      payload.hhome=this.state.homeHotelClick;
      API.getHotels(payload)
          .then((res) => {
                  console.log(res);
                  this.setState({
                      hotelsObj:res.user,
                      rooms: res.rooms
                  });
                  this.props.history.push("/searchHotel");
          });
        }
    };

    handleFlightFetch = (payload) => {
      if(payload.flightFromCity==""||payload.flightToCity==""||payload.flightDate==""||payload.seats==""){
        alert("Please put all the parameters for searching!");
        this.props.history.push("/flights");
      }
      else{
      payload.fhome=this.state.homeFlightClick;
        API.getFlights(payload)
            .then((res) => {
                console.log("PRINTING FLIGHT API RETURN:"+res.user);
                this.setState({
                    flightsObj:res.user,
                    seats: res.seats
                });
                this.props.history.push("/searchFlight");
            });
          }
    }

    handleCartileFetch = (payload) => {
            this.setState({
                carTile: payload
            });
            this.props.history.push("/carCheckout");

    };

    handleHoteltileFetch = (payload) => {
            this.setState({
                hotelTile: payload.hoteltile,
                room: payload.room
            });
            this.props.history.push("/hotelCheckout");

    };

    handleFlighttileFetch =(payload) => {
        this.setState({
            flightTile: payload.flighttile,
            seat: payload.seat
        });
        this.props.history.push("/flightCheckout");
    };

    handleClickSignup = () => {
        this.props.history.push('/signup');
    };

    handleClickSignin = () => {
        this.props.history.push('/signin');
    };

    handleUserProfile = () => {
      console.log("In handle user profile");
        this.props.history.push('/userProfile');
    };

    handleShowTrips = () => {
        console.log("called handleShowTrips")
        this.setState({
            showUserBillFlag: true
        });
        this.props.history.push('/showbills');
    };

    reDirectToAdminDashboard = () => {
        console.log("called reDirectToAdminDashboard ")
        this.props.history.push('/adminDashboard');

    };

    redirectToAdmin = () => {
        console.log("called reDirectToAdmin ")
        this.props.history.push('/admin');

    };

    headerCarClick=()=>{
      console.log(this.state.headerCarClick++);
    }

    navCarClick=()=>{
      console.log(this.state.navCarClick++);
    }

    midCarClick=()=>{
      console.log(this.state.midCarClick++);
    }

    footerCarClick=()=>{
      console.log(this.state.footerCarClick++);
    }

    searchCarClick=()=>{
      console.log(this.state.searchCarClick++);
    }

    homeCarClick=()=>{
      console.log(this.state.homeCarClick++);
    }

    bookingCarClick=()=>{
      console.log(this.state.bookingCarClick++);
    }

    checkoutCarClick=()=>{
      console.log(this.state.checkoutCarClick++);
    }

    searchHotelClick=()=>{
      console.log(this.state.searchHotelClick++);
    }

    homeHotelClick=()=>{
      console.log(this.state.homeHotelClick++);
    }

    bookingHotelClick=()=>{
      console.log(this.state.bookingHotelClick++);
    }

    checkoutHotelClick=()=>{
      console.log(this.state.checkoutHotelClick++);
    }

    searchFlightClick=()=>{
      console.log(this.state.searchFlightClick++);
    }

    homeFlightClick=()=>{
      console.log(this.state.homeFlightClick++);
    }

    bookingFlightClick=()=>{
      console.log(this.state.bookingFlightClick++);
    }

    checkoutFlightClick=()=>{
      console.log(this.state.checkoutFlightClick++);
    }

    handleDeleteAccount=(payload)=>{
      API.handleDeleteAccount(payload)
          .then((res) => {
              this.props.history.push("/signin");
          });
        }

    render() {
        return (
            <div className="container-fluid" style={{backgroundColor:"white"}}>
                <Route exact path="/" render={() => (
                    <div onClick={this.homeCarClick} className="opener-image" style={{backgroundColor: "pink",width:"100%", height:500}}>

                          <HeaderTransparent headerCarClick={this.headerCarClick}  handleShowTrips={this.handleShowTrips} handleUserProfile={this.handleUserProfile} handleClickSignup={this.handleClickSignup}
                                              LoginInFlag={this.state.LoginInFlag} handleClickSignin={this.handleClickSignin} redirectToAdmin={this.redirectToAdmin}/>

                          <MainBody nav1={this.navCarClick} body1={this.midCarClick} handleCarFetch={this.handleCarFetch}/>
                          <Footer footerCarClick={this.footerCarClick}/>
                    </div>
                )}/>
                <Route exact path="/hotels" render={() => (
                    <div onClick={this.homeHotelClick} className="opener-image" style={{backgroundColor: "pink",width:"100%", height:500}}>
                          <HeaderTransparentHotel  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                          <HotelsMainPage handleHotelFetch={this.handleHotelFetch}/>
                          <Footer />
                    </div>
                )}/>

                <Route exact path="/flights" render={() => (
                    <div onClick={this.homeFlightClick} className="opener-image" style={{backgroundColor: "pink",width:"100%", height:500}}>
                          <HeaderTransparentFlight  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                          <FlightsMainPage handleFlightFetch={this.handleFlightFetch}/>
                          <Footer />
                    </div>
                )}/>

                <Route exact path="/searchCar" render={() => (
                    <div onClick={this.searchCarClick}>
                    <div className="container-fluid" style={{backgroundColor: "#f1f1f1"}}>
                        <div className="header-xyz">
                          <Header  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin} handleLogout={this.handleLogout}/>
                         </div>
                          <div className="mainBodyCar">
                          <MainBodyCar cars={this.state.carsObj} handleCartileFetch={this.handleCartileFetch}/>
                          </div>
                          <Message message={this.state.message}/>
                    </div>
                    </div>
                )}/>

                <Route exact path="/searchHotel" render={() => (
                    <div onClick={this.searchHotelClick}>
                    <div className="container-fluid" style={{backgroundColor: "#f1f1f1"}}>
                        <div className="header-xyz" style={{backgroundColor:"gray"}}>
                          <Header  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                         </div>
                          <div className="mainBodyHotel">
                          <MainBodyHotel hotels={this.state.hotelsObj} rooms={this.state.rooms} handleHoteltileFetch={this.handleHoteltileFetch}/>
                          </div>
                          <Message message={this.state.message}/>
                          </div>
                    </div>
                )}/>


                <Route exact path="/searchFlight" render={() => (
                    <div onClick={this.searchFlightClick}>
                    <div className="container-fluid" style={{backgroundColor: "#f1f1f1"}}>
                        <div className="header-xyz" style={{backgroundColor:"gray"}}>
                          <Header  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                         </div>
                          <div className="mainBodyHotel">
                          <MainBodyFlight flights={this.state.flightsObj} seats={this.state.seats} handleFlighttileFetch={this.handleFlighttileFetch}/>
                          </div>
                          <Message message={this.state.message}/>
                          </div>
                    </div>
                )}/>


                <Route exact path="/carCheckout" render={() => (
                    <div onClick={this.checkoutCarClick}>
                    <div className="container-fluid" style={{backgroundColor: "#f1f1f1"}}>
                        <div className="header-xyz" style={{backgroundColor:"gray"}}>
                          <Header  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                         </div>
                          <div className="mainBodyCarCheckout">
                            <MainBodyCarCheckout carTile={this.state.carTile} handleRedirectBooking={this.handleRedirectBooking}/>
                          </div>
                          <Message message={this.state.message}/>
                          </div>
                    </div>
                )}/>

                <Route exact path="/hotelCheckout" render={() => (
                    <div onClick={this.checkoutHotelClick} className="container-fluid" style={{backgroundColor: "#f1f1f1"}}>
                        <div className="header-xyz">
                          <Header  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                         </div>
                          <div className="mainBodyHotelCheckout" style={{backgroundColor: "gray"}}>
                            <MainBodyHotelCheckout hotelTile={this.state.hotelTile} room={this.state.room} handleRedirectBooking1={this.handleRedirectBooking1}/>
                          </div>
                          <Message message={this.state.message}/>
                    </div>
                )}/>


                <Route exact path="/flightCheckout" render={() => (
                    <div onClick={this.checkoutFlightClick} className="container-fluid" style={{backgroundColor: "#f1f1f1"}}>
                        <div className="header-xyz">
                          <Header  handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                         </div>
                          <div className="mainBodyHotelCheckout" style={{backgroundColor: "gray"}}>
                            <MainBodyFlightCheckout flightTile={this.state.flightTile} seat={this.state.seat} handleRedirectBooking2={this.handleRedirectBooking2}/>
                          </div>
                          <Message message={this.state.message}/>
                    </div>
                )}/>



                <Route exact path="/bookingSuccessful" render={() => (
                    <div onClick={this.bookingCarClick}>
                        <BookingSuccessful carTile={this.state.carTile} username={this.state.username} handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin} />
                    </div>
                )}/>
              <Route exact path="/hotelbookingSuccessful" render={() => (
                    <div onClick={this.bookingHotelClick}>
                        <HotelBookingSuccessful hotelTile={this.state.hotelTile} room={this.state.room} username={this.state.username} handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin} />
                    </div>
                )}/>

                <Route exact path="/flightbookingSuccessful" render={() => (
                      <div onClick={this.bookingFlightClick}>
                          <FlightBookingSuccessful flightTile={this.state.flightTile} seat={this.state.seat} username={this.state.username} handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin} />
                      </div>
                  )}/>



                <Route exact path="/signup" render={() => (
                    <div>
                        <Signup gotoSignin={this.gotoSignin} registerUser={this.registerUser}
                                handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                    </div>
                )}/>
                <Route exact path="/signin" render={() => (
                    <div>
                        <Signin gotoSignup={this.gotoSignup} loginUser={this.loginUser}
                                handleClickSignup={this.handleClickSignup} handleClickSignin={this.handleClickSignin}/>
                    </div>
                )}/>

                <Route exact path="/showbills" render={() => (
                    <div>
                        {
                            this.state.showUserBillFlag
                                ?
                                <UserBills/>
                                :
                                null
                        }
                    </div>
                )}/>

                <Route exact path="/graphs" render={() => (
                    <div>
                        <Graphs/>
                    </div>
                )}/>

                <Route exact path="/admin" render={() => (
                    <div>
                        <Admin reDirectToAdminDashboard={this.reDirectToAdminDashboard}/>
                    </div>
                )}/>

                <Route exact path="/adminDashboard" render={() => (
                    <div>
                        <AdminDashboard/>
                    </div>
                )}/>

                <Route exact path="/userProfile" render={() => (
                    <div>
                        <UserProfile handleDeleteAccount={this.handleDeleteAccount} handleProfileUpload={this.handleProfileUpload}/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);
