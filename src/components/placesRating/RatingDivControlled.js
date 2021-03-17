import { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { countrySightRatingUpdate } from "./ratingModule";
import axios from "axios";
import { useParams } from "react-router";
import { getLanguageFromState } from "../../redux/selectors";
import { useSelector } from "react-redux";

const RatingDivControlled = (props) => {
  const language = useSelector(getLanguageFromState);

  const pr = useParams();

  let initRate = 0;
  const sight = props.currentCountry.localizations.EN.places.find(
    (elem) => elem.numName == props.numName
  );
  if (sight) {
    initRate = sight.rating.users[props.user.name];
  }
  if (!initRate) {
    initRate = 0;
  }

  const [value, setValue] = useState(initRate);

  return (
    <div>
      <Box component="fieldset" mb={0} borderColor="transparent">
        <Typography component="legend">
          {props.user.name == "Guest"
            ? language === "EN"
              ? "(Log-In to rate)"
              : language === "RU"
              ? "(Войдите, чтобы оценивать)"
              : "(Увайдзіце, каб ацэньваць)"
            : props.yourRate}
        </Typography>
        <Rating
          name={`simple-controlled-${props.numName}`}
          disabled={
            props.user.name == "Guest" ? true : props.processing ? true : false
          }
          value={props.user.name == "Guest" ? 0 : value}
          onChange={(event, newValue) => {
            const countryCopy = JSON.parse(
              JSON.stringify(props.currentCountry)
            );
            countrySightRatingUpdate(
              countryCopy,
              props.numName,
              props.user.name,
              newValue !== null ? newValue : 0
            );
            props.setProcessing(true);
            axios
              .patch(`https://travel-app-server-2021.herokuapp.com/countries/${pr.name}`, {
                ...countryCopy,
              })
              .then(function (response) {
                countrySightRatingUpdate(
                  props.currentCountry,
                  props.numName,
                  props.user.name,
                  newValue !== null ? newValue : 0
                );
                setValue(newValue);
                props.setProcessing(false);
                props.setRefresh(!props.refresh);
              })
              .catch(function (error) {
                props.setProcessing(false);
              });
          }}
        />
      </Box>
    </div>
  );
};

export default RatingDivControlled;
