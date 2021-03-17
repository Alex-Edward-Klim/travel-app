import { combineReducers } from "redux";

import countryReducer from "./country/countryReducer";
import languageReducer from "./language/languageReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  countries: countryReducer,
  language: languageReducer,
  search: searchReducer
});

export default rootReducer;
