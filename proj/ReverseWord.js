const main = {
  reverseWord: (sentence) => {
    let reverseText = [];
    for (let i = sentence.length - 1; i >= 0; i--) {
      reverseText.push(sentence[i]);
    }
    return reverseText.join('');
  },
}

module.exports = main;