import { hostGame } from '../../helpers/index.js';
import { generateProgression } from './helpers.js';

export const progressionGame = () => {
  const minProgressionLength = 5;
  const maxProgressionLength = 10;

  hostGame({
    description: 'What number is missing in the progression?',
    getQuestionData: (getRandomNumber) => {
      const progressionLength = getRandomNumber(
        minProgressionLength,
        maxProgressionLength,
      );
      const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);

      const numProgression = generateProgression(progressionLength);

      const rightAnswer = numProgression[hiddenElementIndex];

      numProgression[hiddenElementIndex] = '..';

      return { rightAnswer, question: numProgression.join(' ') };
    },
  });
};

export default progressionGame;
