import { test, expect } from "vitest";

import { render, screen } from "@testing-library/react";
import ErrorMassage from "../Error";

test("Error message component Test #1", () => {
  render(<ErrorMassage count={2} />);
  const expectedText = screen.getByText(/count errors find/i);
  expect(expectedText).toBeInTheDocument();
});

test("Error message component Test #2", () => {
  render(<ErrorMassage count={1} />);
  const expectedText = screen.getByText(/count error find/i);
  expect(expectedText).toBeTruthy();
});

test("Error message component Test #3", () => {
  render(<ErrorMassage count={1} />);
  const expectedText = screen.getByText(/count error find/i);
  expect(expectedText).toBeVisible();
});

test("Error message component Test #4", () => {
  render(<ErrorMassage count={1} />);
  const heading = screen.getByRole("heading", {
    level: 1,
  });
  expect(heading).toHaveTextContent("hi i am heading one");
});

test("Error message component Test #5", () => {
  render(<ErrorMassage count={1} />);
  const divParentTag = screen.getByRole("parentDiv");
  expect(divParentTag).toContainHTML("<span>hi</span>");
});

test("Error message component Test #6", () => {
  render(<ErrorMassage count={1} />);
  
  const divParentTag = screen.getByRole("parentDiv");
  const paragraph = screen.getByText("i am paragraph");

  expect(divParentTag).toContainElement(paragraph);
});
