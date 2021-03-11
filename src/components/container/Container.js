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
import { changeLanguage } from "../../redux/language/languageActions";

const Container = (props) => {
  useEffect(() => {
    const storageLang = localStorage.getItem("TravelAppUserLanguageData78fe8a83ef752bd23c98c262b7264947");

    if (storageLang && storageLang !== props.language) {
      props.changeLanguage(storageLang);
    } else {
      localStorage.setItem("TravelAppUserLanguageData78fe8a83ef752bd23c98c262b7264947", props.language);
    }

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
    language: state.language.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: () => dispatch(fetchCountries()),
    changeLanguage: (lang) => dispatch(changeLanguage(lang))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
