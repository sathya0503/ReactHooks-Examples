import React, { useState } from "react";

let Counter = () => {

    let [counter, setCounter] = useState(0);

    let updateCounter = () => {
        setCounter(counter+1)
    };

    
    return (
        <React.Fragment>
             <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Counter With useState</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">Counter: {counter}</p>
                                {/* Here we are creating new function to update counter */}
                                <button onClick={updateCounter} className="btn btn-success-color-dark btn-sm">Increment</button>

                                {/* Here Inside onClick itself we written anomous function to update counter value */}
                                <button onClick={()=>{setCounter(counter-1)}} className="btn btn-success-color-dark btn-sm">Decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </React.Fragment>
    );

};

export default Counter;