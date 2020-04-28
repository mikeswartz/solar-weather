import React from "react";
import { render } from "@testing-library/react";
import WeatherReport from "../WeatherReport";
import OpenWeatherRes from "../../../../mocks/OpenWeatherRes.mock";

// Crash Check
it("renders weather results without crashing", () => {
  const div = document.createElement("div");
  render(<WeatherReport />, div);
});

// City
test("renders weather results city text", () => {
  const { getByText } = render(<WeatherReport responseObj={OpenWeatherRes} />);
  const currElement = getByText(/Mountain View/i);
  expect(currElement).toBeInTheDocument();
});
test("renders weather results span for city text", () => {
  const { getByTestId } = render(
    <WeatherReport responseObj={OpenWeatherRes} />
  );
  const currElement = getByTestId("weather-report-name");
  expect(currElement).toBeInTheDocument();
});

// Description
test("renders weather results description text", () => {
  const { getByText } = render(<WeatherReport responseObj={OpenWeatherRes} />);
  const currElement = getByText(/clear sky/i);
  expect(currElement).toBeInTheDocument();
});
test("renders weather results description span", () => {
  const { getByTestId } = render(
    <WeatherReport responseObj={OpenWeatherRes} />
  );
  const currElement = getByTestId("weather-report-description");
  expect(currElement).toBeInTheDocument();
});
