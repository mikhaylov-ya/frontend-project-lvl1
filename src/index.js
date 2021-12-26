import readlineSync from 'readline-sync';

export default function playBrainGame(msg, task) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${msg}`);

  for (let winCount = 0; winCount < 3; winCount += 1) {
    const [question, answer] = task();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerNorm = userAnswer.toLowerCase();
    if (userAnswerNorm !== answer) {
      console.log(
        `'${userAnswerNorm}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`,
      );
      break;
    } else if (userAnswerNorm === answer) {
      console.log('Correct!');
    }
    if (winCount === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
