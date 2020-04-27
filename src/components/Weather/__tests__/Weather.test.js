import React from "react";
import { render } from "@testing-library/react";
import Weather from "../Weather";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Weather />, div);
});

it("renders welcome message", () => {
  const { getByText } = render(<Weather />);
  expect(getByText(/get current weather/i)).toBeInTheDocument();
});
