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
          <h2>Uh Oh!</h2>
        </Card>
      ) : null}
    </>
  );
};
export default report;
