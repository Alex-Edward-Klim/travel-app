import React, { useEffect, useState } from "react";
import "./selectCounty.scss";
import { useParams } from "react-router-dom";

import Map from "../map/Map";
import WidgetsWrapper from "../widgets-wrapper/WidgetsWrapper"
import { useSelector } from "react-redux";

function SelectCountry() {
  const pr = useParams();

  const [country, setCountry] = useState();
  const [capital, setCapital] = useState();
  const [description, setDescription] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const currentLanguage = useSelector((state) => state.language.language);

  const countriesList = useSelector((state) => state.countries.countries);
  const currentCountry = countriesList.find(
    (el) => el.localizations.EN.name === pr.name
  );

  useEffect(() => {
    if (currentCountry) {
      setCapital(currentCountry.localizations[currentLanguage].capital);
      setCountry(currentCountry.localizations[currentLanguage].name);
      setDescription(currentCountry.localizations[currentLanguage].description);
      setVideoUrl(currentCountry.videoUrl);
    }
  })
  const infoTitle =
    currentLanguage === "RU"
      ? `Немного информации о стране ${country}`
      : currentLanguage === "EN"
      ? `Some information about ${country}`
      : currentLanguage === "BE"
      ? `Трохі інфармацыі пра краіну ${country}`
      : false;

  return (
    <div className="country-page">
      <div className="country-page__container">
        <section className="country-page__intro">
          <h1 className="country-page__intro__country">{country}</h1>
          <h2 className="country-page__intro__capital">{capital}</h2>
          <div className="country-page__intro__images">
            {currentCountry && (
              <img
                src={currentCountry.firstImageUrl}
                alt="country frist img"
                className="country-page__intro__images__first"
              />
            )}
            {currentCountry && (
              <img
                src={currentCountry.secondImageUrl}
                alt="country second img"
                className="country-page__intro__images__second"
              />
            )}
          </div>
        </section>
        <section className="country-page__info">
          <h1 className="country-page__info__title">{infoTitle}</h1>
          <div className="country-page__info__content">
            <div className="country-page__info__left">
              <p className="country-page__info__left__text">{description}</p>
              <div>
                {currentCountry && (
                  <iframe
                    className="country-page__info__left__video"
                    src={videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
            <div className="country-page__info__right">
              <WidgetsWrapper country={pr.name} />
            </div>
          </div>
        </section>
        <div className="map">
          <Map name={pr.name} />
        </div>
      </div>
    </div>
  );
}

export default SelectCountry;