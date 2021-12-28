import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num <= 1) return 'no';
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function genTask() {
  const question = random(1, 100);
  const answer = isPrime(question);
  return [question, answer];
}

export default function brainPrime() {
  playBrainGame(message, genTask);
}
