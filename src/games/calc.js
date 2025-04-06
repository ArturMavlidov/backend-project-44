import readlineSync from "readline-sync";

import { getRandomNumber } from "../helpers/index.js";

export const calcGame = (name) => {
  console.log("What is the result of the expression?");

  const maxIterations = 3;

  const mapRoundsToOperators = {
    1: "+",
    2: "-",
    3: "*",
  };

  for (let i = 1; i <= maxIterations; i++) {
    const isLastIteration = i === maxIterations;

    const operator = mapRoundsToOperators[i];
    const firstOperand = getRandomNumber(1, 100);
    const secondOperand = getRandomNumber(1, 100);
    const mathExpression = `${firstOperand} ${operator} ${secondOperand}`;
    const rightAnswer = eval(mathExpression);

    console.log(`Question: ${mathExpression}`);
    const answer = +readlineSync.question(`Your answer: `);

    if (answer === rightAnswer) {
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
