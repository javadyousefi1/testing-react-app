export function sum(...number) {
  return number.reduce((a, b) => {
    return a + b;
  }, 0);
}

if (import.meta.vitest) {
  const { test, expect, describe } = import.meta.vitest;

  describe("sum function test group #1", () => {
    test("sum a , b", () => {
      expect(sum(3, 4)).toEqual(7);
    });

    test("sum a , b , c", () => {
      expect(sum(3, 4, 3)).toEqual(10);
    });
  });
}
