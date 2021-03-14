import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import styles from "./login.module.scss";
import { useSelector } from "react-redux";
import { getLanguageFromState } from "../../redux/selectors";

const Login = (props) => {

  const history = useHistory();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const [serverMessageUser, setServerMessageUser] = useState(false);
  const [serverMessagePassword, setServerMessagePassword] = useState(false);

  const language = useSelector(getLanguageFromState);

  const multiLanguageMessages = {
    "EN": {
      "Log In": "Log In",
      "Name": "Name",
      "Password": "Password",
      "Checking data": "Checking data",
      "Sign Up": "Sign Up",
      "Go back to main page": "Go back to main page",
      "User isn't found!": "User doesn't exist!",
      "Password is incorrect!": "Password is incorrect!"
    },
    "RU": {
      "Log In": "Войти",
      "Name": "Имя",
      "Password": "Пароль",
      "Checking data": "Проверка данных",
      "Sign Up": "Создать нового пользователя",
      "Go back to main page": "Назад на главную страницу",
      "User isn't found!": "Такого пользователя не существует!",
      "Password is incorrect!": "Неправильный пароль!"
    },
    "BE": {
      "Log In": "Увайсці",
      "Name": "Імя",
      "Password": "Пароль",
      "Checking data": "Праверка дадзеных",
      "Sign Up": "Стварыць новага карыстальніка ",
      "Go back to main page": "Назад на галоўную старонку",
      "User isn't found!": "Такога карыстальніка не існуе!",
      "Password is incorrect!": "Няправільны пароль!"
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisabledSubmit(true);

    const response = await axios.get(`https://travel-app-server-2021.herokuapp.com/users/${name}`)
    const users = response.data;
    const user = users[0];

    if (user) {
      if (user.password !== password) {
        setServerMessageUser(false);
        setServerMessagePassword(true);
      } else {
        // console.log("Logging in...");
        localStorage.setItem("TravelAppUser78fe8a83ef752bd23c98c262b7264947", JSON.stringify(user));
        props.setUser(user);
        setTimeout(() => {
          history.push("/");
        }, 0);
      }
      setDisabledSubmit(false);
    } else {
      setServerMessageUser(true);
      setServerMessagePassword(false);
      setDisabledSubmit(false);
    }
  };

  const redirectToMainPage = () => {
    history.push("/");
  };
  
  return (
    <>
        <form onSubmit={handleSubmit} className={styles.wrapper}>

          <h1>{multiLanguageMessages[language]["Log In"]}:</h1>

          <div>
          <label className={styles.block} htmlFor="userName">{multiLanguageMessages[language]["Name"]}:</label>
          <input className={styles.block} type="text" id="userName" maxLength="10" required value={name} onChange={(e) => {
            if (!/\s/.test(e.target.value)) {
              setName(e.target.value);
            }
            }} />
          </div>
          
          <div>
          <label className={styles.block} htmlFor="userPassword">{multiLanguageMessages[language]["Password"]}:</label>
          <input className={styles.block} type="password" id="userPassword" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {serverMessageUser ? <h2 className={styles.serverMessage}>{multiLanguageMessages[language]["User isn't found!"]}</h2> : null}
          {serverMessagePassword ? <h2 className={styles.serverMessage}>{multiLanguageMessages[language]["Password is incorrect!"]}</h2> : null}
  
          <div>
            <button type="submit" disabled={disabledSubmit}>{multiLanguageMessages[language]["Log In"]}</button>
            {disabledSubmit ? <p className={`${styles.inline}`}>&nbsp;({multiLanguageMessages[language]["Checking data"]}...)</p>
            : null}
          </div>

          <div>
            <button type="button" onClick={() => history.push("/signup")}>{multiLanguageMessages[language]["Sign Up"]}</button>
          </div>

          <div>
            <button type="button" onClick={redirectToMainPage}>{multiLanguageMessages[language]["Go back to main page"]}</button>
          </div>
        </form>
    </>
  );
}

export default Login;
