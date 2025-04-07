import {
  checkAnswer,
  findGcd,
  getRandomNumber,
  input,
} from "../helpers/index.js";

export const gcdGame = (name) => {
  console.log("Find the greatest common divisor of given numbers.");

  const maxIterations = 3;

  for (let i = 1; i <= maxIterations; i++) {
    const isLastRound = i === maxIterations;

    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();

    console.log(`Question: ${firstNumber} ${secondNumber}`);

    const answer = +input("Your answer:");
    const rightAnswer = findGcd(firstNumber, secondNumber);

    const shouldBreak = checkAnswer({
      answer,
      rightAnswer,
      name,
      isLastRound,
    });

    if (shouldBreak) {
      break;
    }
  }
};
