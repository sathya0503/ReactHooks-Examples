import { BUY_PIZZA } from "./pizzahut.actionTypes";


let buyPizza = () => {

    return({
        type : BUY_PIZZA,
        payload : "Purchase a Pizza"
    });
};

export {buyPizza};