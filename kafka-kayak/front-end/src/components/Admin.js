import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';

class Admin extends Component{

    static propTypes = {
        handleSubmitAdmin: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

    }




    render(){


        return(


            <div className="col-md-4">

                <form>
                    <div className="form-group">
                        <div className="login-register-header"><h2>Sign in for Admin</h2></div>
                    </div>
                    <div className="login-register-switch">
                        <label className="login-register-switch-link"
                               onClick={()=>{
                                   this.setState({
                                       signIn: false
                                   });
                               }
                               }
                        >
                        </label>


                    </div>

                    <br/>
                    <div className="form-group">

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
                        <div className="row">
                            <div className="col-md-6">
                                <br/>
                                <input className="checkbox_label" type="checkbox" id="cb" name="remember me"/>

                                <label className="checkbox_label">Remember me</label>
                            </div>
                            <div className="col-md-6">
                                <br/>
                                <button
                                    className="btn btn-primary Sign-in-button"
                                    type="button"
                                    onClick={this.props.handleSubmitAdmin.bind(this,(this.state))}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>




        );
    }



}

export default Admin;
