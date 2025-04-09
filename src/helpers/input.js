import readlineSync from 'readline-sync';

export const input = (text) => readlineSync.question(`${text} `);

export default input;
