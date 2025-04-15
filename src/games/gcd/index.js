import { hostGame } from '../../helpers/index.js';
import { findGcd } from './helpers.js';

export const gcdGame = () => {
  hostGame({
    description: 'Find the greatest common divisor of given numbers.',
    getQuestionData: (getRandomNumber) => {
      const firstNumber = getRandomNumber();
      const secondNumber = getRandomNumber();

      const question = `${firstNumber} ${secondNumber}`;
      const rightAnswer = findGcd(firstNumber, secondNumber);

      return { rightAnswer, question };
    },
  });
};

export default gcdGame;
