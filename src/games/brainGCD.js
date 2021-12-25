import random from 'lodash/random.js';
import playBrainGame from '../index.js';

export default function brainGCD() {
  const randomNum = () => random(1, 100);
  const msg = 'Find the greatest common divisor of given numbers.';
  const randomExpression = () => `${randomNum()} ${randomNum()}`;
  const getGCD = (a, b) => {
    let temp = 0;
    let num1 = a;
    let num2 = b;
    while (num2 > 0) {
      temp = num1 % num2;
      num1 = num2;
      num2 = temp;
    }
    return num1;
  };
  const getAnswer = (exp) => {
    const nums = exp.split(' ');
    const [num1, num2] = nums;
    return getGCD(num1, num2).toString();
  };
  playBrainGame(msg, randomExpression, getAnswer);
}
