import React, { useEffect, useState } from "react";
import Axios from "axios";

let ContactList = (props) => {

    let [users, setUsers] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');

    //Get data from server, when component fully loaded
    //Important point - In useEffect after anonymous function write empty array( '[]' ) to avoid calling useEffect continuously
    //if we won't write empty array ( [] ) - useEffect will call contiuosly 
    useEffect( () => {
        Axios.get('https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json').then((response) =>{
            setUsers(response.data);
        }).catch((error) => {
            setErrorMessage(error.message);
        });
    }, []);

    let clickContact = (user) => {
        props.sendContact(user);
    };


    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row mt-3">
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
                                                return(
                                                    <tr key={user.login.uuid.substr(user.login.uuid.length - 4)} onClick={clickContact.bind(this, user)}>
                                                        <td>{user.login.uuid.substr(user.login.uuid.length - 4)}</td>
                                                        <td>{user.name.first} {user.name.last}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td>{user.location.city}</td>
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

export default ContactList;