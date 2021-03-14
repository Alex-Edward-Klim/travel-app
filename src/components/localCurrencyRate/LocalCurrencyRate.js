import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./localCurrencyRate.scss"

function LocalCurrencyRate(props) {
    const currencyNameList = {
        EN: {
            USD: "US Dollar",
            EURO: "Euro",
            RusRub: "Russian Ruble",
            title: "Currency rates",
            Currency : "Currency",
            Course: "Course"
        },
        RU: {
            USD: "Доллар США",
            EURO: "Евро",
            RusRub: "Российский рубль",
            title: "Курс валют",
            Currency : "Валюта",
            Course: "Курс"
        },
        BE: {
            USD: "Долар ЗША",
            EURO: "Еўра",
            RusRub: "Расійскі рубель",
            title: "Курс валют",
            Currency: "Валюта",
            Course: "Курс"
        }
    }

    const [rusRubRate, setRusRubRate] = useState(1);
    const [usaDollarRate, setUsaDollarRate] = useState(1);
    const [localCurrencyRate, setLocalCurrencyRate] = useState(1);
    const [localCurrencyName, setLocalCurrencyName] = useState("");
    const euroRate = 1;

    const currentLanguage = useSelector((state) => state.language.language);

    useEffect(() => {
        if (props.country) {
            setLocalCurrencyName(props.country.currency)
        }
    },[])
    useEffect(() => {
        let isMounted = true;
        fetch("https://api.openrates.io/latest").then(res => res.json()).then(data => {
            if (isMounted) {
                setUsaDollarRate(data.rates["USD"]);
                setRusRubRate(data.rates["RUB"]);
                if (localCurrencyName === "EUR") {
                    setLocalCurrencyRate(1)
                } else {
                    setLocalCurrencyRate(data.rates[localCurrencyName]);
                }
            }
        })
        return () => {isMounted = false};
    }, [localCurrencyName])

    const toDollar =  Math.round((localCurrencyRate / usaDollarRate) * 1000) / 1000;
    const toEuro =  Math.round((localCurrencyRate / euroRate) * 1000) / 1000;
    const toRusRub =  Math.round((localCurrencyRate / rusRubRate) * 1000) / 1000;

    return (
      <div className="currency-rate">
        <h4 className="currency-rate__title">{currencyNameList[currentLanguage].title}</h4>
        <table className="currency-rate__table">
          <thead>
            <tr>
              <th>{currencyNameList[currentLanguage].Currency}</th>
              <th>{currencyNameList[currentLanguage].Course}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{currencyNameList[currentLanguage].USD}</th>
              <th>{toDollar}</th>
            </tr>
            <tr>
              <th>{currencyNameList[currentLanguage].EURO}</th>
              <th>{toEuro}</th>
            </tr>
            <tr>
              <th>{currencyNameList[currentLanguage].RusRub}</th>
              <th>{toRusRub}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default LocalCurrencyRate;