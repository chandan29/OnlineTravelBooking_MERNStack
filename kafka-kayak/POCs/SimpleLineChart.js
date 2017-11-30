import React, {Component} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import '../App.css';
/*const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;*/
const data = [
    {name: 'Page ADS', Type: 4000, pv: 2400, amt: 2400},
    {name: 'Car', Type: 3400, pv: 1398, amt: 2210},
    {name: 'Flight', Type: 2000, pv: 9800, amt: 2290},
    {name: 'Hotels', Type: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', Type: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', Type: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', Type: 3490, pv: 4300, amt: 2100},
];
class SimpleLineChart extends Component{
    render () {
        return (
            <div id="container-chart">
            <LineChart width={600} height={300} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="Type" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>

                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" tick={<CustomAxisTick />} />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        )

    }
}

export default SimpleLineChart;