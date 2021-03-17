import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function CurrentTime(props) {
    const timeLangList = {
        RU: "Время",
        EN: "Time",
        BE: "Час"
    }
    const [time, setTime] = useState(" 00:00:00")

    const currentLanguage = useSelector((state) => state.language.language);
    const currentTimeName = timeLangList[currentLanguage];

    useEffect(() => {
        const timerID = setInterval(() => {
          if (props.timeZone) {
            const [hour, minute, second,] = new Date()
              .toLocaleTimeString("en-US", {
                timeZone: props.timeZone,
                hour12: false,
              })
              .split(/:| /);
            setTime(` ${hour}:${minute}:${second}`);
          }
        }, 1000);
        return (() => {
            clearInterval(timerID);
        })
    },[props.timeZone])
    // const timer = () => {
    //     setInterval(() => {
    //         if (props.timeZone) {
    //             const [hour, minute, second] = new Date()
    //             .toLocaleTimeString("en-US",{timeZone : props.timeZone,  hour12: false })
    //             .split(/:| /);
    //             setTime(` ${hour}:${minute}:${second}`);
    //         }
    //     }, 1000);
    // }



    return(
        <p>
            {currentTimeName}:{time}
        </p>
    )
}

export default CurrentTime;