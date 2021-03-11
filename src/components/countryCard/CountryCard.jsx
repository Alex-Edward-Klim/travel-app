import React from "react";
import "./countryCard.scss";
import { NavLink } from "react-router-dom";

function CountryCard({name, capital, imgUrl, id}) {
  return (
    <NavLink to={`/country/${id}`} >
      <div className="countryCard" style={{backgroundImage: `url(${imgUrl})`}}>
        <h3 className="countryCard__title">{`${name}, ${capital}`}</h3>
      </div>
    </NavLink>
  )
}

export default CountryCard;