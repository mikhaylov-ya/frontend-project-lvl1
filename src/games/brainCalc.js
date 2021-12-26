import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const getAnswer = (num1, num2, op) => {
  switch (op) {
    case '+':
      return ((num1) + (num2)).toString();
    case '-':
      return ((num1) - (num2)).toString();
    default:
      return ((num1) * (num2)).toString();
  }
};
export default function brainCalc() {
  const msg = 'What is the result of the expression?';
  function task() {
    const randomOperator = () => {
      const operators = ['+', '-', '*'];
      return operators[Math.floor(Math.random() * 3)];
    };
    const num1 = random(1, 100);
    const num2 = random(1, 100);
    const op = randomOperator();
    const question = `${num1} ${op} ${num2}`;
    const answer = getAnswer(num1, num2, op);
    return [question, answer];
  }
  playBrainGame(msg, task);
}
