/** @format */

import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getReducer } from "./reducers";

export default createStore(
	combineReducers({ getReducer }),
	composeWithDevTools(applyMiddleware(thunk))
);
