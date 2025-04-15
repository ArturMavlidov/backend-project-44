import { hostGame } from '../../helpers/index.js';
import { calculateExpression } from './helpers.js';

export const calcGame = () => {
  const mapRoundsToOperators = {
    1: '+',
    2: '-',
    3: '*',
  };

  hostGame({
    description: 'What is the result of the expression?',
    getQuestionData: (getRandomNumber) => {
      const operator = mapRoundsToOperators[getRandomNumber(1, 3)];
      const firstOperand = getRandomNumber(1, 100);
      const secondOperand = getRandomNumber(1, 100);
      const mathExpression = `${firstOperand} ${operator} ${secondOperand}`;

      const rightAnswer = calculateExpression({
        operator,
        firstOperand,
        secondOperand,
      });

      return { rightAnswer, question: mathExpression };
    },
  });
};

export default calcGame;
