import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

// console.log("Initial State: ", store.getState());

export default store;
