import React, { useEffect, useState } from "react";
import "./dateInCapital.scss";

function DateInCapital() {
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
      "Марш",
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

  const [currentHour, setCurrentHour] = useState("0");
  const [currentMinute, setCurrentMinute] = useState("00");
  const [currentSecond, setCurrentSecond] = useState("00");

  // TODO: get values from JSON
  const capital = "Paris";
  const currentTimeZone = "Europe/Paris";
  const currentLanguage = "EN";


  let [hour, minute, second] = new Date()
    .toLocaleTimeString("en-US",{timeZone : currentTimeZone,  hour12: false })
    .split(/:| /);
  
  const addZero = (n) => {
    return (n < 10 ? "0" : "") + n;
  };

  const [month, date] = new Date()
    .toLocaleDateString("en-US", currentTimeZone)
    .split("/");

  const day = new Date().getDay();

  const dayOfWeek = dayOfWeekList[currentLanguage][day];
  const monthName = monthList[currentLanguage][month - 1];

  const capitalTitle = <p className="date-in-capital__item">{capital}</p>;

  const capitalTime = (
    <p>
      Time: {addZero(currentHour)}:{currentMinute}:{currentSecond}
    </p>
  );

  const capitalDate = (
    <p>
      {date} {monthName} {dayOfWeek}
    </p>
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      [hour, minute, second] = new Date()
      .toLocaleTimeString("en-US",{timeZone : currentTimeZone,  hour12: false })
      .split(/:| /);

      setCurrentHour(hour)
      setCurrentMinute(minute)
      setCurrentSecond(second)
      
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="date-in-capital">
      {capitalTitle}
      {capitalTime}
      {capitalDate}
    </div>
  );
}

export default DateInCapital;