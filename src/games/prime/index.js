import { hostGame } from '../../helpers/index.js';
import { checkIsPrimeNumber } from './helpers.js';

export const primeGame = () => {
  hostGame({
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    getQuestionData: (getRandomNumber) => {
      const number = getRandomNumber(1, 200);
      const rightAnswer = checkIsPrimeNumber(number) ? 'yes' : 'no';

      return { rightAnswer, question: number };
    },
  });
};

export default primeGame;
