import React, { useState } from "react";

let ChildCard =(props) => {

    let [child, setChild] = useState({
        cMessage : ''
    });

    let updateInput = (event) => {
        setChild({
            ...child,
            cMessage : event.target.value
        });
        props.sendData(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Child Card</p>
                            </div>
                            <div className="card-body">
                                <form className="form-inline">
                                    <div className="form-group">
                                        <input 
                                        value={child.cMessage}
                                        onChange={updateInput}
                                        type="text" className="form-control"></input>
                                    </div>
                                </form>
                                <p>Form Parent: {props.pMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default ChildCard;