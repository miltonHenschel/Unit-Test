const calculator = require('./calculator.js');

describe('addition', () => {
  test('1 + 2 = 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('1 + 2 is a number', () => {
    expect(typeof calculator.add(1, 2)).toBe('number');
  });

  test('1 + 2 != 0', () => {
    expect(calculator.add(1, 2)).not.toBe(0);
  });
});

describe('subtraction', () => {
  test('1 - 2 = -1', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  test('1 - 2 is a number', () => {
    expect(typeof calculator.subtract(1, 2)).toBe('number');
  });

  test('1 - 2 < 0', () => {
    expect(calculator.subtract(1, 2)).toBeLessThan(0);
  });
});

describe('multiplication', () => {
  test('1 x 2 equals 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test('1 x 2 is a number', () => {
    expect(typeof calculator.multiply(1, 2)).toBe('number');
  });

  test('1 x 2 != 0', () => {
    expect(calculator.multiply(1, 2)).not.toBe(0);
  });
});

describe('division', () => {
  test('1 / 2 = 0.5', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  test('1 / 2 is a number', () => {
    expect(typeof calculator.divide(1, 2)).toBe('number');
  });

  test('1 / 2 != 0', () => {
    expect(calculator.divide(1, 2)).not.toBe(0);
  });
});
