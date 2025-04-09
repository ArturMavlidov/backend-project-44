export const checkIsPrimeNumber = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = number - 1; i > 0; i -= 1) {
    if (number % i === 0 && i !== 1) {
      return false;
    }
  }

  return true;
};

export default checkIsPrimeNumber;
