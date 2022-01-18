const primeFactorsOf = (n: number): number[] => {
  const result = [];
  for (let divisor = 2; n > 1; divisor++) {
    if (divisor > Math.sqrt(n)) {
      result.push(n);
      return result;
    }

    for (; n % divisor == 0; n /= divisor) {
      result.push(divisor);
    }
  }
  return result;
};

export default primeFactorsOf;
