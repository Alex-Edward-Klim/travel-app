import { combineReducers } from "redux";

import countryReducer from "./country/countryReducer";
import languageReducer from "./language/languageReducer";

const rootReducer = combineReducers({
  countries: countryReducer,
  language: languageReducer
});

export default rootReducer;
