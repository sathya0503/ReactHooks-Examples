import React, { useReducer, useState } from "react";

//Action Types
const GOOD_MORNING = 'GOOD MORNING';
const GOOD_AFTERNOON = 'GOOD AFTERNOON';
const GOOD_EVENING = 'GOOD EVENING';

//Actions
let sayGoodMrng = () => {
    return{
        type : GOOD_MORNING
    }
};

let sayGoodAfternoon = () => {
    return{
        type : GOOD_AFTERNOON
    }
};

let sayGoodEvening = () => {
    return{
        type :GOOD_EVENING
    } 
};


let MessageFive = () => {

    let initialState = {
        message: 'Hello'
    }

    let reducer = (state = initialState, action) => {

        switch (action.type) {
            case GOOD_MORNING:
                return {
                    message: 'Good Morning'
                }
            case GOOD_AFTERNOON:
                return {
                    message: 'Good Afetrnoon'
                }
            case GOOD_EVENING:
                return {
                    message: 'Good evening'
                }
            default : return state;    
        }

    };

    let [state, dispatch] = useReducer(reducer, initialState);
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-danger text-white">
                                <p className="h3">function based with useReducer - Redux Way</p>
                            </div>
                            <div className="card-body">
                                <p className="h5">{state.message}</p>
                                <button onClick={e => dispatch(sayGoodMrng())} className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={e => dispatch(sayGoodAfternoon())} className="btn btn-secondary btn-sm">Good Afternoon</button>
                                <button onClick={e => dispatch(sayGoodEvening())} className="btn btn-warning btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default MessageFive;