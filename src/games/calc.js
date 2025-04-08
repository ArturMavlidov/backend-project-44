import { hostGame } from "../helpers/index.js";

export const calcGame = (name) => {
  const mapRoundsToOperators = {
    1: "+",
    2: "-",
    3: "*",
  };

  hostGame({
    name,
    text: "What is the result of the expression?",
    getQuestionData: (getRandomNumber, i) => {
      const operator = mapRoundsToOperators[i];
      const firstOperand = getRandomNumber(1, 100);
      const secondOperand = getRandomNumber(1, 100);
      const mathExpression = `${firstOperand} ${operator} ${secondOperand}`;
      const rightAnswer = eval(mathExpression);

      return { rightAnswer, question: mathExpression };
    },
  });
};
