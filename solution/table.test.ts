import { fizzBuzz } from './fizzBuzz';
describe.skip.each([
  [1, '1'],
  [2, '2'],
  [3, 'fizz'],
  [4, '4'],
  [5, 'buzz'],
  [10, 'buzz'],
  [15, 'fizzbuzz'],
])('fizzBuzz(%i)', (a, expected) => {
  it(`should ${expected} when ${a} is passed`, () => {
    expect(fizzBuzz(a)).toBe(expected);
  });
});
