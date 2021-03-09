import React from "react";
import "./dateInCapital.scss";

function DateInCapital(props) {
  const { region, capital } = props.countryInfo;

  const currentTimeZone = { timeZone: `${region}/${capital}` };

  const [month, date, year] = new Date()
    .toLocaleDateString("en-US", currentTimeZone)
    .split("/");

  const [hour, minute] = new Date()
    .toLocaleTimeString("en-US", currentTimeZone)
    .split(/:| /);

  const addZero = (n) => {
    return (n < 10 ? "0" : "") + n;
  };

  const capitalTitle = <p className="date-in-capital__item">{capital}</p>;
  const capitalDate = (
    <p className="date-in-capital__item">
      Date: {addZero(date)}.{addZero(month)}.{year}
    </p>
  );
  const capitalTime = (
    <p className="date-in-capital__item">
      Time: {addZero(hour)}:{addZero(minute)}
    </p>
  );

  return (
    <div className="date-in-capital">
      {capitalTitle}
      {/* add zero before number in time and in date*/}
      {capitalDate}
      {capitalTime}
    </div>
  );
}

export default DateInCapital;
