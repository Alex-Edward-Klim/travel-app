import React from "react";
import DateInCapital from "../dateInCapital/DateInCapital";
import LocalCurrencyRate from "../localCurrencyRate/LocalCurrencyRate";

function WidgetsWrapper(props) {
    console.log(props.country)
    // todo get data from json
    const countryInfo = {region: "Europe", capital: "Paris"}
    return(
        <div className="widgets-wrapper">
            {/* <DateInCapital /> */}
            <LocalCurrencyRate />
        </div>
    )
}

export default WidgetsWrapper;