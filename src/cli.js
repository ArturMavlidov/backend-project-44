import { input } from './helpers/index.js';

export const greet = () => {
  console.log('Welcome to the Brain Games!');

  const name = input('May I have your name?');
  console.log(`Hello, ${name}!`);

  return name;
};

export default greet;
