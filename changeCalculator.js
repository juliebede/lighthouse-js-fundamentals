let calculateChange = function(total, cash) {
  // Your code here
  let outcome = {};
  
  // Used to convert to english
  const denominations = {
    2000: 'twentyDollar',
    1000: 'tenDollar',
    500: 'fiveDollar',
    200: 'twoDollar',
    100: 'oneDollar',
    25: 'quarter',
    10: 'dime',
    5: 'nickel',
    1: 'penny'
  }

  // Set up 
  let change = cash - total;
  const options = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let denom = 0 // starts with subtracting $20
  let count = 0; // count for each denomination

  // Determine the breakdown
  while (change > 0) {
    let current = options[denom];
   
    // if denomination is possible
    if (change - current > 0) {  // If the current amount doesn't go negative
      change -= current; //minus
      count += 1; //add to the count
   
    // If the final denomination is found 
    } else if (change - current === 0) {
      count += 1;
      change -= current;
      let english = denominations[current] //get the english string of denomination
      outcome[english] = count; // add to the outcome
      count = 0; // reset
      denom += 1; // move on

    // If denomination is not possible (anymore)
    } else {
      if (count > 0) { // if denomination was able to occur a couple of times
        let english = denominations[current] //get the english string of denomination
        outcome[english] = count; // add to the outcome
        count = 0; // reset
      }
      denom += 1; 
    }
  }
  return outcome;
} 

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));