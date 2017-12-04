
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
              x1:true,
              bool:true
            })
              console.log(res);
          });
    }
    static propTypes = {
        reDirectToAdminDashboard: PropTypes.func.isRequired
    };

    state={
        x1:false
    }

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
                <br/>
                  <div style={{marginLeft: "30%"}}>
                <ProfileIcon />
                </div>
                <br/>
                {this.state.bool
                  ?
                  <div style={{width: "40%",marginLeft: "30%"}}>

                  <label>ID:</label><br/><input type="text" value={this.state.userId} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }} /><br/><br/>
                <label>First Name:</label><br/><input type="text" value={this.state.firstName} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  onChange={(event) => {
              this.setState({
                  firstName: event.target.value
              });
            }}/><br/><br/>
              <label>Last Name</label><br/><input type="text" value={this.state.lastName} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  onChange={(event) => {
            this.setState({
                lastName: event.target.value
            });
            }}/><br/><br/>
            <label>Email Id:</label><br/><input type="email"  style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  value={this.state.email} /><br/><br/>
            <label>Credit Card:</label><br/><input type="password" value= {this.state.creditCard} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  onChange={(event) => {
            this.setState({
            creditCard: event.target.value
            });
            }}/><br/><br/>
            <label>Gender</label><br/><input type="text" value={this.state.gender} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  onChange={(event) => {
            this.setState({
            gender: event.target.value
            });
            }}/><br/><br/>
            <label>Contact</label><br/><input type="text" value={this.state.contact} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  onChange={(event) => {

            this.setState({
            contact: event.target.value
            });
            }}/><br/><br/>
            <label>Middle Name</label><br/><input type="text" value={this.state.middleName} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  onChange={(event) => {
            this.setState({
            middleName: event.target.value
            });
            }}/><br/><br/>
            <label>DOB</label><br/><input type="text" value={this.state.dateOfBirth} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  onChange={(event) => {
            this.setState({
            dateOfBirth: event.target.value
            });
            }}/><br/><br/>
            <label>Country</label><br/><input type="text" value={this.state.userCountry} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  onChange={(event) => {
            this.setState({
            userCountry: event.target.value
            });
            }}/><br/><br/>
              <label>City</label><br/><input type="text" value={this.state.userCity} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  onChange={(event) => {
            this.setState({
                userCity: event.target.value
            });
            }}/><br/><br/>
            <label>Address</label><br/><input type="text" value={this.state.userAddress} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }}  onChange={(event) => {
            this.setState({
              userAddress: event.target.value
            });
            }}/><br/><br/>
            <label>Zipcode</label><br/><input type="text" value={this.state.userZip} style={{width: "100%",height:40, border: "1px solid",borderColor: "gray",paddingLeft: 15,borderRadius: 3 }} onChange={(event) => {
            this.setState({
            userZip: event.target.value
            });
            }}/><br/><br/>
            <button style={{width: 150, height: 40,backgroundColor: "#ff690f"}} onClick={()=>{this.props.handleProfileUpload({userId:this.state.userId,firstName:this.state.firstName,lastName:this.state.lastName,creditCard:this.state.creditCard,gender:this.state.gender,contact:this.state.contact,middleName:this.state.middleName,dateOfBirth:this.state.dateOfBirth,userCountry:this.state.userCountry,userCity:this.state.userCity,userAddress:this.state.userAddress,userZip:this.state.userZip})}}>Update Profile</button>


                  </div>



            :<div>Please wait</div>

                }
                <br/>
                <div>

                {this.state.x1
                ?
                <div>
                <button style={{width: 150, height: 40,backgroundColor: "#ff690f",marginLeft: "30%"}} onClick={()=>{this.props.handleDeleteAccount({userId:this.state.userId})}}>Delete Account</button>
                </div>
                :<div></div>

            }
            </div>
            </div>
        );
    }


}

export default UserProfile;
