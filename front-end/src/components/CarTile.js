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
<div>

      {this.props.cars.map(car => (
<div className="outerDiv">
        <div className="outerDiv-left">
            <div className="outerDiv-left-top">
                <h4 style={{marginLeft: "2%"}}>{car.carType}</h4>
                <h6 style={{marginLeft: "2%"}}>Toyota Corolla</h6>
                <div className="outerDiv-left-top-icons" style={{paddingTop: "1%"}}>
                    <span style={{display: "inline", float:"left",marginLeft:"2%"}}>{car.carSpecs}<p style={{float:"left",marginRight:5}}><FontAwesome name='user' size='1x'/></p></span>
                    <span style={{display:"inline", float:"left",marginLeft:"12%"}}>1<p style={{float:"left",marginRight:5}}><FontAwesome name='suitcase' size='1x'/></p></span>
                    <span style={{display:"inline",float:"left",marginLeft:"12%"}}>4<p style={{float:"left",marginRight:5}}><FontAwesome name='folder' size='1x'/></p></span>
                </div>
            </div>
            <div className="outerDiv-left-bottom">
                <span style={{display: "inline", float:"left",marginLeft:"2%",marginTop:15}}><FontAwesome name='plane' size='2x'/></span>
                <span style={{display: "inline", float:"left",marginLeft:"2%"}}><p style={{lineHeight:"70%",marginTop:10}}>Airport Terminal</p><p style={{lineheight:"70%"}}>{car.carCity}</p></span>
            </div>
        </div>
        <div className="outerDiv-mid" style={{textAlign: "center"}}>
        <button style={{marginTop:"5%",width: "45%",backgroundColor: "#1E90FF",height: "15%", borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0,float:"right",marginRight:"2%"}}>Great Deal</button>
        <br/>
        <img style={{marginLeft:"10%"}} src={Car1}/>
        </div>
        <div className="outerDiv-right">
            <h4>${car.carRate}</h4>
            <h5>Total</h5>
            <button onClick={()=>{this.props.handleCartileFetch({cartile: car, fromDate: "11-21-2017", toDate: "11-23-2017"})}} style={{width: "80%",backgroundColor: "#dd471a",height: "20%", borderTop: 0,borderLeft:0,borderRight:0,borderBottom:0,borderRadius:0}}>View Deal</button>
        </div>
    </div>
    ))}

      </div>
);
  }
}

export default CarTile;
