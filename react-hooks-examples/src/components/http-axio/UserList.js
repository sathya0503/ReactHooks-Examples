import React, { useEffect, useState } from "react";
import Axios from "axios";

let UserList = () => {

    let [users, setUsers] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');

    //Get data from server, when component fully loaded
    //Important point - In useEffect after anonymous function write empty array( '[]' ) to avoid calling useEffect continuously
    //if we won't write empty array ( [] ) - useEffect will call contiuosly 
    useEffect( () => {
        Axios.get('http://localhost:8081/referralDetails').then((response) =>{
            setUsers(response.data);
        }).catch((error) => {
            setErrorMessage(error.message);
        });
    }, []);

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">user List</p>
                        <p className="lead">Some text hereeeeee</p>
                    </div>
                </div>
                <pre>{JSON.stringify(errorMessage)}</pre>
                <div className="row mt-3">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-primary">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Referral ID</th>
                                    <th>Referral Name</th>
                                    <th>Refferral Email</th>
                                    <th>Referred By</th>
                                    <th>Mobile Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 ?
                                    <React.Fragment>
                                        {
                                            users.map(user => {
                                                return(
                                                    <tr key={user.refId}>
                                                        <td>{user.refId}</td>
                                                        <td>{user.refereeName}</td>
                                                        <td>{user.refereeMail}</td>
                                                        <td>{user.referredBy}</td>
                                                        <td>{user.mobileNumber}</td>
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

export default UserList;