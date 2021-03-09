import React from "react";
import DateInCapital from "../dateInCapital/DateInCapital";

function WidgetsWrapper() {
    // todo get data from json
    const countryInfo = {region: "Europe", capital: "Paris"}
    return(
        <div className="widgets-wrapper">
            <DateInCapital countryInfo={countryInfo}/>
        </div>
    )
}

export default WidgetsWrapper;