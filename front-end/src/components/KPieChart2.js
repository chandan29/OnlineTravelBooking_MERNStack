import React, {Component} from 'react';
import PieChart from 'react-svg-piechart';
import '../App.css';

class KPieChart2 extends Component{

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
                {label: "San Jose", value: 100, color: "#3b5998"},
                {label: "New York", value: 60, color: "#00aced"},
                {label: "Chicago", value: 30, color: "#dd4b39"},
                {label: "Ohio", value: 20, color: "#cb2027"},
                {label: "Washington", value: 10, color: "#007bb6"},
            ]

            const {expandedSector} = this.state

            return (
                <div>
                    <PieChart className="Kpiechart"
                        data={ data }
                        expandedSector={expandedSector}
                        onSectorHover={this.handleMouseEnterOnSector}
                        sectorStrokeWidth={2}
                        expandOnHover
                        shrinkOnTouchEnd
                    />
                    <div>
                        {
                            data.map((element, i) => (
                                <div key={i}>
                                    <span style={{background: element.color}}></span>
                                    <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                {element.label} : {element.value}
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
