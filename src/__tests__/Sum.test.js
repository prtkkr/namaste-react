import Sum from '../components/Sum';

test('Sum function should return sum of two numbers', () => {
  const result = Sum(2, 7);
  // assertion
  expect(result).toBe(9);
});
