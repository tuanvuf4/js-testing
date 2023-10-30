const { biggestNumberInArray, sum } = require('./biggestNumberInArray');

test('biggestNumberInArray', () => {
  expect(biggestNumberInArray([2, 1, 0, 6, 10, -1])).toBe(10);
});

test('sum', () => {
  expect(sum(2, -4)).toBe(-2);
});
