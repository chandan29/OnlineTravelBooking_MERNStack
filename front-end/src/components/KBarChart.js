import React, {Component} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';

const data = [
    {name: 'Home', HomeCar: 4000, HomeHotel: 2400, HomeFlight: 1000, amt: 2400},
    {name: 'Listing', ListCar: 3000, ListHotel: 1398, ListFlight: 1000, amt: 2210},
    {name: 'Bookings', BookCar: 2000, BookHotel: 800, BookFlight: 1000, amt: 2290},
];


class KBarChart extends Component {
/*
componentWillMount(){
    API.getClicksPerPage()
        .then((res) => {
            console.log(res.arr);

            this.setState({
              cityRevenue:res.arr,
              x:[{name: 'Home', HomeCar: res.arr[0], HomeHotel: res.arr[1], HomeFlight:res.arr[2], amt: 2400},
              {name: 'Listing', ListCar:res.arr[3], ListHotel:res.arr[4], ListFlight: res.arr[5], amt: 2210},
              {name: 'Bookings', BookCar: res.arr[6], BookHotel: res.arr[7], BookFlight: res.arr[8], amt: 2290},]
            })
        });
}
*/
    render(){
        return(
            <div>
                <BarChart width={600} height={300} data={this.props.views}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Bar dataKey="HomeCar" fill="#8884d8" />
                    <Bar dataKey="HomeHotel" fill="#8884d6" />
                    <Bar dataKey="HomeFlight" fill="#8884d4" />
                    <Bar dataKey="ListCar" fill="#82ca9d" />
                    <Bar dataKey="ListHotel" fill="#82ca9f" />
                    <Bar dataKey="ListFlight" fill="#82ca9b" />
                    <Bar dataKey="BookCar" fill="#82ca4c" />
                    <Bar dataKey="BookHotel" fill="#82ca4e" />
                    <Bar dataKey="BookFlight" fill="#82ca4f" />
                </BarChart>
        </div>
        )
    }
}

export default KBarChart;
