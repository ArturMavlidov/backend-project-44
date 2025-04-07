export const findGcd = (firstNumber, secondNumber) => {
  const smallestNumber = Math.min(firstNumber, secondNumber);

  for (let i = smallestNumber; i > 0; i--) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }
};
