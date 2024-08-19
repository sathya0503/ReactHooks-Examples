import React from "react";

let ErrorCard = (props) => {

    console.log(props.errorStatus)
    return(
        <React.Fragment>
            <div className="container">
                        <div className="row">
                            <div className="col" style={{marginLeft:'40%'}}>
                                <div className="card-no-data">
                                    <div className="header1">
                                        <div className="image1"><svg aria-hidden="true" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" stroke-linejoin="round" stroke-linecap="round"></path>
                                        </svg></div>
                                        <div className="content1">
                                            <span className="title1">{props.errorStatus === '404' ? 'User Not Found' : 'Unknown Error'}</span>
                                            <p class="message1">Unable to fetch user details..!! Please check github username</p>
                                        </div>
                                        <div class="actions1">
                                            <button class="desactivate" type="button">Try again</button>
                                            <button class="cancel" type="button">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    );
};

export default ErrorCard;