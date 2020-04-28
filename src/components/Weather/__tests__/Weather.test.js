import React from "react";
import { render } from "@testing-library/react";
import Weather from "../Weather";
import OpenWeatherRes from "../../../../mocks/OpenWeatherRes.mock";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Weather />, div);
});

it("renders text input field for city", () => {
  const { getByTestId } = render(<Weather responseObj={OpenWeatherRes} />);
  const currElement = getByTestId("weather-text-field-city");
  expect(currElement).toBeInTheDocument();
});

it("renders selection menu for temp units", () => {
  const { getByTestId } = render(<Weather responseObj={OpenWeatherRes} />);
  const currElement = getByTestId("weather-select-unit");
  expect(currElement).toBeInTheDocument();
});

it("renders get weather submit button", () => {
  const { getByTestId } = render(<Weather responseObj={OpenWeatherRes} />);
  const currElement = getByTestId("weather-submit-button");
  expect(currElement).toBeInTheDocument();
});
