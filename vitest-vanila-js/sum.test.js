import { test, expect } from "vitest";
import { sum } from "./sum";

test("sum a , b", () => {
  expect(sum(3, 4)).toEqual(7);
});

test("sum a , b , c", () => {
  expect(sum(3, 4, 3)).toEqual(10);
});
