import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

let ParentComponent = () => {

    let [parent, setparent] = useState({
        message: 'Hello, From Parent',
        wishMessage: ''
    });

    let receiveData = (data) => {
        setparent({
            ...parent,
            wishMessage: data
        })
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">Parent Component</p>
                                <p className="h4">From Child : {parent.wishMessage}</p>
                                <ChildComponent message={parent.message} sendData={receiveData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );


};

export default ParentComponent