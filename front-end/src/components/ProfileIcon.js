import React, {Component} from 'react';
import * as API from '../api/API';
import {profilepicture} from '../api/API';
//API import karo
import {Route, withRouter} from 'react-router-dom';

class ProfileIcon extends Component {
    constructor() {
        super();
    }
    state={
      bool:false
    }
    componentWillMount(){
      API.getUsername()
          .then((res) => {
              this.setState({
                username:res.username,
                bool:true
              })
          });
    }
    changeProfilePicture(event) {
        var formData = new FormData();
        formData.append("profile-picture", event.target.files[0]);
        profilepicture(formData).then(function(){
            this.forceUpdate();
        }.bind(this));
    }


    render() {
        let style = {
          //  height:
           // width: 20px

        };
        return(
          <div>
          {
            this.state.bool
            ?
            <div className="profile-icon-editor" style={style}>

                <img src={"http://localhost:3001/Userfiles/"+this.state.username+"/"+this.state.username+".jpg?_=" + Date.now()}  alt="No profile picture Available" />

                <form>
                    <input className="hidden" type="file" id="profile-icon-editor-input" onChange={this.changeProfilePicture.bind(this)}/>
                    <label htmlFor="profile-icon-editor-input" className="glyphicon glyphicon-pencil"></label>
                </form>
            </div>
            :<div>WAITING</div>
        }
      </div>
        );
    }
}

export default ProfileIcon;
