import React, {Component} from 'react';


class LeftFilterHotels extends Component {

  componentWillMount(){

  }
  state={

  }
  render() {
    return (
      <div classNameName="mainBodyLeftFilterCars">
        <div classNameName="starFilter">
            <form className="rating">
                <label>
                <input type="radio" name="stars" value="1" />
                <span className="icon">★</span>
                </label>
                <label>
                <input type="radio" name="stars" value="2" />
                <span className="icon">★</span>
                <span className="icon">★</span>
                </label>
                <label>
                <input type="radio" name="stars" value="3" />
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                </label>
                <label>
                <input type="radio" name="stars" value="4"  oncli/>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                </label>
                <label>
                <input type="radio" name="stars" value="5" />
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                </label>
            </form>
        </div>
        <div classNameName="priceFilter">

        </div>
      </div>
);
  }
}

export default leftFilterHotels;
