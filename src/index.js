import readlineSync from 'readline-sync';

export const roundCount = 3;

export default (gameDescription, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameDescription}`);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = rounds[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerLow = userAnswer.toLowerCase();
    if (userAnswerLow !== answer) {
      console.log(`'${userAnswerLow}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
