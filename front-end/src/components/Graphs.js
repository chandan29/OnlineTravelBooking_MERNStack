import KPieChart from './KPieChart';
import KBarChart from './KBarChart';
import KPieChart2 from './KPieChart2';
import KBarChart2 from './KBarChart2';
import SimpleTraceDiagram from './SimpleTraceDiagram';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';

class Graphs extends Component {
  componentWillMount(){
    API.getTrace()
        .then((res) => {
            console.log(res.arr);
            var arr=[];
            var arr1=[];
            var arr2=[];
            var arr3=[];
            arr.push(res.arr[0].split(',')[0]);
            arr1.push(res.arr[0].split(',')[1]);
            arr2.push("login");
            arr3.push("login");
            if(res.arr.length>1){
            for(var i=1;i<res.arr.length;i++){
              var x=res.arr[i].split(',');
              arr.push(x[0]);
              arr1.push(x[1]);
              arr2.push(x[2]);
              arr3.push(x[3]);
            }
          }
            this.setState({
              date:arr,
              time:arr1,
              type:arr2,
              activity:arr3
            })
        });

        API.getTenProperties()
        .then((res) => {

            console.log(res.cars);
            console.log(res.flights);
            console.log(res.hotels);
            var car=[];
            var flight=[];
            var hotel=[];
            for(var i=0;i<res.cars.length;i++){
              car.push({name: res.cars[i].carAgency, HotelClicks: res.cars[i].carRating})
            }

            for(var i=0;i<res.flights.length;i++){
              flight.push({name: res.flights[i].flightAgency, HotelClicks: res.flights[i].flightRating})
            }

            for(var i=0;i<res.hotels.length;i++){
              hotel.push({name: res.hotels[i].hotelName, HotelClicks: res.hotels[i].hotelRating})
            }
            this.setState({
              cars:car,
              flights:flight,
              hotels:hotel,
              x5:true
            })
        });

      API.getClicksPerPage()
          .then((res) => {
              console.log(res.arr);
              this.setState({
                cityRevenue:res.arr,
                x:[{name: 'Home', HomeCar: parseInt(res.arr[0]), HomeHotel: parseInt(res.arr[1]), HomeFlight:parseInt(res.arr[2])},
                {name: 'Listing', ListCar:parseInt(res.arr[3]), ListHotel:parseInt(res.arr[4]), ListFlight: parseInt(res.arr[5])},
                {name: 'Bookings', BookCar: parseInt(res.arr[6]), BookHotel: parseInt(res.arr[7]), BookFlight: parseInt(res.arr[8])}],
                x2:[{name: 'Car', CarClicks: parseInt(res.arr[0])+parseInt(res.arr[3])+parseInt(res.arr[6])},
                  {name: 'Hotel', HotelClicks: parseInt(res.arr[1])+parseInt(res.arr[4])+parseInt(res.arr[7])},
                  {name: 'Flights', FlightClicks: parseInt(res.arr[2])+parseInt(res.arr[5])+parseInt(res.arr[8])}],

                  x3:[{name: 'Ozone', CarClicks: parseInt(res.arr[0])+parseInt(res.arr[3])+parseInt(res.arr[6])},
                    {name: 'Amaze', HotelClicks: parseInt(res.arr[1])+parseInt(res.arr[4])+parseInt(res.arr[7])},
                    {name: 'Azine', FlightClicks: parseInt(res.arr[2])+parseInt(res.arr[5])+parseInt(res.arr[8])},
                    {name: 'Carni', CarClicks: parseInt(res.arr[0])+parseInt(res.arr[3])+parseInt(res.arr[6])},
                      {name: 'British', HotelClicks: parseInt(res.arr[1])+parseInt(res.arr[4])+parseInt(res.arr[7])},
                      {name: 'Durban', FlightClicks: parseInt(res.arr[2])+parseInt(res.arr[5])+parseInt(res.arr[8])},
                      {name: 'Modani', CarClicks: parseInt(res.arr[0])+parseInt(res.arr[3])+parseInt(res.arr[6])},
                        {name: 'Aramis', HotelClicks: parseInt(res.arr[1])+parseInt(res.arr[4])+parseInt(res.arr[7])},
                        {name: 'One', FlightClicks: parseInt(res.arr[2])+parseInt(res.arr[5])+parseInt(res.arr[8])}],
                x1: true
              })
          });


          API.getClickStream()
          .then((res) => {
              console.log(res.arr3);
              this.setState({
                m:[{name: 'Header', Header: parseInt(res.arr3[0])},{name: 'Nav', Nav: parseInt(res.arr3[1])},{name: 'Body', Body: parseInt(res.arr3[2])},{name: 'Footer', Footer: parseInt(res.arr3[3])}],
                m1:true
              })
          });
  }

  state={
    x: [],
    x1: false,
    x5:false,
    m1:false
  }


    render(){
        return(
            <div>


              {
                this.state.x1 && this.state.x5 && this.state.m1
                ?
                <div>
                  <h3 style={{paddingLeft: "42%",backgroundColor:"gray",width:"auto",height: 50,paddingTop:10}}>User Trace Diagram</h3>
                  <div style={{width: "50%",marginLeft: "25%",padding: 20}}>
                  <SimpleTraceDiagram date={this.state.date} time={this.state.time} type={this.state.type} activity={this.state.activity}/>
                  </div><hr/>
                  <h3 style={{paddingLeft: "42%",backgroundColor:"gray",width:"auto",height: 50,paddingTop:10}}>City wise revenue:</h3>
                 <div style={{width: "80%",marginLeft: "10%",padding: 20}}>
                    <KPieChart2/>
                </div><hr/>
                <h3 style={{paddingLeft: "42%",backgroundColor:"gray",width:"auto",height: 50,paddingTop:10}}>Car, Hotel, Flight Views Comparison</h3>
                <div style={{width: "60%",padding: 1,marginLeft: "20%"}}>
                    <KBarChart2 views1={this.state.x2} views8={this.state.m} cars={this.state.cars} flights={this.state.flights} hotels={this.state.hotels}/>
                </div><hr/>
                <h3 style={{paddingLeft: "42%",backgroundColor:"gray",width:"auto",height: 50,paddingTop:10}}>Clicks Per Page</h3>
                <div style={{width: "50%", marginLeft: "25%"}}>
                  <KBarChart views={this.state.x}/>
                </div>

              </div>

                :<div>Please</div>
            }
            </div>
        )
    }

}

export default Graphs;
