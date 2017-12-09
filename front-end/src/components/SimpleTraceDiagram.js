
import React, {Component} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import '../App.css';
/*const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;*/
let data = [];



class SimpleTraceDiagram extends Component{

    componentWillMount(){
      console.log(this.props.activity);
    }

    state={
      x1:false
    }

    componentDidMount(){
      for(var i=0;i<this.props.activity.length;i++){
        data.push({name: this.props.activity[i], Type: this.props.type[i], uv: Math.floor(Math.random()*1000), amt: this.props.date[i],z:""+this.props.activity[i]+","+this.props.type[i]})
      }
      this.setState({
        x:data,
        x1:true
      })
    }
    render () {
        return (
          <div>
          {
            this.state.x1
            ?
            <div id="container-chart">
            <LineChart width={600} height={300} data={this.state.x}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="z"/>
                label ={"Type"}
                
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip dataKey="Type"/>

                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            </div>
              :<div>Please</div>
          }
        </div>
        )

    }
}

export default SimpleTraceDiagram;
