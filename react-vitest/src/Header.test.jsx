import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./components/Header";

test("Header test #1", () => {
  render(<Header title="javad" />);
  const textProp = screen.getByText("javad");
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

test("Header test #4", async () => {
  render(<Header title="javad" />);
  const p = await screen.findByRole("paragraph");
  expect(p).toBeInTheDocument();
});

test("Header test #5", () => {
  render(<Header title="javad" />);
  const notExisted = screen.queryByText("not existed");
  expect(notExisted).not.toBeInTheDocument();
});

test("Header test #6", () => {
  render(<Header title="javad" />);
  const li = screen.getAllByRole("listitem");
  expect(li.length).toBe(3);
});

test("Header test #7", () => {
  render(<Header title="javad" />);
  const testid83 = screen.getByTestId("testid83");
  expect(testid83).toBeInTheDocument();
});

