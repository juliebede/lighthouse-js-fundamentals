const howManyHundreds = function (num) {
  num -= num % 100
  return num / 100;
};

console.log(howManyHundreds(894));
