const stringLength = require('./stringLength.js');

// test('string length', () => {
//   expect(stringLength('henschel')).toBe(8);
// });

test('string length at least 1 character', () => {
  expect(stringLength('henschel')).toBeGreaterThanOrEqual(1);
  expect(stringLength('henschel')).toBeLessThanOrEqual(10);
});
