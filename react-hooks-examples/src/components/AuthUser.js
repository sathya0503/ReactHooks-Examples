import React, { useState } from "react";

let AuthUser = () => {
    let [loggedIn, setLoggedIn] = useState(false);
    
    let login = () => {
        setLoggedIn(true)
    };

    let logout = () => {
        setLoggedIn(false)
    };

    return (
        <React.Fragment>
             <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">AuthUser Example</p>
                            </div>
                            <div className="card-body">
                                {
                                    !loggedIn ? 
                                    <button onClick={login} className="btn btn-success btn-sm">Login</button> :
                                    <button onClick={logout} className="btn btn-warning btn-sm">Logout</button>

                                }
                                {
                                    loggedIn ?
                                    <p className="h3">Helo Maya</p> :
                                    <p className="h3">Welcome Guest</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </React.Fragment>
    );
};

export default AuthUser;