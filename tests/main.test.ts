const fizzBuzz = (input: number): string => {
  if (input < 0) {
    throw new Error('negative');
  }
  if (input % 3 == 0 && input % 5 == 0) return 'fizzbuzz';
  else if (input % 3 == 0) return 'fizz';
  else if (input % 5 == 0) return 'buzz';
  else return input.toString();
};

describe('fizz buzz kata', () => {
  it('should throw error if negtaive', () => {
    expect(() => fizzBuzz(-1)).toThrow(/negative/);
  });
  it('should return 1 when 1 is passed', () => {
    expect(fizzBuzz(1)).toEqual('1');
  });

  it('should return 2 when 2 is passed', () => {
    expect(fizzBuzz(2)).toEqual('2');
  });

  it('should return fizz when 3 is passed', () => {
    expect(fizzBuzz(3)).toEqual('fizz');
  });

  it('should return 4 when 4 is passed', () => {
    expect(fizzBuzz(4)).toEqual('4');
  });

  it('should return buzz when 5 is passed', () => {
    expect(fizzBuzz(5)).toEqual('buzz');
  });

  it('should return fizz when 6 is passed', () => {
    expect(fizzBuzz(6)).toEqual('fizz');
  });

  it('should return fizz when 9 is passed', () => {
    expect(fizzBuzz(9)).toEqual('fizz');
  });

  it('should return buzz when 10 is passed', () => {
    expect(fizzBuzz(10)).toEqual('buzz');
  });

  it('should return fizz when 12 is passed', () => {
    expect(fizzBuzz(12)).toEqual('fizz');
  });

  it('should return fizzbuzz when 15 is passed', () => {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });
});
