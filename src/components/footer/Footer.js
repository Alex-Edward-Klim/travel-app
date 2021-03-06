import React from "react";
import "./footer.scss" 
import logoSrc from "../../images/rs_school_js.svg";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__container">
                <a className="footer__logo" href="https://rs.school/js/">
                    <img className="footer__logo__img" alt="rs school" src={logoSrc} />
                </a>
                <p className="footer__authors">
                    <span>by</span>
                    <a href="https://github.com/Alex-Edward-Klim"> Aleksey Klimovskoy</a>,
                    <a href="https://github.com/korytsa"> Anna Korytko</a>,
                    <a href="https://github.com/YaroslavTrefilov"> Yaroslav Trefilov</a>,
                    <a href="https://github.com/NachinkaShaurmi"> Iurii Oleinik</a>
                </p>
                <a className="footer__rss" href="https://rs.school/js/">
                    <p>RS School</p>
                    <p>2021</p>
                </a>
            </div>
        </footer>
    )
}

export default Footer;