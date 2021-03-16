import { useRef, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import imageCompression from 'browser-image-compression';

import styles from "./signup.module.scss";
import { useSelector } from "react-redux";
import { getLanguageFromState } from "../../redux/selectors";

const Signup = (props) => {

  const history = useHistory();

  const language = useSelector(getLanguageFromState);

  const multiLanguageMessages = {
    "EN": {
      "New User Created": "New User Created",
      "Go to main page": "Go to main page",
      "Create New User": "Create New User",
      "Name": "Name",
      "Password": "Password",
      "Photo": "Photo",
      "choose file": "choose file",
      "Submit": "Submit",
      "Please, select a user photo": "Please, select a user photo",
      "Loading": "Loading",
      "Go back to main page": "Go back to main page",
      "User with this name already exists!": "User with this name already exists!"
    },
    "RU": {
      "New User Created": "Новый Пользователь Создан",
      "Go to main page": "На главную страницу",
      "Create New User": "Создание Нового Пользователя",
      "Name": "Имя",
      "Password": "Пароль",
      "Photo": "Фото",
      "choose file": "выберите файл",
      "Submit": "Загрузить Данные",
      "Please, select a user photo": "Пожалуйста, выберите фото",
      "Loading": "Загрузка",
      "Go back to main page": "Назад на главную страницу",
      "User with this name already exists!": "Пользователь с таким именем уже существует!"
    },
    "BE": {
      "New User Created": "Новы Карыстальнік Створаны",
      "Go to main page": "На галоўную старонку ",
      "Create New User": "Стварэнне Новага Карыстальніка",
      "Name": "Імя",
      "Password": "Пароль",
      "Photo": "Фота",
      "choose file": "выберыце файл ",
      "Submit": "Загрузіць Дадзеныя",
      "Please, select a user photo": "Калі ласка, абярыце фота",
      "Loading": "Загрузка",
      "Go back to main page": "Назад на галоўную старонку",
      "User with this name already exists!": "Карыстальнік з такім імем ўжо існуе!"
    }
  };

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [newUserCreated, setNewUserCreated] = useState(false);
  const [serverMessage, setServerMessage] = useState(false);

  const imageRef = useRef(null);

  const compressImage = async (file) => {
    const options = {
      maxWidthOrHeight: 64,
    }
    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (err) {
      // console.log(err);
    }
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const fileSelectedHandler = async (e) => {
    try {
      const compressedImage = await compressImage(e.target.files[0]);
      const imageString = await toBase64(compressedImage);
      imageRef.current.src = imageString;
      setPhoto(imageString);
      setDisabledSubmit(false);
    } catch (err) {
      imageRef.current.src = "";
      setPhoto("");
      setDisabledSubmit(true);
      // console.log('err');
    }
  };

  const saveUserToLocalStorage = () => {
    localStorage.setItem("TravelAppUser78fe8a83ef752bd23c98c262b7264947", JSON.stringify({
      name,
      password,
      photo
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisabledSubmit(true);

    const response = await axios.get(`https://travel-app-server-2021.herokuapp.com/users/${name}`)
    const users = response.data;
    const user = users[0];

    if (user) {
      // console.log('User with this name already exists!');
      setServerMessage(true);
      setDisabledSubmit(false);
    } else {
      axios.post("https://travel-app-server-2021.herokuapp.com/users", {
        name,
        password,
        photo
      })
        .then(res => {
          if (res.status === 201) {
            // console.log("User Created!");
            saveUserToLocalStorage();
            setNewUserCreated(true);
            props.setUser({
              name,
              password,
              photo
            });
          }
          setDisabledSubmit(false);
        })
        .catch(err => {
          // console.log('err');
          setDisabledSubmit(false);
        });
    }
  };


  const redirectToMainPage = () => {
    history.push("/");
  };
  

  return (
    newUserCreated
    ?
    <>
      <div className={styles.wrapper}>
      <div className={styles.bcgsignup}>
        <p>{multiLanguageMessages[language]["New User Created"]}!</p>
        <button className={styles.btnend} onClick={redirectToMainPage}>{multiLanguageMessages[language]["Go to main page"]}</button>
        </div>
      </div>
    </>
    :
    <>
        <form onSubmit={handleSubmit} className={styles.wrapper}>
          <div className={styles.bcgsignup}>

          <h1>{multiLanguageMessages[language]["Create New User"]}:</h1>

          <div>
          <label className={styles.title} htmlFor="userName">{multiLanguageMessages[language]["Name"]}:</label>
          <input className={styles.block} type="text" id="userName" maxLength="10" required value={name} onChange={(e) => {
            if (!/\s/.test(e.target.value)) {
              setName(e.target.value);
            }
            }} />
          </div>
          
          <div>
          <label className={styles.title} htmlFor="userPassword">{multiLanguageMessages[language]["Password"]}:</label>
          <input className={styles.block} type="password" id="userPassword" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className={styles.textAlignCenter}>  
          <label className={styles.block} htmlFor="userPhoto">{multiLanguageMessages[language]["Photo"]}:&nbsp;<span className={`${styles.btn}`}>{multiLanguageMessages[language]["choose file"]}</span></label>
          <input className={`${styles.block} ${styles.none}`} type="file" accept="image/*" id="userPhoto" onChange={(e) => fileSelectedHandler(e)} />
          
          <img className={styles.userImage} ref={imageRef} alt="" />
          </div>

          {serverMessage ? <h2 className={styles.serverMessage}>{multiLanguageMessages[language]["User with this name already exists!"]}</h2> : null}
  
          <div>
            <button type="submit" className={styles.btnsbmt} disabled={disabledSubmit}>{multiLanguageMessages[language]["Submit"]}</button>
            {disabledSubmit && photo === "" ? <p className={`${styles.inline}`}>&nbsp;({multiLanguageMessages[language]["Please, select a user photo"]})</p> :
            disabledSubmit ? <p className={styles.inline}>({multiLanguageMessages[language]["Loading"]}...)</p>
            : null}
          </div>

          <div className={styles.goback}>
            <button type="button" onClick={redirectToMainPage}>{multiLanguageMessages[language]["Go back to main page"]}</button>
          </div>
          </div>
        </form>
    </>
  );
}

export default Signup;
