import React, { useState } from "react";

let Register = () => {

    let [user, setUser] = useState({
        username : '',
        email : '',
        password : '',
        designation : '',
        terms : false
    });

    let updateInput = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }

    return (
        <React.Fragment>
             <div className="container">
                <pre>{JSON.stringify(user)}</pre>
                <div className="row">
                    <div className="col-m-6">
                        <div className="card m-4">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Registration</p>
                            </div>
                            <div className="card-body bg-light">
                                <form>
                                    <div className="form-group">
                                        <input name="username" onChange={updateInput} value={user.username} type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input name="email" onChange={updateInput} value={user.email} type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input name="password" onChange={updateInput} value={user.password} type="text" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <input name="designation" onChange={updateInput} value={user.designation} type="text" className="form-control" placeholder="Designation"/>
                                    </div>
                                    <div className="form-check">
                                        <input name="terms" onChange={updateInput} value={user.terms} type="checkbox" className="form-control"/>
                                        <label className="form-check-label">Agreeeeee</label>
                                    </div>
                                </form>
                                <button className="btn btn-warm-flame-gradient btn-sm">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </React.Fragment>
    );
};

export default Register;