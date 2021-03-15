import {
  CHANGE_SEARCH_TO_EMPTY,
  CHANGE_SEARCH_TO_VALUE,
} from "./searchTypes";

// Action Creators

export const changeSearchToEmpty = () => ({
  type: CHANGE_SEARCH_TO_EMPTY,
});

export const changeSearchToValue = (e) => ({
  type: CHANGE_SEARCH_TO_VALUE,
  payload: e.target.value
});



export const changeSearch = (action, e = '') => {
  switch (action) {
    case "clear":
      return changeSearchToEmpty();
    case "set":
      return changeSearchToValue(e);
  }
};
