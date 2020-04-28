import { makeStyles } from "@material-ui/core/styles";

const WeatherReportStyles = makeStyles((theme) => ({
  Wrapper: {
    textAlign: "center",
  },
  loading: {
    paddingTop: 50,
    maxWidth: 25,
    margin: "auto",
  },
}));

export default WeatherReportStyles;
