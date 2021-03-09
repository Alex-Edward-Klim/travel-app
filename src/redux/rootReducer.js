import { combineReducers } from "redux";

import countryReducer from "./country/countryReducer";

const rootReducer = combineReducers({
  countries: countryReducer
});

export default rootReducer;
