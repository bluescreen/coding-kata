export const fizzBuzz = (value: number): string => {
  if (value < 0) {
    throw new Error('not negative');
  }
  let str: string = '';
  if (value % 3 === 0) {
    str += 'fizz';
  }
  if (value % 5 === 0) {
    str += 'buzz';
  }

  return str === '' ? value.toString() : str;
};
