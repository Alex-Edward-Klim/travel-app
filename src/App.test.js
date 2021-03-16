import * as language from "./redux/language/languageReducer";
import * as languageType from "./redux/language/languageTypes";
import * as search from "./redux/search/searchReducer";
import * as searchType from "./redux/search/searchTypes";
import * as country from "./redux/country/countryReducer";
import * as countryType from "./redux/country/countryTypes";
import { render } from "@testing-library/react";
import Footer from "./components/footer/Footer";

describe("initial states", () => {
  it("language initial", () => {
    expect(language.initialState.language).toBe("EN");
  });
  it("country initial", () => {
    expect(country.initialState.loading).toBe(false);
    expect(country.initialState.error).toBe('');
    expect(country.initialState.countries).toHaveLength(0);
  });
  it("search initial", () => {
    expect(search.initialState.search).toBe("");
  });

});

describe("language reducer", () => {
  it("CHANGE_LANGUAGE_TO_RU", () => {
    const action = {
      type: languageType.CHANGE_LANGUAGE_TO_RU,
    };

    expect(language.languageReducer(language.initialState, action)).toEqual({
      language: "RU",
    });
  });

  it("CHANGE_LANGUAGE_TO_EN", () => {
    const action = {
      type: languageType.CHANGE_LANGUAGE_TO_EN,
    };

    expect(language.languageReducer(language.initialState, action)).toEqual({
      language: "EN",
    });
  });

  it("CHANGE_LANGUAGE_TO_BE", () => {
    const action = {
      type: languageType.CHANGE_LANGUAGE_TO_BE,
    };

    expect(language.languageReducer(language.initialState, action)).toEqual({
      language: "BE",
    });
  });
});

describe("search reducer", () => {
  it("CHANGE_SEARCH_TO_EMPTY", () => {
    const action = {
      type: searchType.CHANGE_SEARCH_TO_EMPTY,
    };

    expect(search.searchReducer("England", action)).toMatchObject({
      search: "",
    });
  });

  it("CHANGE_SEARCH_TO_VALUE", () => {
    const action = {
      type: searchType.CHANGE_SEARCH_TO_VALUE,
      payload: "testString",
    };

    expect(search.searchReducer(search.initialState, action)).toMatchObject({
      search: "testString",
    });
  });
});

describe("country reducer", () => {
  it("FETCH_COUNTRIES_REQUEST", () => {
    const action = {
      type: countryType.FETCH_COUNTRIES_REQUEST,
    };

    expect(country.countryReducer(country.initialState, action)).toMatchObject({
      loading: true,
    });
  });

  it("FETCH_COUNTRIES_SUCCESS", () => {
    const action = {
      type: countryType.FETCH_COUNTRIES_SUCCESS,
    };
    expect(
      country.countryReducer(
        {
          loading: true,
          countries: [],
          error: "test",
        },
        action
      )
    ).toMatchObject({
      loading: false,
      error: "",
    });
  });

  it("FETCH_COUNTRIES_FAILURE", () => {
    const action = {
      type: countryType.FETCH_COUNTRIES_FAILURE,
    };
    expect(
      country.countryReducer(
        {
          loading: true,
          countries: ['a', 'b', 'c'],
          error: "test",
        },
        action
      )
    ).toMatchObject({
      loading: false,
      countries: [],
    });
  });
});

describe("Snapshot component", () => {
  it("Footer", () => {
    const rendered = render(<Footer />);
    expect(rendered).toMatchSnapshot();
  });
});
