import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import Car1 from './../car1.png';
var FontAwesome = require('react-fontawesome');


class CarTile extends Component {
  componentWillMount(){
    console.log(this.props.cars);
  }

  state={

  }

  render() {
    return (
      <div className="outerDiv">
        <div className="outerDiv-left">
            <div className="outerDiv-left-top">
                <h4 style={{marginLeft: "2%"}}>Economy</h4>
                <h6 style={{marginLeft: "2%"}}>Chevrolet Spark</h6>
                <div className="outerDiv-left-top-icons" style={{paddingTop: "1%"}}>
                    <span style={{display: "inline", float:"left",marginLeft:"2%"}}>abc<p style={{float:"left",marginRight:5}}><FontAwesome name='user' size='2x'/></p></span>
                    <span style={{display:"inline", float:"left",marginLeft:"12%"}}>def<p style={{float:"left",marginRight:5}}><FontAwesome name='suitcase' size='2x'/></p></span>
                    <span style={{display:"inline",float:"left",marginLeft:"12%"}}>ghi<p style={{float:"left",marginRight:5}}><FontAwesome name='folder' size='2x'/></p></span>
                </div>
            </div>
            <div className="outerDiv-left-bottom">
                <span style={{display: "inline", float:"left",marginLeft:"2%",marginTop:15}}><FontAwesome name='plane' size='2x'/></span>
                <span style={{display: "inline", float:"left",marginLeft:"2%"}}><p style={{lineHeight:"70%",marginTop:10}}>Airport Terminal</p><p style={{lineheight:"70%"}}>SFO</p></span>
            </div>
        </div>
        <div className="outerDiv-mid" style={{textAlign: "center"}}>
        <button style={{marginTop:"5%",width: "45%",backgroundColor: "#1E90FF",height: "15%", borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0,float:"right",marginRight:"2%"}}>Great Deal</button>
        <br/>
        <img style={{marginLeft:"10%"}} src={Car1}/>
        </div>
        <div className="outerDiv-right">
            <h4>$72</h4>
            <h5>Total</h5>
            <button style={{width: "80%",backgroundColor: "orange",height: "20%", borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0}}>View Deal</button>
        </div>
        {this.props.cars.map(car => (

                  <div  style={{backgroundColor: "white", width:90}} className="DisplayCarDetails" key={car._id} cols={car.cols || 1}>
                       car ID: {car.carId}

                        <br/>
                  </div>
              ))}
      </div>
);
  }
}

export default CarTile;
