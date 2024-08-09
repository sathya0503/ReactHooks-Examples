import React, { useState } from "react";
import ComponentTwo from "./ComponentTwo";
import UserContext from "./UserContext";

let ComponentOne = () => {

    let [app, setApp] = useState({
        userInfo: {
            author: 'Sathya',
            channel: 'Something new'
        }
    });

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-secondary text-white">
                                <p className="h3">Component One</p>
                                <pre>{JSON.stringify(app.userInfo)}</pre>
                                <UserContext.Provider value={app.userInfo}>
                                    <ComponentTwo />
                                </UserContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default ComponentOne;