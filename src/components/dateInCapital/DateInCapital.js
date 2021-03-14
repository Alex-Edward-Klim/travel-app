import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CurrentTime from "../currentTime/CurrentTime";
import "./dateInCapital.scss";


function DateInCapital(props) {
  const dayOfWeekList = {
    EN: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    RU: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
    BE: [
      "Воскресенье",
      "Панядзелак",
      "Чацвер",
      "Асяроддзе",
      "Чацвер",
      "Пятнiца",
      "Субота",
    ],
  };

  const monthList = {
    EN: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    RU: [
      "Январь",
      "Февраль",
      "Март",
      "Апреля",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    BE: [
      "Студзень",
      "Люты",
      "Сакавік",
      "Красавік",
      "Май",
      "Чэрвень",
      "Ліпень",
      "Жнівень",
      "Верасень",
      "Кастрычнік",
      "Лістапад",
      "Снежань",
    ],
  };

  const [capital, setCapital] = useState("");
  const [currentTimeZone, setCurrentTimeZone] = useState("");

  const currentLanguage = useSelector((state) => state.language.language);
  
  useEffect(() => {
    if (props.country) {
      setCapital(props.country.localizations[currentLanguage].capital)
      setCurrentTimeZone(props.country.timeZone);
    }
  }, [currentLanguage])

  const [month, date] = new Date()
    .toLocaleDateString("en-US", currentTimeZone)
    .split("/");

  const day = new Date().getDay();

  const dayOfWeek = dayOfWeekList[currentLanguage][day];
  const monthName = monthList[currentLanguage][month - 1];

  const capitalTitle = <p className="date-in-capital__item">{capital}</p>;

  const capitalDate = (
    <p>
      {date} {monthName} {dayOfWeek}
    </p>
  );

  return (
    <div className="date-in-capital">
      {capitalTitle}
      {capitalDate}
      <CurrentTime timeZone={currentTimeZone}/>
    </div>
  );
}

export default DateInCapital;