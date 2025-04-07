import { checkAnswer, getRandomNumber, input } from "../helpers/index.js";

export const isEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const maxIterations = 3;

  for (let i = 1; i <= maxIterations; i++) {
    const isLastRound = i === maxIterations;
    const randomNumber = getRandomNumber(1, 100);
    const isNumberEven = randomNumber % 2 === 0;

    console.log(`Question: ${randomNumber}`);

    const answer = input("Your answer:");
    const rightAnswer = isNumberEven ? "yes" : "no";

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
