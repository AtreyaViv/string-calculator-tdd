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
  test("handles newlines as separators", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1\n2,3")).toBe(6);
  });
  test('supports custom delimiters defined in the header', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
  });
  test('throws an error when negative numbers are present', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
  });
  
});
