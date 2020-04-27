import { makeStyles } from "@material-ui/core/styles";

const AppStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  main: {
    // Put styles for main body of app here
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    minHeight: 60,
    textAlign: "center",
    minWidth: "100%",
    backgroundColor: "#EEE",
    paddingTop: 10,
  },
}));

export default AppStyles;
