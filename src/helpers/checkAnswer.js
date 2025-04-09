export const checkAnswer = ({
  answer, rightAnswer, name, isLastRound,
}) => {
  if (answer === rightAnswer) {
    console.log('Correct!');

    if (isLastRound) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
    );

    console.log(`Let's try again, ${name}!`);

    return true;
  }

  return false;
};

export default checkAnswer;
