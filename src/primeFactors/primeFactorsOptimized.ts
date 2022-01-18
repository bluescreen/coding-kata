const primeFactorsOfOptimized = (n: number): number[] => {
  const result = [];
  while (n % 2 === 0) {
    result.push(2);
    n = Math.floor(n / 2);
  }

  for (
    let divisor = 3;
    divisor <= Math.floor(Math.sqrt(n));
    divisor = divisor + 2
  ) {
    while (n % divisor === 0) {
      result.push(divisor);
      n = Math.floor(n / divisor);
    }
  }

  if (n > 2) {
    result.push(n);
  }
  return result;
};

export default primeFactorsOfOptimized;
