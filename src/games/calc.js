import { checkAnswer, getRandomNumber, input } from "../helpers/index.js";

export const calcGame = (name) => {
  console.log("What is the result of the expression?");

  const maxIterations = 3;

  const mapRoundsToOperators = {
    1: "+",
    2: "-",
    3: "*",
  };

  for (let i = 1; i <= maxIterations; i++) {
    const isLastRound = i === maxIterations;

    const operator = mapRoundsToOperators[i];
    const firstOperand = getRandomNumber(1, 100);
    const secondOperand = getRandomNumber(1, 100);
    const mathExpression = `${firstOperand} ${operator} ${secondOperand}`;
    const rightAnswer = eval(mathExpression);

    console.log(`Question: ${mathExpression}`);
    const answer = +input("Your answer:");

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
