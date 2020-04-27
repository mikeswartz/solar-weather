import React from "react";
import { render } from "@testing-library/react";
import WeatherReportError from "../WeatherReportError";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<WeatherReportError />, div);
});

// test("renders learn react link", () => {
//   const { getByText } = render(<WeatherReportError />);
//   const linkElement = getByText(/please enter a valid city/i);
//   expect(linkElement).toBeInTheDocument();
// });
