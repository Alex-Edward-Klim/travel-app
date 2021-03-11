import { CHANGE_LANGUAGE_TO_BE, CHANGE_LANGUAGE_TO_EN, CHANGE_LANGUAGE_TO_RU } from "./languageTypes";

// Action Creators

export const changeLanguageToEn = () => ({
  type: CHANGE_LANGUAGE_TO_EN,
});

export const changeLanguageToRu = () => ({
  type: CHANGE_LANGUAGE_TO_RU,
});

export const changeLanguageToBe = () => ({
  type: CHANGE_LANGUAGE_TO_BE,
});

export const changeLanguage = (lang) => {
  switch (lang) {
    case "EN":
      return changeLanguageToEn();
    case "RU":
    return changeLanguageToRu();
    case "BE":
    return changeLanguageToBe();
    // default:
    //   return;
  };

};
