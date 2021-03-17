import axios from "axios";

import { FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS } from "./countryTypes";

// Action Creators

export const fetchCountriesRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST,
});

export const fetchCountriesSuccess = (countries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries
});

export const fetchCountriesFailure = (err) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: err
});

export const fetchCountries = () => (dispatch) => {

  dispatch(fetchCountriesRequest());

  axios.get("https://travel-app-server-2021.herokuapp.com/countries")
    .then(res => {
      const countries = res.data;
      dispatch(fetchCountriesSuccess(countries));
    })
    .catch(err => {
      const errMessage = err.message;
      dispatch(fetchCountriesFailure(errMessage));
    });
};
