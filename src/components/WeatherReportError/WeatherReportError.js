import React from "react";
import { Card } from "@material-ui/core";
import WeatherReportErrorStyles from "./WeatherReportError.styles";

const report = (props) => {
  const classes = WeatherReportErrorStyles();

  return (
    <>
      {props.error ? (
        <Card
          className={classes.Wrapper}
          data-testid="weather-report-error-wrapper"
        >
          <p>
            Uh Oh!
            <br />
            Please fix the issues below to get a weather report.
          </p>
        </Card>
      ) : null}
    </>
  );
};
export default report;
