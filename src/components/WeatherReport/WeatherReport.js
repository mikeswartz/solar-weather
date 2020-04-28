import React from "react";
import { CircularProgress } from "@material-ui/core";
import WeatherReportStyles from "./WeatherReport.styles";
import WeatherReportError from "../WeatherReportError/WeatherReportError";

const WeatherReport = (props) => {
  const classes = WeatherReportStyles();
  return (
    <div className="Wrapper">
      {props.error && <WeatherReportError error={props.error} />}

      {props.loading && (
        <div className={classes.loading}>
          <CircularProgress color="primary" />
        </div>
      )}

      {props.responseObj && props.responseObj.cod === 200 ? (
        <div className={classes.Wrapper}>
          {props.responseObj.name &&
            props.responseObj.sys &&
            props.responseObj.sys.country && (
              <h2 data-testid="weather-report-name">
                {props.responseObj.name}, {props.responseObj.sys.country}
              </h2>
            )}

          {props.responseObj.main &&
            props.responseObj.main.temp &&
            props.responseObj.unit && (
              <h3>
                {Math.round(props.responseObj.main.temp)} &deg;
                {props.responseObj.unit === "imperial" ? "F" : "C"}
              </h3>
            )}

          {props.responseObj.weather[0].icon &&
            props.responseObj.weather[0].main &&
            props.responseObj.weather[0].description && (
              <>
                <img
                  alt={`${props.responseObj.weather[0].main}`}
                  src={`http://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}@2x.png`}
                  data-testid="weather-report-icon-image"
                />
                <br />
                <span data-testid="weather-report-description">
                  {props.responseObj.weather[0].description.toUpperCase()}.
                </span>
              </>
            )}
        </div>
      ) : null}
    </div>
  );
};
export default WeatherReport;
