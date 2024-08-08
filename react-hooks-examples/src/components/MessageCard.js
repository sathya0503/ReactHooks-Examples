import React, { useState } from "react";

let MessageCard = () => {

    let [message, setMessage] = useState('Hello')

    let updateMessage =()=> {
        setMessage('Good Morning')
    };

    return (
        <React.Fragment>
             <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Message Card</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">{message}</p>                                
                                <button onClick={updateMessage} className="btn btn-success btn-sm">Good Morning</button>
                                {/* If function was less we can direct wirte inside like below... */}
                                <button onClick={()=>{setMessage('Good Afternoon')}} className="btn btn-primary btn-sm">Good Afternoon</button>
                                <button onClick={()=>{setMessage( 'Good Evening')}} className="btn btn-warm-flame-gradient btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </React.Fragment>
    );
};

export default MessageCard;