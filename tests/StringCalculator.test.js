const StringCalculator = require('../src/StringCalculator');

describe('StringCalculator', () => {
  test('returns 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
  });
});
