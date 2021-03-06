function countWords(inputWords) {
    return inputWords.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = accumulator[currentValue] ? accumulator[currentValue]+1 : 1;
        return accumulator;
    }, {});
  }
  
  module.exports = countWords