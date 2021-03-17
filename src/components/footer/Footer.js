import React from "react";
import "./footer.scss";
import logoSrc from "../../images/rs_school_js.svg";
import { useSelector } from "react-redux";
import { getLanguageFromState } from "../../redux/selectors";

function Footer() {
  
  const currentLanguage = useSelector(getLanguageFromState);
  const authors = {
    EN: {
      Yaroslav: "Yaroslav Trefilov",
      Aleksey: "Aleksey Klimovskoy",
      Iurii: "Iurii Oleinik",
      Anna: "Anna Korytko",
    },
    RU: {
      Yaroslav: "Ярослав Трефилов",
      Aleksey: "Алексей Климовской",
      Iurii: "Юрий Олейник",
      Anna: "Анна Корытько",
    },
    BE: {
      Yaroslav: "Яраслаў Трафілаў",
      Aleksey: "Аляксей Клімаўской",
      Iurii: "Юрый Алейнік",
      Anna: "Ганна Карыцька",
    },
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__logo" href="https://rs.school/js/">
          <img className="footer__logo__img" alt="rs school" src={logoSrc} />
        </a>
        <p className="footer__authors">
          {currentLanguage === "EN" && <span>by</span>}
          <a href="https://github.com/Alex-Edward-Klim">
            {" "}
            {authors[currentLanguage].Aleksey}
          </a>
          ,
          <a href="https://github.com/korytsa">
            {" "}
            {authors[currentLanguage].Anna}
          </a>
          ,
          <a href="https://github.com/YaroslavTrefilov">
            {" "}
            {authors[currentLanguage].Yaroslav}
          </a>
          ,
          <a href="https://github.com/NachinkaShaurmi">
            {" "}
            {authors[currentLanguage].Iurii}
          </a>
        </p>
        <a className="footer__rss" href="https://rs.school/js/">
          <p>RS School</p>
          <p>2021</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
