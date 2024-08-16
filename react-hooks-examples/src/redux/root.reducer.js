import { combineReducers } from "redux";
import { pizzahutreducer } from "../redux/Pizzahut/pizzahut.reducer";

let rootReducer = combineReducers({
    pizza : pizzahutreducer
});

export {rootReducer};