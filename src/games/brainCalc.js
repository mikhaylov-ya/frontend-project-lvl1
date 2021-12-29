import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const message = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return (num1) + (num2);
    case '-':
      return (num1) - (num2);
    case '*':
      return (num1) * (num2);
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

function genTask() {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const operator = operators[random(0, operators.length - 1)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = calculate(firstNum, secondNum, operator).toString();
  return [question, answer];
}

export default () => {
  playBrainGame(message, genTask);
};
