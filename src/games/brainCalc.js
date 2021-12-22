import random from 'lodash/random.js';
import playBrainGame from '../index.js';

export default function brainCalc() {
  const randomNum = () => random(1, 100);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * 3)];
  const randomExpression = () =>
    `${randomNum()} ${randomOperator} ${randomNum()}`;

  const getAnswer = (exp) => {
    const [fst, op, snd] = exp.split(' ');
    switch (op) {
      case '+':
        return (Number(fst) + Number(snd)).toString();
      case '-':
        return (Number(fst) - Number(snd)).toString();
      default:
        return (Number(fst) * Number(snd)).toString();
    }
  };
  const msg = 'What is the result of the expression?';

  playBrainGame(msg, randomExpression, getAnswer);
}
