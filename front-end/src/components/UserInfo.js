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
                        firstName: res.user.firstName,
                        middleName: res.user.middleName,
                        lastName: res.user.lastName,
                        emailId: res.user.emailId,
                        creditCard: res.user.creditCard,
                        contact: res.user.contact,
                        gender: res.user.gender,
                        dateOfBirth: res.user.dateOfBirth,
                        userAddress: res.user.userAddress,
                        userCity: res.user.userCity,
                        userState: res.user.userState,
                        userCountry: res.user.userCountry,
                        userZip: res.user.userZip,
                        userPhone: res.user.userPhone,
                        userAgeCategory: res.user.userAgeCategory,
                        messageFlag: true,
                        message: 'User fetched successfully',
                        editUserFormFlag: !this.state.editUserFormFlag
                    });
                    console.log('admin user object fetched:', res.user);
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
                        message: "User can not be updated.",
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
                    console.log('res for userinfo', res.user);
                    this.setState({
                        usersObj: res.user,
                        messageFlag: false
                    });


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
            firstName: '',
            middleName: '',
            lastName: '',
            emailId: null,
            creditCard: 0,
            contact: 0,
            gender: '',
            dateOfBirth: '',
            userAddress: '',
            userCity: '',
            userState: '',
            userCountry: '',
            userZip: 0,
            userPhone: 0,
            userAgeCategory: '',
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
                                    <th className={'tableHead'}>Name</th>
                                    <th className={'tableHead'}>Email</th>
                                    <th className={'tableHead'}>Credit Card</th>
                                    <th className={'tableHead'}>Gender</th>
                                    <th className={'tableHead'}>Contact</th>
                                    <th className={'tableHead'}>Date of Birth</th>
                                    <th className={'tableHead'}>Address</th>

                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.usersObj.map(item => (
                                            <tr key={item.userId}>
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
                                                <td className={'tableData'}>{item.firstName+' '+item.lastName}</td>
                                                <td className={'tableData'}>{item.emailId}</td>
                                                <td className={'tableData'}>{item.creditCard}</td>
                                                <td className={'tableData tableData1'}>
                                                    <a href={'#'}
                                                    >{item.gender}</a>
                                                </td>
                                                <td className={'tableData'}>{item.contact}</td>
                                                <td className={'tableData'}>{item.dateOfBirth}</td>
                                                <td className={'tableData'}>{item.userAddress+', '+ item.userCity+', '+item.userState+', '+item.userCountry}</td>
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
                                                    readOnly/>
                                            </div>

                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={this.state.firstName}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            firstName: event.target.value
                                                        });
                                                    }}
                                                    required/>
                                            </div>

                                            <div className="form-group">
                                                <label>Middle Name</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    label="city"
                                                    placeholder="Middle Name"
                                                    value={this.state.middleName}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            middleName: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    label="city"
                                                    placeholder="Last Name"
                                                    value={this.state.lastName}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            lastName: event.target.value
                                                        });
                                                    }}
                                                    required/>
                                            </div>

                                            <div className="form-group">
                                                <label>Email Id</label>
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    label="city"
                                                    placeholder="Email Id"
                                                    value={this.state.emailId}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            emailId: event.target.value
                                                        });
                                                    }}
                                                    readOnly/>
                                            </div>

                                            <div className="form-group">
                                                <label>Credit Card</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    label="city"
                                                    placeholder="Credit Card"
                                                    value={this.state.creditCard}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            creditCard: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Contact</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    label="city"
                                                    placeholder="Contact"
                                                    value={this.state.contact}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            contact: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Gender</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    label="city"
                                                    placeholder="Gender"
                                                    value={this.state.gender}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            gender: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Date of Birth</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    label="Zipcode"
                                                    placeholder="Date of Birth"
                                                    value={this.state.dateOfBirth}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            dateOfBirth: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Address</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    label="state"
                                                    placeholder="Address"
                                                    value={this.state.userAddress}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            userAddress: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>City</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    label="state"
                                                    placeholder="City"
                                                    value={this.state.userCity}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            userCity: event.target.value
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
                                                    value={this.state.userState}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            userState: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Country</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    label="state"
                                                    placeholder="Country"
                                                    value={this.state.userCountry}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            userCountry: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Zip</label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    label="state"
                                                    placeholder="Zip"
                                                    value={this.state.userZip}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            userZip: event.target.value
                                                        });
                                                    }}
                                                />
                                            </div>




                                            <div className="form-group">
                                                <label>User Age Catagory</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    label="Phone Number"
                                                    placeholder="User Age Catagory "
                                                    value={this.state.userAgeCategory}
                                                    onChange={(event) => {
                                                        this.setState({
                                                            userAgeCategory: event.target.value
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
                                                                    userId:this.state.userId,
                                                                    firstName: this.state.firstName,
                                                                    middleName: this.state.middleName,
                                                                    lastName: this.state.lastName,
                                                                    emailId: this.state.emailId,
                                                                    creditCard: this.state.creditCard,
                                                                    contact: this.state.contact,
                                                                    gender: this.state.gender,
                                                                    dateOfBirth: this.state.dateOfBirth,
                                                                    userAddress: this.state.userAddress,
                                                                    userCity: this.state.userCity,
                                                                    userState: this.state.userState,
                                                                    userCountry: this.state.userCountry,
                                                                    userZip: this.state.userZip,
                                                                    userPhone: this.state.userPhone,
                                                                    userAgeCategory: this.state.userAgeCategory
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
                                                                    userId:this.state.userId
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
