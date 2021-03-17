import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanguageFromState } from "../../redux/selectors";
import { changeLanguage } from "../../redux/language/languageActions";
import "./selectLanguage.scss";

function SelectLanguage() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector(getLanguageFromState);
  

  const select = useRef(null);

  const optionEN = useRef(null);
  const optionRU = useRef(null);
  const optionBE = useRef(null);

  const anotherOpenOptions = () => {
    setIsOpen(true);
    select.current.disabled = true
  }

  const openOptions = () => {
    setIsOpen(true);
    select.current.classList.add("select-wrapper__hidden");
  };

  const closeOption = () => {
    setIsOpen(false);
    // select.current.classList.remove("select-wrapper__hidden");
    select.current.disabled = false
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
        // onClick={openOptions}
        onChange={(e => e)}
        onMouseDown={anotherOpenOptions}
        onMouseUp={closeOption}
      >
        <option value="EN" ref={optionEN}> EN </option>
        <option value="RU" ref={optionRU}> RU </option>
        <option value="BE" ref={optionBE}> BE </option>
      </select>
      {isOpen && customSelect}
    </div>
  );
}

export default SelectLanguage;