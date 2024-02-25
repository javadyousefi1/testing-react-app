import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./components/Header";

test("Header test #1", () => {
  render(<Header title="javad" />);
  const textProp = screen.getByText(/javad/i);
  expect(textProp).toBeInTheDocument();
});

test("Header test #2", () => {
  render(<Header title="javad" />);
  const buttonElement = screen.getByRole("button", { name: "first button" });
  expect(buttonElement).toBeInTheDocument();
});

test("Header test #3", () => {
  render(<Header title="javad" />);
  const toolTip = screen.getByTitle("999");
  expect(toolTip).toBeInTheDocument();
});
