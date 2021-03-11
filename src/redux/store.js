// import { applyMiddleware, createStore } from "redux";
import { createStore } from "redux";

// import logger from "redux-logger";
// import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

// const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const store = createStore(rootReducer);

//
// console.log("Initial State: ", store.getState());

export default store;
