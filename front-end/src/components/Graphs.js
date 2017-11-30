
import KPieChart from './KPieChart';
import KBarChart from './KBarChart';
import KPieChart2 from './KPieChart2';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';

class Graphs extends Component {

render(){
    return(
        <div>
            <KPieChart/>
            <KPieChart2/>
            <KBarChart/>

        </div>
    )
}
}

export default Graphs
