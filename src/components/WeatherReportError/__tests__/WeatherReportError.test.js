import React from "react";
import { render } from "@testing-library/react";
import WeatherReportError from "../WeatherReportError";

// Crash Check
it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<WeatherReportError />, div);
});

// Error
test("renders weather results city text", () => {
  const { getByText } = render(<WeatherReportError error={true} />);
  const currElement = getByText(/Uh Oh!/i);
  expect(currElement).toBeInTheDocument();
});
test("renders weather results span for city text", () => {
  const { getByTestId } = render(<WeatherReportError error={true} />);
  const currElement = getByTestId("weather-report-error-wrapper");
  expect(currElement).toBeInTheDocument();
});
