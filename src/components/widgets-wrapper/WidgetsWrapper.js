import React from "react";
import { useSelector } from "react-redux";
import DateInCapital from "../dateInCapital/DateInCapital";
import LocalCurrencyRate from "../localCurrencyRate/LocalCurrencyRate";
import Weather from "../weather/Weather";


function WidgetsWrapper(props) {
  const countriesList = useSelector((state) => state.countries.countries);
  const currentCountry = countriesList.find(
    (el) => el.localizations.EN.name === props.country
  );
  return (
    <div className="widgets-wrapper">
      <DateInCapital country={currentCountry} />
      <LocalCurrencyRate country={currentCountry}/>
      <Weather country={currentCountry}/>
    </div>
  );
}
 
export default WidgetsWrapper;
