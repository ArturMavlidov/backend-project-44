export const calculateExpression = ({
  operator,
  firstOperand,
  secondOperand,
}) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

export default calculateExpression;
