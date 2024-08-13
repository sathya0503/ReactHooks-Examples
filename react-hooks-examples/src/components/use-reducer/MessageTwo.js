import React, { useState } from "react";

let MessageTwo = () => {

    let[message, setMessage] = useState('Hello')

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h3">function based with useState</p>
                            </div>
                            <div className="card-body">
                                <p className="h5">{message}</p>
                                <button onClick={e => setMessage('Good Morning')} className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={e => setMessage('Good Afternoon')} className="btn btn-secondary btn-sm">Good Afternoon</button>
                                <button onClick={e => setMessage('Good Evening')} className="btn btn-warning btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default MessageTwo;