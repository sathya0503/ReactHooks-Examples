import React from "react";
import ComponentFour from "./ComponentFour";

let ComponentThree = () =>{

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-info text-white">
                                <p className="h3">Component C</p>
                                <ComponentFour/>
                                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default ComponentThree;