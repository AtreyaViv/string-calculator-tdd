class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;

    let delimiters = [",", "\n"];
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      const customDelimiter = numbers.substring(2, delimiterEnd);
      delimiters.push(customDelimiter);
      numbers = numbers.substring(delimiterEnd + 1);
    }

    const parsedNumbers = numbers
      .split(new RegExp(`[${delimiters.join("")}]`))
      .map(Number);

    const negatives = parsedNumbers.filter((n) => n < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return parsedNumbers.reduce((sum, n) => sum + n, 0);
  }
}

module.exports = StringCalculator;
