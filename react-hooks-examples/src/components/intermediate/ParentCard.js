import React, { useState } from "react";
import ChildCard from "./ChildCard";

let ParentCard = () => {

    let [parent , setParent] = useState({
        pMessage : '',
        cText : ''
    });

    let updateMessage = (event) => {
        setParent({
            ...parent,
            pMessage : event.target.value
        });
    };

    let receiveData = (data) => {
        setParent({
            ...parent,
            cText : data
        });
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">Parent Card</p>
                            </div>
                            <div className="card-body">
                                <form className="form-inline">
                                    <div className="form-group">
                                        <input 
                                        value={parent.pMessage}
                                        onChange={updateMessage}
                                        type="text" className="form-control" placeholder="Type something dude...!!"></input>
                                    </div>
                                </form>
                                <br></br>
                                <p>Form Child : {parent.cText}</p>
                                <ChildCard pMessage={parent.pMessage} sendData={receiveData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ParentCard;