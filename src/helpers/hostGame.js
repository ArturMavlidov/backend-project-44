import readlineSync from 'readline-sync';

import { greet } from '../cli.js';
import { getRandomNumber } from './getRandomNumber.js';

export const hostGame = ({
  description,
  roundsCount = 3,
  getQuestionData,
}) => {
  const name = greet();

  console.log(description);

  for (let i = 1; i <= roundsCount; i += 1) {
    const isLastRound = i === roundsCount;

    const { question, rightAnswer } = getQuestionData(getRandomNumber);

    console.log(`Question: ${question}`);

    const isNumberAnswer = typeof rightAnswer === 'number';
    const answer = readlineSync.question('Your answer: ');
    const currentAnswer = isNumberAnswer ? +answer : answer;

    if (currentAnswer === rightAnswer) {
      console.log('Correct!');

      if (isLastRound) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(
        `'${currentAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
      );

      console.log(`Let's try again, ${name}!`);

      break;
    }
  }
};

export default hostGame;
