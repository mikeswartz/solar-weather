import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  MenuItem,
  FormControl,
  FormGroup,
  Select,
  InputLabel,
  Grid,
} from "@material-ui/core";
import WeatherStyles from "./Weather.styles";
import WeatherReport from "../WeatherReport/WeatherReport";

const Weather = () => {
  let [responseObj, setData] = useState({});
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  const classes = WeatherStyles();

  async function getWeather(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    setError(false);
    setData({});
    setLoading(true);

    try {
      const APIKey = process.env.REACT_APP_API_KEY; // Replace with your key if not in .env file

      const response = await axios({
        method: "GET",
        url: "//api.openweathermap.org/data/2.5/weather",
        params: {
          q: `${city}`,
          units: `${unit}`,
          appid: `${APIKey}`,
        },
      });

      if (response.status !== 200) {
        throw new Error();
      }

      const { data } = response;
      setData(data);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
      console.log(e.message);
    }
  }

  return (
    <form onSubmit={getWeather}>
      <FormGroup className={classes.formGroup}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12}>
            <WeatherReport
              responseObj={responseObj}
              error={error}
              loading={loading}
              unit={unit}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              name="city"
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              margin="normal"
              error={error}
              className={classes.textField}
              data-testid="weather-text-field-city"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="units-label">Units</InputLabel>
              <Select
                labelId="units-label"
                id="units"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                data-testid="weather-select-unit"
              >
                <MenuItem value={"imperial"}>Fahrenheit</MenuItem>
                <MenuItem value={"metric"}>Celcius</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12} lg={12} align="center">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.button}
              data-testid="weather-submit-button"
              disabled={!city}
            >
              Get The Weather
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
    </form>
  );
};

export default Weather;
