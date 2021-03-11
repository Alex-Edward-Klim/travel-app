import { connect } from "react-redux";

// Selector
import { getCountriesFromState } from "../../redux/selectors";

import { addCountry } from '../../redux/country/countryActions';
import { useState } from "react";

const TemporaryCountriesComponent = (props) => {

  const [text, setText] = useState("");

  return (
    <>
      <p>Countries: {JSON.stringify(props.countries)}</p>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => props.addCountry(JSON.parse(text))}>Add Country</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: getCountriesFromState(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCountry: (country) => dispatch(addCountry(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryCountriesComponent);
