import primeFactorsOf from '../src/primeFactors/primeFactorsOf';

describe('Prime factors Kata', () => {
  describe.each([
      [1, []],
      [2, [2]],
      [3, [3]],
      [4, [2,2]],
      [5, [5]],
      [6, [2,3]],
      [7, [7]],
      [8, [2,2,2]],
      [9, [3,3]]
    ])('factors of %i', (input: number, expected: number[]) => {
    it(`returns ${expected}`, () => {
      expect(primeFactorsOf(input)).toEqual(expected);
    });
  });
});
