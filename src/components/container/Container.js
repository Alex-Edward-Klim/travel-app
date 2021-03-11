import { useEffect } from "react";

import { connect } from "react-redux";

import { fetchCountries } from "../../redux/country/countryActions";

import { getCountriesFromState } from "../../redux/selectors";

// import TemporaryCountriesComponent from "../temporaryCountriesComponent/TemporaryCountriesComponent";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "../header/Header";
import MainPageCountries from "../mainPageCountries/MainPageCountries";
import SelectCountry from "../selectCountry/SelectCountry";
import Footer from "../footer/Footer";

const Container = (props) => {
  useEffect(() => {
    props.fetchCountries();
  }, []);

  return (
    <>
      {props.containerData.loading ? (
        <h1>Loading data from server...</h1>
      ) : props.containerData.error ? (
        <h1>{props.containerData.error}</h1>
      ) : (
        <>
          {/* <TemporaryCountriesComponent /> */}
          <BrowserRouter>
            <Header />
            <Switch>
              <Route render={() => <MainPageCountries />} path="/" exact/>
              <Route render={() => <SelectCountry />} path="/country/:name" />
            </Switch>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: getCountriesFromState(state),
    containerData: state.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: () => dispatch(fetchCountries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
