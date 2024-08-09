import React, { useContext } from "react";
import UserContext from "./UserContext";

let ComponentFour = () => {

    let userInfo = useContext(UserContext);

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-primary text-white">
                                <p className="h3">Component D</p>
                                <pre>{JSON.stringify(userInfo)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default ComponentFour;