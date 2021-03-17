import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const RatingDiv = (props) => {
  return (
    <div>
      <Box component="fieldset" m={0} mx={2} borderColor="transparent">
        <Typography component="legend">{props.userName}</Typography>
        <Rating name="read-only" value={props.value} readOnly />
      </Box>
    </div>
  );
};

export default RatingDiv;
