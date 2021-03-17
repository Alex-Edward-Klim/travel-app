import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getLanguageFromState } from "../../redux/selectors";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import RatingDiv from "./RatingDiv";
import RatingDivControlled from "./RatingDivControlled";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontWeight: 900,
  },
  block: {
    display: "block",
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
  },
  lightgreyBackground: {
    backgroundColor: "rgb(224, 224, 224)",
  },
  margin24: {
    marginTop: "24px",
    marginBottom: "24px",
  },
  fullWidth: {
    width: "100%",
  },
}));

const RatingAccordion = (props) => {
  const language = useSelector(getLanguageFromState);

  const pr = useParams();
  const countriesList = useSelector((state) => state.countries.countries);
  const currentCountry = countriesList.find(
    (el) => el.localizations.EN.name === pr.name
  );

  const [processing, setProcessing] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {currentCountry
        ? currentCountry.localizations[language].places.map((elem) => (
            <Accordion key={elem.name}>
              <AccordionSummary
                className={classes.lightgreyBackground}
                expandIcon={<ExpandMoreIcon />}
                aria-controls={elem.name}
                id={elem.name}
              >
                <RatingDiv value={elem.rating.total} userName={elem.name} />
              </AccordionSummary>
              <AccordionDetails className={classes.flex}>
                <div
                  className={classes.fullWidth}
                  style={{
                    backgroundColor: "#ACCBA7",
                    textAlign: "center",
                    paddingTop: "12px",
                  }}
                >
                  <RatingDivControlled
                    processing={processing}
                    setProcessing={setProcessing}
                    refresh={refresh}
                    setRefresh={setRefresh}
                    numName={elem.numName}
                    currentCountry={currentCountry}
                    user={props.user}
                    initVal={props.user.name == "Guest" ? 0 : 3}
                    yourRate={
                      language === "EN"
                        ? "Your Rate"
                        : language === "RU"
                        ? "Ваша Оценка"
                        : language === "BE"
                        ? "Ваша Ацэнка"
                        : null
                    }
                  />
                </div>
                <div style={{ width: "100%", textAlign: "center" }}>
                  <Typography
                    className={`${classes.margin24} ${classes.heading}`}
                  >
                    {language === "EN"
                      ? "Other people ratings:"
                      : language === "RU"
                      ? "Оценки Других Людей"
                      : language === "BE"
                      ? "Ацэнкі Іншых Людзей "
                      : null}
                  </Typography>
                </div>
                {Object.keys(elem.rating.users).map((keyName, i) => (
                  <RatingDiv
                    value={elem.rating.users[keyName]}
                    userName={keyName}
                    key={i}
                  />
                ))}
              </AccordionDetails>
            </Accordion>
          ))
        : null}
    </div>
  );
};

export default RatingAccordion;
