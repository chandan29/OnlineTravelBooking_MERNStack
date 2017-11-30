import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';
import Message from "./Message";


class UserInfo extends Component {

    static propTypes = {

    };

    getAdminUserDetail = (payload) => {
        API.getAdminUserDetail(payload)
            .then((res) => {

                if (res.wrong === 1) {
                    this.setState({
                        message: 'User Not Found',
                        messageFlag: true
                    })
                }
                else {
                    this.setState({
                        userId: res.user.userId,
                        address: res.user.address,
                        city: res.user.city,
                        zipCode: res.user.zipCode,
                        state: res.user.state,
                        phoneNumber: res.user.phoneNumber,
                        messageFlag: true,
                        message: 'User fetched successfully',
                        editUserFormFlag: !this.state.editUserFormFlag
                    });
                    console.log('admin user object fetched:', res);
                }
            });

    };
    deleteAdminUser = (payload) => {
        API.deleteAdminUser(payload)
            .then((res) => {

                if (res.wrong === 1) {
                    this.setState({
                        message: 'User Not Deleted ',
                        messageFlag: true
                    })
                }
                else {
                    this.setState({
                        messageFlag: true,
                        message: 'User deleted successfully',
                        editUserFormFlag: false
                    });
                    console.log('admin user object deleted:', res);
                }
            });

    };

    modifyAdminUserDetail = (payload) => {
        API.modifyAdminUserDetail(payload)
            .then((res) => {
                if (res.status === 201) {
                    this.setState({
                        messageFlag: true,
                        message: "User updated Successfully..!!"
                        //editUserFormFlag:false
                    });
                } else if (res.status === 401) {
                    this.setState({
                        messageFlag: true,
                        message: "Car can not be updated.",
                        editUserFormFlag:false

                    });
                }
            });

    };
    componentWillMount() {
        this.setState({
            viewUserFlag: true
        });
        API.getAdminUsers({dummy: this.state.message})
            .then((res) => {

                if (res.wrong === 1) {
                    this.setState({
                        message: 'Users Not Found',
                        messageFlag: true
                    });
                }
                else if (res.status === 201) {
                    this.setState({
                        usersObj: res.user,
                        messageFlag: false
                    });

                    console.log('admin users object fetched:', res);
                }
            });

    }

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            usersObj: [],
            userDetailsObj: [],
            viewUserFlag: false,
            userId:null,
            address:'',
            city:'',
            zipCode:null,
            state:'',
            phoneNumber:null,
            editUserFormFlag:false
        };

    }


    render() {


        return (


            <div>
                <Message message={this.state.message}/>

                {
                    this.state.viewUserFlag
                        ?

                        <div>
                            <div className={'row'}>
                                <div className={'col-md-12'}>
                                    <h2 className={'billTitle'}> User Account Information</h2>
                                </div>
                                {/*<div className={'col-md-6'}>

                                    <div className={'row'}>
                                        <div className={'col-md-6'}>
                                            <div className="input-group">
                                                <input type="month" list="months" className="form-control"
                                                       placeholder=""/>

                                                <div className="input-group-btn">
                                                    <button className="btn btn-default" type="submit">
                                                        <i className="glyphicon glyphicon-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <div className="input-group">
                                                <input type="date" className="form-control"
                                                       placeholder="Search By Date"/>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-default" type="submit">
                                                        <i className="glyphicon glyphicon-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>

                            <table className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th className={'tableHead'}>User Id</th>
                                    <th className={'tableHead'}>Address</th>
                                    <th className={'tableHead'}>City</th>
                                    <th className={'tableHead'}>Zip Code</th>
                                    <th className={'tableHead'}>State</th>
                                    <th className={'tableHead'}>Phone Number</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.usersObj.map(item => (
                                            <tr key={item._id}>
                                                <td className={'tableData tableData1'}><img
                                                    className={'itemImage'}
                                                    src={'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png'}/> {item.userId}
                                                    <button className={'viewDetail'} onClick={() => {
                                                        this.getAdminUserDetail(item);
                                                        this.setState({
                                                            viewUserFlag:false
                                                        });
                                                        console.log('item:', item);
                                                    }}>View Details
                                                    </button>
                                                </td>
                                                <td className={'tableData'}>{item.address}</td>
                                                <td className={'tableData'}>{item.city}</td>
                                                <td className={'tableData'}>{item.zipCode}</td>
                                                <td className={'tableData tableData1'}>
                                                    <a href={'#'}
                                                    >{item.state}</a>
                                                </td>
                                                <td className={'tableData'}>{item.phoneNumber}</td>
                                            </tr>
                                        )
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                        :
                        <div>
                            {

                                this.state.editUserFormFlag
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
                                                <label>UserID</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    label="userId"
                                                    placeholder="User ID"
                                                    value={this.state.userId}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            userId: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Address"
                                                    value={this.state.address}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            address: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>City</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    label="city"
                                                    placeholder="City"
                                                    value={this.state.city}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            city: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>ZipCode</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    label="Zipcode"
                                                    placeholder="Zip Code"
                                                    value={this.state.zipCode}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            zipCode: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>State</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    label="state"
                                                    placeholder="State"
                                                    value={this.state.state}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            state: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone Number</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    label="Phone Number"
                                                    placeholder="Car Rating"
                                                    value={this.state.phoneNumber}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            phoneNumber: event.target.value
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
                                                            this.modifyAdminUserDetail({
                                                                    userId: this.state.userId,
                                                                    address: this.state.address,
                                                                    city: this.state.city,
                                                                    zipCode: this.state.zipCode,
                                                                    state: this.state.state,
                                                                    phoneNumber: this.state.phoneNumber
                                                                }
                                                            );
                                                            this.setState({
                                                                editUserFormFlag: false
                                                            });
                                                        }}
                                                    >
                                                        Save
                                                    </button>

                                                    <button
                                                        style={{
                                                            float: 'left',
                                                            marginBottom: 20,
                                                            marginLeft: 10
                                                        }}
                                                        className="btn btn-danger Sign-in-button"
                                                        type="button"
                                                        onClick={() => {
                                                            this.deleteAdminUser({
                                                                    userId: this.state.userId,
                                                                    address: this.state.address,
                                                                    city: this.state.city,
                                                                    zipCode: this.state.zipCode,
                                                                    state: this.state.state,
                                                                    phoneNumber: this.state.phoneNumber
                                                                }
                                                            );
                                                            this.setState({
                                                                editUserFormFlag: false
                                                            });
                                                        }}
                                                    >
                                                        Delete This User
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    :null
                            }
                        </div>
                }
            </div>


        );
    }


}

export default UserInfo;
