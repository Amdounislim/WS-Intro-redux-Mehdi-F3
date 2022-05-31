import { createStore } from "redux";
import rootReducer from "../reducers";
// import CounterReducer from "../reducers/CounterReducer";


// const store = createStore(CounterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store