import { connect } from "react-redux";

// Selector
import { getCountriesFromState } from "../../redux/selectors";

const TemporaryCountriesComponent = (props) => {
  return (
    <>
      <p>Countries: {JSON.stringify(props.countries)}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: getCountriesFromState(state)
  };
};

export default connect(mapStateToProps)(TemporaryCountriesComponent);
