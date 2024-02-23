export function sum(...number) {
  console.log(number);
  return number.reduce((a, b) => {
    return a + b;
  }, 0);
}
