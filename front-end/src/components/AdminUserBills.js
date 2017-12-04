/*import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';
import Message from "./Message";


class AdminUserBills extends Component {

    static propTypes = {

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
                        viewBillFlag: !this.state.viewBillFlag
                    });


                    console.log('admin bill details object fetched:', res);
                }
            });

    };

    handleBillMonthFilter = (payload) => {

        console.log('handle month bill filter input: ', payload);
        var yearMonth = payload.slice(0, 4);
        console.log('yearMonth: ', yearMonth);

        for (var i = 0; i < this.state.billsObj.length; i++) {
            if (yearMonth === this.state.billsObj[i].fromDate.slice(0, 4)) {
                console.log('year matched');
                var month = payload.slice(5, 7);
                if (month === this.state.billsObj[i].fromDate.slice(5, 7)) {
                    console.log('both matched');
                    this.state.billsObjCopy1.push(this.state.billsObj[i]);
                    this.setState({
                        billsObjCopy: this.state.billsObjCopy1
                    })

                }
            }
        }
    };

    handleBillDateFilter = (payload) => {

        console.log('handle month bill filter input: ', payload);


        for (var i = 0; i < this.state.billsObj.length; i++) {
            if (payload === this.state.billsObj[i].fromDate) {
                console.log('date matched');
                this.state.billsObjCopy1.push(this.state.billsObj[i]);
                this.setState({
                    billsObjCopy: this.state.billsObjCopy1
                })

            }

        }
    };

    componentWillMount() {
        this.setState({
            viewBillFlag: true
        });
        API.getAdminBills2({dummy: this.state.message})
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
                        billsObj: res.user,
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
                <Message message={this.state.message}/>

                {
                    this.state.viewBillFlag
                        ?

                        <div>
                            <div className={'row'}>
                                <div className={'col-md-6'}>
                                    <h2 className={'billTitle'}> User Bill Information</h2>
                                </div>
                                <div className={'col-md-6'}>

                                    <div className={'row'}>
                                        <div className={'col-md-6'}>
                                            <div className="input-group">
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
                                        <div className={'col-md-6'}>
                                            <div className="input-group">
                                                <input type="date" list="date" className="form-control"
                                                       value={this.state.dateValue}
                                                       onChange={(event)=>this.setState({
                                                           dateValue:event.target.value
                                                       })}
                                                       placeholder="Search By Month"/>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-default"
                                                            onClick={()=>
                                                                this.handleBillDateFilter(this.state.dateValue)}
                                                            type="submit">
                                                        <i className="glyphicon glyphicon-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <table className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th className={'tableHead'}>User</th>
                                    <th className={'tableHead'}>Type</th>
                                    <th className={'tableHead'}>Date</th>
                                    <th className={'tableHead'}>Trip/Bill Id</th>
                                    <th className={'tableHead'}>Bill Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.billsObjCopy.map(item => (
                                            <tr key={item._id}>
                                                <td className={'tableData'}><img
                                                    className={'itemImage'}
                                                    src={'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png'}/> {item.userEmail}
                                                </td>
                                                <td className={'tableData'}>{item.type}</td>
                                                <td className={'tableData'}>{item.fromDate}</td>
                                                <td className={'tableData tableData1'}>
                                                    <a href={'#'}
                                                    >{item.tripId}</a>
                                                    <button className={'viewDetail'} onClick={() => {
                                                        this.getAdminBillDetail(item);
                                                        console.log('item:', item)
                                                    }}>View Details
                                                    </button>
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

                                    <th className={'tableHead'}>City</th>
                                    <th className={'tableHead'}>From Date</th>
                                    <th className={'tableHead'}>To Date</th>
                                    <th className={'tableHead'}>Fare Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.billDetailsObj.map(item => (
                                            <tr key={item.userId}>

                                                <td className={'tableData'}>{item.fromCity}</td>
                                                <td className={'tableData'}>{item.fromDate}</td>
                                                <td className={'tableData'}>{item.toDate}</td>


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


        );
    }


}

export default AdminUserBills;
*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';
import Message from "./Message";


class AdminUserBills extends Component {

    static propTypes = {

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
                        fromDate: res.user.fromDate,
                        toDate:res.user.toDate,
                        fromCity: res.user.fromCity,
                        fareDetails:res.user.fareDetails,
                        messageFlag: false,
                        viewBillFlag: !this.state.viewBillFlag
                    });
                    console.log('admin bill details object fetched:', res);
                    if(res.user.carId>0){
                        this.setState({
                           tripId:res.user.carId
                        });
                    }

                    else if(res.user.hotelId>0){
                        this.setState({
                            tripId:res.user.hotelId
                        });
                    }

                    else if(isNaN(res.user.flightId)){
                        this.setState({
                            tripId:res.user.flightId
                        });
                    }





                }
            });

    };

    handleBillMonthFilter = (payload) => {

        console.log('handle month bill filter input: ', payload);
        var yearMonth = payload.slice(0, 4);
        console.log('yearMonth: ', yearMonth);

        for (var i = 0; i < this.state.billsObj.length; i++) {
            if (yearMonth === this.state.billsObj[i].fromDate.slice(0, 4)) {
                console.log('year matched');
                var month = payload.slice(5, 7);
                if (month === this.state.billsObj[i].fromDate.slice(5, 7)) {
                    console.log('both matched');
                    this.state.billsObjCopy1.push(this.state.billsObj[i]);
                    this.setState({
                        billsObjCopy: this.state.billsObjCopy1
                    })

                }
            }
        }
    };

    handleBillDateFilter = (payload) => {

        console.log('handle month bill filter input: ', payload);


        for (var i = 0; i < this.state.billsObj.length; i++) {
            if (payload === this.state.billsObj[i].fromDate) {
                console.log('date matched');
                this.state.billsObjCopy1.push(this.state.billsObj[i]);
                this.setState({
                    billsObjCopy: this.state.billsObjCopy1
                })

            }

        }
    };

    componentWillMount() {
        this.setState({
            viewBillFlag: true
        });
        API.getAdminBills2({dummy: this.state.message})
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
                        billsObj: res.user,
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
                <Message message={this.state.message}/>

                {
                    this.state.viewBillFlag
                        ?

                        <div>
                            <div className={'row'}>
                                <div className={'col-md-6'}>
                                    <h2 className={'billTitle'}> User Bill Information</h2>
                                </div>
                                <div className={'col-md-6'}>

                                    <div className={'row'}>
                                        <div className={'col-md-6'}>
                                            <div className="input-group">
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
                                        <div className={'col-md-6'}>
                                            <div className="input-group">
                                                <input type="date" list="date" className="form-control"
                                                       value={this.state.dateValue}
                                                       onChange={(event)=>this.setState({
                                                           dateValue:event.target.value
                                                       })}
                                                       placeholder="Search By Month"/>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-default"
                                                            onClick={()=>
                                                                this.handleBillDateFilter(this.state.dateValue)}
                                                            type="submit">
                                                        <i className="glyphicon glyphicon-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <table className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th className={'tableHead'}>User</th>
                                    <th className={'tableHead'}>Type</th>
                                    <th className={'tableHead'}>Date</th>
                                    <th className={'tableHead'}>Trip/Bill Id</th>
                                    <th className={'tableHead'}>Bill Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.billsObjCopy.map(item => (
                                            <tr key={item._id}>
                                                <td className={'tableData'}><img
                                                    className={'itemImage'}
                                                    src={'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png'}/> {item.userEmail}
                                                </td>
                                                <td className={'tableData'}>{item.type}</td>
                                                <td className={'tableData'}>{item.fromDate}</td>
                                                <td className={'tableData tableData1'}>
                                                    <a href={'#'}
                                                    >{item.tripId}</a>
                                                    <button className={'viewDetail'} onClick={() => {
                                                        this.getAdminBillDetail(item);
                                                        console.log('item:', item)
                                                    }}>View Details
                                                    </button>
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
                                    <th className={'tableHead'}>Trip / Bill Id</th>
                                    <th className={'tableHead'}>City</th>
                                    <th className={'tableHead'}>From Date</th>
                                    <th className={'tableHead'}>To Date</th>
                                    <th className={'tableHead'}>Fare Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                            <tr >
                                                <td className={'tableData'}><b> {this.state.tripId}</b></td>
                                                <td className={'tableData'}>{this.state.fromCity}</td>
                                                <td className={'tableData'}>{this.state.fromDate}</td>
                                                <td className={'tableData'}>{this.state.toDate}</td>
                                                <td className={'tableData'}>{this.state.fareDetails}</td>

                                            </tr>

                                </tbody>
                            </table>
                        </div>

                }
            </div>


        );
    }


}

export default AdminUserBills;
