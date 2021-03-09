import { ADD_COUNTRY } from "./countryTypes";

// Initial State
const initialState = {
  countries: []
};

// Reducer
const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        ...state,
        countries: [...state.countries, action.payload]
      };
    default:
      return state;
  };
};

export default countryReducer;
