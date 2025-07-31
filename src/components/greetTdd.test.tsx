// greet should render the text "Hello" and if name is passed into the component
// it should render Hello followed by the name

import { render, screen } from "@testing-library/react";
import { GreetTdd } from "./greetTdd";

test("Greet renders correctly", () => {
  render(<GreetTdd />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument;
});

test("Greet renders with a name", () => {
  render(<GreetTdd name="Lorem" />);
  const textElement = screen.getByText("Hello Lorem");
  expect(textElement).toBeInTheDocument;
});
