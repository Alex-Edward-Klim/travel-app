import { useEffect, useState } from "react";

import { connect } from "react-redux";

import { fetchCountries } from "../../redux/country/countryActions";

import { getCountriesFromState } from "../../redux/selectors";

// import TemporaryCountriesComponent from "../temporaryCountriesComponent/TemporaryCountriesComponent";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "../header/Header";
import MainPageCountries from "../mainPageCountries/MainPageCountries";
import SelectCountry from "../selectCountry/SelectCountry";
import Footer from "../footer/Footer";
import { changeLanguage } from "../../redux/language/languageActions";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import Signup from "../signup/Signup";
import Login from "../login/Login";

const Container = (props) => {

  const [user, setUser] = useState({
    name: "Guest",
    password: "12345",
    photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAe1BMVEX09PQAAADMzMzv7+/x8fH09PT09PT09PT19fXv7+/R0dH39/fv7+/y8vLz8/Pk5OTq6urOzs7l5eXn5+fy8vL19fXf39/y8vL19fX09PTw8PD09PT////T09PW1tbZ2dnz8/PU1NTy8vL39/f29vb09PT6+vrX19fu7u6uPoeTAAAAKXRSTlP/AP///7/fj98Q/yAg30D///////+v/1BPz/8wEP///5D/YD+PXy///5YuCBIAAAFlSURBVHicjZTreoIwDIYDUhA5gwgIynS67f6vcD1Rmrbw+P0jfcmhTQKerun5GrIgCDLy6hJ0onM5AV1t5+QMiuk4Wtz0ZVFMUYy55OjEqEuZpuA2MQVybgdbQMZNexgFWY6Mc5egFSO4ERnPl1v1uFyRLeccino4+Uyng24kjOvQrzPHfP9uOASvRe4k5vsoMvEgQT82imuQPQYctlBcjexviD7iIsBdssUNkH2UXwYB+l7r/UP2wODgLrFfbLY453swDudHwbnyq9nAKDUYFqqzbSLG/UFQ1kVRNKWRTgRP3VF9U/U+at1tT19u7bxKUbwWrQtT8JYHKUWliCzlWUv7KpcYdiZUSbBn/SwcrpnpEu0a8r4XDu2oPDI/+xHzxq/menBKmzcvDu2L1RQu8+ule2CYrvtlBxTYsq82QYmp/Rcb7yxl7j+q0XZJvp37uUcjr1OYo2n2EQnpvg+H6L1EFPoHQIMOjb6N6SUAAAAASUVORK5CYII="
  });

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
            <ScrollToTop />
            <Header user={user} setUser={setUser} />
            <Switch>
              <Route render={() => <MainPageCountries />} path="/" exact/>
              <Route render={() => <SelectCountry user={user} />} path="/country/:name" />
              <Route render={() => <Login setUser={setUser} />} path="/login" />
              <Route render={() => <Signup setUser={setUser} />} path="/signup" />
              <Route path="*" render={() => <Redirect to="/" />} />
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
