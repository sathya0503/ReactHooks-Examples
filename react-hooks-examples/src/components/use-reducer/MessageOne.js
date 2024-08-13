import React from "react";

class MessageOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message : 'Hello'
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-info text-white">
                                    <p className="h3">Class based Component</p>
                                </div>
                                <div className="card-body">
                                    <p className="h5">{this.state.message}</p>
                                    <button onClick={e => this.setState({message : 'Good Morning'})} className="btn btn-success btn-sm">Good Morning</button>
                                    <button onClick={e => this.setState({message : 'Good Afternoon'})} className="btn btn-secondary btn-sm">Good Afternoon</button>
                                    <button onClick={e => this.setState({message : 'Good Evening'})} className="btn btn-warning btn-sm">Good Evening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

}

export default MessageOne;