import { hostGame } from '../../helpers/index.js';

export const isEvenGame = () => {
  hostGame({
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    getQuestionData: (getRandomNumber) => {
      const randomNumber = getRandomNumber(1, 100);
      const isNumberEven = randomNumber % 2 === 0;

      const rightAnswer = isNumberEven ? 'yes' : 'no';

      return { rightAnswer, question: randomNumber };
    },
  });
};

export default isEvenGame;
