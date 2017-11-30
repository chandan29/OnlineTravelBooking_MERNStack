import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';
import Message from "./Message";
var FontAwesome = require('react-fontawesome');

class AdminDashboard extends Component {



    handleAddCarToList = (userdata) => {
        API.addCarToList(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        message: "Car added Successfully..!!",
                    });
                } else if (status === 401) {
                    this.setState({
                        message: "Car can not be added."
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
                        message: "Car can not be added."
                    });
                }
            });
    };



    constructor(props) {
        super(props);
        this.state = {

            username: '',
            message:'',

            createHotelFlag: false,
            createFlightFlag: false,
            createCarFlag: false,

            carId: null,
            carType: '',
            carCity: '',
            carAgency: '',
            carSpecs: '',
            carAvailability: true,
            carRating: null,
            carRate: null,

            flightId: null,
            flightClass: '',
            fromCity: '',
            toCity: '',
            startTime: null,
            endTime: null,
            flightAgency: '',
            flightRating: null,
            availableSeats: null,
            fareDetails: ''

        };
    }

    render() {

        return (

            <div className="container">
                <Message message={this.state.message}/>
                <div className={'bgpage '}>
                    <h1>Admin Dashboard</h1>
                    <div className="panel-group">
                        <div className="panel panel-success">
                            <div className="panel-heading createList">
                                <h4 className="panel-title">
                                    <a className="createListTitle" data-toggle="collapse" href="#collapse1">Choose Type
                                        To Add To Listing</a>
                                </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse">
                                <ul className="list-group">
                                    <a onClick={() => {
                                        this.setState({createCarFlag: !this.state.createCarFlag});
                                    }} className="list-group-item">Cars
                                    </a>
                                    <a onClick={() => {
                                        this.setState({createFlightFlag: !this.state.createFlightFlag});
                                    }} className="list-group-item">Flights
                                    </a><a onClick={() => {
                                    this.setState({createHotelFlag: !this.state.createHotelFlag});
                                }} className="list-group-item">Hotels
                                </a>
                                </ul>

                            </div>
                        </div>
                    </div>

{/*************************** Form for adding Car is displayed after clicking Car in above Dropdown List**********/}
                    <div className="xyz">
                        {
                            this.state.createCarFlag
                                ? <form>
                                    <div className="form-group">
                                        <div className="login-register-header">Create Car Listing</div>
                                    </div>


                                    <br/>
                                    <div className="form-group">
                                        <hr/>

                                        <input
                                            className="form-control"
                                            type="number"
                                            label="carID"
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
                                            placeholder="Car Type"
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
                                                style={{float:'left',marginBottom:20}}
                                                className="btn btn-success Sign-in-button"
                                                type="button"
                                                onClick={()=>{this.handleAddCarToList({carID:this.state.carID,
                                                    carType:this.state.carType,carCity:this.state.carCity,
                                                    carAgency:this.state.carAgency,carSpecs:this.state.carSpecs,
                                                    carAvailability:this.state.carAvailability,carRating:this.state.carRating,
                                                    carRate:this.state.carRate}
                                                );}}
                                            >
                                                Add to Car List
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                : null
                        }
                    </div>

{/******************************* Form for adding Flight is displayed after clicking Flight in above Dropdown List****/}
                    <div className="xyz">
                        {
                            this.state.createFlightFlag
                                ? <form>
                                    <div className="form-group">
                                        <div className="login-register-header"><h3>Create Flight Listing</h3></div>
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
                                                style={{float:'left',marginBottom:20}}
                                                className="btn btn-success Sign-in-button"
                                                type="button"
                                                onClick={()=>{this.handleAddFlightToList({flightId:this.state.flightId,
                                                    flightClass:this.state.flightClass,fromCity:this.state.fromCity,
                                                    toCity:this.state.toCity,startTime:this.state.startTime,
                                                    endTime:this.state.endTime,flightAgency:this.state.flightAgency,
                                                    flightRating:this.state.flightRating,availableSeats:this.state.availableSeats,
                                                    fareDetails:this.state.fareDetails}
                                                );}}
                                            >
                                                Add to Flight List
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                : null
                        }
                    </div>

{/******************************** Form for adding Hotel is displayed after clicking Hotel in above Dropdown List******/}
                    <div className="xyz">
                        {
                            this.state.createHotelFlag
                                ? <form>
                                    <div className="form-group">
                                        <div className="login-register-header">Create Hotel Listing</div>
                                    </div>


                                    <br/>
                                    <div className="form-group">
                                        <hr/>
                                        <input
                                            className="form-control"
                                            type="text"
                                            label="Username"
                                            placeholder="Email"
                                            value={this.state.username}
                                            onChange={(event) => {
                                                this.setState({
                                                    username: event.target.value
                                                });
                                            }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="password"
                                            label="password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={(event) => {
                                                this.setState({
                                                    password: event.target.value
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">

                                        <div>
                                            <br/>
                                            <button
                                                style={{float:'left',marginBottom:20}}
                                                className="btn btn-success Sign-in-button"
                                                type="button"
                                            >
                                                Add to Hotel List
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                : null
                        }
                    </div>
                </div>
            </div>





        );
    }


}

export default AdminDashboard;
