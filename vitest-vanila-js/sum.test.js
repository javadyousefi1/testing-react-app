import { test, expect, describe } from "vitest";
import { sum } from "./sum";

describe("sum function test group #1", () => {
  test("sum a , b", () => {
    expect(sum(3, 4)).toEqual(7);
  });

  test("sum a , b , c", () => {
    expect(sum(3, 4, 3)).toEqual(10);
  });
});
