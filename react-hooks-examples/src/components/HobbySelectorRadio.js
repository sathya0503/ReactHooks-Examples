import React, { useState } from "react";

let HobbySelectorRadio = () => {

    let [hobby, setHobby] = useState(null)

    let updateCheck = (event) => {
        setHobby(event.target.value);
    };

    return (
        <React.Fragment>
             <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                            <pre>{JSON.stringify(hobby)}</pre>
                                <p className="h4">HobbySelector Radio buttons</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <form>
                                            <div className="form-check">
                                                <input name="hobby" onChange={updateCheck} className="form-check-input" type="radio" value={'eating'} id='flexRadioDefault1'/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">Eating</label>
                                            </div>
                                            <div className="form-check">
                                                <input name="hobby" onChange={updateCheck} className="form-check-input" type="radio" value={'coding'} id='flexRadioDefault2'/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">Coding</label>
                                            </div>
                                            <div className="form-check">
                                                <input name="hobby" onChange={updateCheck} className="form-check-input" type="radio" value={'sleeping'} id='flexRadioDefault3'/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">Sleeping</label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-9">
                                        {
                                            hobby==='eating' ? 
                                            <React.Fragment>
                                                <div className="card animated jello">
                                                    <div className="card-body bg-success text-white">
                                                        <p className="h3">Eating</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                        {
                                            hobby==='coding' ? 
                                            <React.Fragment>
                                                <div className="card animated jello">
                                                    <div className="card-body bg-primary text-white">
                                                        <p className="h3">Coding</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                        {
                                            hobby==='sleeping' ? 
                                            <React.Fragment>
                                                <div className="card animated jello">
                                                    <div className="card-body bg-warning text-white">
                                                        <p className="h3">Sleeping</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </React.Fragment>
    );

};

export default HobbySelectorRadio;