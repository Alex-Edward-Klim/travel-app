import React from "react";
import DateInCapital from "../dateInCapital/DateInCapital";
import LocalCurrencyRate from "../localCurrencyRate/LocalCurrencyRate";

function Widgets() {
    // todo get data from json
    const countryInfo = {region: "Europe", capital: "Paris"}
    return(
        <div className="widgets">
            <DateInCapital countryInfo={countryInfo}/>
            <LocalCurrencyRate />
        </div>
    )
}

export default Widgets;