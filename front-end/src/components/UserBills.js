import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';
import Message from "./Message";
import Header from './Header';


class UserBills extends Component {

    static propTypes = {

    };



    handleBillMonthFilter = (payload) => {

        console.log('handle month bill filter input: ', payload);
        var yearMonth = payload.slice(0, 4);
        console.log('yearMonth: ', yearMonth);

        for (var i = 0; i < this.state.billsObjCopy.length; i++) {
            if (yearMonth === this.state.billsObjCopy[i].fromDate.slice(0, 4)) {
                console.log('year matched');
                var month = payload.slice(5, 7);
                if (month === this.state.billsObjCopy[i].fromDate.slice(5, 7)) {
                    console.log('both matched');
                    this.state.billsObjCopy1.push(this.state.billsObjCopy[i]);
                    this.setState({
                        billsObjCopy: this.state.billsObjCopy1
                    })

                }
            }
        }
    };

    getAdminBillDetail = (payload) => {
        API.getAdminBillDetail(payload)
            .then((res) => {

                if (res.status === 401) {
                    this.setState({
                        message: 'Bill Details Not Found',
                        messageFlag: true
                    })
                }
                else if (res.status === 201) {
                    this.setState({
                        billDetailsObj: res.user,
                        messageFlag: false,
                        viewBillFlag: false
                    });
                    console.log('admin bill details object fetched:', res);
                }
            });

    };



    componentWillMount() {
        this.setState({
            viewBillFlag: true
        });
        API.getAdminBills({dummy: this.state.message})
            .then((res) => {

                if (res.wrong === 1) {
                    this.setState({
                        fetchCarId: null,
                        message: 'Bills Not Found',
                        messageFlag: true
                    });
                }
                else if (res.status === 201) {
                    this.setState({
                        billsObjCopy: res.user,
                        userloggedin: res.username,
                        messageFlag: false
                    });

                    console.log('admin bill object fetched:', res);
                }
            });

    }

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            billsObj: [],
            billsObjCopy: [],
            billsObjCopy1: [],
            billDetailsObj: [],
            viewBillFlag: false,
            monthValue:null,
            dateValue:null
        };

    }


    render() {


        return (

        <div>
        <Header />
            <div className="filterUserBills">

                <label>Filter by month and Year</label>
                <div className="input-group" style={{width: "80%"}}>
                    <input type="month" list="months" className="form-control"
                           value={this.state.monthValue}
                           onChange={(event)=>this.setState({
                               monthValue:event.target.value
                           })}
                           placeholder="Search By Month"/>

                    <div className="input-group-btn">
                        <button className="btn btn-default"
                                onClick={()=>
                                this.handleBillMonthFilter(this.state.monthValue)}
                                type="submit">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                </div>




            </div>
            <div>

                <Message message={this.state.message}/>

                {
                    this.state.viewBillFlag
                        ?

                        <div style={{width: "78%", float: "right",marginRight: "1%"}}>

                            <div className={'row'} >
                                <div className={'col-md-6'}>
                                    <span className="billTitle">TripDetails for : {this.state.userloggedin}</span>
                                </div>

                            </div>
                            <table className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th className={'tableHead'}>Type</th>
                                    <th className={'tableHead'}>Date</th>

                                    <th className={'tableHead'}>City</th>

                                    <th className={'tableHead'}>Trip/Bill Id</th>
                                    <th className={'tableHead'}>Bill Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.billsObjCopy.map(item => (
                                            <tr key={item._id}>

                                                <td className={'tableData'}>{item.type}</td>
                                                <td className={'tableData'}>{item.fromDate}</td>
                                                <td className={'tableData'}>{item.fromCity}</td>
                                                <td className={'tableData tableData1'}>

                                                    {item.tripId}
                                                    </td>

                                                <td className={'tableData'}>{item.fareDetails}</td>
                                            </tr>




                                        )
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                        :
                        <div>
                            <h2 className={'billTitle'}> Bill Detail Information</h2>
                            <table className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th className={'tableHead'}>Car Id</th>
                                    <th className={'tableHead'}>City</th>
                                    <th className={'tableHead'}>From Date</th>
                                    <th className={'tableHead'}>To Date</th>
                                    <th className={'tableHead'}>Trip/Bill Id</th>
                                    <th className={'tableHead'}>Fare Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.billDetailsObj.map(item => (
                                            <tr key={item.userId}>
                                                <td className={'tableData'}><img className={'itemImage'}
                                                                                 src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Car_with_Driver-Silhouette.svg/500px-Car_with_Driver-Silhouette.svg.png'}/><b> {item.carId}</b>
                                                </td>
                                                <td className={'tableData'}>{item.fromCity}</td>
                                                <td className={'tableData'}>{item.fromDate}</td>
                                                <td className={'tableData'}>{item.toDate}</td>
                                                <td className={'tableData tableData1'}>
                                                    {item.tripId}

                                                </td>

                                                <td className={'tableData'}>{item.fareDetails}</td>
                                            </tr>




                                        )
                                    )
                                }
                                </tbody>
                            </table>
                        </div>

                }
            </div>
        </div>

        );
    }


}

export default UserBills;
