import React from "react";
import WeatherReportErrorStyles from "./WeatherReportError.styles";

const report = (props) => {
  const classes = WeatherReportErrorStyles();
  return (
    <div>
      {props.responseObj ? (
        <div className={classes.Wrapper}>
          {props.responseObj.error && <small>Please enter a valid city.</small>}
          {props.responseObj.loading && <div>Loading...</div>}
        </div>
      ) : null}
    </div>
  );
};
export default report;
