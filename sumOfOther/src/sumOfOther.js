module.exports = function sumOfOther(arr) {
  return arr.map(item => arr.reduce((sum, elem) => sum + elem) - item);
};
