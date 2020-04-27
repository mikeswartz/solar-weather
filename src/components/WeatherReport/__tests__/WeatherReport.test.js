import React from "react";
import { render } from "@testing-library/react";
import WeatherReport from "../WeatherReport";
import OpenWeatherRes from "../../../../mocks/OpenWeatherRes.mock";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<WeatherReport />, div);
});

test("renders It is currently text", () => {
  const { getByText } = render(<WeatherReport responseObj={OpenWeatherRes} />);
  const currElement = getByText(/Mountain View/i);
  expect(currElement).toBeInTheDocument();
});

test("renders span for city", () => {
  const { getByTestId } = render(
    <WeatherReport responseObj={OpenWeatherRes} />
  );
  const currElement = getByTestId("weather-report-name");
  expect(currElement).toBeInTheDocument();
});

test("renders container for weather results", () => {
  const { getByTestId } = render(
    <WeatherReport responseObj={OpenWeatherRes} />
  );
  const currElement = getByTestId("weather-report-container");
  expect(currElement).toBeInTheDocument();
});
