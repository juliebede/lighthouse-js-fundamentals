let camelCase = function(input) {
  let newString = '';
  let nextUpper = false;
  for (let i = 0; i < input.length; i++) {
    if (nextUpper == true && input[i] !== ' ') {
      newString += input[i].toUpperCase()
      nextUpper = false;
    } else if (input[i] === ' ') {
      nextUpper = true;
    } else {
      newString += input[i];
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));