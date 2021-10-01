import { fizzBuzz2 } from '../src/fizzBuzz/version2';

describe('fizz buzz kata', () => {
  it('should throw error if negtaive', () => {
    expect(() => fizzBuzz2(-1)).toThrow(/negative/);
  });
  it('should return 1 when 1 is passed', () => {
    expect(fizzBuzz2(1)).toEqual('1');
  });

  it('should return 2 when 2 is passed', () => {
    expect(fizzBuzz2(2)).toEqual('2');
  });

  it('should return fizz when 3 is passed', () => {
    expect(fizzBuzz2(3)).toEqual('fizz');
  });

  it('should return 4 when 4 is passed', () => {
    expect(fizzBuzz2(4)).toEqual('4');
  });

  it('should return buzz when 5 is passed', () => {
    expect(fizzBuzz2(5)).toEqual('buzz');
  });

  it('should return fizz when 6 is passed', () => {
    expect(fizzBuzz2(6)).toEqual('fizz');
  });

  it('should return fizz when 9 is passed', () => {
    expect(fizzBuzz2(9)).toEqual('fizz');
  });

  it('should return buzz when 10 is passed', () => {
    expect(fizzBuzz2(10)).toEqual('buzz');
  });

  it('should return fizz when 12 is passed', () => {
    expect(fizzBuzz2(12)).toEqual('fizz');
  });

  it('should return fizzbuzz when 15 is passed', () => {
    expect(fizzBuzz2(15)).toEqual('fizzbuzz');
  });
});
