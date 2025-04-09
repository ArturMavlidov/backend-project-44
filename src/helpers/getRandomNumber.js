export const getRandomNumber = (min = 1, max = 100) => {
  const adjustedMin = Math.ceil(min);
  const adjustedMax = Math.floor(max);
  return (
    Math.floor(Math.random() * (adjustedMax - adjustedMin + 1)) + adjustedMin
  );
};

export default getRandomNumber;
