import { input, getRandomNumber, checkAnswer } from "./index.js";

export const hostGame = ({
  text,
  maxIterations = 3,
  name,
  getQuestionData,
}) => {
  console.log(text);

  for (let i = 1; i <= maxIterations; i++) {
    const isLastRound = i === maxIterations;

    const { question, rightAnswer } = getQuestionData(getRandomNumber, i);

    console.log(`Question: ${question}`);

    const isNumberAnswer = typeof rightAnswer === "number";
    const answer = input("Your answer:");

    const shouldBreak = checkAnswer({
      answer: isNumberAnswer ? +answer : answer,
      rightAnswer,
      name,
      isLastRound,
    });

    if (shouldBreak) {
      break;
    }
  }
};
