const assert = require('assert');
Object.freeze(assert);
const make = require('./src/make');
const sum = (a, b) => a + b;

describe('make', () => {
  it('1', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 777);
  });

  it('2', () => {
    const result = make(4)(3)(1)(2)(sum);
    assert.deepEqual(result, 10);
  });

  it('3', () => {
    const result = make(1)(3)(4)(2)(1, 6, 3)(sum);
    assert.deepEqual(result, 20);
  });

  it('4', () => {
    const result = make(3, 5, 6)(4, 21, 22)(sum);
    assert.deepEqual(result, 61);
  });

  it('5', () => {
    const result = make(2, 5, 6, 4)(3)(1, 21)(85)(2, 4, 5, 6, 3, 2)(1)(9)(16, 17)(sum);
    assert.deepEqual(result, 192);
  });

  it('6', () => {
    const result = make(15)(34, 21, 666)(41)(15)(34, 21, 666)(41)(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 2331);
  });

  it('7', () => {
    const result = make(4)(2)(1)(2)(1)(3)(1)(1)(1)(3)(1)(2)(7)(1)(2)(8)(2)(4)(1)(2)(1)(2)(sum);
    assert.deepEqual(result, 52);
  });

  it('8', () => {
    const result = make(1, 25, 35)(2, 64, 52)(44, 6, 90)(21, 67, 83)(sum);
    assert.deepEqual(result, 490);
  });

  it('9', () => {
    const result = make(3, 5, 6)(4, 21, 22)(25)(476)(652)(771)(sum);
    assert.deepEqual(result, 1985);
  });

  it('10', () => {
    const result = make(83)(488)(21, 99, 66)(5)(3, 58, 66, 83, 72)(133)(39)(196, 992)(sum);
    assert.deepEqual(result, 2404);
  });
});
