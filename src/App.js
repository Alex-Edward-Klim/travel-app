import React from "react";

import { Provider } from "react-redux";

import store from "./redux/store";

// import MainPageCountries from "./components/mainPageCountries/MainPageCountries";
import TemporaryCountriesComponent from "./components/temporaryCountriesComponent/TemporaryCountriesComponent";

function App() {
  return (
    <Provider store={store}>
      <>
        {/* <MainPageCountries /> */}
        <TemporaryCountriesComponent />
      </>
    </Provider>
  );
}

export default App;
