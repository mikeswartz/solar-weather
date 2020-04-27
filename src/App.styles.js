import { makeStyles } from "@material-ui/core/styles";

const AppStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    textAlign: "center",
    minWidth: "100%",
  },
}));

export default AppStyles;
