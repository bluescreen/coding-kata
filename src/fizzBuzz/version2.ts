const isDivisibleBy3 = (value: number): boolean => {
  return value % 3 === 0;
};

const isDivisibleBy5 = (value: number): boolean => {
  return value % 5 === 0;
};

export const fizzBuzz = (value: number): string => {
  if (value < 0) {
    throw new Error('not negative');
  }
  let str: string = '';
  if (isDivisibleBy3(value)) {
    str += 'fizz';
  }
  if (isDivisibleBy5(value)) {
    str += 'buzz';
  }

  return str === '' ? value.toString() : str;
};
