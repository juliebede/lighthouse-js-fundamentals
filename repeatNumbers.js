let repeatNumbers = function(data) {
  // Put your solution here
  let repeated = ''; 
  for (let i = 0; i < data.length; i++) {
    let value = data[i][0]

    for (let n = data[i][1]; n > 0; n--) {
      repeated += value; 
    };
    if (i < data.length - 1) {
      repeated += ', ';
    }
  }
  return repeated;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
