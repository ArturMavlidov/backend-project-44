import readlineSync from "readline-sync";

import { getRandomNumber } from "../helpers/index.js";

export const isEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const maxIterations = 3;

  for (let i = 1; i <= maxIterations; i++) {
    const isLastIteration = i === maxIterations;
    const randomNumber = getRandomNumber(1, 100);
    const isNumberEven = randomNumber % 2 === 0;

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question(`Your answer: `);
    const rightAnswer = isNumberEven ? "yes" : "no";
    const isAnswerRight = answer === rightAnswer;

    if (isAnswerRight) {
      console.log("Correct!");

      if (isLastIteration) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
      );

      console.log(`Let's try again, ${name}!`);

      break;
    }
  }
};
