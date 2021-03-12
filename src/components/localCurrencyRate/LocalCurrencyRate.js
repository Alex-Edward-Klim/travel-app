import React, { useEffect, useState } from "react";
import "./localCurrencyRate.scss"

function LocalCurrencyRate() {
    const [rusRubRate, setRusRubRate] = useState(0)

    // TODO: get country from /props?/
    // TODO: get currentCurrencyName from country
    let currentCurrencyName = "AUD";


    // if (currentCurrencyName === "EUR") {
    //     currentCurrencyRate = 1;
    // }
    useEffect(() => {
        let isMounted = true;
        fetch("https://api.openrates.io/latest").then(res => res.json()).then(data => {
            if (isMounted) {
                setRusRubRate(data.rates["RUB"]);
            }
        })
        
        return () => {isMounted = false};
      }, [])



    return(
        <div className="local-currency-rate">
            <h4>Currency rates</h4>
            <table></table>
            <p>
                {rusRubRate}
            </p>
        </div>
    )
}

export default LocalCurrencyRate;