import React from "react";

class CounterClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            counter : 0
        }
    }


    incrementCounter = () => {
        this.setState({
            counter : this.state.counter + 1
        });
    };

    decrementCounter = () => {
        this.setState({
            counter : this.state.counter - 1
        });
    };

    render() {
        return (
            <React.Fragment>
                 <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Counter Class</p>
                                </div>
                                <div className="card-body">
                                    <p className="h2">Counter - {this.state.counter}</p>
                                    <button className="btn btn-secondary btn-sm" onClick={this.incrementCounter}>Increment</button>
                                    <button className="btn btn-secondary btn-sm" onClick={this.decrementCounter}>Decrement</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </React.Fragment>
        );
    };
}
export default CounterClass;