import { CHANGE_LANGUAGE_TO_BE, CHANGE_LANGUAGE_TO_EN, CHANGE_LANGUAGE_TO_RU } from "./languageTypes";

// Initial State
export const initialState = {
  language: "EN",
};

const storageLang = localStorage.getItem("TravelAppUserLanguageData78fe8a83ef752bd23c98c262b7264947");

if (storageLang) {
  initialState.language = storageLang;
} else {
  localStorage.setItem("TravelAppUserLanguageData78fe8a83ef752bd23c98c262b7264947", "EN");
}

// Reducer
export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE_TO_EN:
      return {
        ...state,
        language: "EN"
      };
    case CHANGE_LANGUAGE_TO_RU:
    return {
      ...state,
      language: "RU"
    };
    case CHANGE_LANGUAGE_TO_BE:
    return {
      ...state,
      language: "BE"
    };
    default:
      return state;
  };
};

export default languageReducer;
