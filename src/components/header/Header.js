import React, { useEffect, useState } from "react";
import "./header.scss";
import langSrc from "../../images/icons/lang.png";
import logoHeaderSrc from "../../images/logo-green-travel.png";
import searchSrc from "../../images/icons/search.png";
import clearSrc from "../../images/icons/clear.png";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../redux/language/languageActions";
import { changeSearchToValue, changeSearchToEmpty } from "../../redux/search/searchActions";
import { getLanguageFromState, getSearchFromState } from "../../redux/selectors";
import { useHistory, useLocation } from "react-router";

function Header(props) {
  const language = useSelector(getLanguageFromState);
  const searchValue = useSelector(getSearchFromState);
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();	
  
  useEffect(() => {
    const userData = localStorage.getItem(
      "TravelAppUser78fe8a83ef752bd23c98c262b7264947"
    );
    if (userData) {
      props.setUser(JSON.parse(userData));
    }
  }, []);

  const searchField = React.useRef(null);
  useEffect (()=> {
    if (searchField.current !== null) {
      searchField.current.focus()
    }
  }, [language])

  const [isSearchEnable, setIsSearchEnable] = useState(null);
  useEffect(() => {
    location.pathname === "/"
      ? setIsSearchEnable(true)
      : setIsSearchEnable(false);
    }, [location.pathname]);
    
  const searchPlaceholder =
    language === "EN"
      ? "Search..."
      : language === "RU"
      ? "Поиск..."
      : "Пошук...";

  const search = (
    <div className="header__search">
      <input
        ref={searchField}
        autoFocus
        className="header__search__input"
        placeholder={searchPlaceholder}
        value={searchValue}
        onChange={(e) => {
          dispatch(changeSearchToValue(e.target.value))
        }}
      />
      <button className="header__search__btn">
        <img alt="search" src={searchSrc} />
      </button>
      <button className="header__search__btn" onClick={() => dispatch(changeSearchToEmpty())}>
        <img alt="clear" src={clearSrc} width='25' height='25' />
      </button>

    </div>
  );

  const multiLanguageMessages = {
    EN: {
      "Log In": "Log In",
      "Log Out": "Log Out",
    },
    RU: {
      "Log In": "Войти",
      "Log Out": "Выйти",
    },
    BE: {
      "Log In": "Увайсці",
      "Log Out": "Выйсці",
    },
  };

  const handleLogOut = () => {
    const guest = {
      name: "Guest",
      password: "12345",
      photo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAe1BMVEX09PQAAADMzMzv7+/x8fH09PT09PT09PT19fXv7+/R0dH39/fv7+/y8vLz8/Pk5OTq6urOzs7l5eXn5+fy8vL19fXf39/y8vL19fX09PTw8PD09PT////T09PW1tbZ2dnz8/PU1NTy8vL39/f29vb09PT6+vrX19fu7u6uPoeTAAAAKXRSTlP/AP///7/fj98Q/yAg30D///////+v/1BPz/8wEP///5D/YD+PXy///5YuCBIAAAFlSURBVHicjZTreoIwDIYDUhA5gwgIynS67f6vcD1Rmrbw+P0jfcmhTQKerun5GrIgCDLy6hJ0onM5AV1t5+QMiuk4Wtz0ZVFMUYy55OjEqEuZpuA2MQVybgdbQMZNexgFWY6Mc5egFSO4ERnPl1v1uFyRLeccino4+Uyng24kjOvQrzPHfP9uOASvRe4k5vsoMvEgQT82imuQPQYctlBcjexviD7iIsBdssUNkH2UXwYB+l7r/UP2wODgLrFfbLY453swDudHwbnyq9nAKDUYFqqzbSLG/UFQ1kVRNKWRTgRP3VF9U/U+at1tT19u7bxKUbwWrQtT8JYHKUWliCzlWUv7KpcYdiZUSbBn/SwcrpnpEu0a8r4XDu2oPDI/+xHzxq/menBKmzcvDu2L1RQu8+ule2CYrvtlBxTYsq82QYmp/Rcb7yxl7j+q0XZJvp37uUcjr1OYo2n2EQnpvg+H6L1EFPoHQIMOjb6N6SUAAAAASUVORK5CYII=",
    };
    localStorage.setItem(
      "TravelAppUser78fe8a83ef752bd23c98c262b7264947",
      JSON.stringify(guest)
    );
    props.setUser(guest);
  };

  const logIn = (
    <div className="header__user">
      <div>{props.user.name}</div>
      <img className="header__userphoto" alt="" src={props.user.photo} />
      {props.user.name === "Guest" ? (
        <button onClick={() => history.push("/login")}>
          {multiLanguageMessages[language]["Log In"]}
        </button>
      ) : (
        <button onClick={handleLogOut}>
          {multiLanguageMessages[language]["Log Out"]}
        </button>
      )}
    </div>
  );

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left-wrapper">
          <div className="header__lang-wrapper">
            <img
              src={langSrc}
              alt="lang"
              className="header__lang-wrapper__img"
            />
            <select
              value={language}
              id="language"
              onChange={(e) => {
                localStorage.setItem(
                  "TravelAppUserLanguageData78fe8a83ef752bd23c98c262b7264947",
                  e.target.value
                );
                dispatch(changeLanguage(e.target.value));
              }}
            >
              <option value="EN">EN</option>
              <option value="RU">RU</option>
              <option value="BE">BE</option>
            </select>
          </div>
          <img alt="logo" src={logoHeaderSrc} className="header__logo" />
        </div>

        {isSearchEnable && search}

        {logIn}
      </div>
    </header>
  );
}

export default Header;
