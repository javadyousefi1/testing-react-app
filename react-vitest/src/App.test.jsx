import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App test", () => {
  render(<App />);
  screen.debug();
  expect(screen.getByText(/react/i)).toBeInTheDocument();
});
