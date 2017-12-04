import React, {Component} from 'react';
import Navbar from 'react-navbar';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';
import Message from "./Message";
import AdminUserBills from "./AdminUserBills";
import UserInfo from "./UserInfo";
var icons = require('glyphicons');



var FontAwesome = require('react-fontawesome');

class AdminDashboard extends Component {

    static propTypes = {
        handleAdminLogout: PropTypes.func.isRequired
    };

//ADD TO LIST FUNCTIONS
    handleAddCarToList = (userdata) => {
        API.addCarToList(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        message: "Car added Successfully..!!",
                    });

                } else if (status === 401) {
                    this.setState({
                        message: "Car can not be added.",

                    });
                }
            });
    };


    handleAddFlightToList = (userdata) => {
        API.addFlightToList(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        message: "Car added Successfully..!!",
                    });
                } else if (status === 401) {
                    this.setState({
                        message: "Car can not be added.",

                    });
                }
            });
    };

    handleAddHotelToList = (userdata) => {
        API.addHotelToList(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        message: "Hotel added Successfully..!!",
                    });
                } else if (status === 401) {
                    this.setState({
                        message: "Hotel can not be added.",

                    });
                }
            });
    };

//MODIFY FUNCTIONS
    modifyCarToList = (userdata) => {
        API.modifyCarToList(userdata)
            .then((res) => {
                if (res.status === 201) {
                    this.setState({
                        messageFlag: true,
                        message: "Car updated Successfully..!!"
                    });
                } else if (res.status === 401) {
                    this.setState({
                        messageFlag: true,
                        message: "Car can not be updated."

                    });
                }
            });

    };

    modifyFlightToList = (userdata) => {
        API.modifyFlightToList(userdata)
            .then((res) => {
                if (res.status === 201) {
                    this.setState({
                        messageFlag: true,
                        message: "Flight updated Successfully..!!"
                    });
                } else if (res.status === 401) {
                    this.setState({
                        messageFlag: true,
                        message: "Flight can not be updated."

                    });
                }
            });

    };

    modifyHotelToList = (userdata) => {
        API.modifyHotelToList(userdata)
            .then((res) => {
                if (res.status === 201) {
                    this.setState({
                        messageFlag: true,
                        message: "Hotel updated Successfully..!!"
                    });
                } else if (res.status === 401) {
                    this.setState({
                        messageFlag: true,
                        message: "Hotel can not be updated."

                    });
                }
            });

    };


    deleteCarFromList = (userdata) => {
        API.deleteCarFromList(userdata)
            .then((res) => {
                if (res.status === 201) {
                    this.setState({
                        messageFlag: true,
                        message: "Car deleted Successfully..!!"
                    });
                } else if (res.status === 401) {
                    this.setState({
                        messageFlag: true,
                        message: "Car can not be deleted."

                    });
                }
            });

    };



    deleteFlightFromList = (userdata) => {
        API.deleteFlightFromList(userdata)
            .then((res) => {
                if (res.status === 201) {
                    this.setState({
                        messageFlag: true,
                        message: "Flight deleted Successfully..!!"
                    });
                } else if (res.status === 401) {
                    this.setState({
                        messageFlag: true,
                        message: "Flight can not be deleted."

                    });
                }
            });

    };

    deleteHotelFromList = (userdata) => {
        API.deleteHotelFromList(userdata)
            .then((res) => {
                if (res.status === 201) {
                    this.setState({
                        messageFlag: true,
                        message: "Hotel deleted Successfully..!!"
                    });
                } else if (res.status === 401) {
                    this.setState({
                        messageFlag: true,
                        message: "Hotel can not be deleted."

                    });
                }
            });

    };

//FETCH FUNCTIONS

    getAdminCarArray = (payload) => {

        API.getAdminCarArray(payload)
            .then((res) => {

                if (res.wrong === 1) {
                    this.setState({
                        message: 'Cars Not Found',
                        messageFlag: true
                    });
                }
                else if (res.status === 201) {
                    this.setState({
                        carsObj: res.user,
                        messageFlag: false
                    });

                    console.log('admin car array fetched:', res);
                }
            });
    }

    getAdminFlightArray = (payload) => {

        API.getAdminFlightArray(payload)
            .then((res) => {

                if (res.wrong === 1) {
                    this.setState({
                        message: 'Flights Not Found',
                        messageFlag: true
                    });
                }
                else if (res.status === 201) {
                    this.setState({
                        flightObj: res.user,
                        messageFlag: false
                    });

                    console.log('admin flight array fetched:', res);
                }
            });
    }

    getAdminHotelArray = (payload) => {

        API.getAdminHotelArray(payload)
            .then((res) => {

                if (res.wrong === 1) {
                    this.setState({
                        message: 'Hotel Not Found',
                        messageFlag: true
                    });
                }
                else if (res.status === 201) {
                    this.setState({
                        hotelObj: res.user,
                        messageFlag: false
                    });

                    console.log('admin hotel array fetched:', res);
                }
            });
    }
    handleAdminCarFetch = (payload) => {
        API.getAdminCars(payload)
            .then((res) => {

                if (res.wrong === 1) {
                    this.setState({
                        fetchCarId: null,
                        message: 'Car Not Found',
                        messageFlag: true
                    })
                }
                else {
                    this.setState({
                        modifiedcarId: res.carId,
                        modifiedcarType: res.carType,
                        modifiedcarCity: res.carCity,
                        modifiedcarFromDate:res.carFromDate,
                        modifiedcarToDate:res.carToDate,
                        modifiedcarAgency: res.carAgency,
                        modifiedcarAgencyAddress: res.carAgencyAddress,
                        modifiedcarAgencyContact:res.carAgencyContact,
                        modifiedcarCapacity: res.carCapacity,
                        modifiedcarAvailability: res.carAvailability,
                        modifiedcarRating: res.carRating,
                        modifiedcarOldPrice:res.carOldPrice,
                        modifiedcarOriginalPrice:res.carOriginalPrice,
                        modifiedcarName:res.carName,
                        modifiedcarBags:res.carBags,
                        modifiedcarDoors:res.carDoors,
                        modifiedcarColor:res.carColor,
                        modifiedcarClass:res.carClass,
                        modifiedcarMode:res.carMode,
                        modifiedpickUpLocation:res.pickUpLocation,
                        modifieddropOffLocation:res.dropOffLocation,
                        modifiedcarNumber:res.carNumber,
                        messageFlag: false,
                        editCarFormFlag: true
                    });
                    console.log('admin car object fetched:', res);
                }
            });

    };



    handleAdminFlightFetch = (payload) => {
        API.getAdminFlights(payload)
            .then((res) => {

                if (res.wrong === 1) {
                    this.setState({
                        fetchFlightId: null,
                        message: 'Flight Not Found',
                        messageFlag: true
                    })
                }
                else {
                    this.setState({
                        flightObj: res,
                        modifiedflightId: res.flightId,
                        modifiedflightClass: res.flightClass,
                        modifiedflightTripType:res.flightTripType,
                        modifiedflightFromCity:res.flightFromCity,
                        modifiedflightToCity:res.flightToCity,
                        modifiedflightDepartureTime:res.flightDepartureTime,
                        modifiedflightArrivalTime:res.flightArrivalTime,
                        modifiedflightAgency:res.flightAgency,
                        modifiedflightRating:res.flightRating,
                        modifiedflightAvailableSeats:res.flightAvailableSeats,
                        modifiedflightFareDetails:res.flightFareDetails,
                        modifiedflightFromDate:res.flightFromDate,
                        modifiedflightToDate:res.flightToDate,
                        modifiedflightCapacity:res.flightCapacity,
                        modifiedflightDuration:res.flightDuration,
                        modifiedflightStops:res.flightStops,
                        messageFlag: true,
                        message: 'Flight fetched successfully',
                        editFlightFormFlag: !this.state.editFlightFormFlag
                    });
                    console.log('admin flight object fetched:', res);
                }
            });

    };

    handleAdminHotelFetch = (payload) => {
        API.getAdminHotels(payload)
            .then((res) => {

                if (res.wrong === 1) {
                    this.setState({
                        fetchHotelIdId: null,
                        message: 'Hotel Not Found',
                        messageFlag: true
                    })
                }
                else {
                    this.setState({
                        hotelObj: res,
                        modifiedHotelId: res.hotelId,
                        modifiedHotelFromDate: res.hotelFromDate,
                        modifiedHotelToDate: res.hotelToDate,
                        modifiedHotelNumberOfRooms: res.hotelNumberOfRooms,
                        modifiedHotelNumberOfGuests: res.hotelNumberOfGuests,
                        modifiedHotelCity: res.hotelCity,
                        modifiedHotelArea: res.hotelArea,
                        modifiedHotelRating: res.hotelRating,
                        modifiedHotelStars: res.hotelStars,
                        modifiedHotelAddress: res.hotelAddress,
                        modifiedHotelContact: res.hotelContact,
                        modifiedHotelCapacity: res.hotelCapacity,
                        modifiedHotelAvailability: true,
                        modifiedHotelOldPrice: res.hotelOldPrice,
                        modifiedHotelOriginalPrice: res.hotelOriginalPrice,
                        modifiedHotelName: res.hotelName,
                        modifiedHotelReviewType: res.hotelReviewType,
                        modifiedHotelNumberOfReviews: res.hotelNumberOfReviews,
                        modifiedHotelAgency:res.hotelAgency,
                        modifiedHotelAgencyAddress :res.hotelAgencyAddress,
                        modifiedHotelAgencyContact:res.hotelAgencyContact,
                        messageFlag: true,
                        message: 'Hotel fetched successfully',
                        editHotelFormFlag: !this.state.editHotelFormFlag
                    });
                    console.log('admin hotel object fetched:', res);
                }
            });

    };


    constructor(props) {
        super(props);
        this.state = {

            username: '',
            message: '',

            carsObj: [],
            flightObj: [],
            hotelObj: [],

            messageFlag: false,
            hotelNotFoundFlag: false,
            flightNotFoundFlag: false,

            chooseHotelFlag: false,
            chooseFlightFlag: false,
            chooseCarFlag: false,

            createHotelFlag: false,
            createFlightFlag: false,
            createCarFlag: false,

            editHotelFlag: false,
            editFlightFlag: false,
            editCarFlag: false,
            editCarFormFlag: false,
            editFlightFormFlag: false,
            editHotelFormFlag: false,

            carId: null,
            carType: '',
            carCity: '',
            carFromDate:'',
            carToDate:'',
            carAgency: '',
            carAgencyAddress: '',
            carAgencyContact: null,
            carCapacity: null,
            carAvailability: '',
            carRating: null,
            carOldPrice:null,
            carOriginalPrice:null,
            carName:'',
            carBags:null,
            carDoors:null,
            carColor:'',
            carClass:'',
            carMode:'',
            pickUpLocation:'',
            dropOffLocation:'',
            carNumber:'',

            modifiedcarId: null,
            modifiedcarType: '',
            modifiedcarCity: '',
            modifiedcarFromDate:'',
            modifiedcarToDate:'',
            modifiedcarAgency: '',
            modifiedcarAgencyAddress: '',
            modifiedcarAgencyContact: null,
            modifiedcarCapacity: null,
            modifiedcarAvailability: '',
            modifiedcarRating: null,
            modifiedcarOldPrice:null,
            modifiedcarOriginalPrice:null,
            modifiedcarName:'',
            modifiedcarBags:null,
            modifiedcarDoors:null,
            modifiedcarColor:'',
            modifiedcarClass:'',
            modifiedcarMode:'',
            modifiedpickUpLocation:'',
            modifieddropOffLocation:'',
            modifiedcarNumber:null,


            flightId: '',
            flightClass: '',
            flightTripType:'',
            flightFromCity:'',
            flightToCity:'',
            flightDepartureTime:'',
            flightArrivalTime:'',
            flightAgency:'',
            flightRating:null,
            flightAvailableSeats:null,
            flightFareDetails:null,
            flightFromDate:'',
            flightToDate:'',
            flightCapacity:null,
            flightDuration:'',
            flightStops:null,

            modifiedflightId: '',
            modifiedflightClass: '',
            modifiedflightTripType:'',
            modifiedflightFromCity:'',
            modifiedflightToCity:'',
            modifiedflightDepartureTime:'',
            modifiedflightArrivalTime:'',
            modifiedflightAgency:'',
            modifiedflightRating:null,
            modifiedflightAvailableSeats:null,
            modifiedflightFareDetails:null,
            modifiedflightFromDate:'',
            modifiedflightToDate:'',
            modifiedflightCapacity:null,
            modifiedflightDuration:'',
            modifiedflightStops:null,

            hotelId: null,
            hotelFromDate: '',
            hotelToDate: '',
            hotelNumberOfRooms: null,
            hotelNumberOfGuests: null,
            hotelCity: '',
            hotelArea: '',
            hotelRating: null,
            hotelStars: null,
            hotelAddress: '',
            hotelContact: '',
            hotelCapacity: null,
            hotelAvailability: '',
            hotelOldPrice: null,
            hotelOriginalPrice: null,
            hotelName: '',
            hotelReviewType: '',
            hotelNumberOfReviews: null,
            hotelAgency:'',
            hotelAgencyAddress:'',
            hotelAgencyContact:null,


            modifiedHotelId: null,
            modifiedHotelFromDate: '',
            modifiedHotelToDate: '',
            modifiedHotelNumberOfRooms: null,
            modifiedHotelNumberOfGuests: null,
            modifiedHotelCity: '',
            modifiedHotelArea: '',
            modifiedHotelRating: null,
            modifiedHotelStars: null,
            modifiedHotelAddress: '',
            modifiedHotelContact: '',
            modifiedHotelCapacity: null,
            modifiedHotelAvailability: true,
            modifiedHotelOldPrice: null,
            modifiedHotelOriginalPrice: null,
            modifiedHotelName: '',
            modifiedHotelReviewType: '',
            modifiedHotelNumberOfReviews: null,
            modifiedHotelAgency:'',
            modifiedHotelAgencyAddress:'',
            modifiedHotelAgencyContact:null,


            fetchCarId: null,
            fetchFlightId: null,
            fetchHotelId: null,

            showUserBillFlag:false,
            showListingFlag:false,
            showUserInfoFlag:false

        };


    }

    render() {

        return (

            <div className="container-fluid" style={{backgroundColor: "#f1f1f1"}}>


            <div className="LeftAdmin">
                <div className="navbar-header">
                    <a className="" href="#"  ><h2>Admin Dashboard</h2></a>
                </div>

                <ul className="nav navbar-nav" style={{color: "black"}}>
                    <li className="abc" style={{color: "black"}}><a href="#" onClick={()=> this.setState({
                        showListingFlag:!this.state.showListingFlag,
                        showUserBillFlag:false,showUserInfoFlag:false,
                        chooseHotelFlag: false,chooseCarFlag:false,chooseFlightFlag:false
                    })}><h3 style={{color:"black"}}>Listing</h3></a></li>
                    <li><a className="uiNav" href="#" onClick={()=> this.setState({
                        showUserInfoFlag:!this.state.showUserInfoFlag,
                        showListingFlag:false,showUserBillFlag:false
                    })}><h3 style={{color:"black"}}>UserInfo</h3></a></li>

                    <li><a className="uiNav" href="#" onClick={()=> this.setState({
                        showUserBillFlag:!this.state.showUserBillFlag,
                        showListingFlag:false,showUserInfoFlag:false
                    })}><h3 style={{color:"black"}}>Userbill</h3></a></li>

                    <li><a href="#" onClick={this.props.handleAdminLogout}><h3 style={{color:"black"}}><span className="glyphicon glyphicon-log-out" style={{color: "black"}}></span>Logout</h3></a></li>
                </ul>
            </div>
            <div className="rightAdmin">
                <div className="rightAdmin-inside" style={{width: "100%"}}>

                    {
                        this.state.showListingFlag
                            ?
                            <div>
                                <div className={'bgpage '}>
                                    {
                                        this.state.messageFlag
                                            ?
                                            <Message message={this.state.message}/>
                                            : null
                                    }
                                    <h1 style={{textAlign: 'center'}}>Add or Modify Listing</h1>


                                    {/************************************ Collapsible Panel ***********************************************/}



                                    <h2 className="panel-title">
                                        <label className="createListTitle" style={{textAlign: 'center'}}
                                               href="#collapse1">Choose Type To Add/Edit Listing</label>
                                    </h2>



                                    <div >
                                        <ul className="list-group">
                                            <a onClick={() => {
                                                this.setState({
                                                    chooseCarFlag: !this.state.chooseCarFlag, messageFlag: false,
                                                    chooseHotelFlag: false, chooseFlightFlag: false,editCarFlag: false,
                                                    carId: null,
                                                    carType: '',
                                                    carCity: '',
                                                    carFromDate:'',
                                                    carToDate:'',
                                                    carAgency: '',
                                                    carAgencyAddress: '',
                                                    carAgencyContact: null,
                                                    carCapacity: null,
                                                    carAvailability: '',
                                                    carRating: null,
                                                    carOldPrice:null,
                                                    carOriginalPrice:null,
                                                    carName:'',
                                                    carBags:null,
                                                    carDoors:null,
                                                    carColor:'',
                                                    carClass:'',
                                                    carMode:'',
                                                    pickUpLocation:'',
                                                    dropOffLocation:'',
                                                    carNumber:'',

                                                    modifiedcarId: null,
                                                    modifiedcarType: '',
                                                    modifiedcarCity: '',
                                                    modifiedcarFromDate:'',
                                                    modifiedcarToDate:'',
                                                    modifiedcarAgency: '',
                                                    modifiedcarAgencyAddress: '',
                                                    modifiedcarAgencyContact: null,
                                                    modifiedcarCapacity: null,
                                                    modifiedcarAvailability: '',
                                                    modifiedcarRating: null,
                                                    modifiedcarOldPrice:null,
                                                    modifiedcarOriginalPrice:null,
                                                    modifiedcarName:'',
                                                    modifiedcarBags:null,
                                                    modifiedcarDoors:null,
                                                    modifiedcarColor:'',
                                                    modifiedcarClass:'',
                                                    modifiedcarMode:'',
                                                    modifiedpickUpLocation:'',
                                                    modifieddropOffLocation:'',
                                                    modifiedcarNumber:null
                                                });
                                            }} className="list-group-item">Cars
                                            </a>
                                            <a onClick={() => {
                                                this.setState({
                                                    chooseFlightFlag: !this.state.chooseFlightFlag, messageFlag: false,
                                                    chooseCarFlag: false, chooseHotelFlag: false, editFlightFlag: false,
                                                    flightId: '',
                                                    flightClass: '',
                                                    flightTripType:'',
                                                    flightFromCity:'',
                                                    flightToCity:'',
                                                    flightDepartureTime:'',
                                                    flightArrivalTime:'',
                                                    flightAgency:'',
                                                    flightRating:null,
                                                    flightAvailableSeats:null,
                                                    flightFareDetails:null,
                                                    flightFromDate:'',
                                                    flightToDate:'',
                                                    flightCapacity:null,
                                                    flightDuration:'',
                                                    flightStops:null,

                                                    modifiedflightId: '',
                                                    modifiedflightClass: '',
                                                    modifiedflightTripType:'',
                                                    modifiedflightFromCity:'',
                                                    modifiedflightToCity:'',
                                                    modifiedflightDepartureTime:'',
                                                    modifiedflightArrivalTime:'',
                                                    modifiedflightAgency:'',
                                                    modifiedflightRating:null,
                                                    modifiedflightAvailableSeats:null,
                                                    modifiedflightFareDetails:null,
                                                    modifiedflightFromDate:'',
                                                    modifiedflightToDate:'',
                                                    modifiedflightCapacity:null,
                                                    modifiedflightDuration:'',
                                                    modifiedflightStops:null,
                                                    modifiedfetchFlightId: null
                                                });
                                            }} className="list-group-item">Flights
                                            </a><a onClick={() => {
                                            this.setState({
                                                chooseHotelFlag: !this.state.chooseHotelFlag, messageFlag: false,
                                                chooseFlightFlag: false, chooseCarFlag: false, editHotelFlag: false,

                                                hotelId: null,
                                                hotelFromDate: '',
                                                hotelToDate: '',
                                                hotelNumberOfRooms: null,
                                                hotelNumberOfGuests: null,
                                                hotelCity: '',
                                                hotelArea: '',
                                                hotelRating: null,
                                                hotelStars: null,
                                                hotelAddress: '',
                                                hotelContact: '',
                                                hotelCapacity: null,
                                                hotelAvailability: '',
                                                hotelOldPrice: null,
                                                hotelOriginalPrice: null,
                                                hotelName: '',
                                                hotelReviewType: '',
                                                hotelNumberOfReviews: null,

                                                modifiedHotelId: null,
                                                modifiedHotelFromDate: '',
                                                modifiedHotelToDate: '',
                                                modifiedHotelNumberOfRooms: null,
                                                modifiedHotelNumberOfGuests: null,
                                                modifiedHotelCity: '',
                                                modifiedHotelArea: '',
                                                modifiedHotelRating: null,
                                                modifiedHotelStars: null,
                                                modifiedHotelAddress: '',
                                                modifiedHotelContact: '',
                                                modifiedHotelCapacity: null,
                                                modifiedHotelAvailability: true,
                                                modifiedHotelOldPrice: null,
                                                modifiedHotelOriginalPrice: null,
                                                modifiedHotelName: '',
                                                modifiedHotelReviewType: '',
                                                modifiedHotelNumberOfReviews: null,
                                                fetchHotelId: null
                                            });
                                        }} className="list-group-item">Hotels
                                        </a>
                                        </ul>

                                    </div>


                                    {/******************* Form for adding/editing Car is displayed after clicking Car in above Dropdown List**********/}
                                    <div className="xyz">
                                        {
                                            this.state.chooseCarFlag
                                                ?
                                                <div>

                                                    <span
                                                        className={'labelAddModify'}><b>Choose to Add or Modify Car Listing:</b></span>
                                                    <button className={'btn btn-primary'}
                                                            onClick={() => {
                                                                this.setState({
                                                                    createCarFlag: !this.state.createCarFlag, messageFlag: false
                                                                });
                                                            }}>Create
                                                    </button>

                                                    <button className={'btn btn-primary editListButton'}
                                                            onClick={() => {
                                                                this.getAdminCarArray({dummy:'dummy'})
                                                                this.setState({
                                                                    editCarFlag: !this.state.editCarFlag, messageFlag: false,
                                                                    createCarFlag: false

                                                                });
                                                            }}>Modify
                                                    </button>

                                                    {
                                                        this.state.createCarFlag
                                                            ?
                                                            <form>
                                                                <div className="form-group">
                                                                    <h2 style={{textAlign: 'center'}}>Create Car Listing</h2>
                                                                </div>


                                                                <br/>
                                                                <div className="form-group">
                                                                    <hr/>
                                                                    <label>Car Id</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        label="carId"
                                                                        placeholder="Car ID"
                                                                        value={this.state.carId}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carId: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Type</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        list="carType"
                                                                        placeholder="Car Type"
                                                                        value={this.state.carType}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carType: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car City</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carCity"
                                                                        placeholder="Car City"
                                                                        value={this.state.carCity}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carCity: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>


                                                                <div className="form-group">
                                                                    <label>Car From Date</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carSpecs"
                                                                        placeholder="Car From Date"
                                                                        value={this.state.carFromDate}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carFromDate: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car To Date</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carSpecs"
                                                                        placeholder="Car To Date"
                                                                        value={this.state.carToDate}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carToDate: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Agency</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carAgency"
                                                                        placeholder="Car Agency"
                                                                        value={this.state.carAgency}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carAgency: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Agency Address</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carSpecs"
                                                                        placeholder="Car Agency Address"
                                                                        value={this.state.carAgencyAddress}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carAgencyAddress: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>Car Agency Contact</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        label="carSpecs"
                                                                        placeholder="Car Agency Contact"
                                                                        value={this.state.carAgencyContact}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carAgencyContact: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Capacity</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        label="carSpecs"
                                                                        placeholder="Car Capacity"
                                                                        value={this.state.carCapacity}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carCapacity: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Availability</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carSpecs"
                                                                        placeholder="Car Availability"
                                                                        value={this.state.carAvailability}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carAvailability: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>


                                                                <div className="form-group">
                                                                    <label>Car Rating</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        label="carRating"
                                                                        placeholder="Car Rating"
                                                                        value={this.state.carRating}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carRating: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>


                                                                <div className="form-group">
                                                                    <label>Car Old Price</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        label="carRating"
                                                                        placeholder="Car Old Price"
                                                                        value={this.state.carOldPrice}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carOldPrice: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>



                                                                <div className="form-group">
                                                                    <label>Car Original Price</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        label="carRate"
                                                                        placeholder="Car Original Price"
                                                                        value={this.state.carOriginalPrice}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carOriginalPrice: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Name</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carRate"
                                                                        placeholder="Car Name"
                                                                        value={this.state.carName}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carName: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Bags</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        label="carRate"
                                                                        placeholder="Car Bags"
                                                                        value={this.state.carBags}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carBags: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Doors</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        label="carRate"
                                                                        placeholder="Car Doors"
                                                                        value={this.state.carDoors}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carDoors: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Color</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carRate"
                                                                        placeholder="Car Color"
                                                                        value={this.state.carColor}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carColor: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Class</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carRate"
                                                                        placeholder="Car Class"
                                                                        value={this.state.carClass}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carClass: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Mode</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carRate"
                                                                        placeholder="Car Mode"
                                                                        value={this.state.carMode}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carMode: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Pick Up Location</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carRate"
                                                                        placeholder="Car Pick Up Location"
                                                                        value={this.state.pickUpLocation}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                pickUpLocation: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Drop Off Location</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carRate"
                                                                        placeholder="Car Drop Off Location"
                                                                        value={this.state.dropOffLocation}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                dropOffLocation: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Car Number</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carRate"
                                                                        placeholder="Car Number"
                                                                        value={this.state.carNumber}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carNumber: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <div>
                                                                        <br/>
                                                                        <button
                                                                            style={{float: 'left', marginBottom: 20}}
                                                                            className="btn btn-success Sign-in-button"
                                                                            type="button"
                                                                            onClick={() => {
                                                                                this.handleAddCarToList({
                                                                                        carId: this.state.carId,
                                                                                        carType: this.state.carType,
                                                                                        carCity: this.state.carCity,
                                                                                        carFromDate:this.state.carFromDate,
                                                                                        carToDate:this.state.carToDate,
                                                                                        carAgency: this.state.carAgency,
                                                                                        carAgencyAddress: this.state.carAgencyAddress,
                                                                                        carAgencyContact: this.state.carAgencyContact,
                                                                                        carCapacity: this.state.carCapacity,
                                                                                        carAvailability: this.state.carAvailability,
                                                                                        carRating: this.state.carRating,
                                                                                        carOldPrice:this.state.carOldPrice,
                                                                                        carOriginalPrice:this.state.carOriginalPrice,
                                                                                        carName:this.state.carName,
                                                                                        carBags:this.state.carBags,
                                                                                        carDoors:this.state.carDoors,
                                                                                        carColor:this.state.carColor,
                                                                                        carClass:this.state.carClass,
                                                                                        carMode:this.state.carMode,
                                                                                        pickUpLocation:this.state.pickUpLocation,
                                                                                        dropOffLocation:this.state.dropOffLocation,
                                                                                        carNumber:this.state.carNumber
                                                                                    }
                                                                                );
                                                                                this.setState({
                                                                                    chooseCarFlag: false,
                                                                                    createCarFlag: !this.state.createCarFlag
                                                                                });
                                                                            }}
                                                                        >
                                                                            Add to Car List
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            :
                                                            <div>
                                                                {

                                                                    this.state.editCarFlag
                                                                        ?
                                                                        <div>
                                                                            <br/><br/>
                                                                            <h2 style={{textAlign: 'center',backgroundColor:'silver'}}>Car
                                                                                Listing</h2>
                                                                            <br/>
                                                                            <table className="table table-bordered table-striped">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className={'tableHead'}>Car Id</th>
                                                                                    <th className={'tableHead'}>Type</th>
                                                                                    <th className={'tableHead'}>Name</th>
                                                                                    <th className={'tableHead'}>City</th>
                                                                                    <th className={'tableHead'}>Agency</th>
                                                                                    <th className={'tableHead'}>Agency Address</th>
                                                                                    <th className={'tableHead'}>Agency Contact</th>
                                                                                    <th className={'tableHead'}>Availability</th>
                                                                                    <th className={'tableHead'}>Rating</th>
                                                                                    <th className={'tableHead'}>Fare</th>
                                                                                    <th className={'tableHead'}>Number</th>


                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {
                                                                                    this.state.carsObj.map(item => (
                                                                                            <tr key={item._id}>
                                                                                                <td className={'tableData tableData1'}><img
                                                                                                    className={'itemImage '}
                                                                                                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Car_with_Driver-Silhouette.svg/500px-Car_with_Driver-Silhouette.svg.png'}/> {item.carId}
                                                                                                    <button className={'viewDetail'} onClick={() => {
                                                                                                        this.handleAdminCarFetch(item);
                                                                                                        console.log('item:', item);
                                                                                                        this.setState({
                                                                                                            editCarFlag:false
                                                                                                        });
                                                                                                    }}>Edit
                                                                                                    </button>
                                                                                                </td>
                                                                                                <td className={'tableData'}>{item.carType}</td>
                                                                                                <td className={'tableData'}>{item.carName}</td>
                                                                                                <td className={'tableData'}>{item.carCity}</td>
                                                                                                <td className={'tableData'}>{item.carAgency}</td>
                                                                                                <td className={'tableData'}>{item.carAgencyAddress}</td>
                                                                                                <td className={'tableData'}>{item.carAgencyContact}</td>
                                                                                                <td className={'tableData'}>{item.carAvailability}</td>
                                                                                                <td className={'tableData'}>{item.carRating}</td>
                                                                                                <td className={'tableData'}>{item.carOriginalPrice}</td>
                                                                                                <td className={'tableData'}>{item.carNumber}</td>
                                                                                            </tr>




                                                                                        )
                                                                                    )
                                                                                }
                                                                                </tbody>
                                                                            </table>
                                                                            <br/>



                                                                        </div>
                                                                        :
                                                                        <div>
                                                                            {

                                                                                this.state.editCarFormFlag
                                                                                    ?
                                                                                    <div>
                                                                                        <form>
                                                                                            <div className="form-group">
                                                                                                <div
                                                                                                    className="login-register-header modifyCar">
                                                                                                    <h2 style={{textAlign: 'center'}}>
                                                                                                        Edit the form to Modify</h2>
                                                                                                </div>
                                                                                            </div>


                                                                                            <br/>


                                                                                            <div className="form-group">
                                                                                                <hr/>
                                                                                                <label>Car Id</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    label="carId"
                                                                                                    placeholder="Car ID"
                                                                                                    value={this.state.modifiedcarId}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarId: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                    readOnly/>
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Type</label>
                                                                                                <input
                                                                                                    type="text"
                                                                                                    className="form-control"
                                                                                                    list="carType"
                                                                                                    placeholder="Car Type"
                                                                                                    value={this.state.modifiedcarType}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarType: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car City</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carCity"
                                                                                                    placeholder="Car City"
                                                                                                    value={this.state.modifiedcarCity}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarCity: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>


                                                                                            <div className="form-group">
                                                                                                <label>Car From Date</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carSpecs"
                                                                                                    placeholder="Car From Date"
                                                                                                    value={this.state.modifiedcarFromDate}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarFromDate: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car To Date</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carSpecs"
                                                                                                    placeholder="Car To Date"
                                                                                                    value={this.state.modifiedcarToDate}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarToDate: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Agency</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carAgency"
                                                                                                    placeholder="Car Agency"
                                                                                                    value={this.state.modifiedcarAgency}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarAgency: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Agency Address</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carSpecs"
                                                                                                    placeholder="Car Agency Address"
                                                                                                    value={this.state.modifiedcarAgencyAddress}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarAgencyAddress: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <label>Car Agency Contact</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    label="carSpecs"
                                                                                                    placeholder="Car Agency Contact"
                                                                                                    value={this.state.modifiedcarAgencyContact}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarAgencyContact: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Capacity</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    label="carSpecs"
                                                                                                    placeholder="Car Capacity"
                                                                                                    value={this.state.modifiedcarCapacity}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarCapacity: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Availability</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carSpecs"
                                                                                                    placeholder="Car Availability"
                                                                                                    value={this.state.modifiedcarAvailability}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarAvailability: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>


                                                                                            <div className="form-group">
                                                                                                <label>Car Rating</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    label="carRating"
                                                                                                    placeholder="Car Rating"
                                                                                                    value={this.state.modifiedcarRating}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarRating: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>


                                                                                            <div className="form-group">
                                                                                                <label>Car Old Price</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    label="carRating"
                                                                                                    placeholder="Car Old Price"
                                                                                                    value={this.state.modifiedcarOldPrice}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarOldPrice: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>



                                                                                            <div className="form-group">
                                                                                                <label>Car Original Price</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Original Price"
                                                                                                    value={this.state.modifiedcarOriginalPrice}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarOriginalPrice: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Name</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Name"
                                                                                                    value={this.state.modifiedcarName}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarName: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Bags</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Bags"
                                                                                                    value={this.state.modifiedcarBags}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarBags: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Doors</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Doors"
                                                                                                    value={this.state.modifiedcarDoors}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarDoors: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Color</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Color"
                                                                                                    value={this.state.modifiedcarColor}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarColor: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Class</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Class"
                                                                                                    value={this.state.modifiedcarClass}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarClass: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Mode</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Mode"
                                                                                                    value={this.state.modifiedcarMode}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarMode: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Pick Up Location</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Pick Up Location"
                                                                                                    value={this.state.modifiedpickUpLocation}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedpickUpLocation: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Drop Off Location</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Drop Off Location"
                                                                                                    value={this.state.modifieddropOffLocation}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifieddropOffLocation: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Car Number</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Number"
                                                                                                    value={this.state.modifiedcarNumber}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedcarNumber: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <div>
                                                                                                    <br/>
                                                                                                    <button
                                                                                                        style={{
                                                                                                            float: 'left',
                                                                                                            marginLeft:10,
                                                                                                            marginTop: -20
                                                                                                        }}
                                                                                                        className="btn btn-success Sign-in-button"
                                                                                                        type="button"
                                                                                                        onClick={() => {
                                                                                                            this.modifyCarToList({
                                                                                                                    carId: this.state.modifiedcarId,
                                                                                                                    carType:this.state.modifiedcarType,
                                                                                                                    carCity:this.state.modifiedcarCity,
                                                                                                                    carFromDate:this.state.modifiedcarFromDate,
                                                                                                                    carToDate:this.state.modifiedcarToDate,
                                                                                                                    carAgency:this.state.modifiedcarAgency,
                                                                                                                    carAgencyAddress: this.state.modifiedcarAgencyAddress,
                                                                                                                    carAgencyContact: this.state.modifiedcarAgencyContact,
                                                                                                                    carCapacity: this.state.modifiedcarCapacity,
                                                                                                                    carAvailability: this.state.modifiedcarAvailability,
                                                                                                                    carRating: this.state.modifiedcarRating,
                                                                                                                    carOldPrice:this.state.modifiedcarOldPrice,
                                                                                                                    carOriginalPrice:this.state.modifiedcarOriginalPrice,
                                                                                                                    carName:this.state.modifiedcarName,
                                                                                                                    carBags:this.state.modifiedcarBags,
                                                                                                                    carDoors:this.state.modifiedcarDoors,
                                                                                                                    carColor:this.state.modifiedcarColor,
                                                                                                                    carClass:this.state.modifiedcarClass,
                                                                                                                    carMode:this.state.modifiedcarMode,
                                                                                                                    pickUpLocation:this.state.modifiedpickUpLocation,
                                                                                                                    dropOffLocation:this.state.modifieddropOffLocation,
                                                                                                                    carNumber:this.state.modifiedcarNumber
                                                                                                                }
                                                                                                            );
                                                                                                            this.setState({
                                                                                                                chooseCarFlag: false
                                                                                                            });
                                                                                                        }}
                                                                                                    >
                                                                                                        Save
                                                                                                    </button>

                                                                                                    <button
                                                                                                        style={{
                                                                                                            float: 'left',
                                                                                                            marginTop: -20,
                                                                                                            marginLeft:20
                                                                                                        }}
                                                                                                        className="btn btn-danger Sign-in-button"
                                                                                                        type="button"
                                                                                                        onClick={() => {
                                                                                                            this.deleteCarFromList({
                                                                                                                    carId: this.state.modifiedcarId
                                                                                                                }
                                                                                                            );
                                                                                                            this.setState({
                                                                                                                chooseCarFlag: false
                                                                                                            });
                                                                                                        }}
                                                                                                    >
                                                                                                        Delete
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                    : null

                                                                            }
                                                                        </div>
                                                                }
                                                            </div>
                                                    }

                                                </div>

                                                : null
                                        }
                                    </div>

                                    {/*************************** Form for adding Flight is displayed after clicking Flight in above Dropdown List****/}

                                    <div className="xyz">
                                        {
                                            this.state.chooseFlightFlag
                                                ?
                                                <div>

                                                    <span
                                                        className={'labelAddModify'}><b>Choose to Add or Modify Flight Listing:</b></span>
                                                    <button className={'btn btn-primary'}
                                                            onClick={() => {
                                                                this.setState({
                                                                    createFlightFlag: !this.state.createFlightFlag,
                                                                    messageFlag: false
                                                                });
                                                            }}>Create
                                                    </button>

                                                    <button className={'btn btn-primary editListButton'}
                                                            onClick={() => {
                                                                this.getAdminFlightArray({dummy:'dummy'})
                                                                this.setState({
                                                                    editFlightFlag: !this.state.editFlightFlag, messageFlag: false,
                                                                    createFlightFlag: false

                                                                });
                                                            }}>Modify
                                                    </button>


                                                    {
                                                        this.state.createFlightFlag
                                                            ?
                                                            <form>
                                                                <div className="form-group">
                                                                    <div className="login-register-header"><h2
                                                                        style={{textAlign: 'center'}}>Create Flight Listing</h2>
                                                                    </div>
                                                                </div>

                                                                <br/>
                                                                <div className="form-group">
                                                                    <hr/>
                                                                    <label>Flight ID</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight ID"
                                                                        value={this.state.flightId}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightId: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight Class</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight Class"
                                                                        value={this.state.flightClass}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightClass: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight Trip Type</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight Trip Type"
                                                                        value={this.state.flightTripType}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightTripType: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight From City</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight To  City"
                                                                        value={this.state.flightFromCity}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightFromCity: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>Flight To City</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight To  City"
                                                                        value={this.state.flightToCity}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightToCity: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight Departure Time</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight Departure Time"
                                                                        value={this.state.flightDepartureTime}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightDepartureTime: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight Arrival Time</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight Arrival Time "
                                                                        value={this.state.flightArrivalTime}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightArrivalTime: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>


                                                                <div className="form-group">
                                                                    <label>Flight Agency</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight Agency"
                                                                        value={this.state.flightAgency}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightAgency: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight Rating</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Flight Rating"
                                                                        value={this.state.flightRating}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightRating: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight Available Seats</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Flight Available Seats"
                                                                        value={this.state.flightAvailableSeats}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightAvailableSeats: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight Fare Details</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Flight Fare Details"
                                                                        value={this.state.flightFareDetails}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightFareDetails: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight From Date</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight From Date "
                                                                        value={this.state.flightFromDate}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightFromDate: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>


                                                                <div className="form-group">
                                                                    <label>Flight To Date</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight To Date "
                                                                        value={this.state.flightToDate}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightToDate: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight Capacity</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Flight Capacity "
                                                                        value={this.state.flightCapacity}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightCapacity: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>


                                                                <div className="form-group">
                                                                    <label>Flight Duration</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Flight Duration "
                                                                        value={this.state.flightDuration}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightDuration: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label>Flight Stops</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Flight Stops "
                                                                        value={this.state.flightStops}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                flightStops: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>


                                                                <div className="form-group">
                                                                    <div>
                                                                        <br/>
                                                                        <button
                                                                            style={{float: 'left', marginBottom: 20}}
                                                                            className="btn btn-success Sign-in-button"
                                                                            type="button"
                                                                            onClick={() => {
                                                                                this.handleAddFlightToList({
                                                                                    flightId: this.state.flightId,
                                                                                    flightClass: this.state.flightClass,
                                                                                    flightAgency: this.state.flightAgency,
                                                                                    flightRating: this.state.flightRating,
                                                                                    flightAvailableSeats: this.state.flightAvailableSeats,
                                                                                    flightFareDetails: this.state.flightFareDetails,
                                                                                    flightTripType:this.state.flightTripType,
                                                                                    flightFromCity:this.state.flightFromCity,
                                                                                    flightToCity:this.state.flightToCity,
                                                                                    flightDepartureTime:this.state.flightDepartureTime,
                                                                                    flightArrivalTime:this.state.flightArrivalTime,
                                                                                    flightFromDate:this.state.flightFromDate,
                                                                                    flightToDate:this.state.flightToDate,
                                                                                    flightCapacity:this.state.flightCapacity,
                                                                                    flightDuration:this.state.flightDuration,
                                                                                    flightStops:this.state.flightStops
                                                                                });
                                                                                this.setState({
                                                                                    chooseFlightFlag: false,
                                                                                    createFlightFlag: !this.state.createFlightFlag
                                                                                });

                                                                            }}
                                                                        >
                                                                            Add to Flight List
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            :
                                                            <div>
                                                                {

                                                                    this.state.editFlightFlag
                                                                        ?
                                                                        <div>
                                                                            <br/><br/>
                                                                            <h2 style={{textAlign: 'center',backgroundColor:'silver'}}>Flight
                                                                                Listing</h2>
                                                                            <br/>
                                                                            <table className="table table-bordered table-striped">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className={'tableHead'}>Id</th>
                                                                                    <th className={'tableHead'}>Agency</th>
                                                                                    <th className={'tableHead'}>Class</th>
                                                                                    <th className={'tableHead'}>From City</th>
                                                                                    <th className={'tableHead'}>To City</th>
                                                                                    <th className={'tableHead'}>Departure</th>
                                                                                    <th className={'tableHead'}>Arrival</th>
                                                                                    <th className={'tableHead'}>Rating</th>
                                                                                    <th className={'tableHead'}>Available Seats</th>
                                                                                    <th className={'tableHead'}>From Date</th>
                                                                                    <th className={'tableHead'}>To Date</th>
                                                                                    <th className={'tableHead'}>Capacity</th>
                                                                                    <th className={'tableHead'}>Duration</th>
                                                                                    <th className={'tableHead'}>Stops</th>


                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {
                                                                                    this.state.flightObj.map(item => (
                                                                                            <tr key={item._id}>
                                                                                                <td className={'tableData tableData1'}><img
                                                                                                    className={'itemImage123 '}
                                                                                                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Aiga_departingflights.svg/2000px-Aiga_departingflights.svg.png'}/> {item.flightId}
                                                                                                    <button className={'viewDetail'} onClick={() => {
                                                                                                        this.handleAdminFlightFetch(item);
                                                                                                        console.log('item:', item);
                                                                                                        this.setState({
                                                                                                            editFlightFlag:false
                                                                                                        });
                                                                                                    }}>Modify
                                                                                                    </button>
                                                                                                </td>
                                                                                                <td className={'tableData'}>{item.flightAgency}</td>
                                                                                                <td className={'tableData'}>{item.flightClass}</td>
                                                                                                <td className={'tableData'}>{item.flightFromCity}</td>
                                                                                                <td className={'tableData'}>{item.flightToCity}</td>
                                                                                                <td className={'tableData'}>{item.flightDepartureTime}</td>
                                                                                                <td className={'tableData'}>{item.flightArrivalTime}</td>
                                                                                                <td className={'tableData'}>{item.flightRating}</td>
                                                                                                <td className={'tableData'}>{item.flightAvailableSeats}</td>
                                                                                                <td className={'tableData'}>{item.flightFromDate}</td>
                                                                                                <td className={'tableData'}>{item.flightToDate}</td>
                                                                                                <td className={'tableData'}>{item.flightCapacity}</td>
                                                                                                <td className={'tableData'}>{item.flightDuration}</td>
                                                                                                <td className={'tableData'}>{item.flightStops}</td>
                                                                                            </tr>




                                                                                        )
                                                                                    )
                                                                                }
                                                                                </tbody>
                                                                            </table>
                                                                            <br/>



                                                                        </div>
                                                                        :
                                                                        <div>
                                                                            {

                                                                                this.state.editFlightFormFlag
                                                                                    ?
                                                                                    <div>
                                                                                        <form>
                                                                                            <div className="form-group">
                                                                                                <div
                                                                                                    className="login-register-header modifyCar">
                                                                                                    <h2 style={{textAlign: 'center'}}>
                                                                                                        Edit the form to Modify</h2>
                                                                                                </div>
                                                                                            </div>


                                                                                            <br/>
                                                                                            <div className="form-group">
                                                                                                <hr/>
                                                                                                <label>Flight ID</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight ID"
                                                                                                    value={this.state.modifiedflightId}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightId: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight Class</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight Class"
                                                                                                    value={this.state.modifiedflightClass}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightClass: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight Trip Type</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight Trip Type"
                                                                                                    value={this.state.modifiedflightTripType}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightTripType: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight From City</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight To  City"
                                                                                                    value={this.state.modifiedflightFromCity}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightFromCity: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <label>Flight To City</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight To  City"
                                                                                                    value={this.state.modifiedflightToCity}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightToCity: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight Departure Time</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight Departure Time"
                                                                                                    value={this.state.modifiedflightDepartureTime}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightDepartureTime: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight Arrival Time</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight Arrival Time "
                                                                                                    value={this.state.modifiedflightArrivalTime}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightArrivalTime: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>


                                                                                            <div className="form-group">
                                                                                                <label>Flight Agency</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight Agency"
                                                                                                    value={this.state.modifiedflightAgency}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightAgency: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight Rating</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Flight Rating"
                                                                                                    value={this.state.modifiedflightRating}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightRating: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight Available Seats</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Flight Available Seats"
                                                                                                    value={this.state.modifiedflightAvailableSeats}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightAvailableSeats: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight Fare Details</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Flight Fare Details"
                                                                                                    value={this.state.modifiedflightFareDetails}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightFareDetails: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight From Date</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight From Date "
                                                                                                    value={this.state.modifiedflightFromDate}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightFromDate: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>


                                                                                            <div className="form-group">
                                                                                                <label>Flight To Date</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight To Date "
                                                                                                    value={this.state.modifiedflightToDate}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightToDate: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight Capacity</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Flight Capacity "
                                                                                                    value={this.state.modifiedflightCapacity}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightCapacity: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>


                                                                                            <div className="form-group">
                                                                                                <label>Flight Duration</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight Duration "
                                                                                                    value={this.state.modifiedflightDuration}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightDuration: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <label>Flight Stops</label>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Flight Stops "
                                                                                                    value={this.state.modifiedflightStops}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedflightStops: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <div>
                                                                                                    <br/>
                                                                                                    <button
                                                                                                        style={{
                                                                                                            float: 'left',
                                                                                                            marginLeft:10,
                                                                                                            marginTop: -20
                                                                                                        }}
                                                                                                        className="btn btn-success Sign-in-button"
                                                                                                        type="button"
                                                                                                        onClick={() => {
                                                                                                            this.modifyFlightToList({
                                                                                                                    flightId: this.state.modifiedflightId,
                                                                                                                    flightClass: this.state.modifiedflightClass,
                                                                                                                    flightAgency: this.state.modifiedflightAgency,
                                                                                                                    flightRating: this.state.modifiedflightRating,
                                                                                                                    flightAvailableSeats: this.state.modifiedflightAvailableSeats,
                                                                                                                    flightFareDetails: this.state.modifiedflightFareDetails,
                                                                                                                    flightTripType:this.state.modifiedflightTripType,
                                                                                                                    flightFromCity:this.state.modifiedflightFromCity,
                                                                                                                    flightToCity:this.state.modifiedflightToCity,
                                                                                                                    flightDepartureTime:this.state.modifiedflightDepartureTime,
                                                                                                                    flightArrivalTime:this.state.modifiedflightArrivalTime,
                                                                                                                    flightFromDate:this.state.modifiedflightFromDate,
                                                                                                                    flightToDate:this.state.modifiedflightToDate,
                                                                                                                    flightCapacity:this.state.modifiedflightCapacity,
                                                                                                                    flightDuration:this.state.modifiedflightDuration,
                                                                                                                    flightStops:this.state.modifiedflightStops
                                                                                                                }
                                                                                                            );
                                                                                                            this.setState({
                                                                                                                chooseFlightFlag: false
                                                                                                            });
                                                                                                        }}
                                                                                                    >
                                                                                                        Save
                                                                                                    </button>

                                                                                                    <button
                                                                                                        style={{
                                                                                                            float: 'left',
                                                                                                            marginTop: -20,
                                                                                                            marginLeft:20
                                                                                                        }}
                                                                                                        className="btn btn-danger Sign-in-button"
                                                                                                        type="button"
                                                                                                        onClick={() => {
                                                                                                            this.deleteFlightFromList({
                                                                                                                    flightId: this.state.modifiedflightId
                                                                                                                }
                                                                                                            );
                                                                                                            this.setState({
                                                                                                                chooseFlightFlag: false
                                                                                                            });
                                                                                                        }}
                                                                                                    >
                                                                                                        Delete
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                    : null

                                                                            }
                                                                        </div>
                                                                }
                                                            </div>
                                                    }

                                                </div>

                                                : null
                                        }
                                    </div>

                                    {/********************** Form for adding Hotel is displayed after clicking Hotel in above Dropdown List******/}
                                    <div className="xyz">
                                        {
                                            this.state.chooseHotelFlag
                                                ?
                                                <div>

                                                    <span
                                                        className={'labelAddModify'}><b>Choose to Add or Modify Hotel Listing:</b></span>
                                                    <button className={'btn btn-primary'}
                                                            onClick={() => {
                                                                this.setState({
                                                                    createHotelFlag: !this.state.createHotelFlag,
                                                                    messageFlag: false
                                                                });
                                                            }}>Create
                                                    </button>

                                                    <button className={'btn btn-primary editListButton'}
                                                            onClick={() => {
                                                                this.getAdminHotelArray({dummy:'dummy'});
                                                                this.setState({
                                                                    editHotelFlag: !this.state.editHotelFlag, messageFlag: false,
                                                                    createHotelFlag: false

                                                                });
                                                            }}>Modify
                                                    </button>

                                                    {
                                                        this.state.createHotelFlag
                                                            ?
                                                            <form>
                                                                <div className="form-group">
                                                                    <div className="login-register-header"><h2
                                                                        style={{textAlign: 'center'}}>Create Hotel Listing</h2>
                                                                    </div>
                                                                </div>

                                                                <br/>
                                                                <div className="form-group">
                                                                    <hr/>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel ID"
                                                                        value={this.state.hotelId}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelId: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Hotel Name "
                                                                        value={this.state.hotelName}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelName: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Hotel Agency "
                                                                        value={this.state.hotelAgency}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelAgency: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Hotel Agency Address "
                                                                        value={this.state.hotelAgencyAddress}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelAgencyAddress: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel Contact "
                                                                        value={this.state.hotelAgencyContact}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelAgencyContact: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Hotel From Date "
                                                                        value={this.state.hotelFromDate}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelFromDate: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Hotel To Date "
                                                                        value={this.state.hotelToDate}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelToDate: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel Number of Rooms"
                                                                        value={this.state.hotelNumberOfRooms}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelNumberOfRooms: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel Number of Guests"
                                                                        value={this.state.hotelNumberOfGuests}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelNumberOfGuests: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Hotel City"
                                                                        value={this.state.hotelCity}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelCity: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Hotel Area"
                                                                        value={this.state.hotelArea}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelArea: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>


                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel Number of Reviews"
                                                                        value={this.state.hotelNumberOfReviews}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelNumberOfReviews: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Hotel Review Type"
                                                                        value={this.state.hotelReviewType}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelReviewType: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel Rating"
                                                                        value={this.state.hotelRating}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelRating: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel Stars"
                                                                        value={this.state.hotelStars}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelStars: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Hotel Address"
                                                                        value={this.state.hotelAddress}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelAddress: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel Contact"
                                                                        value={this.state.hotelContact}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelContact: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel Capacity"
                                                                        value={this.state.hotelCapacity}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelCapacity: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Hotel Availability"
                                                                        value={this.state.hotelAvailability}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelAvailability: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel Old Price"
                                                                        value={this.state.hotelOldPrice}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelOldPrice: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Hotel Original Price"
                                                                        value={this.state.hotelOriginalPrice}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                hotelOriginalPrice: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <div>
                                                                        <br/>
                                                                        <button
                                                                            style={{float: 'left', marginBottom: 20}}
                                                                            className="btn btn-success Sign-in-button"
                                                                            type="button"
                                                                            onClick={() => {
                                                                                this.handleAddHotelToList({
                                                                                        hotelId: this.state.hotelId,
                                                                                        hotelAgency: this.state.hotelAgency,
                                                                                        hotelAgencyAddress: this.state.hotelAgencyAddress,
                                                                                        hotelFromDate:this.state.hotelFromDate,
                                                                                        hotelToDate:this.state.hotelToDate,
                                                                                        hotelAgencyContact:this.state.hotelAgencyContact,
                                                                                        hotelName: this.state.hotelName,
                                                                                        hotelNumberOfGuests: this.state.hotelNumberOfGuests,
                                                                                        hotelNumberOfRooms: this.state.hotelNumberOfRooms,
                                                                                        hotelCity: this.state.hotelCity,
                                                                                        hotelArea: this.state.hotelArea,
                                                                                        hotelRating: this.state.hotelRating,
                                                                                        hotelStars: this.state.hotelStars,
                                                                                        hotelAddress: this.state.hotelAddress,
                                                                                        hotelContact: this.state.hotelContact,
                                                                                        hotelCapacity: this.state.hotelCapacity,
                                                                                        hotelAvailability: this.state.hotelAvailability,
                                                                                        hotelOldPrice: this.state.hotelOldPrice,
                                                                                        hotelOriginalPrice: this.state.hotelOriginalPrice,
                                                                                        hotelReviewType: this.state.hotelReviewType,
                                                                                        hotelNumberOfReviews: this.state.hotelNumberOfReviews
                                                                                    }
                                                                                );
                                                                                this.setState({
                                                                                    chooseHotelFlag: false,
                                                                                    createHotelFlag: !this.state.createHotelFlag
                                                                                });
                                                                            }}
                                                                        >
                                                                            Add to Hotel List
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            :
                                                            <div>
                                                                {

                                                                    this.state.editHotelFlag
                                                                        ?
                                                                        <div>
                                                                            <br/><br/>
                                                                            <h2 style={{textAlign: 'center',backgroundColor:'silver'}}>Hotel
                                                                                Listing</h2>
                                                                            <br/>
                                                                            <table className="table table-bordered table-striped">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className={'tableHead'}>Hotel Id</th>
                                                                                    <th className={'tableHead'}>Name</th>
                                                                                    <th className={'tableHead'}>Agency</th>
                                                                                    <th className={'tableHead'}>Address</th>
                                                                                    <th className={'tableHead'}>Contact</th>
                                                                                    <th className={'tableHead'}>Capacity</th>
                                                                                    <th className={'tableHead'}>Availability</th>
                                                                                    <th className={'tableHead'}>From Date</th>
                                                                                    <th className={'tableHead'}>To Date</th>
                                                                                    <th className={'tableHead'}>Guests</th>
                                                                                    <th className={'tableHead'}>City</th>
                                                                                    <th className={'tableHead'}>Area</th>
                                                                                    <th className={'tableHead'}>Reviews</th>
                                                                                    <th className={'tableHead'}>Price</th>


                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {
                                                                                    this.state.hotelObj.map(item => (
                                                                                            <tr key={item._id}>
                                                                                                <td className={'tableData tableData1'}><img
                                                                                                    className={'itemImage123 '}
                                                                                                    src={'https://4vector.com/i/free-vector-hotel-motel-sleeping-accomodation-clip-art_110095_Hotel_Motel_Sleeping_Accomodation_clip_art_medium.png'}/> {item.hotelId}
                                                                                                    <button className={'viewDetail'} onClick={() => {
                                                                                                        this.handleAdminHotelFetch(item);
                                                                                                        console.log('item:', item);
                                                                                                        this.setState({
                                                                                                            editHotelFlag:false
                                                                                                        });
                                                                                                    }}>Modify
                                                                                                    </button>
                                                                                                </td>
                                                                                                <td className={'tableData'}>{item.hotelName}</td>
                                                                                                <td className={'tableData'}>{item.hotelAgency}</td>
                                                                                                <td className={'tableData'}>{item.hotelAddress}</td>
                                                                                                <td className={'tableData'}>{item.hotelContact}</td>
                                                                                                <td className={'tableData'}>{item.hotelCapacity}</td>
                                                                                                <td className={'tableData'}>{item.hotelAvailability}</td>
                                                                                                <td className={'tableData'}>{item.hotelFromDate}</td>
                                                                                                <td className={'tableData'}>{item.hotelToDate}</td>
                                                                                                <td className={'tableData'}>{item.hotelNumberOfGuests}</td>
                                                                                                <td className={'tableData'}>{item.hotelCity}</td>
                                                                                                <td className={'tableData'}>{item.hotelArea}</td>
                                                                                                <td className={'tableData'}>{item.hotelNumberOfReviews}</td>
                                                                                                <td className={'tableData'}>{item.hotelOriginalPrice}</td>
                                                                                            </tr>




                                                                                        )
                                                                                    )
                                                                                }
                                                                                </tbody>
                                                                            </table>
                                                                            <br/>



                                                                        </div>
                                                                        :
                                                                        <div>
                                                                            {

                                                                                this.state.editHotelFormFlag
                                                                                    ?
                                                                                    <div>
                                                                                        <form>
                                                                                            <div className="form-group">
                                                                                                <div
                                                                                                    className="login-register-header modifyCar">
                                                                                                    <h2 style={{textAlign: 'center'}}>
                                                                                                        Edit the form to Modify</h2>
                                                                                                </div>
                                                                                            </div>


                                                                                            <br/>
                                                                                            <div className="form-group">
                                                                                                <hr/>
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel ID"
                                                                                                    value={this.state.modifiedHotelId}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelId: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                    readOnly/>
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Hotel Name "
                                                                                                    value={this.state.modifiedHotelName}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelName: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Hotel Agency "
                                                                                                    value={this.state.modifiedHotelAgency}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelAgency: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Hotel Agency Address "
                                                                                                    value={this.state.modifiedHotelAgencyAddress}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelAgencyAddress: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel Contact "
                                                                                                    value={this.state.modifiedHotelAgencyContact}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelAgencyContact: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>


                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Hotel From Date "
                                                                                                    value={this.state.modifiedHotelFromDate}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelFromDate: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Hotel To Date "
                                                                                                    value={this.state.modifiedHotelToDate}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelToDate: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel Number of Rooms"
                                                                                                    value={this.state.modifiedHotelNumberOfRooms}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelNumberOfRooms: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel Number of Guests"
                                                                                                    value={this.state.modifiedHotelNumberOfGuests}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelNumberOfGuests: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Hotel City"
                                                                                                    value={this.state.modifiedHotelCity}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelCity: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Hotel Area"
                                                                                                    value={this.state.modifiedHotelArea}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelArea: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>


                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel Number of Reviews"
                                                                                                    value={this.state.modifiedHotelNumberOfReviews}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelNumberOfReviews: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Hotel Review Type"
                                                                                                    value={this.state.modifiedHotelReviewType}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelReviewType: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel Rating"
                                                                                                    value={this.state.modifiedHotelRating}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelRating: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel Stars"
                                                                                                    value={this.state.modifiedHotelStars}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelStars: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Hotel Address"
                                                                                                    value={this.state.modifiedHotelAddress}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelAddress: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel Contact"
                                                                                                    value={this.state.modifiedHotelContact}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelContact: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel Capacity"
                                                                                                    value={this.state.modifiedHotelCapacity}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelCapacity: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Hotel Availability"
                                                                                                    value={this.state.modifiedHotelAvailability}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelAvailability: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel Old Price"
                                                                                                    value={this.state.modifiedHotelOldPrice}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelOldPrice: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Hotel Original Price"
                                                                                                    value={this.state.modifiedHotelOriginalPrice}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedHotelOriginalPrice: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <div>
                                                                                                    <br/>
                                                                                                    <button
                                                                                                        style={{
                                                                                                            float: 'left',
                                                                                                            marginBottom: 20
                                                                                                        }}
                                                                                                        className="btn btn-success Sign-in-button"
                                                                                                        type="button"
                                                                                                        onClick={() => {
                                                                                                            this.modifyHotelToList({
                                                                                                                    hotelId: this.state.modifiedHotelId,
                                                                                                                    hotelName: this.state.modifiedHotelName,
                                                                                                                    hotelFromDate:this.state.modifiedHotelFromDate,
                                                                                                                    hotelToDate:this.state.modifiedHotelToDate,
                                                                                                                    hotelAgency: this.state.modifiedHotelAgency,
                                                                                                                    hotelAgencyContact: this.state.modifiedHotelAgencyContact,
                                                                                                                    hotelAgencyAddress: this.state.modifiedHotelAgencyAddress,
                                                                                                                    hotelNumberOfGuests: this.state.modifiedHotelNumberOfGuests,
                                                                                                                    hotelNumberOfRooms: this.state.modifiedHotelNumberOfRooms,
                                                                                                                    hotelCity: this.state.modifiedHotelCity,
                                                                                                                    hotelArea: this.state.modifiedHotelArea,
                                                                                                                    hotelRating: this.state.modifiedHotelRating,
                                                                                                                    hotelStars: this.state.modifiedHotelStars,
                                                                                                                    hotelAddress: this.state.modifiedHotelAddress,
                                                                                                                    hotelContact: this.state.modifiedHotelContact,
                                                                                                                    hotelCapacity: this.state.modifiedHotelCapacity,
                                                                                                                    hotelAvailability: this.state.modifiedHotelAvailability,
                                                                                                                    hotelOldPrice: this.state.modifiedHotelOldPrice,
                                                                                                                    hotelOriginalPrice: this.state.modifiedHotelOriginalPrice,
                                                                                                                    hotelReviewType: this.state.modifiedHotelReviewType,
                                                                                                                    hotelNumberOfReviews: this.state.modifiedHotelNumberOfReviews
                                                                                                                }
                                                                                                            );
                                                                                                            this.setState({
                                                                                                                chooseHotelFlag: false
                                                                                                            });
                                                                                                        }}
                                                                                                    >
                                                                                                        Save
                                                                                                    </button>

                                                                                                    <button
                                                                                                        style={{
                                                                                                            float: 'left',
                                                                                                            marginBottom: 20,
                                                                                                            marginLeft:10
                                                                                                        }}
                                                                                                        className="btn btn-danger Sign-in-button"
                                                                                                        type="button"
                                                                                                        onClick={() => {
                                                                                                            this.deleteHotelFromList({
                                                                                                                    hotelId: this.state.modifiedHotelId
                                                                                                                }
                                                                                                            );
                                                                                                            this.setState({
                                                                                                                chooseHotelFlag: false
                                                                                                            });
                                                                                                        }}
                                                                                                    >
                                                                                                        Delete
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                    : null

                                                                            }
                                                                        </div>
                                                                }
                                                            </div>
                                                    }

                                                </div>

                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div className={'userbill'}>

                    {
                        this.state.showUserBillFlag
                            ?
                            <AdminUserBills/>
                            :
                            null
                    }
                </div>

                <div className={'userbill'}>

                    {
                        this.state.showUserInfoFlag
                            ?
                            <UserInfo/>
                            :
                            null
                    }
                </div>
            </div>
        </div>










        );
    }


}


export default AdminDashboard;
