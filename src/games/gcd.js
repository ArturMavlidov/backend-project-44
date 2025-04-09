import { findGcd, hostGame } from '../helpers/index.js';

export const gcdGame = (name) => {
  hostGame({
    name,
    text: 'Find the greatest common divisor of given numbers.',
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
