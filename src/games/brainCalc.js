import random from 'lodash/random.js';
import playBrainGame, { roundsCount } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const genTask = () => {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const operator = operators[random(0, operators.length - 1)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = calculate(firstNum, secondNum, operator).toString();
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let round = 0; round < roundsCount; round += 1) {
    rounds.push(genTask());
  }
  playBrainGame(gameDescription, rounds);
};
