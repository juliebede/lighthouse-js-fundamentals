function range (start, end, step) {
  if (step === undefined || 
    end === undefined || 
    step === undefined ||
    start > end || 
    step <= 0)  {
      return [];
    } else {
      let newArray = [];
      while (start <= end) {
        newArray.push(start);
        start += step;
      }
      return newArray;
    }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));