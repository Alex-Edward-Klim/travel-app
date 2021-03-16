import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanguageFromState } from "../../redux/selectors";
import { changeLanguage } from "../../redux/language/languageActions";
import "./selectLanguage.scss";

function SelectLanguage() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector(getLanguageFromState);
  

  const select = useRef(null);

  const openOptions = () => {
    setIsOpen(true);
    select.current.classList.add("select-wrapper__hidden");
  };
  const closeOption = () => {
    setIsOpen(false);
    select.current.classList.remove("select-wrapper__hidden");
  };

  const changeSelectValue = (e) => {
    const value = e.target.innerText;

    localStorage.setItem(
        "TravelAppUserLanguageData78fe8a83ef752bd23c98c262b7264947",
        value
      );
    dispatch(changeLanguage(value));


    closeOption();
  };
  
  const customSelect = (
    <div className="select-wrapper__custom-wrapper">
      <div
        className="select-wrapper__custom-wrapper__item"
        onClick={changeSelectValue}
      >
        EN
      </div>
      <div
        className="select-wrapper__custom-wrapper__item"
        onClick={changeSelectValue}
      >
        RU
      </div>
      <div
        className="select-wrapper__custom-wrapper__item"
        onClick={changeSelectValue}
      >
        BE
      </div>
    </div>
  );

  return (
    <div className="select-wrapper">
      <select
        value={language}
        id="language"
        className="select-wrapper__select"
        ref={select}
        onClick={openOptions}
        onChange={(e => e)}
      >
        <option value="EN"> EN </option>
        <option value="RU"> RU </option>
        <option value="BE"> BE </option>
      </select>
      {isOpen && customSelect}
    </div>
  );
}

export default SelectLanguage;