const capitalize = require('./capitalize.js');

test('capitalize', () => {
  expect(capitalize('javaScript')).toBe('JavaScript');
});
