import { checkAnswer, getRandomNumber, input } from "../helpers/index.js";

export const progressionGame = (name) => {
  console.log("What number is missing in the progression?");

  const maxIterations = 3;
  const minProgressionLength = 5;
  const maxProgressionLength = 10;

  for (let i = 1; i <= maxIterations; i++) {
    const isLastRound = i === maxIterations;

    const progressionLength = getRandomNumber(
      minProgressionLength,
      maxProgressionLength
    );
    const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);

    const firstElement = getRandomNumber();
    const increment = getRandomNumber(2, 32);

    const progressionArray = [firstElement];

    // Указываем в условии цикла progressionLength - 1, так как в массиве изначально есть первый элемент
    for (let i = 0; i < progressionLength - 1; i++) {
      const lastEl = progressionArray[progressionArray.length - 1];
      progressionArray.push(lastEl + increment);
    }

    const rightAnswer = progressionArray[hiddenElementIndex];

    progressionArray[hiddenElementIndex] = "..";

    console.log(`Question: ${progressionArray.join(" ")}`);

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
