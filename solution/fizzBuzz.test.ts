import { fizzBuzz } from '../src/main';

describe('fizz buzz', () => {
  it('should do nothing', () => {
    fizzBuzz(null);
  });

  it('should squawk if number is negative', () => {
    expect(() => fizzBuzz(-1)).toThrow(/negative/);
  });

  it('should return 1 when  1 is passed', () => {
    expect(fizzBuzz(1)).toEqual('1');
  });

  it('should return 2 when  2 is passed', () => {
    expect(fizzBuzz(2)).toEqual('2');
  });

  it('should return fizz when  3 is passed', () => {
    expect(fizzBuzz(3)).toEqual('fizz');
  });

  it('should return fizz when  4 is passed', () => {
    expect(fizzBuzz(4)).toEqual('4');
  });

  it('should return buzz when  5 is passed', () => {
    expect(fizzBuzz(5)).toEqual('buzz');
  });

  it('should return fizz when  9 is passed', () => {
    expect(fizzBuzz(9)).toEqual('fizz');
  });

  it('should return buzz when  10 is passed', () => {
    expect(fizzBuzz(10)).toEqual('buzz');
  });

  it('should return fizzbuzz when  15 is passed', () => {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });
});
