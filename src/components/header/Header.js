import React from "react";
import "./header.scss";
import langSrc from "../../images/icons/lang.png";
import logoHeaderSrc from "../../images/logo-green-travel.png";
import searchSrc from "../../images/icons/search.png";
import signInSrc from "../../images/icons/sign-in.png";
import signUpSrc from "../../images/icons/sign-up.png";
import logOutSrc from "../../images/icons/log-out.png";
import userDefaultAvatar from "../../images/icons/user-default-avatar.png";


function Header() {
  const isSearchEnable = true;
  // todo: isSearchEnable from props

  const isLogged = true;
  // todo: isLogged from props

  const userName = "User";
  // todo: userName from props if !== undefind

  const langName = "EN";
  const searchPlaceholder = "Search...";
  const signInValue = "Sign in";
  const signUpValue = "Sign up";
  const logOutValue = "Log out";

  const search = (
    <div className="header__search">
      <input
        className="header__search__input"
        placeholder={searchPlaceholder}
      />
      <button className="header__search__btn">
        <img alt="search" src={searchSrc} />
      </button>
    </div>
  );

  const logIn = (
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
  );

  const logOut = (
    <div className="header__log-in">
      <a href="#" className="header__log-in__link">
        <img
          alt="sign-in"
          src={userDefaultAvatar}
          className="header__log-in__sign-in"
        />
        {userName}
      </a>
      <a href="#" className="header__log-in__link">
        <img
          alt="sign-in"
          src={logOutSrc}
          className="header__log-in__sign-up"
        />
        {logOutValue}
      </a>
    </div>
  );

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

        {isSearchEnable && search}
        
        {isLogged ? logOut : logIn}
      </div>
    </header>
  );
}

export default Header;