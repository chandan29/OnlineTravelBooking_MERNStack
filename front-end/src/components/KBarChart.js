import React, {Component} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import '../App.css';

const data = [
    {name: 'San Jose', Cars: 4000, Hotels: 2400, Flights: 1000, amt: 2400},
    {name: 'New York', Cars: 3000, Hotels: 1398, Flights: 1000, amt: 2210},
    {name: 'Oakland', Cars: 2000, Hotels: 9800, Flights: 1000, amt: 2290},
    {name: 'Page D', Cars: 2780, Hotels: 3908, Flights: 1000, amt: 2000},
    {name: 'Page E', Cars: 1890, Hotels: 4800, Flights: 1000, amt: 2181},
    {name: 'Page F', Cars: 2390, Hotels: 3800, Flights: 1000, amt: 2500},
    {name: 'Page G', Cars: 3490, Hotels: 4300, Flights: 1000, amt: 2100},
];

class KBarChart extends Component {


    render(){
        return(
            <div>
                <BarChart width={600} height={300} data={data}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="Cars" fill="#8884d8" />
                    <Bar dataKey="Hotels" fill="#82ca9d" />
                    <Bar dataKey="Flights" fill="#82ca9e" />
                </BarChart>
        </div>
        )
    }
}

export default KBarChart;
