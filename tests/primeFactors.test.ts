import primeFactorsOf from '../src/primeFactors/primeFactorsOptimized';

describe('Prime factors Kata', () => {
  describe.each([
    [1, []],
    [2, [2]],
    [3, [3]],
    [4, [2, 2]],
    [5, [5]],
    [6, [2, 3]],
    [7, [7]],
    [8, [2, 2, 2]],
    [9, [3, 3]],
    [48, [2, 2, 2, 2, 3]],
    [13195, [5, 7, 13, 29]],
    [600851475143, [71, 839, 1471, 6857]],
    [Math.pow(2, 31) - 1, [2147483647]],
  ])('factors of %i', (input: number, expected: number[]) => {
    it(`returns ${expected}`, () => {
      expect(primeFactorsOf(input)).toEqual(expected);
    });
  });
});
