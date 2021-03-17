import React from "react";
import "./mainPageCountries.scss";
import { useSelector } from "react-redux";
import CountryCard from "../countryCard/CountryCard";
import {
  getLanguageFromState,
  getCountriesFromState,
  getSearchFromState,
} from "../../redux/selectors";

function MainPageCountries() {
  let countries = useSelector(getCountriesFromState);
  const language = useSelector(getLanguageFromState);
  const searchValue = useSelector(getSearchFromState).toLowerCase();

  countries = countries.filter(
    (el) =>
      el.localizations[language].name.toLowerCase().includes(searchValue) ||
      el.localizations[language].capital.toLowerCase().includes(searchValue)
  );
  let title = "Countries";
  let text =
    "Everyone loves to travel. Someone goes on a trip looking forward to exciting adventures. For some, there is nothing better than new exotic dishes. Some have an irresistible attraction to cultural values. Others prefer to silently watch the sunset over the ocean. The reasons are different for everyone, but the countries are the same. We invite you to familiarize yourself with them";

  language === "RU"
    ? (text =
        "Все любят путешествовать. Кто-то отправляется в путешествие, предвкушая захватывающие приключения. Для некоторых нет ничего лучше новых экзотических блюд. Некоторые испытывают непреодолимое влечение к культурным ценностям. Другие предпочитают молча наблюдать закат над океаном. Причины у всех разные, но страны одинаковые. Приглашаем вас ознакомиться с ними")
    : language === "EN"
    ? (text =
        "Everyone loves to travel. Someone goes on a trip looking forward to exciting adventures. For some, there is nothing better than new exotic dishes. Some have an irresistible attraction to cultural values. Others prefer to silently watch the sunset over the ocean. The reasons are different for everyone, but the countries are the same. We invite you to familiarize yourself with them")
    : (text =
        "Усе любяць падарожнічаць. Хтосьці адпраўляецца ў падарожжа з нецярпеннем ад захапляльных прыгод. Для некаторых няма нічога лепш, чым новыя экзатычныя стравы. Некаторых неадольна цягне да культурных каштоўнасцей. Іншыя аддаюць перавагу моўчкі назіраць за захадам сонца над акіянам. Прычыны ва ўсіх розныя, але краіны аднолькавыя. Мы запрашаем вас азнаёміцца з імі");

  language === "RU"
    ? (title = "Страны")
    : language === "EN"
    ? (title = "Countries")
    : (title = "Краіны");

  const countriesCards = countries.map((country, i) => {
    const name =
      language === "RU"
        ? country.localizations.RU.name
        : language === "EN"
        ? country.localizations.EN.name
        : country.localizations.BE.name;

    const capital =
      language === "RU"
        ? country.localizations.RU.capital
        : language === "EN"
        ? country.localizations.EN.capital
        : country.localizations.BE.capital;

    return (
      <CountryCard
        key={i}
        name={name}
        capital={capital}
        imgUrl={country.firstImageUrl}
        id={country.localizations.EN.name}
      />
    );
  });
  return (
    <main className="mainPage-main">
      <div className="mainPage-main__container">
        <h2 className="mainPage-main__title">{title}</h2>
        <p className="mainPage-main__description">{text}</p>
        <div className="mainPage-main__countries countries-container">
          {countriesCards}
        </div>
      </div>
    </main>
  );
}

export default MainPageCountries;
