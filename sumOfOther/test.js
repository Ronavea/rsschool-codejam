const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');

describe('sumOfOther', () => {
  it('1', () => {
    const sum = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(sum, [8, 7, 6, 9]);
  });

  it('2', () => {
    const sum = sumOfOther([1, 16, 5, 7, 18, 15]);
    assert.deepEqual(sum, [61, 46, 57, 55, 44, 47]);
  });

  it('3', () => {
    const sum = sumOfOther([1, 2, 4, 21, 3, 55, 4]);
    assert.deepEqual(sum, [89, 88, 86, 69, 87, 35, 86]);
  });

  it('4', () => {
    const sum = sumOfOther([3, 5, 25, 4, 67, 10, 77, 7, 1]);
    assert.deepEqual(sum, [196, 194, 174, 195, 132, 189, 122, 192, 198]);
  });

  it('3', () => {
    const sum = sumOfOther([]);
    assert.deepEqual(sum, []);
  });

  it('6', () => {
    const sum = sumOfOther([5, 8, 2, 7, 1]);
    assert.deepEqual(sum, [18, 15, 21, 16, 22]);
  });

  it('7', () => {
    const sum = sumOfOther([3, 8, 9, 1, 5, 2, 2, 8, 1, 9, 5]);
    assert.deepEqual(sum, [50, 45, 44, 52, 48, 51, 51, 45, 52, 44, 48]);
  });

  it('8', () => {
    const sum = sumOfOther([18, 9, 1, 2, 14, 21, 3, 4, 23, 25, 33, 7, 30, 24, 17, 5, 6, 20]);
    assert.deepEqual(sum, [244, 253, 261, 260, 248, 241, 259, 258, 239, 237, 229, 255, 232, 238, 245, 257, 256, 242]);
  });

  it('9', () => {
    const sum = sumOfOther([7, 2, 12, 32, 44, 76, 86, 4, 5, 22, 66, 78, 1, 15, 29, 89, 7, 9, 99, 33]);
    assert.deepEqual(sum, [709, 714, 704, 684, 672, 640, 630, 712, 711, 694, 650, 638, 715, 701, 687, 627, 709, 707, 617, 683]);
  });

  it('10', () => {
    const sum = sumOfOther([2, 8, 121, 1, 55, 321, 874, 20, 18, 7, 90, 44, 22, 3, 16, 99, 25, 4, 37, 78, 11, 24, 25, 20]);
    assert.deepEqual(sum, [1923, 1917, 1804, 1924, 1870, 1604, 1051, 1905, 1907, 1918, 1835, 1881, 1903, 1922, 1909, 1826, 1900, 1921, 1888, 1847, 1914, 1901, 1900, 1905]);
  });
});
