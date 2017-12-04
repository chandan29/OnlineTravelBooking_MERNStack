import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import stayuptodate from './../stayuptodate.png';


class StayUptoDate extends Component {

  state={

  }

  render() {
    return (
      <div onClick={this.props.body1} className="container-stayUptoDate" style={{paddingLeft:"2%", border: "0.7px solid", borderColor: "#f1f1f1"}}>
            <div style={{float:"left"}}>
              <img src={stayuptodate} />
            </div>
            <div style={{float:"left", paddingTop:18,paddingLeft:15,marginTop:15,width:280,marginLeft:40}}>
                <h3 style={{marginTop: 10,color: "#558FE6"}}> Stay up-to-date</h3>
                <span style={{fontSize: 15, color: "#A8A8A8",fontWeight: 500}}> Subscribe now and receive the latest travel news.</span>
            </div>
            <div style={{marginTop: 48}}>
                <span style={{fontSize:14,fontWeight:"bold"}}><input type="text" placeholder="Your email address" style={{fontSize: 14,fontWeight: 500,border: "default",paddingLeft:30,height: 40,marginLeft:80,width:"22%",float:"left",display: "inline",paddingTop:"5%", border:"0.5px solid", borderColor: "#f1f1f1", padding:28}}/></span>
            </div>
            <div >
                <button className="btn" style={{backgroundColor: "#558FE6",width:"12%",color: "white", height:55,marginLeft:25, borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0}}>SIGN UP</button>
            </div>
      </div>
);
  }
}

export default StayUptoDate;
