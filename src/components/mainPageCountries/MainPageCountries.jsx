import React from "react";
import "./mainPageCountries.scss";
import CountryCard from "../countryCard/CountryCard"

function MainPageCountries() {

  //todo const countriesCards = data.map((country, i) => <CountryCard key={i} ... />)

  return (
    <main className="mainPage-main">
      <div className="mainPage-main__container">
        <h2 className="mainPage-main__title">Countries</h2>
        <p className="mainPage-main__description">
          Everyone loves to travel. Someone goes on a trip looking forward to
          exciting adventures. For some, there is nothing better than new exotic
          dishes. Some have an irresistible attraction to cultural values.
          Others prefer to silently watch the sunset over the ocean. The reasons
          are different for everyone, but the countries are the same. We invite
          you to familiarize yourself with them
        </p>
        <div className="mainPage-main__countries countries-container">
          {
            //todo {countriesCards}
          }
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </div>
    </main>
  );
}

export default MainPageCountries;
