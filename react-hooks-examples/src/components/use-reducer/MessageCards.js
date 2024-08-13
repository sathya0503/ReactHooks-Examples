import React, { useReducer, useState } from "react";
import MessageOne from "./MessageOne";
import MessageTwo from "./MessageTwo";
import MessageThree from "./MessageThree";
import MessageFour from "./MessageFour";
import MessageFive from "./MessageFive";

let MessageCards = () => {


    return (
        <React.Fragment>
            <div className="container">
                <MessageOne />
                <MessageTwo />
                <MessageThree />
                <MessageFour />
                <MessageFive />
            </div>
        </React.Fragment>
    );

};

export default MessageCards;