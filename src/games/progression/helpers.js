import { getRandomNumber } from '../../helpers/index.js';

export const generateProgression = (progressionLength) => {
  const firstElement = getRandomNumber();
  const increment = getRandomNumber(2, 32);

  const numProgression = [firstElement];

  // Указываем в условии цикла progressionLength - 1,
  // так как в массиве изначально есть первый элемент
  for (let i = 0; i < progressionLength - 1; i += 1) {
    const lastEl = numProgression[numProgression.length - 1];
    numProgression.push(lastEl + increment);
  }

  return numProgression;
};

export default generateProgression;
