import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders learn react text", () => {
  render(<App />);
  const linkElement = screen.getByText(/jest \+ React Testing library/i);
  expect(linkElement).toBeInTheDocument();
});
