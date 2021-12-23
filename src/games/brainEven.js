import random from 'lodash/random.js';
import playBrainGame from '../index.js';

export default function brainEven() {
  const randomNum = () => random(1, 100);
  const msg = 'Answer "yes" if the number is even, otherwise answer "no".';
  function isEven(num) {
    if (num % 2 === 0) return true;
    return false;
  }
  const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

  playBrainGame(msg, randomNum, getAnswer);
}
