import { createStore, applyMiddleware } from "redux";
// import { CounterReducer } from "./Reducer";
import { Reducers } from "./Reducer";
import thunk from "redux-thunk";

export const Store = createStore(Reducers, applyMiddleware(thunk))