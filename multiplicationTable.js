const multiplicationTable = function(maxValue) {
  // Your code here
  let table = '';
  for (let currValue = 1; currValue <= maxValue; currValue++) {
    for (let val = 1; val <= maxValue; val++) {
      table += currValue * val + ' ';
    }
    table += '\n';
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));