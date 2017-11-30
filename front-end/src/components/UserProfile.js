import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Header from './Header';
import * as API from '../api/API';

class UserProfile extends Component {

    static propTypes = {
        reDirectToAdminDashboard: PropTypes.func.isRequired
    };


    handleFileUpload = (event) => {
        console.log('handleFileUP function:current user', this.state.username);
        const payload = new FormData();
        payload.append('username', this.state.username);
        payload.append('mypic', event.target.files[0]);
        console.log('payload', payload);

        API.uploadFile(payload)
            .then((status) => {
                if (status === 204) {
                    API.getImages()
                        .then((data) => {
                            this.setState({
                                images: data.resArray
                            });
                           console.log('images fetched',this.state.images);
                        });
                }
            });
    };




    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            images:[]
        };

    }


    render() {


        return (
            <div style={{backgroundColor: "white"}}>
                <Header/>
                <div className={'userProfileMain'}>UserProfile</div>
                <label className="btn btn-primary navuploadButton">
                    Upload Files<input type="file"  onChange={this.handleFileUpload}/>
                </label>
            </div>
        );
    }


}

export default UserProfile;
