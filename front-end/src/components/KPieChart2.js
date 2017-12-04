
import React, {Component} from 'react';
import PieChart from 'react-svg-piechart';
import '../App.css';
import * as API from '../api/API';

class KPieChart2 extends Component{
        componentWillMount(){
          API.getRevenuepercity()
              .then((res) => {
                  console.log(res.arr);

                  this.setState({
                    cityRevenue:res.arr,
                    x:[{label: "San Jose", value: res.arr[0], color: "#3b5998"},{label: "San Francisco", value: res.arr[1], color: "#00aced"},{label: "Boston", value: res.arr[2], color: "#dd4b39"},{label: "Chicago", value: res.arr[3], color: "#cb2027"},{label: "Dallas", value: res.arr[4], color: "#007bb6"},{label: "Denver", value: res.arr[5], color: "#007ba4"},{label: "Los Angeles", value: res.arr[6], color: "#004ba4"},{label: "New York", value: res.arr[7], color: "#001bc4"},{label: "Seattle", value: res.arr[8], color: "#003cb2"},{label: "Denver", value: res.arr[9], color: "#017bc2"}]
                  })
              });

        }
        constructor() {
            super()

            this.state = {
                expandedSector: null,
            }

            this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
        }

        handleMouseEnterOnSector(sector) {
            this.setState({expandedSector: sector})
        }

        render() {


            const data = [
                {label: "San Jose",color: "#3b5998"},{label: "San Francisco", color: "#00aced"},{label: "Boston", color: "#dd4b39"},{label: "Chicago", color: "#cb2027"},{label: "Dallas",  color: "#007bb6"},{label: "Denver", color: "#007ba4"},{label: "Los Angeles", color: "#004ba4"},{label: "New York", color: "#001bc4"},{label: "Seattle", color: "#003cb2"},{label: "Denver", color: "#017bc2"}
            ]

          //  const data=this.state.x;

            const {expandedSector} = this.state

            return (
                <div>
                    <PieChart className="Kpiechart"
                        data={ this.state.x }
                        expandedSector={expandedSector}
                        onSectorHover={this.handleMouseEnterOnSector}
                        sectorStrokeWidth={2}
                        expandOnHover
                        shrinkOnTouchEnd
                        style={{float: "left",display: "inline"}}
                    />

                  <div className="right-chart" style={{textAlign:"center"}}>
                        {
                            data.map((element, i) => (
                                <div key={i}>
                                    <span style={{background: element.color}}></span>
                                    <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                {element.label}
                            </span>
                                </div>
                            ))
                        }
                    </div>



                </div>
            )
    }
}
export default KPieChart2;
