import React, { useState } from "react";

let ChildComponent = (props) => {

    let [child, setChild] = useState({
        wishMessage : 'Hello, From Child'
    });

    let clickButton = () => {
        props.sendData(child.wishMessage)
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <p className="h4">Child Component</p>
                                <span className="">{props.message}</span>
                                <br/>
                                <p>By clicking this button child message send to Parent Component</p>
                                <button className="btn btn-primary btn-sm" onClick={clickButton}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default ChildComponent;