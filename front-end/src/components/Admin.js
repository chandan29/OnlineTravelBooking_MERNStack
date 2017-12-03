import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Header from './Header';
import Message from './Message';
import * as API from '../api/API';

class Admin extends Component {

    static propTypes = {
        reDirectToAdminDashboard: PropTypes.func.isRequired
    };


    handleAdminSignIn = (payload) => {
        API.doAdminLogin(payload)
            .then((res) => {
                if (res.status === 201) {
                    this.setState({
                        message: "Welcome to Admin..!!",
                    });
                    this.props.reDirectToAdminDashboard();
                } else if (res.status === 401) {
                    this.setState({
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });


    };


    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            message:''
        };

    }


    render() {


        return (
            <div style={{backgroundColor: "white"}}>
                <Header/>
                <Message message={this.state.message}/>
                <div className="container" style={{marginTop: "3%"}}>
                    <div style={{marginLeft: "30%"}}>
                        <h2 style={{color: "orange"}}>Sign In For Admin</h2>
                    </div>
                    <p></p>
                    <div style={{marginLeft: "30%"}}>
                        <div className="ui large form">
                            <div className="ten wide field">
                                <label>Admin ID</label>
                                <input placeholder="Admin ID" type="text" value={this.state.username}
                                       onChange={(event) => {
                                           this.setState({
                                               username: event.target.value
                                           });
                                       }}/>
                            </div>
                        </div>
                        <br/>
                        <div className="ui large form">
                            <div className="ten wide field">
                                <label>Password</label>
                                <input placeholder="Password" type="password" value={this.state.password}
                                       onChange={(event) => {
                                           this.setState({
                                               password: event.target.value
                                           });
                                       }}/>
                            </div>
                        </div>
                        <br/>

                        <div style={{marginTop: "2%", float: "left"}}>
                            <button className="ui orange button" onClick={() => {
                                this.handleAdminSignIn({
                                    username: this.state.username,
                                    password: this.state.password
                                })
                            }}>Sign In
                            </button>
                        </div>

                        <div style={{marginTop: "4%", float: "left", marginLeft: "29%"}}>
                            <a><span style={{color: "orange", cursor: "pointer"}}>&nbsp;&nbsp;Reset Admin Password</span></a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }


}

export default Admin;
