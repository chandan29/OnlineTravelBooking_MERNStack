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
        handleLogout: PropTypes.func.isRequired
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
                        modifiedCarId: res.carId,
                        modifiedCarType: res.carType,
                        modifiedCarCity: res.carCity,
                        modifiedCarAgency: res.carAgency,
                        modifiedCarSpecs: res.carSpecs,
                        modifiedCarAvailability: res.carAvailability,
                        modifiedCarRating: res.carRating,
                        modifiedCarRate: res.carRate,
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
                        modifiedFlightId: res.flightId,
                        modifiedFlightClass: res.flightClass,
                        modifiedFromCity: res.fromCity,
                        modifiedToCity: res.toCity,
                        modifiedStartTime: res.startTime,
                        modifiedEndTime: res.endTime,
                        modifiedFlightAgency: res.flightAgency,
                        modifiedFlightRating: res.flightRating,
                        modifiedAvailableSeats: res.availableSeats,
                        modifiedFareDetails: res.fareDetails,
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
            carAgency: '',
            carSpecs: '',
            carAvailability: true,
            carRating: null,
            carRate: null,

            modifiedCarId: null,
            modifiedCarType: '',
            modifiedCarCity: '',
            modifiedCarAgency: '',
            modifiedCarSpecs: '',
            modifiedCarAvailability: true,
            modifiedCarRating: null,
            modifiedCarRate: null,

            flightId: null,
            flightClass: '',
            fromCity: '',
            toCity: '',
            startTime: null,
            endTime: null,
            flightAgency: '',
            flightRating: null,
            availableSeats: null,
            fareDetails: '',

            modifiedFlightId: null,
            modifiedFlightClass: '',
            modifiedFromCity: '',
            modifiedToCity: '',
            modifiedStartTime: null,
            modifiedEndTime: null,
            modifiedFlightAgency: '',
            modifiedFlightRating: null,
            modifiedAvailableSeats: null,
            modifiedFareDetails: '',

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

            <div className="container">


                <nav className="navbar dashboard navbar-inverse">

                    <div className="navbar-header">
                        <a className="" href="#"  ><h2>Admin Dashboard</h2></a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="uiNav"><a href="#" onClick={()=> this.setState({
                            showListingFlag:!this.state.showListingFlag,
                            showUserBillFlag:false,showUserInfoFlag:false,
                            chooseHotelFlag: false,chooseCarFlag:false,chooseFlightFlag:false
                        })}><h3>Listing</h3></a></li>
                        <li><a className="uiNav" href="#" onClick={()=> this.setState({
                            showUserInfoFlag:!this.state.showUserInfoFlag,
                            showListingFlag:false,showUserBillFlag:false
                        })}><h3>UserInfo</h3></a></li>

                        <li><a className="uiNav" href="#" onClick={()=> this.setState({
                            showUserBillFlag:!this.state.showUserBillFlag,
                            showListingFlag:false,showUserInfoFlag:false
                        })}><h3>Userbill</h3></a></li>

                        <li><a onClick={()=> {this.props.handleLogout}}><h3><span className="glyphicon glyphicon-log-out"></span>Logout</h3></a></li>
                    </ul>

                </nav>



                <div>

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
                                                            carAgency: '',
                                                            carSpecs: '',
                                                            carAvailability: true,
                                                            carRating: null,
                                                            carRate: null,

                                                            modifiedCarId: null,
                                                            modifiedCarType: '',
                                                            modifiedCarCity: '',
                                                            modifiedCarAgency: '',
                                                            modifiedCarSpecs: '',
                                                            modifiedCarAvailability: true,
                                                            modifiedCarRating: null,
                                                            modifiedCarRate: null,
                                                            fetchCarId: null
                                                        });
                                                    }} className="list-group-item">Cars
                                                    </a>
                                                    <a onClick={() => {
                                                        this.setState({
                                                            chooseFlightFlag: !this.state.chooseFlightFlag, messageFlag: false,
                                                            chooseCarFlag: false, chooseHotelFlag: false, editFlightFlag: false,
                                                            flightId: null,
                                                            flightClass: '',
                                                            fromCity: '',
                                                            toCity: '',
                                                            startTime: null,
                                                            endTime: null,
                                                            flightAgency: '',
                                                            flightRating: null,
                                                            availableSeats: null,
                                                            fareDetails: '',

                                                            modifiedFlightId: null,
                                                            modifiedFlightType: '',
                                                            modifiedFlightCity: '',
                                                            modifiedFlightAgency: '',
                                                            modifiedFlightSpecs: '',
                                                            modifiedFlightAvailability: true,
                                                            modifiedFlightRating: null,
                                                            modifiedFlightRate: null,
                                                            fetchFlightId: null
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
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        label="carSpecs"
                                                                        placeholder="Car Specs"
                                                                        value={this.state.carSpecs}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carSpecs: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="form-group">
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
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        label="carRate"
                                                                        placeholder="Car Rate"
                                                                        value={this.state.carRate}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                carRate: event.target.value
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
                                                                                        carAgency: this.state.carAgency,
                                                                                        carSpecs: this.state.carSpecs,
                                                                                        carAvailability: this.state.carAvailability,
                                                                                        carRating: this.state.carRating,
                                                                                        carRate: this.state.carRate
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
                                                                                    <th className={'tableHead'}>Car Type</th>
                                                                                    <th className={'tableHead'}>Car City</th>
                                                                                    <th className={'tableHead'}>Car Agency</th>
                                                                                    <th className={'tableHead'}>People</th>
                                                                                    <th className={'tableHead'}>Car Availability</th>
                                                                                    <th className={'tableHead'}>Car Rating</th>
                                                                                    <th className={'tableHead'}>Car Rate</th>
                                                                                    <th className={'tableHead'}>Car Name</th>

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
                                                                                                    }}>Modify Car
                                                                                                    </button>
                                                                                                </td>
                                                                                                <td className={'tableData'}>{item.carType}</td>
                                                                                                <td className={'tableData'}>{item.carCity}</td>
                                                                                                <td className={'tableData'}>{item.carAgency}</td>
                                                                                                <td className={'tableData'}>{item.people}</td>
                                                                                                <td className={'tableData'}>{item.carAvailability}</td>
                                                                                                <td className={'tableData'}>{item.carRating}</td>
                                                                                                <td className={'tableData'}>{item.carRate}</td>
                                                                                                <td className={'tableData'}>{item.carName}</td>
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

                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    label="carID"
                                                                                                    placeholder="Car ID"
                                                                                                    value={this.state.modifiedCarId}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedCarId: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                    readOnly/>
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    type="text"
                                                                                                    className="form-control"
                                                                                                    list="carType"
                                                                                                    placeholder="Car Type"
                                                                                                    value={this.state.modifiedCarType}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedCarType: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carCity"
                                                                                                    placeholder="Car City"
                                                                                                    value={this.state.modifiedCarCity}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedCarCity: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carAgency"
                                                                                                    placeholder="Car Type"
                                                                                                    value={this.state.modifiedCarAgency}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedCarAgency: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    label="carSpecs"
                                                                                                    placeholder="Car Specs"
                                                                                                    value={this.state.modifiedCarSpecs}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedCarSpecs: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    label="carRating"
                                                                                                    placeholder="Car Rating"
                                                                                                    value={this.state.modifiedCarRating}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedCarRating: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    label="carRate"
                                                                                                    placeholder="Car Rate"
                                                                                                    value={this.state.modifiedCarRate}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedCarRate: event.target.value
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
                                                                                                                    carId: this.state.modifiedCarId,
                                                                                                                    carType: this.state.modifiedCarType,
                                                                                                                    carCity: this.state.modifiedCarCity,
                                                                                                                    carAgency: this.state.modifiedCarAgency,
                                                                                                                    carSpecs: this.state.modifiedCarSpecs,
                                                                                                                    carAvailability: this.state.modifiedCarAvailability,
                                                                                                                    carRating: this.state.modifiedCarRating,
                                                                                                                    carRate: this.state.modifiedCarRate
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
                                                                                                                    carId: this.state.modifiedCarId,
                                                                                                                    carType: this.state.modifiedCarType,
                                                                                                                    carCity: this.state.modifiedCarCity,
                                                                                                                    carAgency: this.state.modifiedCarAgency,
                                                                                                                    carSpecs: this.state.modifiedCarSpecs,
                                                                                                                    carAvailability: this.state.modifiedCarAvailability,
                                                                                                                    carRating: this.state.modifiedCarRating,
                                                                                                                    carRate: this.state.modifiedCarRate
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
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
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
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="From City"
                                                                        value={this.state.fromCity}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                fromCity: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="To City"
                                                                        value={this.state.toCity}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                toCity: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Start Time"
                                                                        value={this.state.startTime}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                startTime: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="End Time"
                                                                        value={this.state.endTime}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                endTime: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
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
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        placeholder="Available Seats"
                                                                        value={this.state.availableSeats}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                availableSeats: event.target.value
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="Fare Details"
                                                                        value={this.state.fareDetails}
                                                                        onChange={(event) => {
                                                                            this.setState({
                                                                                fareDetails: event.target.value
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
                                                                                        fromCity: this.state.fromCity,
                                                                                        toCity: this.state.toCity,
                                                                                        startTime: this.state.startTime,
                                                                                        endTime: this.state.endTime,
                                                                                        flightAgency: this.state.flightAgency,
                                                                                        flightRating: this.state.flightRating,
                                                                                        availableSeats: this.state.availableSeats,
                                                                                        fareDetails: this.state.fareDetails
                                                                                    }
                                                                                );
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
                                                                                    <th className={'tableHead'}>Flight Id</th>
                                                                                    <th className={'tableHead'}>Flight Class</th>
                                                                                    <th className={'tableHead'}>From City</th>
                                                                                    <th className={'tableHead'}>To City</th>
                                                                                    <th className={'tableHead'}>Start TIme</th>
                                                                                    <th className={'tableHead'}>End Time</th>
                                                                                    <th className={'tableHead'}>Flight Agency</th>
                                                                                    <th className={'tableHead'}>Flight Rating</th>
                                                                                    <th className={'tableHead'}>Available Seats</th>
                                                                                    <th className={'tableHead'}>Fare Details</th>

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
                                                                                                <td className={'tableData'}>{item.flightClass}</td>
                                                                                                <td className={'tableData'}>{item.fromCity}</td>
                                                                                                <td className={'tableData'}>{item.toCity}</td>
                                                                                                <td className={'tableData'}>{item.startTime}</td>
                                                                                                <td className={'tableData'}>{item.endTime}</td>
                                                                                                <td className={'tableData'}>{item.flightAgency}</td>
                                                                                                <td className={'tableData'}>{item.flightRating}</td>
                                                                                                <td className={'tableData'}>{item.availableSeats}</td>
                                                                                                <td className={'tableData'}>{item.fareDetails}</td>
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
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight ID"
                                                                                                    value={this.state.modifiedFlightId}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedFlightId: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                readOnly/>
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight Class"
                                                                                                    value={this.state.modifiedFlightClass}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedFlightClass: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="From City"
                                                                                                    value={this.state.modifiedFromCity}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedFromCity: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="To City"
                                                                                                    value={this.state.modifiedToCity}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedToCity: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Start Time"
                                                                                                    value={this.state.modifiedStartTime}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedStartTime: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="End Time"
                                                                                                    value={this.state.modifiedEndTime}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedEndTime: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Flight Agency"
                                                                                                    value={this.state.modifiedFlightAgency}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedFlightAgency: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Flight Rating"
                                                                                                    value={this.state.modifiedFlightRating}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedFlightRating: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="number"
                                                                                                    placeholder="Available Seats"
                                                                                                    value={this.state.modifiedAvailableSeats}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedAvailableSeats: event.target.value
                                                                                                        });
                                                                                                    }}
                                                                                                />
                                                                                            </div>

                                                                                            <div className="form-group">
                                                                                                <input
                                                                                                    className="form-control"
                                                                                                    type="text"
                                                                                                    placeholder="Fare Details"
                                                                                                    value={this.state.modifiedFareDetails}
                                                                                                    onChange={(event) => {
                                                                                                        this.setState({
                                                                                                            modifiedFareDetails: event.target.value
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
                                                                                                                    flightId: this.state.modifiedFlightId,
                                                                                                                    flightClass: this.state.modifiedFlightClass,
                                                                                                                    fromCity: this.state.modifiedFromCity,
                                                                                                                    toCity: this.state.modifiedToCity,
                                                                                                                    startTime: this.state.modifiedStartTime,
                                                                                                                    endTime: this.state.modifiedEndTime,
                                                                                                                    flightAgency: this.state.modifiedFlightAgency,
                                                                                                                    flightRating: this.state.modifiedFlightRating,
                                                                                                                    availableSeats: this.state.modifiedAvailableSeats,
                                                                                                                    fareDetails: this.state.modifiedFareDetails
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
                                                                                                                    flightId: this.state.modifiedFlightId
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






        );
    }


}


export default AdminDashboard;




