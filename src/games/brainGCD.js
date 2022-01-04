import random from 'lodash/random.js';
import playBrainGame, { roundCount } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

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

const genTask = () => {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = getGCD(firstNum, secondNum).toString();
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let round = 0; round < roundCount; round += 1) {
    rounds.push(genTask());
  }
  playBrainGame(gameDescription, rounds);
};
