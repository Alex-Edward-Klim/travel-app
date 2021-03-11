import { CHANGE_LANGUAGE_TO_BE, CHANGE_LANGUAGE_TO_EN, CHANGE_LANGUAGE_TO_RU } from "./languageTypes";

// Initial State
const initialState = {
  language: "EN",
};

// Reducer
const languageReducer = (state = initialState, action) => {
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
