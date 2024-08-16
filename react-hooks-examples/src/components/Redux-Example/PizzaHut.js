import React, { useState } from "react";
import pizzaimg from '../../assets/img/pizza.jpg'
import { useDispatch, useSelector } from "react-redux";
import { buyPizza } from "../../redux/Pizzahut/pizzahut.actions";

let PizzaHut = () => {

    let dispatch = useDispatch();

    let pizzaInfo = useSelector((state) => {
        return state['pizza'];
    })

    let clickBuyPizza = () => {
        dispatch(buyPizza());
    }

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-danger">Pizza Hut</p>
                            <p className="lead">Some text need to be paste here</p>
                        </div>
                    </div>
                </div>
            </section>
            <search className="p-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <img src={pizzaimg} alt="" className="img-fluid img-thumbnail"></img>
                        </div>
                        <div className="col-md-7">
                            <p className="h2 text-danger">Chicken Pizza</p>
                            <p className="h4">Available :
                                <span className="font-weight-bold">{pizzaInfo.count}</span>
                            </p>
                            <button onClick={clickBuyPizza} className="btn btn-success btn-sm">Buy</button>
                            <p className="lead">Some desc about pizza</p>
                        </div>
                    </div>
                </div>
            </search>
        </React.Fragment>
    );

};

export default PizzaHut;