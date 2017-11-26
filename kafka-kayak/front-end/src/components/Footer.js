import React, {Component} from 'react';
import PropTypes from 'prop-types';
import F from './../footer.png';

class Footer extends Component {
  render(){
    return(
      <div>
          <img id="footerImage" src={F}/>
      </div>
    );
  }
}

export default Footer;
