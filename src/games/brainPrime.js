import random from 'lodash/random.js';
import playBrainGame from '../index.js';

export default function brainPrime() {
  const randomNum = () => random(1, 100);
  const msg = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  function isPrime(num) {
    let result = 'yes';
    if (num <= 1) return 'no';
    for (let n = 2; n <= num / 2; n += 1) {
      if (num % n === 0) {
        result = 'no';
        break;
      }
    }
    return result;
  }

  const getAnswer = (num) => {
    return isPrime(num);
  };
  playBrainGame(msg, randomNum, getAnswer);
}
