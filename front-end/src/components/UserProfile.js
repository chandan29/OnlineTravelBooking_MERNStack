import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Header from './Header';
import * as API from '../api/API';
import ProfileIcon from "./ProfileIcon";

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
              email:x.emailId,
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
                  <div>
                <ProfileIcon />
                </div>
                {this.state.bool
                  ?
                  <div>

                  ID:<input type="text" value={this.state.userId} /><br/>
                First name<input type="text" value={this.state.firstName} onChange={(event) => {
              this.setState({
                  firstName: event.target.value
              });
            }}/><br/>
              Last name<input type="text" value={this.state.lastName} onChange={(event) => {
            this.setState({
                lastName: event.target.value
            });
          }}/><br/>
            Emailid<input type="email" value={this.state.email} /><br/>
          Credit card<input type="password" value= {this.state.creditCard} onChange={(event) => {
        this.setState({
            creditCard: event.target.value
        });
      }}/><br/>
        Gender<input type="text" value={this.state.gender} onChange={(event) => {
      this.setState({
          gender: event.target.value
      });
    }}/><br/>
      Contact<input type="text" value={this.state.contact} onChange={(event) => {

    this.setState({
        contact: event.target.value
    });
  }}/><br/>
    Middle name<input type="text" value={this.state.middleName} onChange={(event) => {
  this.setState({
      middleName: event.target.value
  });
}}/><br/>
  DOB<input type="text" value={this.state.dateOfBirth} onChange={(event) => {
this.setState({
    dateOfBirth: event.target.value
});
}}/><br/>
Country<input type="text" value={this.state.userCountry} onChange={(event) => {
this.setState({
  userCountry: event.target.value
});
}}/><br/>
              City<input type="text" value={this.state.userCity} onChange={(event) => {
            this.setState({
                userCity: event.target.value
            });
          }}/><br/>
            Address<input type="text" value={this.state.userAddress} onChange={(event) => {
          this.setState({
              userAddress: event.target.value
          });
        }}/><br/>
          Zip<input type="text" value={this.state.userZip} onChange={(event) => {
        this.setState({
            userZip: event.target.value
        });
      }}/><br/>
    <button onClick={()=>{this.props.handleProfileUpload({userId:this.state.userId,firstName:this.state.firstName,lastName:this.state.lastName,creditCard:this.state.creditCard,gender:this.state.gender,contact:this.state.contact,middleName:this.state.middleName,dateOfBirth:this.state.dateOfBirth,userCountry:this.state.userCountry,userCity:this.state.userCity,userAddress:this.state.userAddress,userZip:this.state.userZip})}}>Upload Profile</button>


                  </div>



            :<div>Please wait</div>

                }

                DANGER ZONE:
                Delete Account
                <button onClick={()=>{this.props.handleDeleteAccount({userId:this.state.userId})}}>Delete Account</button>

            </div>
        );
    }


}

export default UserProfile;
