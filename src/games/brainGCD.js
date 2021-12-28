import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const message = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let temp = 0;
  let first = num1;
  let second = num2;
  while (second > 0) {
    temp = first % second;
    first = second;
    second = temp;
  }
  return first;
};

function genTask() {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = getGCD(firstNum, secondNum);
  return [question, answer];
}

export default function brainGCD() {
  playBrainGame(message, genTask);
}
