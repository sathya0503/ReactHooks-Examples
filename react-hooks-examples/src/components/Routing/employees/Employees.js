import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Link} from "react-router-dom"

let Employees = (props) => {

    let [users, setUsers] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');

    //Get data from server, when component fully loaded
    //Important point - In useEffect after anonymous function write empty array( '[]' ) to avoid calling useEffect continuously
    //if we won't write empty array ( [] ) - useEffect will call contiuosly 
    useEffect( () => {
        Axios.get('https://gist.githubusercontent.com/sathya0503/da99b30be4177bf63fc491441aa1ea63/raw/176b171578dcfe858ba0c703552fa231224c85ad/empmock.json').then((response) =>{
            setUsers(response.data);
        }).catch((error) => {
            setErrorMessage(error.message);
        });
    }, []);


    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3">Employees Data</p>
                        <p className="lead">Let's check each employee details and able to see complete details of employee click on particular employee data..</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-primary">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>S No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 ?
                                        <React.Fragment>
                                            {
                                                users.map(user => {
                                                    return (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>
                                                                <Link to={`/employees/${user.id}`} className="text-primary font-weight-bold">{user.fullname}</Link>
                                                            </td>
                                                            <td>{user.email}</td>
                                                            <td>{user.phone}</td>
                                                            <td>{user.location}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default Employees;