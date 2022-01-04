const primeFactorsOfRecursive = (
  input: number,
  result: number[] = [],
): number[] => {
  for (let n = 2; n < input; n++) {
    if (input % n === 0) {
      return primeFactorsOfRecursive(input / n, [...result, n]);
    }
  }
  return input === 1 ? [] : [...result, input];
};
export default primeFactorsOfRecursive;
