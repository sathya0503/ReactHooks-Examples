import React from "react";

let ContactCard = (props) => {

    return (
        <React.Fragment>
            {
                Object.keys(props.selectedUser).length > 0 ?
                    <React.Fragment>
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <div className="p-4">

                                </div>
                            </div>
                            <div className="card-body text-center">
                                <img src={props.selectedUser.picture.large} alt="" className="img-thumbnail rounded-circle w-50 contact-img"/>
                                <ul className="list-group mt-3">
                                    <li className="list-group-item list-group-item-secondary">
                                        <b>NAME :</b> {props.selectedUser.name.first} {props.selectedUser.name.last}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        {props.selectedUser.email}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        AGE : {props.selectedUser.dob.age} Yrs
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        City : {props.selectedUser.location.city}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        State : {props.selectedUser.location.state}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </React.Fragment> : null
            }
        </React.Fragment>
    );
};

export default ContactCard;