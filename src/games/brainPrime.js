import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const genTask = () => {
  const question = random(1, 100);
  const answer = getAnswer(question);
  return [question, answer];
};

export default () => {
  playBrainGame(message, genTask);
};
