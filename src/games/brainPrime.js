import random from 'lodash/random.js';
import playBrainGame, { roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const genTask = () => {
  const question = random(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let round = 0; round < roundsCount; round += 1) {
    rounds.push(genTask());
  }
  playBrainGame(gameDescription, rounds);
};
