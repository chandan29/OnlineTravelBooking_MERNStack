import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Header from './Header';
import * as API from '../api/API';

class UserProfile extends Component {
    state={
      bool:false
    }
    componentWillMount(){
      API.getUserDetails()
          .then((res) => {
            var x=res.msg;
            this.setState({
              userId:x.userId,
              firstName:x.firstName,
              lastName:x.lastName,
              email:x.email,
              creditCard:x.creditCard,
              gender:x.gender,
              contact:x.contact,
              middleName:x.middleName,
              dateOfBirth:x.dateOfBirth,
              userCountry:x.userCountry,
              userCity:x.userCity,
              userAddress:x.userAddress,
              userZip:x.userZip,
              bool:true
            })
              console.log(res);
          });
    }
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
                {this.state.bool
                  ?
                  <div>

                  ID:<input type="text" value={this.state.userId} onChange={(event) => {
                this.setState({
                    userid: event.target.value
                });
              }}/><br/>
                First name<input type="text" value={this.state.firstName} /><br/>
              Last name<input type="text" value={this.state.lastName} /><br/>
            Emailid<input type="email" value={this.state.emailId} /><br/>
          Credit card<input type="password" value= {this.state.creditCard} /><br/>
        Gender<input type="text" value={this.state.gender} /><br/>
      Contact<input type="text" value={this.state.contact} /><br/>
    Middle name<input type="text" value={this.state.middleName} /><br/>
  DOB<input type="text" value={this.state.dateOfBirth}/><br/>
Country<input type="text" value={this.state.userCountry}/><br/>
              City<input type="text" value={this.state.userCity} /><br/>
            Address<input type="text" value={this.state.userAddress}/><br/>
          Zip<input type="text" value={this.state.userZip} /><br/>




                  </div>



            :<div>Please wait</div>

                }
                <div className={'userProfileMain'}>UserProfile</div>
                <label className="btn btn-primary navuploadButton">
                    Upload Files<input type="file"  onChange={this.handleFileUpload}/>
                </label>
            </div>
        );
    }


}

export default UserProfile;
