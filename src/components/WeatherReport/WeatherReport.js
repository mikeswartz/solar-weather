import React from "react";
import WeatherReportStyles from "./WeatherReport.styles";

const report = (props) => {
  console.log("props.responseObj", props.responseObj);

  const classes = WeatherReportStyles();
  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div className={classes.Wrapper}>
          {props.error && <small>Please enter a valid city.</small>}
          {props.loading && <div>Loading...</div>}
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <p>
            It is currently {Math.round(props.responseObj.main.temp)} degrees
            out with {props.responseObj.weather[0].description}.
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default report;
