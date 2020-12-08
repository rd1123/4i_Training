const main = {
  romanNumerals: (romanWord) => {
    const romanToInt = { "M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1 };
    let currentValue, nextValue, currentWord, nextWord;
    let total = 0;
    let splitRomanWord = romanWord.split("");

    for (let i = 0; i < splitRomanWord.length; i++) {
      currentWord = splitRomanWord[i];
      currentValue = romanToInt[splitRomanWord[i]]

      nextWord = splitRomanWord[i + 1];
      nextValue = romanToInt[splitRomanWord[i + 1]];

      if (currentValue < nextValue) {
        total -= currentValue;
      } else {
        total += currentValue;
      }

    }
    return total;
  },
}

module.exports = main;