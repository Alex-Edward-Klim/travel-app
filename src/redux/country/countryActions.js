import { ADD_COUNTRY } from "./countryTypes";

// Action Creators

export const addCountry = (country) => ({
  type: ADD_COUNTRY,
  payload: country
});
