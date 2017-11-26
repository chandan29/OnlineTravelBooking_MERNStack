import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import stayuptodate from './../stayuptodate.png';


class StayUptoDate extends Component {

  state={

  }

  render() {
    return (
      <div className="container-stayUptoDate" style={{paddingLeft:"2%"}}>
            <div style={{float:"left"}}>
              <img src={stayuptodate} />
            </div>
            <div style={{float:"left", paddingTop:18,paddingLeft:15,marginTop:15,width:300,marginLeft:60}}>
                <h4 style={{marginTop: 10}}> Stay up-to-date</h4>
                <span> Subscribe now and receive the latest travel news.</span>
            </div>
            <div style={{marginTop: 48}}>
                <span style={{fontSize:14,fontWeight:"bold"}}><input type="text" placeholder="Your email address" style={{border: "default",paddingLeft:30,height: 40,marginLeft:80,width:"22%",float:"left",display: "inline",paddingTop:"5%", border:"none",padding:28}}/></span>
            </div>
            <div >
                <button className="btn btn-primary" style={{backgroundColor: "#8064A2 !important",width:"12%", height:55,marginLeft:25, borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0}}>SIGN UP</button>
            </div>
      </div>
);
  }
}

export default StayUptoDate;
