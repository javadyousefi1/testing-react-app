export function sum(...number) {
  return number.reduce((a, b) => {
    return a + b;
  }, 0);
}
