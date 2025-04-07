import readlineSync from "readline-sync";

export const input = (text) => {
  return readlineSync.question(`${text} `);
};
