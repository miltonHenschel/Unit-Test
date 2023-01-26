const reverseString = require('./reverseString.js');

test('reverse string', () => {
  expect(reverseString('henschel')).toBe('lehcsneh');
});
