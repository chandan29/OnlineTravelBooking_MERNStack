import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

import Image0 from './../5.jpeg';
import Image1 from './../6.jpeg';
import Image2 from './../7.jpeg';
import Image8 from './../8.jpeg';
import Image9 from './../9.jpeg';
import Image10 from './../10.jpeg';
import Image11 from './../11.jpeg';
var FontAwesome = require('react-fontawesome');

class Carousal1 extends Component {

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
      imagearray: [Image11,Image8,Image2,Image9,Image10,Image11]
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(20),
      })
    }, 100);
  }

  createChildren = (n) => range(n).map(i =>
      <div key={i} style={{ height: 340, width:295,marginLeft:16,marginRight:9}}>
            <div className="pic">
                <img src={this.state.imagearray[i]}/>
            </div>
            <div className="description">
                <h4>Madrid, Spain</h4>
                <h6>SFO San Francisco to MAD Madrid</h6>
                <h6>Jan 16 - Jan 25.9 days</h6>
                <div className="moredesc" style={{display:"inline",float:"left"}}>
                  <span style={{display:"inline",float:"left",marginLeft: 25,paddingTop:15}}><FontAwesome name='plane' size='2x'/></span>
                  <div className="price" style={{display:"inline",float:"left",marginLeft:20}}>
                    <h6>1 Stop</h6>
                    <h4>$306</h4>
                  </div>
                  <div className="butt" style={{display:"inline",float:"left",marginLeft:55,marginTop:15}}>
                    <button className="btn btn primary">Find Flights</button>
                  </div>
                </div>
            </div>
        </div>);
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });


  render() {
const {
  activeItemIndex,
  children,
} = this.state;

return (
  <div onClick={this.props.body1} className="container" style={{width: "85%"}}>
  <br/>
  <br />
  <div className="text1" style={{marginLeft: "4%"}}>
    Popular from San Diego
  </div>
  <br/>
  <br />
  <ItemsCarousel
    // Placeholder configurations
    enablePlaceholder
    numberOfPlaceholderItems={5}
    minimumPlaceholderTime={1000}
    placeholderItem={<div style={{float: "left",height: 200, background: '#900' }}>Placeholder</div>}

    // Carousel configurations
    numberOfCards={3}
    gutter={12}
    showSlither={true}
    firstAndLastGutter={true}
    freeScrolling={false}

    // Active item configurations
    requestToChangeActive={this.changeActiveItem.bind(this)}
    activeItemIndex={activeItemIndex}
    activePosition={'center'}

    chevronWidth={24}
    rightChevron={'>'}

    leftChevron={'<'}
    outsideChevron={false}
   style={{width:"100%"}}>

    {children}

  </ItemsCarousel>
  </div>
);
}
};

export default Carousal1;
