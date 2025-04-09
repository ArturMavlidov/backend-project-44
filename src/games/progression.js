import { hostGame } from '../helpers/index.js';

export const progressionGame = (name) => {
  const minProgressionLength = 5;
  const maxProgressionLength = 10;

  hostGame({
    name,
    text: 'What number is missing in the progression?',
    getQuestionData: (getRandomNumber) => {
      const progressionLength = getRandomNumber(
        minProgressionLength,
        maxProgressionLength,
      );
      const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);

      const firstElement = getRandomNumber();
      const increment = getRandomNumber(2, 32);

      const progressionArray = [firstElement];

      // Указываем в условии цикла progressionLength - 1,
      // так как в массиве изначально есть первый элемент
      for (let i = 0; i < progressionLength - 1; i += 1) {
        const lastEl = progressionArray[progressionArray.length - 1];
        progressionArray.push(lastEl + increment);
      }

      const rightAnswer = progressionArray[hiddenElementIndex];

      progressionArray[hiddenElementIndex] = '..';

      return { rightAnswer, question: progressionArray.join(' ') };
    },
  });
};

export default progressionGame;
