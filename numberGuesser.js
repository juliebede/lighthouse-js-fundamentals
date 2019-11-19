let prompt = require("prompt-sync")();

// code below (replace this example)
function guesser() {
  let number = Math.floor((Math.random() * 100) + 1);
  let count = 0;
  let guesses = [];
  while (1) {
    let answer = prompt("Guess a number: ");
    if (guesses.includes(answer)) {
      console.log('Already Guessed!');
    } else if (answer < number) {
      guesses.push(answer);
      console.log('Too Low!');
      count++; 
    } else if (answer > number) {
      guesses.push(answer);
      count++;
      console.log('Too High!');
    } else {
      console.log('You got it! You took ' + count + ' attempts!')
      break;
    }
  }
}

guesser();