import random from 'lodash/random.js';
import playBrainGame from '../index.js';

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

const getAnswer = (num) => isPrime(num);
export default function brainPrime() {
  const msg = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  function task() {
    const question = random(1, 100);
    const answer = getAnswer(question);
    return [question, answer];
  }
  playBrainGame(msg, task);
}
