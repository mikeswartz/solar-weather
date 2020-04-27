import React from "react";
import WeatherReportStyles from "./WeatherReport.styles";

const report = (props) => {
  const classes = WeatherReportStyles();
  return (
    <div>
      {props.responseObj ? (
        <div className={classes.Wrapper}>
          <p>
            <strong data-testid="weather-report-name">
              {props.responseObj.name}
            </strong>
          </p>
          <p data-testid="weather-report-container">
            It is currently {Math.round(props.responseObj.main.temp)} degrees
            out with {props.responseObj.weather[0].description}.
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default report;
