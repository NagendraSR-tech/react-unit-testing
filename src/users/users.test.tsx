import { render, screen } from "@testing-library/react";
import { Users } from "./users";
import "@testing-library/jest-dom"

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
    expect(users[0]).toHaveTextContent("John Doe");
    expect(users[1]).toHaveTextContent("Jane Smith");
    expect(users[2]).toHaveTextContent("Alice Johnson");
  });
});
