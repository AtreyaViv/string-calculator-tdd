const StringCalculator = require("../src/StringCalculator");

describe("StringCalculator", () => {
  test("returns 0 for an empty string", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
  });
  test("returns the number itself for a single number", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("5")).toBe(5);
  });
  test("returns the sum of comma-separated numbers", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,2,3")).toBe(6);
  });
});
