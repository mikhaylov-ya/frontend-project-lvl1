import readlineSync from 'readline-sync';
import random from 'lodash/random.js';

// eslint-disable-next-line import/prefer-default-export
export function brainEven() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let winCount = 0;
  let isLost = false;

  const question = () => {
    const randomNum = random(1, 100);
    console.log(`Question: ${randomNum}`);

    function isEven(num) {
      if (num % 2 === 0) return true;
      return false;
    }

    const answer = readlineSync.question('Your answer: ');
    let correctAnswer = '';
    const userAnswer = answer.toLowerCase();

    if (isEven(randomNum)) {
      correctAnswer = 'yes';
    } else if (!isEven(randomNum)) {
      correctAnswer = 'no';
    }

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
      isLost = true;
    } else if (userAnswer === correctAnswer) {
      console.log('Correct!');
      winCount += 1;
    }
  };
  while (winCount < 3) {
    if (isLost) break;
    question();
  }
  if (winCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
