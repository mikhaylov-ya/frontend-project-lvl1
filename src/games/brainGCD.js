import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const getGCD = (a, b) => {
  let temp = 0;
  let fst = a;
  let snd = b;
  while (snd > 0) {
    temp = fst % snd;
    fst = snd;
    snd = temp;
  }
  return fst;
};
const getAnswer = (num1, num2) => (getGCD(num1, num2)).toString();
export default function brainGCD() {
  const msg = 'Find the greatest common divisor of given numbers.';
  function task() {
    const num1 = random(1, 100);
    const num2 = random(1, 100);
    const question = `${num1} ${num2}`;
    const answer = getAnswer(num1, num2);
    return [question, answer];
  }
  playBrainGame(msg, task);
}
