import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import additionReducer from "./additionReducer";



const rootReducer = combineReducers({ CounterReducer, additionReducer })
export default rootReducer