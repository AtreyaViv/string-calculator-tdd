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

    return numbers
      .split(new RegExp(`[${delimiters.join("")}]`))
      .map(Number)
      .reduce((sum, n) => sum + n, 0);
  }
}

module.exports = StringCalculator;
