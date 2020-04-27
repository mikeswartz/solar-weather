import { makeStyles } from "@material-ui/core/styles";

const ForecastStyles = makeStyles((theme) => ({
  formGroup: {
    maxWidth: 600,
    margin: "auto",
  },
  formControl: {
    minWidth: "100%",
    maxWidth: 600,
  },
  textField: {
    minWidth: "100%",
    maxWidth: 600,
  },
  button: {
    minWidth: "75%",
    maxWidth: 160,
  },
}));

export default ForecastStyles;
