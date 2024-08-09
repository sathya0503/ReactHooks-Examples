import React from "react";
import ComponentThree from "./ComponentThree";

let ComponentTwo = () =>{

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-warning text-white">
                                <p className="h3">Component Two</p>
                                <ComponentThree/>
                                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default ComponentTwo;