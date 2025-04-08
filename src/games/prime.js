import {
  checkAnswer,
  checkIsPrimeNumber,
  getRandomNumber,
  input,
} from "../helpers/index.js";

export const primeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const maxIterations = 3;

  for (let i = 1; i <= maxIterations; i++) {
    const isLastRound = i === maxIterations;

    const number = getRandomNumber(1, 113);

    console.log(`Question: ${number}`);

    const rightAnswer = checkIsPrimeNumber(number) ? "yes" : "no";
    const answer = input("Your answer:");

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
