const squareCode = function(message) {
  // First remove spaces
  let temp = '';
  for (let i = 0; i < message.length; i++) {
    if (message[i] !== ' ') {
      temp += message[i];
    }
  }

  // square code the message
  let columns = Math.ceil(Math.sqrt(temp.length));
  let count = temp.length // helps to know when to stop
  let start = 0;
  let index = 0;
  message = '';
  while (count > 0) {
    if (index >= temp.length) {
      message += ' ';
      start++;
      index = start;
    } else {
      message += temp[index];
      index += columns;
      count--;
    }
  }
  return message;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));