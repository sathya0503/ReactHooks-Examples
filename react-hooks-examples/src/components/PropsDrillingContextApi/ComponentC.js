import React from "react";

let ComponentC = (props) => {

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-warning text-white">
                                <p className="h4">ComponentC</p>
                                <pre>{JSON.stringify(props.userInfo)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ComponentC;