import { render, screen } from "@testing-library/react";
// import { rest } from "msw";
import { http, HttpResponse } from "msw";
import { Users } from "./users";
import "@testing-library/jest-dom";
import { server } from "../mocks/server";

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

  test("renders error message on fetch failure", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.json([
          { name: "John Doe" },
          { name: "Jane Smith" },
          { name: "Alice Johnson" },
        ]);
      })
    );
    render(<Users />);
    const errorMessage = await screen.findByText("Failed to fetch users");
    expect(errorMessage).toBeInTheDocument();
  });
});
