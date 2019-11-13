const makeCase = function(input, cas) {
  // Put your solution here
  let nextUpper = false; // determines when to capitalize for some cases
  let cap = false; // turns to true if camel, pascal, or title
  let removeSpaces = false;
  let newString = '';  
  
  // set up for capitalization pattern
  if (cas.includes('camel') || cas === 'camel') {
    cap = true;   
    removeSpaces = true;
  } if (cas.includes('pascal') || cas === 'pascal') {
    nextUpper = true;
    cap = true;
    removeSpaces = true; 
  } if (cas.includes('title') || cas === 'title') {
    nextUpper = true;
    cap = true;
  }

  // Capitalizes based on case
  if (cap === true) {
    for (let i = 0; i < input.length; i++) {
      if (nextUpper === true && input[i] !== ' ') {
        newString += input[i].toUpperCase();
        nextUpper = false;
      } else if (input[i] === ' ') {
        nextUpper = true;
        if (removeSpaces !== true) {
          newString += ' ';
        }
      } else {
        newString += input[i];
      }
    }
    input = newString;
  }


  // for snake or kebab
  let pattern;
  let snakeOrKeb = false;
    
  if (cas.includes('snake') || cas === 'snake') {
    pattern = '_';
    snakeOrKeb = true;
  } if (cas.includes('kebab') || cas === 'kebab') {
    pattern = '-';
    snakeOrKeb = true;
  }

  // if snake or keb are in the list of cases
  if (snakeOrKeb === true){
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        input = input.slice(0, i) + pattern + input.slice(i + 1, input.length);
      }
    }
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (cas.includes('vowel') || cas === 'vowel') {
    for (let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        input = input.replace(input[i], input[i].toUpperCase());
      } 
    }
  } if (cas.includes('consonant') || cas === 'consonant') {
    for (let i = 0; i < input.length; i++) {
      if (!(vowels.includes(input[i]))) {
        input = input.replace(input[i], input[i].toUpperCase());
      } 
    }
  }

  if (cas.includes('upper') || cas === 'upper') {
    input = input.toUpperCase();
  }

  if (cas.includes('lower') || cas === 'lower') {
    input = input.toLowerCase();
  }

  return input;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));