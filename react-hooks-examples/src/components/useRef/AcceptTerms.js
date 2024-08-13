import React, { useRef, useState } from "react";

let AcceptTerms = () => {

    
    let submitBtnEle = useRef(null);

    let updateCheck = (event) => {
        submitBtnEle.current.disabled = !event.target.checked;
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <p className="h5">Please Agree our terms</p>
                                    <div className="form-check">
                                        <input name="terms" onChange={updateCheck} className="form-check-input" type="checkbox" value={''} id='defaultCheck1' />
                                        <label className="form-check-label" htmlFor="defaultCheck1">Term's & Conditions</label>
                                    </div>
                                    <input ref={submitBtnEle} type="submit" value="submit" className="btn btn-secondary btn-sm" disabled></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default AcceptTerms;