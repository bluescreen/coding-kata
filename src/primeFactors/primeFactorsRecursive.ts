const primeFactorsOfRecursive = (
  n: number,
  result: number[] = [],
): number[] => {
  for (let divisor = 2; divisor < n; divisor++) {
    if (n % divisor === 0) {
      return primeFactorsOfRecursive(Math.floor(n / divisor), [
        ...result,
        divisor,
      ]);
    }
  }
  return n === 1 ? [] : [...result, n];
};
export default primeFactorsOfRecursive;
