import React, {Component} from 'react';
import { Button, Collapse, div } from 'react-bootstrap';
import ReactDOM from 'react-dom';
var FontAwesome = require('react-fontawesome');


class BeautifulDown extends Component {

  state={

  };

  render() {
    return (
      <div onClick={this.props.body1} className="container-beautifuldown">
        <div className="first">
        <div className="first-top">
            <h2 style={{fontWeight:300}}>Start your travel planning here</h2>
            <h4 style={{fontSize: 17,color:"gray"}}>Search Flights, Hotels & Rental Cars</h4>
        </div>
            <div className="first-left">
                <div className="first-left-tabs">
                    <div className="first-left-tabs-text">
                        <h4>New York</h4>
                        <h5>FLIGHTS•HOTELS•CARS</h5>
                    </div>
                    <span className="first-left-tabs-butt" onClick={() => this.setState({ open1: !this.state.open1 })}>
                      <FontAwesome name='chevron-down' size='1x'/>
                    </span>
                    <Collapse in={this.state.open1}>
                      <div>
                        <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </Collapse>
                </div>
                <hr className="her" />
                <div className="first-left-tabs">
                    <div className="first-left-tabs-text">
                        <h4>New York</h4>
                        <h5>FLIGHTS•HOTELS•CARS</h5>
                    </div>
                    <span className="first-left-tabs-butt" onClick={() => this.setState({ open2: !this.state.open2 })}>
                      <FontAwesome name='chevron-down' size='1x'/>
                    </span>
                    <Collapse in={this.state.open2}>
                      <div>
                        <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </Collapse>
                </div>
                <hr className="her" />
                <div className="first-left-tabs">
                    <div className="first-left-tabs-text">
                        <h4>New York</h4>
                        <h5>FLIGHTS•HOTELS•CARS</h5>
                    </div>
                    <span className="first-left-tabs-butt" onClick={() => this.setState({ open3: !this.state.open3 })}>
                      <FontAwesome name='chevron-down' size='1x'/>
                    </span>
                    <Collapse in={this.state.open3}>
                      <div>
                        <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </Collapse>
                </div>
                <hr />
                <div className="first-left-tabs">
                    <div className="first-left-tabs-text">
                        <h4>New York</h4>
                        <h5>FLIGHTS•HOTELS•CARS</h5>
                    </div>
                    <span className="first-left-tabs-butt" onClick={() => this.setState({ open4: !this.state.open4 })}>
                      <FontAwesome name='chevron-down' size='1x'/>
                    </span>
                    <Collapse in={this.state.open4}>
                      <div>
                        <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </Collapse>
                </div>

            </div>

            <div className="first-mid">
            <div className="first-left-tabs">
                <div className="first-left-tabs-text">
                    <h4>New York</h4>
                    <h5>FLIGHTS•HOTELS•CARS</h5>
                </div>
                <span className="first-left-tabs-butt" onClick={() => this.setState({ open5: !this.state.open5 })}>
                  <FontAwesome name='chevron-down' size='1x'/>
                </span>
                <Collapse in={this.state.open5}>
                  <div>
                    <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </Collapse>
            </div>
            <hr className="her" />
            <div className="first-left-tabs">
                <div className="first-left-tabs-text">
                    <h4>New York</h4>
                    <h5>FLIGHTS•HOTELS•CARS</h5>
                </div>
                <span className="first-left-tabs-butt" onClick={() => this.setState({ open6: !this.state.open6 })}>
                  <FontAwesome name='chevron-down' size='1x'/>
                </span>
                <Collapse in={this.state.open6}>
                  <div>
                    <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </Collapse>
            </div>
            <hr className="her" />
            <div className="first-left-tabs">
                <div className="first-left-tabs-text">
                    <h4>New York</h4>
                    <h5>FLIGHTS•HOTELS•CARS</h5>
                </div>
                <span className="first-left-tabs-butt" onClick={() => this.setState({ open7: !this.state.open7 })}>
                  <FontAwesome name='chevron-down' size='1x'/>
                </span>
                <Collapse in={this.state.open}>
                  <div>
                    <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </Collapse>
            </div>
            <hr />
            <div className="first-left-tabs">
                <div className="first-left-tabs-text">
                    <h4>New York</h4>
                    <h5>FLIGHTS•HOTELS•CARS</h5>
                </div>
                <span className="first-left-tabs-butt" onClick={() => this.setState({ open8: !this.state.open8 })}>
                  <FontAwesome name='chevron-down' size='1x'/>
                </span>
                <Collapse in={this.state.open8}>
                  <div>
                    <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </Collapse>
            </div>
            </div>
            <div className="first-right">
            <div className="first-left-tabs">
                <div className="first-left-tabs-text">
                    <h4>New York</h4>
                    <h5>FLIGHTS•HOTELS•CARS</h5>
                </div>
                <span className="first-left-tabs-butt" onClick={() => this.setState({ open9: !this.state.open9 })}>
                  <FontAwesome name='chevron-down' size='1x'/>
                </span>
                <Collapse in={this.state.open9}>
                  <div>
                    <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </Collapse>
            </div>
            <hr className="her" />
            <div className="first-left-tabs">
                <div className="first-left-tabs-text">
                    <h4>New York</h4>
                    <h5>FLIGHTS•HOTELS•CARS</h5>
                </div>
                <span className="first-left-tabs-butt" onClick={() => this.setState({ open10: !this.state.open10 })}>
                  <FontAwesome name='chevron-down' size='1x'/>
                </span>
                <Collapse in={this.state.open10}>
                  <div>
                    <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </Collapse>
            </div>
            <hr className="her" />
            <div className="first-left-tabs">
                <div className="first-left-tabs-text">
                    <h4>New York</h4>
                    <h5>FLIGHTS•HOTELS•CARS</h5>
                </div>
                <span className="first-left-tabs-butt" onClick={() => this.setState({ open11: !this.state.open11 })}>
                  <FontAwesome name='chevron-down' size='1x'/>
                </span>
                <Collapse in={this.state.open11}>
                  <div>
                    <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </Collapse>
            </div>
            <hr />
            <div className="first-left-tabs">
                <div className="first-left-tabs-text">
                    <h4>New York</h4>
                    <h5>FLIGHTS•HOTELS•CARS</h5>
                </div>
                <span className="first-left-tabs-butt" onClick={() => this.setState({ open12: !this.state.open12 })}>
                  <FontAwesome name='chevron-down' size='1x'/>
                </span>
                <Collapse in={this.state.open12}>
                  <div>
                    <div style={{backgroundColor:"black",background: "rgba(0, 0, 0, 0.9)",color:"white"}}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </Collapse>
            </div>
            </div>
        </div>

        <div className="second">
        <div className="second-top">
            <h2 style={{fontWeight:300}}>Use our smart tools to make your search easier</h2>
        </div>
          <div className="second-left">

          </div>
          <div className="second-mid">

          </div>
          <div className="second-right">

          </div>
        </div>
      </div>
);
  }
}

export default BeautifulDown;
