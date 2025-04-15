export const findGcd = (firstNumber, secondNumber) => {
  const smallestNumber = Math.min(firstNumber, secondNumber);

  for (let i = smallestNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }

  return 1;
};

export default findGcd;
