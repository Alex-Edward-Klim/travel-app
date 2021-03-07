import React from "react";
import "./header.scss";
import langSrc from "../../images/icons/lang.png";
import logoHeaderSrc from "../../images/logo-green-travel.png";
import searchSrc from "../../images/icons/search.png";
import signInSrc from "../../images/icons/sign-in.png";
import signUpSrc from "../../images/icons/sign-up.png";

function Header() {
  // todo  state isSearchEnable
  // todo add state isLogged

  const langName = "RU";
  const searchPlaceholder = "Найти...";
  const signInValue = "Sign in";
  const signUpValue = "Sign up";

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left-wrapper">
          <div className="header__lang-wrapper">
            <img src={langSrc} alt="lang" className="header__lang-wrapper__img" />
            {langName}
          </div>
          <img alt="logo" src={logoHeaderSrc} className="header__logo"/>
        </div>
        <div className="header__search">
          <input
            className="header__search__input"
            placeholder={searchPlaceholder}
          />
          <button className="header__search__btn">
            <img alt="search" src={searchSrc} />
          </button>
        </div>
        <div className="header__log-in">
          <a href="#" className="header__log-in__link">
            <img
              alt="sign-in"
              src={signInSrc}
              className="header__log-in__sign-in"
            />
            {signInValue}
          </a>
          <a href="#" className="header__log-in__link">
            <img
              alt="sign-in"
              src={signUpSrc}
              className="header__log-in__sign-up"
            />
            {signUpValue}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
