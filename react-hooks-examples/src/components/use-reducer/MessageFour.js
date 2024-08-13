import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

let MessageFour = () => {

    let initialState = {
        message: 'Hello'
    }

    let reducer = (state = initialState, action) => {

        switch (action.type) {
            case 'gm':
                return {
                    message: 'Good Morning'
                }
            case 'ga':
                return {
                    message: 'Good Afetrnoon'
                }
            case 'ge':
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
                                <p className="h3">function based with useReducer - Action Reducer</p>
                            </div>
                            <div className="card-body">
                                <p className="h5">{state.message}</p>
                                <button onClick={e => dispatch({type : 'gm'})} className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={e => dispatch({type : 'ga'})} className="btn btn-secondary btn-sm">Good Afternoon</button>
                                <button onClick={e => dispatch({type : 'ge'})} className="btn btn-warning btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default MessageFour;