import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Link, useParams} from "react-router-dom";

let EmployeeDetails = (props) => {
    
    let employeeId = useParams().userId;
    let [selectedUser, setSelectedUser] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');

    //Get data from server, when component fully loaded
    //Important point - In useEffect after anonymous function write empty array( '[]' ) to avoid calling useEffect continuously
    //if we won't write empty array ( [] ) - useEffect will call contiuosly 
    useEffect( () => {
        Axios.get('https://gist.githubusercontent.com/sathya0503/da99b30be4177bf63fc491441aa1ea63/raw/176b171578dcfe858ba0c703552fa231224c85ad/empmock.json').then((response) =>{
            let empId = parseInt(employeeId);
            let employees = response.data;
            let user = employees.find(employee => employee.id === empId);
            setSelectedUser(user);
        }).catch((error) => {
            setErrorMessage(error.message);
        });
    }, []);

    return (
        <React.Fragment>
            <div className="container-mt-9">
                <div className="row">
                    <div className="col">
                        <p className="h3">Employee Details</p>
                        <p className="lead">Let's check each employee details and able to see complete details of employee click on particular employee data.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col md-6">
                        <div className="card text-center m-3">
                            <div className="card-header bg-dark text-white">
                                <p className="h4">{selectedUser?.fullname}</p>
                            </div>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-6 text-center">
                                        <img src={selectedUser?.avatar} alt="" width={250} height={250}/>
                                    </div>
                                    <div className="col-md-6 align-items-center">
                                        <ul className="list-group mt-3">
                                            <li className="list-group-item list-group-item-secondary">
                                                <b>NAME :</b> {selectedUser?.fullname}
                                            </li>
                                            <li className="list-group-item list-group-item-primary">
                                                {selectedUser?.email}
                                            </li>
                                            <li className="list-group-item list-group-item-primary">
                                                Username : {selectedUser?.username}
                                            </li>
                                            <li className="list-group-item list-group-item-primary">
                                                Phone : {selectedUser?.phone}
                                            </li>
                                            <li className="list-group-item list-group-item-primary">
                                                Company Name : {selectedUser?.companyName}
                                            </li>
                                            <li className="list-group-item list-group-item-primary">
                                                Department : {selectedUser?.dept}
                                            </li>
                                            <li className="list-group-item list-group-item-primary">
                                                Job Title : {selectedUser?.jobTitle}
                                            </li>
                                            <li className="list-group-item list-group-item-primary">
                                                location : {selectedUser?.location}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Link to='/employees/list' className="btn btn-dark btn-sm">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );

};

export default EmployeeDetails;